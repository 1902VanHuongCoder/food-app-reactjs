import React, { useState } from 'react'
import { useGlobalContext } from "../context";
const Search = () => {
    const { setSearchTerm, fetchRandomMeal} = useGlobalContext();
    const [text, setText] = useState('');
    const handleSubmit = (event) => {
      event.preventDefault();
        setText('');
        setSearchTerm(text);
    }
  return (
    <div className='px-5 py-2 flex justify-center items-center gap-3 bg-[#f2f2f2]'>
        <input className="border border-solid border-[#d9d9d9] rounded-sm pl-2 py-1 outline-0" type='text' placeholder='Search your meal...' value={text} onChange={(e) => setText(e.target.value)}/>
        <button className="bg-[#ee4d2d] px-3 py-1 rounded-sm text-white font-[400] hover:opacity-50" type='submit' onClick={handleSubmit}>Search</button>
        <button className="bg-white px-3 py-1 rounded-sm text-[#ee4d2d] font-[400] hover:opacity-50 border border-solid border-[#ee4d2d]" type='submit' onClick={() => {fetchRandomMeal()}}>Suprise Me</button>
    </div>
  )
}

export default Search