import React from 'react'
import { Badge } from "../components/ui/badge"

const Intro = () => {
  return (
    <>
    <div className='mt-10 text-left pl-4'>
        <Badge className="p-2 rounded-2xl text-indigo-700 bg-indigo-200 font-semibold w-fit align-left content-left">Reinventing the way you study</Badge>
        <h1 className='mt-4 font-bold text-left  text-4xl pr-4 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-800'>Unlock Your Learning Potential with Qwizd</h1>
        <p className=' pr-4 text-gray-800 text-left'>Qwizd transforms studying into an engaging experience with customizable flashcards and quizzes. Join a community of learners and make your study sessions interactive and fun!</p>
    </div>
    <button className='ml-4 mt-4 p-4 w-84 text-left bg-white border-2 border-indigo-600 text-bold rounded-lg '>
    See Features
    </button>

    </>
  )
}

export default Intro