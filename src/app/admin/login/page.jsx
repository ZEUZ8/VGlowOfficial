import React from 'react'

const pages = () => {
  const sinan = 'sinan'
  let i = 0;i<10;i++;{
    console.log('sinan in the console',sinan)
  }
  return (
    <div className='flex justify-center items-center '>
      <div className='flex justify-start items-start border rounded-md bg-purple-50 '> 
        <p className='text-2xl font-sans font-bold px-4 pb-[2rem] pt-4 underline underline-offset-4'>admin in the login page</p>
      </div>
    </div>
  )
}

export default pages
