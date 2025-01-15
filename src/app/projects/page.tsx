
import Image from 'next/image';
import churdleImage from '../../../public/churdle/churdle.png'
import churdleWin from '../../../public/churdle/churdlewin.png'
import swoleNaysh from '../../../public/workout/swolenaysh.png'
import workout from '../../../public/workout/workoutui.png'

export default async function Projects() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
         <a className="project link" target="_blank" href="https://churdle.vercel.app/" rel="noopener noreferrer">Churdle</a>
         <div className='flex flex-row justify-items-center self-center'>
            <Image
                className='self-center mx-3'
                src={churdleImage}
                alt='Churdle Word Game. A variant of Wordle'
                height={350}
              />
            <Image
                className='self-center mx-3 opt-img'
                src={churdleWin}
                alt='Churdle winning screen'
                height={350}
            />
          </div>
         <p>
          Churdle is a copy of the popular Wordle word game. I decided to see how closely I could replicate it without looking at the source code or following 
          any sort of tutorial.  So it wasn't an <strong>exact</strong> copy, I instead made a 6 letter variation and started to implement the idea of a 'bomb letter'. As far as I know,
          that was never fully finshed... so the results might be more explosive than intended. 
         </p>
         <p>
          Churdle releases a new word four times a day, and keeps track of user stats via a browser cookie. 
         </p>

         <a className="project link" target="_blank" href="https://github.com/KyleBrooks242/workout-app" rel="noopener noreferrer">Workout App</a>
         <div className='flex flex-row self-center justify-items-center'>
         <Image
            className='self-center mx-3 opt-img'
            src={swoleNaysh}
            alt='Workout app project'
            height={350}
          />
          <Image
            className='self-center mx-3'
            src={workout}
            alt='Workout routine'
            height={350}
          />
          </div>
         <p>
          I attempt to go to the gym on a regular schedule. Some months I do better than others. But a crucial piece of working out is recording your routines.
          There are plenty of apps you can download to track a workout, but I thought this would be a good opportunity to try and come up with something in react that used
          a backend server for storing routines. In an ideal world, this would be someting developed as an iOS/ android app. Unfortuantely, I've never even scratched
          the surface of trying to develop mobile apps. It's been years since I wrote this, but the ReadMe is actually somewhat filled out! If I get it up and running
          again, I'll update this with more photos- The above was all I could scrounge up!
         </p>

         <p>
          Key features include 
          - Authentication for individual users
          - Ability to create/save/view workout routines
          - Light and dark theming 
         </p>
        </main>
      </div>
    );
}
