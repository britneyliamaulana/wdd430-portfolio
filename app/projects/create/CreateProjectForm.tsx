
'use client';

import { useActionState } from 'react';
import { createProject, type State } from '@/app/lib/actions';

const initialState: State = {
  message: null,
  errors: {},
};

export default function CreateProjectForm() {
  const [state, formAction, isPending] = useActionState(
    createProject,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label htmlFor="title" className="mb-2 block text-sm font-medium text-white">
          Project Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          minLength={3}
          aria-invalid={!!state.errors?.title}
          aria-describedby="title-error"
          className="w-full rounded-lg border border-slate-700 bg-[#111c2e] px-4 py-3 text-white outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400"
        />
        <div id="title-error" aria-live="polite" aria-atomic="true">
          {state.errors?.title?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-400">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="description" className="mb-2 block text-sm font-medium text-white">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          minLength={20}
          rows={5}
          aria-invalid={!!state.errors?.description}
          aria-describedby="description-error"
          className="w-full rounded-lg border border-slate-700 bg-[#111c2e] px-4 py-3 text-white outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400"
        />
        <div id="description-error" aria-live="polite" aria-atomic="true">
          {state.errors?.description?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-400">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="technologies" className="mb-2 block text-sm font-medium text-white">
          Technologies
        </label>
        <input
          id="technologies"
          name="technologies"
          type="text"
          required
          minLength={2}
          aria-invalid={!!state.errors?.technologies}
          aria-describedby="technologies-error"
          className="w-full rounded-lg border border-slate-700 bg-[#111c2e] px-4 py-3 text-white outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400"
        />
        <p className="mt-2 text-xs text-slate-500">
          Separate each technology with a comma.
        </p>
        <div id="technologies-error" aria-live="polite" aria-atomic="true">
          {state.errors?.technologies?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-400">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="yearCompleted" className="mb-2 block text-sm font-medium text-white">
          Year Completed
        </label>
        <input
          id="yearCompleted"
          name="yearCompleted"
          type="number"
          min="2000"
          required
          aria-invalid={!!state.errors?.yearCompleted}
          aria-describedby="yearCompleted-error"
          className="w-full rounded-lg border border-slate-700 bg-[#111c2e] px-4 py-3 text-white outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400"
        />
        <div id="yearCompleted-error" aria-live="polite" aria-atomic="true">
          {state.errors?.yearCompleted?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-400">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="link" className="mb-2 block text-sm font-medium text-white">
          Project Link (Optional)
        </label>
        <input
          id="link"
          name="link"
          type="url"
          aria-describedby="link-error"
          className="w-full rounded-lg border border-slate-700 bg-[#111c2e] px-4 py-3 text-white outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400"
        />
        <div id="link-error" aria-live="polite" aria-atomic="true">
          {state.errors?.link?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-400">
              {error}
            </p>
          ))}
        </div>
      </div>

      {state.message && (
        <p role="alert" className="text-sm text-red-400">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? 'Saving...' : 'Save Project'}
      </button>
    </form>
  );
}
