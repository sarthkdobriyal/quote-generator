import React, { useEffect, useState } from 'react'
import Quote from '../components/Quote'
import axios from 'axios'



const Home = () => {

    const [quote , setQuote] = useState({});

    const fetchQuote = async () => {
        const res = await axios.get('https://api.quotable.io/random')
        setQuote(res.data);
        
    }

    useEffect(() => {
        fetchQuote();
    },[])


    console.log(quote)
  return (
    <div className="mt-10 " >
      <Quote
        content={quote.content}
        author={quote.author}
      />

      <button className='bg-green-600 px-10 py-3 rounded-3xl mt-10 text-white hover:bg-green-800' onClick={fetchQuote}>
        Next Quote
      </button>
    </div>
  )
}

export default Home