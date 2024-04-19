import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col items-center"> 
                
                <h1 className='font-poppins font-bold text-white mb-2'>Hi, Welcome! 👋</h1>

                <div className="my-2 w-full text-center">
                    <button className="bg-gold text-white bg-opacity-20 w-56 px-4 py-2 rounded-lg font-Inter font-semibold">Create New Account</button> 
                </div>

                <div className="w-full text-center">
                    <button onClick={() => navigateTo('/login')} className="bg-gold text-textLightBlack px-4 py-2 w-56 rounded-lg font-Inter font-semibold">Log In</button>
                </div>

            </div>
        </div>
    );
}

export default Home;
