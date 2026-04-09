'use client'

import { useActionState } from 'react'
import { createPost } from '../actions'

type State = { id: number; title: string } | null

export function CreatePostButton() {
  const [post, action, pending] = useActionState<State, FormData>(
    async () => {
      const result = await createPost()
      return { id: result.id, title: result.title }
    },
    null,
  )

  return (
    <form action={action}>
      <button
        type="submit"
        disabled={pending}
        className="flex h-12 items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] disabled:opacity-50 dark:hover:bg-[#ccc]"
      >
        {pending ? 'Creating…' : 'Create Post'}
      </button>
      {post && (
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          Created post #{post.id}: &quot;{post.title}&quot;
        </p>
      )}
    </form>
  )
}
