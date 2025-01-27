"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  HomeIcon, 
  BookOpenIcon, 
  QuestionMarkCircleIcon, 
  ChartBarIcon, 
  PaperClipIcon, 
  MoonIcon, 
  SunIcon 
} from "@heroicons/react/20/solid";
import { SunIcon as SunIconOutline, MoonIcon as MoonIconOutline} from "@heroicons/react/24/outline"


const lightTheme = 'nord';
const darkTheme = 'dark';

export default function Header () {

  const [theme, setTheme] = useState<string>('dark');

  const handleThemeToggle = () => {
    const newTheme = (theme === lightTheme) ? darkTheme : lightTheme
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
    window.localStorage.setItem("theme", newTheme);
    document?.querySelector("html")?.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    const theme = window.localStorage.getItem('theme') || darkTheme;
    setTheme(theme)
    window.localStorage.setItem("theme", theme);
    document?.querySelector("html")?.setAttribute("data-theme", theme);

  }, []);

    return (
        <div className="navbar bg-primary rounded-b-md">
          <a className="btn btn-ghost mx-0  text-base sm:text-sm md:text-md lg:text-lg xl:text-xl">Kyle Brooks</a>

          <Link className="link link-hover nav-link pr-3" href='/'>
            <HomeIcon className="sm:w-4 md:w-6 w-4 h-4 mr-1"/>
            <span className='hidden sm:inline'>Home</span>
          </Link>

          <Link className="link link-hover nav-link pr-3" href='/blog'>
            <BookOpenIcon className="sm:w-4 md:w-6 w-4 h-4 mr-1"/>
            <span className='hidden sm:inline'>Blog</span>
          </Link>


          <Link className="link link-hover nav-link pr-3" href='/projects'>
            <ChartBarIcon className="sm:w-4 md:w-6 w-4 h-4 mr-1"/>
            <span className='hidden sm:inline'>Projects</span>
          </Link>


          <Link className="link link-hover nav-link pr-3" href='/about'>
            <QuestionMarkCircleIcon className="sm:w-4 md:w-6 w-4 h-4 mr-1"/>
            <span className='hidden sm:inline'>About</span>
          </Link>


          <Link className="link link-hover nav-link pr-3" href='/contact'>
            <PaperClipIcon className="sm:w-4 md:w-6 w-4 h-4 mr-1"/>
            <span className='hidden sm:inline'>Contact</span>
          </Link>

          <div className="form-control">
            <label className="label cursor-pointer flex items-center">
              {theme == darkTheme ?
                <MoonIcon className="sm:w-4 md:w-6 w-4 h-4 mr-1"/> :
                <MoonIconOutline className="sm:w-4 md:w-6 w-4 h-4 mr-1"/>
              }
            <input type="checkbox" className="toggle toggle-sm sm:toggle-md rounded-xl" checked={theme === lightTheme} onChange={() => handleThemeToggle()} />
              {theme == lightTheme ?
                <SunIcon className="sm:w-4 md:w-6 w-4 h-4 ml-1"/> :
                <SunIconOutline className="sm:w-4 md:w-6 w-4 h-4 ml-1"/> 
              }
            </label>
          </div>
      </div>
    )
}