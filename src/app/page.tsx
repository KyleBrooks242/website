import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        {/* Add a disclaimer banner */}
        <div role="alert" className="alert alert-info justify-items-center">
          <ExclamationTriangleIcon className="w-4 h-4 mr-1"/>
          <span>This website is under active development.</span>
          <ExclamationTriangleIcon className="w-4 h-4 mr-1"/>
        </div>

        <h1 className='h1'>Welcome!</h1>
        <p>
          If you have stumbled upon this page, chances are you are a potential employer, looking to hire a certain Kyle Brooks. You noticed he was bold enough
          to include his website in his LinkedIn, so you figured you'd go and take a look. Do not let the appearances of this page deceive you. What he 
          lacks in design taste, he more than makes up for with his charm and his willingness to learn. So please-- take a look around, but be merciful in your 
          judgments.
        </p>
        <p>
          The purpose of this site is a place for me to experiment and learn. Where possible, I'll be avoiding the blind copy/paste of
          code snippets/configs/etc. that I've been so fond of in the past. Nothing is more frustrating than a jumbled mess of code and config files
          that aren't building as expected/ rendering as intended and not knowing where to even begin looking to solve the problem.
        </p>
        <p>Check out my blog to follow the construction progress of this page!</p>
      </main>
    </div>
  );
}
