import React from 'react';
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className='h-screen relative'>
            <div id='hero' className='bg-daintree-blue flex flex-col md:flex-row items-center justify-center sm:px-20 px-5 text-gray-300'>
                <div className='text-wrap h-fit p-5 text-5xl sm:text-7xl border-b-2 md:border-r-2 md:border-b-0 border-white'>
                    <p className=''>Hello, my name is</p>
                    <p className='font-bold leading-tight text-white'> Manav Pandya</p>
                    <p className='hidden sm:block text-xl py-4 font-light '>Software Engineering Student at the University of Guelph</p>
                </div>
                <div className='flex flex-col p-5 space-y-7 text-3xl sm:text-5xl font-medium z-10'>
                    <p className='hover:text-white hover:text-6xl hover:cursor-default'>I am a Software Developer.</p>
                    <p className='hover:text-white hover:text-6xl hover:cursor-default'>I build projects.</p>
                    <p className='hover:text-white hover:text-6xl hover:cursor-default'>Let&apos;s get in touch.</p>
                </div>
            </div>
            <a href='#experience' className='z-50 hidden lg:inline'>
                <div className={styles.scrollDown}></div>
            </a>
            <ParticlesBackground />
        </div>
    )
}

export default Hero