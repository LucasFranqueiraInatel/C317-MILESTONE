import React, { useState } from 'react';

const Chat_page = () => {
  const [mensage, setMensage] = useState('');
  
  const handleChange = (e) => {
    setMensage(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setMensage('');
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="my-2 w-full text-center">
          <input 
            type="text" 
            value={mensage} 
            onChange={handleChange} 
            className="border border-gray-300 rounded-lg px-4 py-2 w-96" 
            placeholder="Write a Mensage..." 
          />
          <button 
            onClick={handleSubmit} 
            className="bg-gold text-white bg-opacity-20 w-14 px-2 py-2 rounded-lg font-Inter font-semibold mt-2"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat_page;