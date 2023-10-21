import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div>
        
<footer className="bg-white rounded-lg shadow dark:bg-gray-900 pt-80">
    <div className="w-full mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 ">
                <span className="self-center text-3xl whitespace-nowrap dark:text-white pl-4 font-['Aquire'] font-bold">Optiway</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 pr-4">
                <li>
                    <a href="/home" className="mr-4 hover:underline md:mr-6 ">Home</a>
                </li>
                <li>
                    <a href="/route" className="mr-4 hover:underline md:mr-6">Routes</a>
                </li>
                <li>
                    <a href="/detect" className="mr-4 hover:underline md:mr-6 ">Detect</a>
                </li>
                <li>
                    <a href="/contact" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Optiway</a>. All Rights Reserved.</span>
    </div>
</footer>


    </div>
  )
}

export default Footer