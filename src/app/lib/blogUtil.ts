import matter from 'gray-matter';
import path from 'path';
import fs from 'fs/promises';
import { cache } from 'react';

export type Post = {
    slug: string
    date: string
    body: string
    published: boolean
    // tags: string[]
    // lastModified?: number
    // views?: number
    type: 'post'
  }

export const getPosts = cache(async (): Promise<Array<any>> => {

  const postDir = path.join(process.cwd(), './src/posts/');
  const posts = await fs.readdir(postDir)

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `${postDir}${file}`
        const postContent = await fs.readFile(filePath, 'utf8')
        const { data, content } = matter(postContent)

        // if (data.published === false) {
        //   console.log('DATA NOT PUBLISHED!')
        //   return null
        // }

        return { ...data, body: content } as Post
      })
  )
})

export async function getPost(slug: string) {
  const posts = await getPosts()
  return posts.find((post) => post?.slug === slug)
}