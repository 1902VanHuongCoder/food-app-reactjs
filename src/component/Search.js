import React, { useState } from 'react'
import { useGlobalContext } from "../context";
const Search = () => {
    const { setSearchTerm} = useGlobalContext();
    const [text, setText] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchTerm(text);
        setText('');
    }
  return (
    <div>
        <input type='text' placeholder='Search your meal...' onChange={(e) => setText(e.target.value)}/>
        <button type='submit' onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default Search