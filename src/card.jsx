import React from 'react';
import { AiOutlineHeart, AiOutlineInfoCircle } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi'

function Card({ post }) {
  return (
    <div className='my-4 p-1 shadow-lg'>
        <div className='flex items-center mb-2'>
            <img 
                src={post.userImg} 
                alt={post.username} 
                className='w-12 h-12 rounded-full'
            />
            <p className='font-semibold ml-3'>{post.fullname}</p>
        </div>
        <div>
            <img src={post.postImg} className='w-full h-[286px]' />
        </div>
        <div className='flex items-center justify-between px-4'>
            <div className='flex items-center py-4'>
                <AiOutlineHeart className='text-2xl text-gray-500 mr-3 mt-1 cursor-pointer'/>
                <FaRegComment className='text-xl text-gray-500 mr-3 cursor-pointer'/>
                <FiShare className='text-xl text-gray-500 cursor-pointer'/>
            </div>
            <div>
                <AiOutlineInfoCircle className='text-xl text-gray-500 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Card