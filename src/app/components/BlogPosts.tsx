
import Link from "next/link"
import { Post, getPosts } from "../lib/blogUtil"

export default async function BlogPosts() {
    let allBlogs: Array<Post> = await getPosts();
    allBlogs = allBlogs.filter(post => post.published == true).sort((a: Post, b: Post) => {
    if (
        new Date(a.date) > new Date(b.date)
    ) {
        return -1
    }
    return 1
    });

    return (
        <div>
        {allBlogs
            .map((post: any) => (
            <Link
                key={post.slug}
                className="flex flex-col space-y-1 mb-4"
                href={`/blog/${post.slug}`}
            >
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                    {post.date}
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight link link-hover">
                    {post.title}
                </p>
                </div>
            </Link>
            ))}
        </div>
    )
}