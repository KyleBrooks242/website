import ProjectCard from "../components/ProjectCard";
import { Project, getProjects } from "../lib/projectUtil"

export default async function ProjectPage() {


    const allProjects: Array<Project> = await getProjects();

    const displayProjectCards = () => {
        return allProjects.map((project: Project) => {
            return (
                <ProjectCard 
                    title={project.title} 
                    description={project.description} 
                    mainImageUrl={`${project.mainImageUrl}`} 
                    key={`${project.title}-${project.order}`}
                    slug={project.slug}
                />)
        })
    }

    return (
        <div className="grid grid-rows-[20px_1fr_20px] justify-items-center p-8 pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1 className="h1">Projects</h1>
                    {displayProjectCards()}
                
            </main>
        </div>

    )
}