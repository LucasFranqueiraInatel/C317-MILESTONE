import React from 'react';
import PlusIcon from './PlusIcon'
import { useNavigate } from 'react-router-dom';

const NewChat = () => {
  
  const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

  return (
    <div>
      <button onClick={() => navigateTo('/chat')} className='w-60 rounded-[40px] h-14 pl-7 bg-black border border-grayStroke flex justify-start items-center cursor-pointer'>
            <PlusIcon className=''/>
            <span className='font-poppins font-regular select-none'>New Chat</span>
      </button>
    </div>
  );
};

export default NewChat;