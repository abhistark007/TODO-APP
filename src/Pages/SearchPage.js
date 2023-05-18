import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import './SearchPage.css';
import DisplaySearchCard from '../Models/DisplaySearchCard';

function SearchPage({ todoList }) {

    const { title } = useParams();
    const [loading,setLoading]=useState(false);
    const [ansList,setAnsList]=useState([]);

    useEffect(()=>{
        setLoading(true);
        let tempList=[];
        todoList.forEach(element => {
            if(element.title===title){
                tempList.push(element);
            }
        });

        setAnsList(tempList);
        console.log(ansList);
        setLoading(false);
    },[])

    return (
        <div className='flex flex-col mx-10'>
            {
                (loading?(<div className='flex justify-center mt-10'>
                    <div className="custom-loader"></div>
                </div>):
                (ansList.length===0?(<div className='flex justify-center mt-10 text-3xl gap-3'>No item found with title  <span className='text-blue-600 '>{title}</span></div>):
                (<div className='flex flex-col mx-10 my-20 items-center'>
                    {
                        ansList.map((item,index)=>{
                            return (<DisplaySearchCard 
                                key={index}
                                title={item.title}
                                body={item.body}
                               

                            />)
                        })
                    }
                </div>))
            )}
        </div>
    )
}

export default SearchPage