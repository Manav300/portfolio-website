import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6'


const Footer = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center p-10 my-7'>
                <div className='w-fit self-center flex'>
                    <a href='https://github.com/Manav300' target='_blank' className='px-2 hover:scale-125'>
                        <FaGithub size={25} color='gray' />
                    </a>
                    <a href='https://ca.linkedin.com/in/manav-pandya' target='_blank' className='px-2 hover:scale-125'>
                        <FaLinkedin size={25} color='gray' />
                    </a>
                    <a href='https://www.instagram.com/manavpandya30/?hl=en' target='_blank' className='px-2 hover:scale-125'>
                        <FaInstagram size={25} color='gray' />
                    </a>
                </div>
                <p className='w-fit mt-10 font-light text-sm text-gray-400/80'>Feel free to contact me at <a className='underline' href="mailto:manavpandya30@gmail.com">manavpandya30@gmail.com.</a></p>
                <p className='w-fit mt-2 font-light text-sm text-gray-400/80'>Manav Pandya @ 2024. Built with React & Next.js, TypeScript, Tailwind CSS.</p>
            </div>
        </div>
    )
}

export default Footer