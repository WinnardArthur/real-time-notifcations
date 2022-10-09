import React from 'react'
import { IoIosNotifications } from 'react-icons/io'
import { BsEnvelopeFill } from 'react-icons/bs'
import { AiFillSetting } from 'react-icons/ai'

function Navbar() {
  return (
    <div className='bg-blue-700 py-2 flex justify-around items-center'>
        <span className='text-white text-2xl font-bold'>Winnard App</span>
        <div className='flex'>
            <div className='ml-4 text-white relative'>
                <IoIosNotifications className='text-xl'/>
                <div className='bg-red-400 w-4 h-4 flex justify-center item-center rounded-full text-xs font-semibold absolute top-[-5px] right-[-5px]'>2</div>
            </div>
            <div className='ml-4 text-white relative'>
                <BsEnvelopeFill className='text-xl'/>
                <div className='bg-red-400 w-4 h-4 flex justify-center item-center rounded-full text-xs font-semibold absolute top-[-5px] right-[-5px]'>2</div>
            </div>
            <div className='ml-4 text-white relative'>
                <AiFillSetting className='text-xl'/>
                <div className='bg-red-400 w-4 h-4 flex justify-center item-center rounded-full text-xs font-semibold absolute top-[-5px] right-[-5px]'>2</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar