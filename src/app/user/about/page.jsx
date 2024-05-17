import React from 'react'

const About = () => {
  return (
    <div className=''>
      <div className='grid grid-cols-4 '>
        <div className='bg-yellow-300 col-span-2 flex justify-start items-center'> first ice</div>

        <div className='bg-purple-300 col-span-2 flex justify-end items-center'>second item</div>
      </div>
      <div className='grid grid-cols-4 pt-4 justify-end '>
        <div className='w-full col-span-2'></div>
        <div className='bg-purple-300 col-span-2 flex justify-end items-center'>second item</div>
      </div>
    </div>
  )
}

export default About
