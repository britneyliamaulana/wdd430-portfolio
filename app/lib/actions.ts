
'use server';

import { z } from 'zod';
import { sql } from './db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const currentYear = new Date().getFullYear();

const ProjectFormSchema = z.object({
  title: z.string().trim().min(3, 'Title must be at least 3 characters.'),
  description: z.string().trim().min(20, 'Description must be at least 20 characters.'),
  technologies: z.string().trim().min(2, 'Add at least one technology.'),
  yearCompleted: z.coerce
    .number()
    .int('Year must be a whole number.')
    .gte(2000, 'Year must be 2000 or later.')
    .lte(currentYear, `Year cannot be greater than ${currentYear}.`),
  link: z.string().trim().optional(),
});

export type State = {
  errors?: {
    title?: string[];
    description?: string[];
    technologies?: string[];
    yearCompleted?: string[];
    link?: string[];
  };
  message?: string | null;
};

export async function createProject(
  prevState: State,
  formData: FormData,
): Promise<State> {
  // prevState is required by useActionState.
  void prevState;

  const validatedFields = ProjectFormSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    technologies: formData.get('technologies'),
    yearCompleted: formData.get('yearCompleted'),
    link: formData.get('link'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below.',
    };
  }

  const { title, description, technologies, yearCompleted, link } =
    validatedFields.data;

  try {
    await sql`
      INSERT INTO projects (
        title,
        description,
        technologies,
        link,
        year_completed
      )
      VALUES (
        ${title},
        ${description},
        ${technologies.split(',').map((item) => item.trim()).filter(Boolean)},
        ${link || null},
        ${yearCompleted}
      )
    `;
  } catch (error) {
    console.error('Error creating project:', error);

    return {
      message: 'Database Error: Failed to create project.',
    };
  }

  revalidatePath('/projects');
  revalidatePath('/');
  redirect('/projects');
}

export async function updateProject(id: string, formData: FormData) {
  const validatedFields = ProjectFormSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    technologies: formData.get('technologies'),
    yearCompleted: formData.get('yearCompleted'),
    link: formData.get('link'),
  });

  if (!validatedFields.success) {
    throw new Error('Invalid project input.');
  }

  const { title, description, technologies, yearCompleted, link } =
    validatedFields.data;

  try {
    await sql`
      UPDATE projects
      SET
        title = ${title},
        description = ${description},
        technologies = ${technologies.split(',').map((item) => item.trim()).filter(Boolean)},
        link = ${link || null},
        year_completed = ${yearCompleted}
      WHERE id = ${Number(id)}
    `;
  } catch (error) {
    console.error('Error updating project:', error);
    throw new Error('Failed to update project. Please try again later.');
  }

  revalidatePath('/projects');
  revalidatePath('/');
  redirect('/projects');
}

export async function deleteProject(id: number) {
  try {
    await sql`
      DELETE FROM projects
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error('Error deleting project:', error);
    throw new Error('Failed to delete project. Please try again later.');
  }

  revalidatePath('/projects');
  revalidatePath('/');
  redirect('/projects');
}
