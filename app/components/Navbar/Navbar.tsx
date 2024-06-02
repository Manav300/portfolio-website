import React from 'react'

const Navbar = () => {
    return (
        <div className=''>
            <nav className='hidden sm:flex fixed top-3 left-1/2 h-12 -translate-x-1/2 p-2 z-50 rounded-full bg-black/30 backdrop-blur-lg '>
                <ul className='flex w-80 text-sm font-medium text-white/80 flex-wrap items-center justify-around gap-y-1'>
                    <li className='hover:text-white/70 transition ease-in'>
                        <a href="#hero">Home</a>
                    </li>
                    <li className='hover:text-white/70 transition ease-in'>
                        <a href="#experience">Experience</a>
                    </li>
                    <li className='hover:text-white/70 transition ease-in'>
                        <a href="#projects">Projects</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar