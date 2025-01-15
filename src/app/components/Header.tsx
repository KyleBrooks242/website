import Link from "next/link";

export default function Header () {


    return (
        <div className="navbar bg-primary fixed">
        <a className="btn btn-ghost mx-0 px-2 text-base sm:text-sm md:text-xl lg:text-lg xl:text-xl">Kyle Brooks</a>
        <Link className="link link-hover nav-link" href='/'>Home</Link>
        <Link className="link link-hover nav-link" href='/blog'>Blog</Link>
        <Link className="link link-hover nav-link" href='/projects'>Projects</Link>
        <Link className="link link-hover nav-link" href='/about'>About</Link>
        <Link className="link link-hover nav-link" href='/contact'>Contact</Link>
      </div>
    )
}