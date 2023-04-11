import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const Card = ({ review }) => {
    return (
        <div className='flex flex-col md:relative'>

            <div className='absolute top-[-7rem] z-[10] mx-auto'>
                <img src={review.image}
                    className=' aspect-square rounded-full w-[140px] h-[140px] z-[25]'
                />
                <div className='absolute bg-violet-500 rounded-full w-[140px] h-[140px] z-[-10] left-[10px] top-[-6px]'></div>
            </div>

            <div className='text-center mt-7'>
                <p className='font-bold text-2xl capitalize tracking-wider'>{review.name}</p>
                <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
            </div>

            <div className=' text-violet-600 mx-auto mt-2'>
                <FaQuoteLeft />
            </div>
            <div className='text-center mt-4 text-slate-500'>
                {review.text}
            </div>
            <div className='text-violet-600 mx-auto mt-2'>
                <FaQuoteRight />
            </div>
        </div>
    )
}

export default Card
