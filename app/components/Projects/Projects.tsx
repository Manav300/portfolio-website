import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import ProjectCard from './ProjectCard';
import projectElements from '@/public/projectElements';

const Projects = () => {
    return (
        <div id='projects' className='bg-daintree-blue'>
            <SectionHeader title='Projects' />
            <div className='flex flex-wrap justify-center py-10 px-1 md:px-40 w-full'>
                {projectElements.map(element => {
                    return (
                        <ProjectCard key={element.id} id={element.id} name={element.name} description={element.description} languages={element.languages} url={element.url} git={element.git}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects