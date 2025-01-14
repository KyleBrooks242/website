import Link from "next/link";

export default function Header () {


    return (
        <div className="navbar bg-base-100 ">
        <a className="btn btn-ghost text-xl">Kyle Brooks</a>
        <Link className="link link-hover mx-4" href='/'>Home</Link>
        <Link className="link link-hover mx-4" href='/blog'>Blog</Link>
        <Link className="link link-hover mx-4" href='/projects'>Projects</Link>
        <Link className="link link-hover mx-4" href='/about'>About</Link>
        <Link className="link link-hover mx-4" href='/contact'>Contact</Link>

      </div>
    )
}