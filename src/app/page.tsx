import Image from 'next/image'
import TypewriterComponent from 'typewriter-effect'
import { Typewriter } from 'nextjs-simple-typewriter'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="font-['Aquire'] text-7xl max-w-[1300px] text-center">
       
        <span className=""><span className='text-primary'>Optimize</span> bus routes.</span>
        <br></br>
        <span className="">Reduce <span className='text-accent'> <Typewriter words={["CO2 Emissions", "Global Warming", "Energy Consumption", "Carbon Footprint"]} loop={0} typeSpeed={100}></Typewriter></span></span>. 
      </div>
    </main>
  )
}
