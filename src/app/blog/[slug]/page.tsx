import { notFound } from "next/navigation"
import { Post, getPosts } from "../../lib/blogUtil"
import { CustomMDX } from "@/mdx-components"

export async function generateStaticParams() {
  const posts: Array<Post> = await getPosts();

  return posts.map((post: Post) => ({
    slug: post.slug,
  }))
}

export default async function Blog({ params } : any) {
  const posts = await getPosts();
  const { slug } = await params;
  const post = posts.find((post) => post.slug === slug)

  if (!posts) {
    notFound()
  }

  return (
    
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            datePublished: post.date,
            description: post.description
            // image: post.metadata.image
            //   ? `${baseUrl}${post.metadata.image}`
            //   : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            // url: `${baseUrl}/blog/${post.slug}`,
            // author: {
            //   '@type': 'Person',
            //   name: 'My Portfolio',
            // },
          }),
        }}
      />
      <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className="title font-semibold text-4xl tracking-tighter">
        {post.title}
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {post.date}
        </p>
      </h1>
      <article className="prose">
        <CustomMDX source={post.body} />
      </article>
      </main>
      </div>

    </section>
  )
}
