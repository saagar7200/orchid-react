import React from 'react'
import Input from '../inputs/input'
import TextArea from '../inputs/text-area'

const NoteForm = () => {
  return (
    <div className='max-w-[400px]'>
        <form className='flex flex-col gap-3'>
            <Input
                label={"Note Title"}
                placeholder={'OOP Assignment'}
                required={true}
                type={'text'}
            />
            <TextArea
             label={"Description"}
                placeholder={'Type here...'}
                required={true}
                type={'text'}
            />
            <button className='bg-blue-500 font-bold text-white rounded-md p-3'>
                Save
            </button>

        </form>
      
    </div>
  )
}

export default NoteForm
