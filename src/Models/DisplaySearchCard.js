import React from 'react'

function DisplaySearchCard({title,body}) {
  return (
    <div  className='flex flex-col gap-3 w-96 p-3 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
        <p className='font-bold'>{title}</p>
        <p>{body}</p>
    </div>
  )
}

export default DisplaySearchCard