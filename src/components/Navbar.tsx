import React from 'react'
import { cookies } from 'next/headers'
import Link from 'next/link'

export default async function Navbar() {

    return (
    <div className="py-6 px-10 flex justify-center items-center select-none bg-background/90 sticky top-0 z-[9999] backdrop-filter backdrop-blur-md border-b border-secondary">
    <div className="flex-1">
        <Link href="/">
            <span className="py-1 px-4 font-['Aquire'] normal-case text-3xl font-bold">optiway</span>
        </Link>
    </div>
    <div className="flex flex-row justify-center items-center gap-8">
            <div className="flex justify-center items-center font-['Outfit']  text-lg gap-8">
                <Link href="/">
                    <button className="text-lg hover:underline underline-offset-2">
                        Home
                    </button>
                </Link>
                <Link href="/about">
                    <button className="text-lg hover:underline underline-offset-2">
                        About Us
                    </button>
                </Link>
            </div>
    </div>
    </div>
  )
}
