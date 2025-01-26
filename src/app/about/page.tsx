import Image from 'next/image';
import profilePic from '../../../public/headshot.jpg'

export default async function About() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

         <div className="avatar self-center">
            <div className="ring-primary ring-offset-base-100 w-64 rounded-full ring ring-offset-2">
            <Image
            src={profilePic}
            alt='Waiting for a bus in Soprabolzano'
          />
            </div>
         </div>
         <h1 className="h1">About Me</h1>
         <p>
            Hi, my name is Kyle. I was born in Easley, SC, and have spent the majority of my life in the south.  
            I discovered Visual Basic in middle school and was hooked, although as a home-schooled and naturally shy kid I had trouble finding resources to help my learning.  
            It was that discovery that ultimately led to pursuing a career in computer science. 
            I attended College of Charleston, receiving my B.S. in Computer Science in the spring of 2016. 
            It is immensely satisfying and fulfilling to create something from scratch and see it come to life- 
            I just wish it didn't necessitate being tied to a desk for so long!
          </p>
          <p>
            While I appreciate A/C and indoor plumbing a great deal, I do enjoy getting outside from time to time. Hiking, backpacking, climbing, and snowboarding are all activities
            I try to make time for throughout the year. I find I don't need much, but I do need it often. It's all too easy to stay cooped up inside on
            the extra hot or extra cold days, but I quickly find myself falling into a slump when that happens. 
          </p>
          <p>
            Growing up, my family didn't travel much. We had an annual summer beach trip to Daytona, Florida that my brother and I would eagerly look forward to months in advance. 
            Outside of that, there wasn't much. In college, many of my friends studied abroad- traveling to England, Ireland, Germany, and Spain. As an absolutely broke 
            college student who was paying his own way through college, this was out of my price range. In fact, I became an RA my sophomore through senior year in order 
            to afford housing. Besides my natural interest in Computer Science, one of the huge benefits I foresaw was the opportunities it would provide to afford traveling.
            I took my first trip out of the country when I was 25. My brother and I did a 5 day hike through Peru, ending in Machu Picchu. Since then, I've ticked several more
            countries off the list, but there are still countless places I hope to one day visit. 
          
          </p>
        </main>
      </div>
    );
  }