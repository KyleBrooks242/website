import matter from 'gray-matter';
import path from 'path';
import fs from 'fs/promises';
import { cache } from 'react';

export type Post = {
  slug: string
  date: string
  body: string
  published: boolean
  title: string,
  // tags: string[]
  // lastModified?: number
  // views?: number
  type: 'post'
}

const preFetchedPosts: any = {};


export const getPosts = cache(async (): Promise<Array<any>> => {
  console.debug('getPosts: Fetching posts...');

  const postDir = path.join(process.cwd(), './src/posts/');
  const posts = await fs.readdir(postDir)

  return Promise.all(
    posts
      .filter((file: string) => path.extname(file) === '.mdx')
      .map(async (file: any) => {
        const filePath = `${postDir}${file}`
        const postContent = await fs.readFile(filePath, 'utf8')
        const { data, content } = matter(postContent)
        preFetchedPosts[`${data.slug}`] = { ...data, body: content };

        return { ...data, body: content } as Post
      })
  )
})

export async function getPost(slug: string) {
  console.debug(`getPost: Fetching post with slug ${slug}`);

  if (!preFetchedPosts[slug]) {
    console.log("No posts cached! fetching...")
    await getPosts();
  }

  const posts = sortByDate(Object.values(preFetchedPosts), true);

  const postIdx = posts.findIndex((post) => post.slug === slug);
  const post = posts[postIdx];
  const previous = posts[postIdx - 1] && posts[postIdx - 1].published ? posts[postIdx - 1] : undefined;
  const next = posts[postIdx + 1] && posts[postIdx + 1].published ? posts[postIdx + 1]: undefined;

  return {
    post: post,
    previous: previous,
    next: next
  }

}

const sortByDate = (posts: Array<any>, byDateAscending: boolean) => {
  console.debug(`Sorting posts in ${byDateAscending ? 'ascending' : 'descending'} order`)

  return byDateAscending 
  ? posts.sort((a: Post, b: Post) => {
      if (
          new Date(a.date) < new Date(b.date)
      ) {
          return - 1;
      }
      return 1;
      })
      :
      posts.sort((a: Post, b: Post) => {
      if (
          new Date(a.date) > new Date(b.date)
      ) {
          return - 1;
      }
      return 1;
      })
}