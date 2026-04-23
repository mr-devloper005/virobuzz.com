import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { MediaListingClient } from '@/components/overrides/media-listing-client'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

export async function TaskListPageOverride(_: { task: TaskKey; category?: string }) {
  const posts = await fetchTaskPosts('mediaDistribution', 24, { fresh: false })

  return (
    <div className="min-h-screen bg-[#f7f8fc] text-[#1f2344]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
        <section className="mb-10 rounded-3xl bg-[linear-gradient(130deg,#363062_0%,#435585_100%)] p-7 text-white shadow-[0_24px_65px_rgba(54,48,98,0.2)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f5e8c7]">Newsroom</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Latest News & Press Releases</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#d8def2]">
            Browse recent media updates with category and date filters. Use the search box to quickly find releases by title, topic, or summary terms.
          </p>
        </section>

        <MediaListingClient posts={posts} />
      </main>
      <Footer />
    </div>
  )
}
