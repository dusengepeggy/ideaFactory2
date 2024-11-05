import React from 'react'
import { FiInstagram, FiMail, FiYoutube } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="py-4 bg-[rgb(11,23,53)] text-gray-300 flex justify-between px-[5%]">
    <p>&copy; 2024 Idea factory. All rights reserved.</p>
    <div className="flex gap-4 self-center">     
      
      <a href="#" className='self-center'><FiYoutube size={22} /></a>
      <a href="#" className='self-center'><FiMail size={20} /></a>
      <a href="#" className='self-center'><FiInstagram size={18} /></a>

    </div>
  </footer>
  )
}
