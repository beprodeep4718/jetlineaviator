import { Menu } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed z-50 top-0 left-0 w-full flex items-center justify-center bg-background'>
        <nav className=' md:w-11/12 grid grid-cols-[auto_1fr_auto] bg-background items-center border-b border-gray-300'>
            <div className='logo md:px-4 px-2 col-start-1 col-end-2'>
                LOGO
            </div>
            <div className="px-4 py-6 border-l border-r border-[#494948] w-full col-start-2 col-end-3 flex flex-col text-[6px] md:text-lg font-[outfit] justify-center">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consequatur ipsam. Assumenda!</p>
            </div>
            <div className='md:px-4 px-2 w-full col-start-3 col-end-4 flex justify-center items-center'>
                <Menu />
            </div>
        </nav>
        <div className='h-px w-full absolute bottom-0 left-0 bg-[#494948]'></div>
    </div>
  )
}

export default Navbar