
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

  await sql`
    INSERT INTO projects (title, description, technologies, link)
    VALUES (
      ${title},
      ${description},
      ${technologies.split(',').map((item) => item.trim()).filter(Boolean)},
      ${link || null}
    )
  `;

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

  await sql`
    UPDATE projects
    SET
      title = ${title},
      description = ${description},
      technologies = ${technologies.split(',').map((item) => item.trim()).filter(Boolean)},
      link = ${link || null}
    WHERE id = ${Number(id)}
  `;

  revalidatePath('/projects');
  revalidatePath('/');

  redirect('/projects');
}



export async function deleteProject(id: number) {
  await sql`
    DELETE FROM projects
    WHERE id = ${id}
  `;

  revalidatePath('/projects');
  revalidatePath('/');
  redirect('/projects');
}

