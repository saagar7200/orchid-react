import React from 'react'
import Input from '../inputs/input'
import TextArea from '../inputs/text-area'
import { FormProvider, useForm } from 'react-hook-form'

const NoteForm = () => {
    const methods = useForm({
            defaultValues:{
                title:'',
                description:''
            }
    })
  return (
    <div className='max-w-[400px]'>
        <FormProvider {...methods}>
        <form className='flex flex-col gap-3'>
            <Input
                label={"Note Title"}
                placeholder={'OOP Assignment'}
                required={true}
                type={'text'}
                name={'title'}
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
        </FormProvider>
      
    </div>
  )
}

export default NoteForm
