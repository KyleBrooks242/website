import BlogPosts from "@/app/components/BlogPosts"

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center p-8 pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="h1">Posts</h1>
          <BlogPosts />
      </main>
    </div>
  )
}