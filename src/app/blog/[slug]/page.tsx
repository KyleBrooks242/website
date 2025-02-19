import { notFound } from "next/navigation"
import { Post, getPost, getPosts } from "../../lib/blogUtil"
import { CustomMDX } from "@/mdx-components"
import PostFooter from "@/app/components/PostFooter"
import Comments from "@/app/components/Comments";
import { Suspense } from "react";


export default async function Blog({ params } : any) {
  //Destructuring happens immediately on an object, so the await has to be 
  //done separately to ensure the promise is resolved before destructuring. 
  const resolvedParams = await params;
  console.log(resolvedParams);
  const { slug } = resolvedParams;

  const { post, previous, next } = await getPost(slug);
  
  if (!post) {
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
        <PostFooter previous={previous} next={next} prefix={'blog'}/>
        <Suspense fallback={<div>Loading Comments...</div>}>
          <Comments slug={slug} />
        </Suspense>
        </main>
      </div>

    </section>
  )
}
