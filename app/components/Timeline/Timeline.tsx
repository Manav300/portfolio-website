'use client'
import React from 'react';
import timelineElments from '@/public/timelineElements';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineSchool, MdOutlineWorkOutline } from "react-icons/md";

const Timeline = () => {

    return (
        <div>
            <VerticalTimeline>
                {timelineElments.map(element => {
                    let isWorkIcon = element.icon === 'work';
                    return (
                        <VerticalTimelineElement
                            visible={true}
                            key={element.id}
                            date={element.date}
                            dateClassName='date'
                            contentStyle={{ background: 'rgb(56,73,85)', color: '#fff', boxShadow: '0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25)'}}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(56,73,85)' }}
                            iconStyle={{ background: 'rgb(31,41,55)' }}
                            icon={isWorkIcon ? <MdOutlineWorkOutline /> : <MdOutlineSchool />}>
                            <h1 className='font-semibold'>{element.title}</h1>
                            <h3 className='italic'>{element.location}</h3>
                            <h4 className='font-extralight pt-3'>{element.description}</h4>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    )
}

export default Timeline

