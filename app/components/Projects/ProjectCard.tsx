import React from 'react';
import {FaGithub, FaCode} from 'react-icons/fa6'

type ProjectCardProps = {
    id: number,
    name: string,
    description: string,
    languages: string[],
    url: string,
    git: boolean
}

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <div className='bg-limed-spruce w-[350px] min-w-sm h-[400px] p-7 m-5 rounded-2xl flex flex-col transition-transform transform hover:scale-105'>
            <a href={props.url} target='_blank'>
                <div className=' pb-2'>
                    {props.git ? <FaGithub size={30}/> : <FaCode size={30}/>}
                </div>
                <h1 className='font-bold'>{props.name}</h1>
                <p className='py-4 font-light'>{props.description}</p>
                <ul className='flex flex-wrap mt-auto'>
                    {props.languages.map(language => {
                        return (
                            <li key={language + props.id} className='mx-1 my-1 rounded-full bg-black/80 text-slate-200 px-2 py-0.5 w-fit font-light text-sm'>{language}</li>
                        );
                    })}
                </ul>
            </a>
        </div>
    )
}

export default ProjectCard