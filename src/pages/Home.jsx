import React, { useEffect, useState } from 'react'
import Quote from '../components/Quote'
import axios from 'axios'



const Home = () => {

    const [quote , setQuote] = useState({});
    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState("")

    const fetchQuote = async () => {
            const res = await axios.get(`https://api.quotable.io/random?tags=${tag}`)
            setQuote(res.data);
        
    }

    const fetchTags = async () => {
        const res = await axios.get('https://api.quotable.io/tags');
        setTags(res.data);
    }

    useEffect(() => {
        fetchTags();
        fetchQuote();
    },[])


  return (
    <div className="py-10 flex flex-col space-y-5 px-10 items-center" >
      <Quote
        id={quote._id}
        content={quote.content}
        author={quote.author}
      />
        <select name="tags" className='py-1 px-7 rounded-lg text-lg outline-none' value={tag} onChange={(e) => setTag(e.target.value)} >
            <option value=""></option>
            {
                tags?.map((tag) => {
                    return (
                        <option 
                            key={tag._id}
                            value={tag.slug}
                        >
                            {tag.name}    
                         </option>
                    )
                })
            }
        </select>


      <button className='bg-green-600 px-10 py-3 rounded-3xl mt-10 text-white hover:bg-green-800 outline-none border-none' onClick={fetchQuote}>
        Next Quote
      </button>
    </div>
  )
}

export default Home