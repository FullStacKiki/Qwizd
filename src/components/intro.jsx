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
    <div className='mt-10 bg-slate-100 p-4 pt-20 pb-20'>
        <h1 className='mt-4 font-bold text-center  text-4xl pr-4 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-800'>Why Choose Qwizd?</h1>
        <p className='pr-4 text-gray-800 text-center'>With Qwizd, students can quickly design personalized flashcards and quizzes that suit their learning style. Our intuitive interface ensures that studying is not only effective but also enjoyable.</p>
    
        <div className='bg-white block rounded-2xl p-8 mt-10 shadow-2xl'>
            
            <div className='flex justify-center align-middle items-center'>
                <h1 className=' font-bold text-center  text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-800'>Flexibility</h1>
            </div>
            <p className='mt-4 pr-4 text-gray-800 text-left text-sm'>Our mobile compatibility guarantees that you can learn conveniently while on the go, allowing you to access valuable educational resources and complete your studies anytime and anywhere.</p>
        </div>
        <div className='bg-white block rounded-2xl p-8 mt-10 shadow-2xl'>
            
            <div className='flex justify-center align-middle items-center'>
                <h1 className=' font-bold text-center  text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-800'>Celebrate, Share, Inspire</h1>
            </div>
            <p className='mt-4 pr-4  text-gray-800 text-left text-sm'>Share your flashcards and quizzes on social media to inspire others in their learning journeys. Spreading knowledge fosters collaboration and enriches the educational experience for all.</p>
        </div>
        <div className='bg-white block rounded-2xl p-8 mt-10 shadow-2xl'>
            
            <div className='flex justify-center align-middle items-center'>
                <h1 className=' font-bold text-center  text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-800'>Easy To Use</h1>
            </div>
            <p className='mt-4 pr-4 text-gray-800 text-left text-sm'>Start your learning journey with a few clicks, unlocking a world of knowledge and opportunities. Explore new subjects, gain diverse perspectives, and grow both personally and professionally for a brighter future.</p>
        </div>
    </div>

    </>
  )
}

export default Intro