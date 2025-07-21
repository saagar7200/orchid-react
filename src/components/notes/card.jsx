import React from 'react'
import { AiOutlinePushpin } from "react-icons/ai";
import { CgTrashEmpty } from "react-icons/cg";
import { GoPencil } from "react-icons/go";
const NoteCard = () => {
  return (
    <div className='w-[350px] border border-blue-200 p-4 rounded-md shadow'>
        <div className='flex justify-between '>
            <p className='text-lg font-semibold'>Note Title</p>
            <AiOutlinePushpin size={28} className='text-blue-500'/>
            
        </div>
        <div className='flex'>
           <p className='text-sm text-gray-700'> Description</p>
        </div>

        <div className='flex items-center justify-end gap-4'>
            <GoPencil size={22} className='text-green-400'/>
            <CgTrashEmpty size={22} className='text-red-500'/>
        </div>
      
    </div>
  )
}

export default NoteCard
