import Image from 'next/image'
import TypewriterComponent from 'typewriter-effect'
import { Typewriter } from 'nextjs-simple-typewriter'
import FotorImage from "../../public/fotor.jpg"
import DalleImage from "../../public/DALLE.webp"
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center lg:p-24 p-4 lg:pt-80 pt-32">
      <div className="font-['Aquire'] lg:text-7xl text-4xl max-w-[1300px] text-center pb-[450px]">
        <span className=""><span className='text-primary drop-shadow-[0_0_35px_var(--primary-color)]'>Optimize</span> bus routes.</span>
        <br></br>
        <span className="">Reduce <span className='text-accent drop-shadow-[0_0_35px_var(--accent-color)]'> <Typewriter words={["CO2 Emissions", "Global Warming", "Energy Consumption", "Carbon Footprint"]} loop={0} typeSpeed={100}></Typewriter></span></span>
      </div>
      <div className='flex justify-center items-center gap-24 xl:flex-row flex-col'>
        <Image src={FotorImage} alt='' className='w-[700px] h-auto rounded-4xl hue-rotate-15 top-[450px] right-0 z-[-20] bg-blend-screen'></Image>
        <p className='max-w-[900px] lg:text-xl'>Our proposed solution involves the development of a smart and adaptive bus route system that leverages real-time data to optimize bus routes. By equipping buses with GPS and passenger counting sensors, we can continuously monitor the number of passengers waiting at each stop and adjust bus routes accordingly. The system will use data analytics and machine learning algorithms to make dynamic routing decisions, ensuring that buses are directed to where they are needed most.</p>
      </div>
    </main>
  )
}
