import React from "react";
import cover_img from "../../assets/img_not_found.jpg";
import Book from "./Book";
import { useGlobalContext } from "../../context";
import Loading from "../Loading";
const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();
  const bookswithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : cover_img,
    };
  });
  console.log(bookswithCovers);
  if (loading) return <Loading />;
  return (
    <section className='booklist'>
      <div className='container mx-auto px-4'>
        <div className='section-title text-center mb-8'>
          <h2 className='text-2xl font-bold my-7'>{resultTitle}</h2>
        </div>
        <div className='my-32 justify-center'>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6'>
            {bookswithCovers.slice(0, 30).map((item, index) => {
              return <Book key={index} {...item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookList;
