import Link from "next/link";
import { HomeIcon, BookOpenIcon, QuestionMarkCircleIcon, ChartBarIcon, PaperClipIcon } from "@heroicons/react/20/solid";

export default function Header () {


    return (
        <div className="navbar bg-primary rounded-b-lg">
          <a className="btn btn-ghost mx-0  text-base sm:text-sm md:text-xl lg:text-lg xl:text-xl">Kyle Brooks</a>

          <Link className="link link-hover nav-link pr-4" href='/'>
            <HomeIcon className="sm:w-4 md:w-6 w-4 h-4 mr-1" href='/'/>
            <span className='hidden sm:inline'>Home</span>
          </Link>

          <Link className="link link-hover nav-link pr-4" href='/blog'>
            <BookOpenIcon className="sm:w-4 md:w-6 w-4 h-4 mr-1"/>
            <span className='hidden sm:inline'>Blog</span>
          </Link>


          <Link className="link link-hover nav-link pr-4" href='/projects'>
            <ChartBarIcon className="sm:w-4 md:w-6 w-4 h-4 mr-1"/>
            <span className='hidden sm:inline'>Projects</span>
          </Link>


          <Link className="link link-hover nav-link pr-4" href='/about'>
            <QuestionMarkCircleIcon className="sm:w-4 md:w-6 w-4 h-4 mr-1"/>
            <span className='hidden sm:inline'>About</span>
          </Link>


          <Link className="link link-hover nav-link pr-4" href='/contact'>
            <PaperClipIcon className="sm:w-4 md:w-6 w-4 h-4 mr-1"/>
            <span className='hidden sm:inline'>Contact</span>
          </Link>


      </div>
    )
}