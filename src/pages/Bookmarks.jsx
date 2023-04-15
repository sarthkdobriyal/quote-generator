import React from 'react'
import { useSelector } from 'react-redux'
import { selectBookmarks } from '../slices/bookmarkSlice'
import Quote from '../components/Quote';

const Bookmarks = () => {

  const quotes = useSelector(selectBookmarks);


  console.log(quotes);
  return (
    <div className=" text-center h-screen bg-gradient-to-tr from-purple-900 to-purple-300" >
      <div className='h-screen overflow-y-scroll '>
      {
        quotes?.map((quote) => (
          <Quote
            content={quote.content}
            author={quote.author}
          />
        ))
      }
      </div>
    </div>
  )
}

export default Bookmarks