import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Sql from '../assets/sql.png';
import Tailwind from '../assets/tailwind.png';
import Php from '../assets/php.png';
import Java from '../assets/Java.png';

const SKills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300' >
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600  '>Skills</p>
                <p className='py-4'>// These are the technologies I've have worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16 hover:scale-110 duration-500]'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16 hover:scale-110 duration-500]'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16 hover:scale-110 duration-500]'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16 hover:scale-110 duration-500]'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                    <p className='my-4'>React JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16 hover:scale-110 duration-500]'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16 hover:scale-110 duration-500]'>
                    <img className='w-20 mx-auto' src={Php} alt="HTML icon" />
                    <p className='my-4'>PHP</p>
                </div>
                <div className='shadow-md shadow-[#040c16 hover:scale-110 duration-500]'>
                    <img className='w-20 mx-auto' src={Java} alt="HTML icon" />
                    <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16 hover:scale-110 duration-500]'>
                    <img className='w-20 mx-auto' src={Sql} alt="HTML icon" />
                    <p className='my-4'>SQL</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SKills