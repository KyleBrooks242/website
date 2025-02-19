import Image from 'next/image';
import Link from 'next/link';


interface Props {
    title: string,
    description: string,
    mainImageUrl: string,
    slug: string
}

export default function ProjectCard(props: Props) {
    console.log(props.slug)
    return (
        <div className="card lg:card-side bg-primary shadow-xl rounded-md p-5 flex-1">
            <figure className="overflow-hidden">
                <Image
                    src={props.mainImageUrl}
                    alt={props.title}
                    width={350}
                    height={350}
                    // className="max-h-[300px] w-auto"
                    style={{borderRadius: "12px"}}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                    <Link
                        className="btn btn-secondary rounded-md"
                        href={`/project/${props.slug}`}
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}