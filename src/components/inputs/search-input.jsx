import React from 'react'

const SearchInput = () => {
  return (
    <div className='w-[300px] border-2 border-gray-400 rounded-md '>
      <input
      className='w-full px-2 py-2 outline-none'
      type={'text'}
      placeholder='Search..'
      />
      
    </div>
  )
}

export default SearchInput
