import React from "react";
import { Link } from "react-router-dom";
const Book = ({
  id,
  cover_img,
  title,
  author,
  edition_count,
  first_publish_year,
}) => {
  return (
    <>
      <Link to={`/books/${id}`} className='block'>
        <div className='book-item bg-slate-100 p-4 rounded shadow-sm hover:bg-slate-200 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out'>
          <div className='book-item-img'>
            <img
              src={cover_img}
              alt='cover'
              className='w-full h-auto object-cover'
            />
          </div>
          <div className='book-item-info text-center my-3'>
            <div className='book-item-info-item title text-xl italic font-semibold my-1'>
              <span>{title}</span>
            </div>

            <div className='book-item-info-item author'>
              <span className='capitalize font-semibold'>Author:</span>
              <span>{author?.join(",")}</span>
            </div>

            <div className='book-item-info-item edition-count'>
              <span className='capitalize font-semibold'>Total Editions:</span>
              <span>{edition_count}</span>
            </div>

            <div className='book-item-info-item publish-year'>
              <span className='capitalize font-semibold'>
                First Publish Year:
              </span>
              <span>{first_publish_year}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Book;
