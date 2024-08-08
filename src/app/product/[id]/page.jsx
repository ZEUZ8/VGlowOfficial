'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const params = useParams()
  const {id} = params;
  console.log(id,' the id on thie consle')
  return (
    <div>
      the page in teh
    </div>
  )
}

export default page
