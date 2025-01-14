
export default async function Projects() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
         <a className="project link" target="_blank" href="https://churdle.vercel.app/" rel="noopener noreferrer">Churdle</a>
         <p>
          Churdle is a copy of the popular Wordle word game. I decided to see how closely I could replicate it without looking at the source code or following 
          any sort of tutorial.  So it wasn't an <strong>exact</strong> copy, I instead made a 6 letter variation and started to implement the idea of a 'bomb letter'. As far as I know,
          that was never fully finshed... so the results might be more explosive than intended.
         </p>
        </main>
      </div>
    );
}
