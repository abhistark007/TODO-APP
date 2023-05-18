import React from 'react'

function TodoForm({titleController,setTitleController,bodyController,setBodyController}) {
    return (
        <div className='flex flex-col gap-5'>
            <div className="flex items-center gap-3">
                <div className="w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Title
                    </label>
                </div>
                <div className="w-2/3">
                    <input 
                    placeholder='Enter Title'
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none  focus:border-purple-600" 
                    value={titleController} onChange={(e)=>setTitleController(e.target.value)} />
                </div>
            </div>

            <div className="flex items-center  gap-3">
                <div className="w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Tasks
                    </label>
                </div>
                <div className="w-2/3">
                    <input 
                    placeholder='Enter the task/body'
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none  focus:border-purple-600" 
                    value={bodyController} onChange={(e)=>setBodyController(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default TodoForm