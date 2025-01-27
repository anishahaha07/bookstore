import React, { useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
const SearchBar = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter a Value");
    } else {
      setSearchTerm(searchText.current.value);
    }
    navigate("/book");
  };

  return (
    <>
      <form className='w-3/5 my-6 relative' onSubmit={handleSubmit}>
        <div className='relative'>
          <input
            type='search'
            placeholder='the lost world...'
            ref={searchText}
            className='rounded-full w-full p-3 cursor-pointer border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-slate-400 italic'
          />
          <button
            className='absolute right-1 top-1/2 -translate-y-1/2 p-4 rounded-full bg-orange-300'
            onClick={handleSubmit}
          >
            <AiOutlineSearch />
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
