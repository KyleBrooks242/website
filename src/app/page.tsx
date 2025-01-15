
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className='h1'>Welcome!</h1>
      <p>
        If you have stumbled upon this page, chances are you are a potential employer, looking to hire a certain Kyle Brooks. You noticed he was bold enough
        to include his website in his LinkedIn, so you figured you'd go and take a look. Do not let the appearances of this page deceive you. What he 
        lacks in design taste, he more than makes up for with his willingness to learn and natural charm. So please-- take a look around, but be merciful in your 
        judgements. That is all I can ask.
      </p>
      <p>
        The purpose of this webpage is to be a place for me to experiment and learn. Where possible, I'll be avoiding the blind copy/paste of
        code snippits/configs/etc. that I've been so fond of in the past. Nothing is more frustrating than a jumbled mess of code and config files
        that isn't building as expected/ rendering as intended and not knowing where to even begin looking to solve the problem.
        
      </p>
      <h1>Current Project: This website!</h1>
      </main>
    </div>
  );
}
