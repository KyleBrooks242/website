import Link from "next/link";

interface Props {
    previous?: {
        title: string,
        slug: string
    },
    next?: {
        title: string,
        slug: string
    }
    prefix: string
}

const truncate = (value: string | undefined, maxChars: number = 25) => {
    if (!value) {
        return;
    }

    if (value.length > maxChars) {
        return `${value.substring(0, maxChars-3)}...`
    }
    return value;
}

export default function PostFooter (props: Props) {

    const prevTitle = truncate(props.previous?.title);
    const nextTitle = truncate(props.next?.title);

    return (
        <footer className="footer p-3 rounded-t-md mt-auto">
            <nav className="flex flex-row justify-center w-full">
                { props.previous && <Link className='link link-hover pr-8' href={`/${props.prefix}/${props.previous.slug}`}>{'<'} Previous: {prevTitle}</Link> }
                { props.next && <Link className='link link-hover pl-1' href={`/${props.prefix}/${props.next.slug}`}>Next: {nextTitle} {'>'}</Link> }
            </nav>
        </footer>
    )
}