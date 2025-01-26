'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { HomeIcon, BookOpenIcon, QuestionMarkCircleIcon, ChartBarIcon, PaperClipIcon, MoonIcon, SunIcon } from "@heroicons/react/20/solid";

const lightTheme = 'pastel';
const darkTheme = 'dracula';

export default function Header () {

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') && localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark'
)

  const handleThemeToggle = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  useEffect(() => {
    //Avoid pesky 'possibly null error
    const _theme = theme || '';
    localStorage.setItem("theme", _theme);
    const localTheme: any = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document?.querySelector("html")?.setAttribute("data-theme", localTheme);
  }, [theme]);

    return (
        <div className="navbar bg-primary rounded-b-md">
          <a className="btn btn-ghost mx-0  text-base sm:text-sm md:text-xl lg:text-lg xl:text-xl">Kyle Brooks</a>

          <Link className="link link-hover nav-link pr-4" href='/'>
            <HomeIcon className="sm:w-4 md:w-6 w-4 h-4 mr-1"/>
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

          {(theme == lightTheme) 
            ?
              <MoonIcon className="w-6" onClick={() => handleThemeToggle()}/> 
              :
              <SunIcon className="w-6" onClick={() => handleThemeToggle()}/> 
          }
      </div>
    )
}