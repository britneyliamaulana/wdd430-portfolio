
import { Suspense } from 'react';
import EditProjectForm from './EditProjectForm';

async function EditProjectContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <EditProjectForm id={id} />;
}

export default function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense
      fallback={
        <main className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-slate-400">Loading project...</p>
        </main>
      }
    >
      <EditProjectContent params={params} />
    </Suspense>
  );
}
