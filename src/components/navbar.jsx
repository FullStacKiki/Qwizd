import React from 'react'
import logo from './sticks.png'

const navbar = () => {
  return (
    <div className='lg:hidden shadow-sm  flex items-center sticky backdrop-blur-lg m-2 opacity-90 rounded-xl p-2'>
        <logo/>

    <h1 className='text-2xl p-2 text-yellow-800 font-bold'>Blossom</h1>
    </div>
  )
}

export default navbar
