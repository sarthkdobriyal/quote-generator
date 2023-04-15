import React from 'react'

const Quote = ({content, author}) => {
  return (
    <div className='w-[60%] mx-auto p-16 bg-[#d05252] rounded-2xl text-center text-white flex flex-col space-y-10'>
        <div className="text-xl font-medium">{content}</div>
        <div className="text-lg font-bold">- {author}</div>
    </div>
  )
}

export default Quote