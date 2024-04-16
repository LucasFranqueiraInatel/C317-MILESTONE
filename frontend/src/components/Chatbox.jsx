import React from 'react'
import user_img from '../assets/user_img.png'

const Chatbox = () => {
    return (
        <div className="flex justify-between">
            <div className='justify-start bg-red-300'>adada</div>
            <img className="justify-end h-11 w-11 object-cover rounded-full" src={user_img} alt="Current profile photo" />
        </div>
    )
}

export default Chatbox
