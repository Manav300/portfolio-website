import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';

const About = () => {
  return (
    <div className='py-10 flex flex-col bg-daintree-blue'>
      <SectionHeader title='About Me' />
      <p className='text-l font-light text-left px-10 self-center sm:text-center sm:text-xl sm:px-0 sm:w-1/2'>
        Hello, my name is Manav Pandya and I am a Software Engineer working towards a Bachelor of Computing from the University of Guelph,
        specializing in Full-Stack Software Development. My experience spans software development, cloud engineering, and
        application development, where I have enhanced application performance, developed full-stack web apps, and implemented
        cloud solutions. I have strong skills in C, Python, Java, SQL, JavaScript, and C#, and I'm proficient with frameworks like
        React, ASP.NET, and tools such as AWS and Git.
      </p>
    </div>
  )
}

export default About