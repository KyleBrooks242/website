import matter from 'gray-matter';
import path from 'path';
import fs from 'fs/promises';
import { cache } from 'react';

export type Project = {
    slug: string
    title: string,
    description: string,
    content: string,
    mainImageUrl: any,
    order: number
    type: 'project'
  }


export const getProjects = cache(async (): Promise<Array<any>> => {
  console.debug('getProjects: Fetching projects...');

  const projectDir = path.join(process.cwd(), './src/projects/');
  const projects = await fs.readdir(projectDir)

  return Promise.all(
    projects
      .filter((file: string) => path.extname(file) === '.mdx')
      .map(async (file: any) => {
        const filePath = `${projectDir}${file}`
        const projectContent = await fs.readFile(filePath, 'utf8')
        const { data, content } = matter(projectContent)

        return { ...data, content } as Project
      })
  )
})

export async function getProject(slug: string) {
  console.debug(`getProject: Fetching project with slug ${slug}`);

  const unsortedProjects = await getProjects()
  const projects = sortByDate(unsortedProjects, true)

  const projectIdx = projects.findIndex((project) => project.slug === slug);
  const project = projects[projectIdx];
  const previous = projects[projectIdx - 1] ? projects[projectIdx - 1] : undefined;
  const next = projects[projectIdx + 1]  ? projects[projectIdx + 1]: undefined;

  return {
    project: project,
    previous: previous,
    next: next
  }

}

const sortByDate = (projects: Array<Project>, byOrderAscending: boolean) => {
  console.debug(`Sorting projects in ${byOrderAscending ? 'ascending' : 'descending'} order`)

  return byOrderAscending 
  ? projects.sort((a: Project, b: Project) => {
      if (
          new Date(a.order) < new Date(b.order)
      ) {
          return - 1;
      }
      return 1;
      })
      :
      projects.sort((a: Project, b: Project) => {
      if (
          new Date(a.order) > new Date(b.order)
      ) {
          return - 1;
      }
      return 1;
      })
}