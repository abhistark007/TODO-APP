import React from 'react'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Link } from 'react-router-dom';

function SearchBar({ text, textController, setTextController, todoList }) {
    return (
        <div className='w-full h-14 border-2 border-purple-600 flex items-center bg-white pl-3 rounded-full'>
            <input placeholder={text} className='outline-none flex-[0.95]' onChange={(e) => setTextController(e.target.value)} value={textController} />
            
                <Link to={`/search/${textController}`} className='flex flex-[0.05] bg-black text-white h-full rounded-r-full justify-center items-center'>
                <button >
                    <SearchSharpIcon />
                </button>
                </Link>
            
        </div>
    )
}

export default SearchBar