export default async function About() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
         <h1 className="header">About Me</h1>
         <p>
            Hi. My name is Kyle. I was born in Easley, SC, and have spent the majority of my life in the south. I attended College of Charleston, receiving my B.S.
            in Computer Science in 2016. I've always enjoyed writing code, but I'm not someone who itches to write it constantly. At the end of the day, I consider it a job.
            One that provides a ton of fulfillment, but at the same time, one that sticks me in front of a computer for an unhealthy amount of time. 
          </p>
          <p>
            Growing up, my family didn't travel much. We had an annual beach trip to Daytona Beach that my brother and I eagerly looked forward to every year. 
            Outside of that, there wasn't much. In college, many of my friends studied abroad- traveling to England, Ireland, Germany, and Spain. As an absolutely broke 
            college student who was paying his own way through college, this was out of my price range. In fact, I became an RA my sophomore through senior year in order 
            to afford housing. Besides my natural interest in Computer Science, one of the huge benefits I foresaw was the opportunities it would provide. One of my professors
            insisted that, after graduating, I shouldn't accept any position less than 75k/year. Well, that may have been true for the top of the class students, or those
            applying for positions in bigger cities. 
          </p>
        </main>
      </div>
    );
  }