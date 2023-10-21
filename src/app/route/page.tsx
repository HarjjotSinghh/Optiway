import React from 'react'
import Map_ from '@/components/Map' 

export default function Route() {
  return (
    <>
        <div className='min-w-screen flex justify-center items-center flex-col gap-8 lg:pt-20 pt-12'>
            <div className="">
                <h1 className="lg:text-7xl text-4xl font-['Aquire']"><span className='text-accent'>LIVE</span> MAP</h1>
            </div>
            <Map_/>
        </div>
    </>
  )
}
