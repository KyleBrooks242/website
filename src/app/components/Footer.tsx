import Link from "next/link";


export default function Footer () {

    return (
        <footer className="footer bg-primary p-4 rounded-t-md content-end">
        <nav>
            {/* <a className="link link-hover" href="/brooks_kyle_resume.pdf" download>My Resume</a> */}
            <Link className='btn btn-secondary w-28 self-center' href="/brooks_kyle_resume.pdf" download>Resume</Link>
        </nav>
        {/* <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
        </nav> */}
        </footer>

    )
}
