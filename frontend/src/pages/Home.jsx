import React from 'react';

const Home = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col items-center"> 
                
                <h1 className='font-poppins font-bold text-white mb-2'>Hi, Welcome! 👋</h1>

                <div className="my-2 w-full text-center"> {/* Container de botão com margem vertical e texto centralizado */}
                    <button className="bg-[#DCC07C] text-white bg-opacity-20 w-56 px-4 py-2 rounded-lg font-Inter font-semibold">Create New Account</button> {/* Padding adicionado para melhor visualização */}
                </div>

                <div className="w-full text-center">
                    <button className="bg-[#DCC07C] text-[#222222] px-4 py-2 w-56 rounded-lg font-Inter font-semibold">Log In</button> {/* Padding adicionado */}
                </div>

            </div>
        </div>
    );
}

export default Home;
