import React from "react";
import SearchBar from "./SearchBar";
const Section = () => {
  return (
    <>
      <section className='bg-bannerImg bg-no-repeat bg-top bg-cover'>
        <div className='w-full h-screen flex items-end bg-myOverlay'>
          <div className='container mx-auto absolute left-0 top-1/2 px-20'>
            <h1 className='text-black text-4xl font-poppins font-bold'>
              Once you learn to read, you will be forever free.
            </h1>
            <br />
            <h2 className='text-3xl italic font-poppins'>
              — Frederick Douglass
            </h2>
            <SearchBar />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
