import React from "react";
import { IoReload } from "react-icons/io5";
const Loading = () => {
  return (
    <>
      <div className='icon flex-auto justify-items-center mb-8'>
        <IoReload className='text-8xl text-amber-900 animate-spin' />
      </div>
    </>
  );
};

export default Loading;
