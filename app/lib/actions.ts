
'use server';

import { z } from 'zod';
import { sql } from './db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const ProjectFormSchema = z.object({
  title: z.string().trim().min(2, 'Title must be at least 2 characters.'),
  description: z.string().trim().min(10, 'Description must be at least 10 characters.'),
  technologies: z.string().trim().min(2, 'Enter at least one technology.'),
  link: z.string().trim().optional(),
});

export async function createProject(formData: FormData) {
  const rawFormData = {
    title: formData.get('title'),
    description: formData.get('description'),
    technologies: formData.get('technologies'),
    link: formData.get('link'),
  };

  const parsed = ProjectFormSchema.safeParse(rawFormData);

  if (!parsed.success) {
    throw new Error('Invalid project input.');
  }

  const { title, description, technologies, link } = parsed.data;

  try {
    await sql`
      INSERT INTO projects (title, description, technologies, link)
      VALUES (
        ${title},
        ${description},
        ${technologies.split(',').map((item) => item.trim()).filter(Boolean)},
        ${link || null}
      )
    `;
  } catch (error) {
    console.error('Error creating project:', error);
    throw new Error('Failed to create project. Please try again later.');
  }

  revalidatePath('/projects');
  revalidatePath('/');
  redirect('/projects');
}

export async function updateProject(id: string, formData: FormData) {
  const rawFormData = {
    title: formData.get('title'),
    description: formData.get('description'),
    technologies: formData.get('technologies'),
    link: formData.get('link'),
  };

  const parsed = ProjectFormSchema.safeParse(rawFormData);

  if (!parsed.success) {
    throw new Error('Invalid project input.');
  }

  const { title, description, technologies, link } = parsed.data;

  try {
    await sql`
      UPDATE projects
      SET
        title = ${title},
        description = ${description},
        technologies = ${technologies.split(',').map((item) => item.trim()).filter(Boolean)},
        link = ${link || null}
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

