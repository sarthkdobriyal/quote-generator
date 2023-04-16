
import { useDispatch, useSelector } from 'react-redux'
import { add, selectBookmarks } from '../slices/bookmarkSlice'
import Quote from '../components/Quote';
import { useEffect } from 'react';
import axios from 'axios';


const Bookmarks = () => {

  const dispatch = useDispatch();
  const quotes = useSelector(selectBookmarks);
  
  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem('bookmarksId'));
    console.log(localStorageItems);
        
            localStorageItems.map(async (item) => {
              
                const res = await axios.get(`https://api.quotable.io/quotes/${item}`)
                console.log(res.data)
                const quoteToBookmark = {
                  id: res.data._id,
                  content: res.data.content,
                  author: res.data.author,
                };
                
                  dispatch(add(quoteToBookmark))
                
              
            })

  }, [])

  return (
    <div className=" text-center h-screen bg-gradient-to-tr from-purple-900 to-purple-300" >
      <div className='h-screen overflow-y-scroll '>
      {
        quotes?.map((quote) => (
          <Quote
          key={quote.id}
          id={quote.id}
            content={quote.content}
            author={quote.author}
            fromBookmarks={true}
          />
        ))
      }
      </div>
    </div>
  )
}

export default Bookmarks