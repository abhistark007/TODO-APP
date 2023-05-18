import React from 'react'
import {Avatar} from '@mui/material'
import profilepic from '../assets/profilepic.jpg'

function Navbar() {
  return (
    <div className='flex px-10 h-32 bg-pink-400 rounded-bl-3xl rounded-br-3xl shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] justify-between items-center'>
        <p className='font-roboto-condensed text-3xl'>TODO APP V1 💜</p>
        <Avatar
        src={profilepic}
        className='animate-bounce'
        />
    </div>
  )
}

export default Navbar