import { Menu } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed z-50 top-0 left-0 w-full grid grid-cols-[auto_1fr_auto] bg-background items-center bg- px-8 border-b border-gray-300'>
        <div className='logo px-4'>
            LOGO
        </div>
        <div className="px-4 py-6 border-l border-r border-gray-300 mx-8">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consequatur ipsam. Assumenda!</p>
        </div>
        <div className='px-4'>
            <Menu />
        </div>
    </nav>
  )
}

export default Navbar