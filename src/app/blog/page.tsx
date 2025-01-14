import BlogPosts from "@/app/components/BlogPosts"

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
          <BlogPosts />
      </main>
    </div>
  )
}