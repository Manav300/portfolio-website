import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import Timeline from '../Timeline/Timeline';

const Experience = () => {
  return (
    <div id='experience' className='py-10 flex flex-col bg-daintree-blue'>
      <SectionHeader title='Experience' />
      <Timeline />
    </div>
  )
}

export default Experience