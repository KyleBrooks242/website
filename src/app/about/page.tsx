import Image from 'next/image';
import profilePic from '../../../public/KyleAbout.jpg'

export default async function About() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            className='self-center'
            src={profilePic}
            alt='Waiting for a bus in Soprabolzano'
            width={300}
            height={500}
          />
         <h1 className="h1">About Me</h1>
         <p>
            Hi. My name is Kyle. I was born in Easley, SC, and have spent the majority of my life in the south. I attended College of Charleston, receiving my B.S.
            in Computer Science in 2016. I've always enjoyed writing code, but I'm not someone who itches to write it constantly. At the end of the day, I consider it a job.
            One that provides a ton of fulfillment, but at the same time, one that sticks me in front of a computer for an unhealthy amount of time. 
          </p>
          <p>
            While I appreciate A/C and indoor plumbing a great deal, I do enjoy getting outside from time to time. Hiking, backpacking, climbing, and snowboarding are all activities
            I try to make time for throughout the year. I find I don't need much, but I do need it often. It's all too easy to stay cooped up inside on
            the extra hot or extra cold days, but I quickly find myself falling into a slump when that happens. 
          </p>
          <p>
            Growing up, my family didn't travel much. We had an annual beach trip to Daytona, Florida that my brother and I eagerly looked forward to every year. 
            Outside of that, there wasn't much. In college, many of my friends studied abroad- traveling to England, Ireland, Germany, and Spain. As an absolutely broke 
            college student who was paying his own way through college, this was out of my price range. In fact, I became an RA my sophomore through senior year in order 
            to afford housing. Besides my natural interest in Computer Science, one of the huge benefits I foresaw was the opportunities it would provide to afford traveling.
            I took my first trip out of the country when I was 25. My brother and I did a 5 day hike through Peru, ending in Machu Pichu. Since then, I've ticked several more
            countries off the list, but there are still countless places I hope to one day visit. 
          
          </p>
        </main>
      </div>
    );
  }