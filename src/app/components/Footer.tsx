import Link from "next/link";


export default function Footer () {

    return (
        <footer className="footer bg-primary p-3 rounded-t-md mt-auto">
            <nav className="flex flex-row justify-evenly w-full">
                <Link className='btn btn-sm w-28' href="/brooks_kyle_resume.pdf" download>Resume</Link>
                <Link className='btn btn-sm w-28' href='https://linkedin.com/in/kyle-brooks-a05053bb' target='_blank'>LinkedIn</Link>
                <Link className='btn btn-sm w-28' href='https://github.com/KyleBrooks242' target='_blank'>Github</Link>
            </nav>
        </footer>
    )
}
