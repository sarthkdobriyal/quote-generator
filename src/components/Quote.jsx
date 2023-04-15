import React from 'react'

const Quote = ({content, author}) => {
  return (
    <div className='relative w-[60%] mx-auto p-10 md:p-16 bg-[#d05252] rounded-2xl text-center text-white flex flex-col space-y-10'>
        <div className="text-sm md:text-xl font-medium">{content}</div>
        <div className="text-sm md:text-lg font-bold">- {author}</div>
        <div className="bookmarkIcon absolute text-sm bottom-5 right-3 md:bottom-8 md:right-10">bookmark</div>
    </div>
  )
}

export default Quote