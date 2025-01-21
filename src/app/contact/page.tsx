import Link from "next/link";

export default async function Contact() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] justify-items-center  p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Link className='btn btn-primary mt-8 w-28 self-center' href='https://linkedin.com/in/kyle-brooks-a05053bb' target='_blank'>LinkedIn</Link>
          <Link className='btn btn-secondary w-28 self-center' href='https://github.com/KyleBrooks242' target='_blank'>Github</Link>
          <Link className='btn btn-accent w-28 self-center' href="/brooks_kyle_resume.pdf" download>Resume</Link>

          <h2 className='h2'>Not quite what you're looking for? (WIP)</h2>
          <p>
            If my resume isn't what you were hoping for, I'm not bitter 🥲 below are colleagues I've worked with that may be a better fit.
            If you aren't on this list and want to be (and I like you), hit me up with your resume and I'll include it here
          </p>
        </main>
      </div>
    );
}