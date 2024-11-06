import React from 'react'
import logo from "../../public/idea.png"
import Image from 'next/image'
import Link from 'next/link'



export default function Navbar() {
    
    
    return (
        <nav className="fixed z-30 bg-[#C2C1A5] text-black bg-opacity-10 backdrop-blur-md shadow-md flex w-[90%] mx-[5%] min-w-[400px] p-4 mt-4 rounded-2xl justify-between px-10">
            
            <div className='flex '>
               <Image src={logo} alt='logo' width={30} height={20}/>
               <h1 className="font-bold text-[20px] self-center">Idea factory</h1>
            </div>
            <ul className="flex w-[40%] justify-between text-[15px] self-center">
                <li><Link href="/">About</Link></li>
                <li><Link href="/challenges">Challenges</Link ></li>
                <li><Link  href="/gallery">Gallery</Link ></li>
                <li><Link  href="/project">Project</Link ></li>
                <li><Link  href="/#Contact">Contact</Link ></li>
            </ul>

        </nav>
    )
}
