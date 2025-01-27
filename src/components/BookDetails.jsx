import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import cover_img from "../assets/img_not_found.jpg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const URL = "https://openlibrary.org/works/";
const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);
        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;
          const newBook = {
            description: description
              ? description.value || description
              : "No description found",
            title: title,
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : cover_img,
            subject_places: subject_places
              ? subject_places.join(",")
              : "No subject place found",
            subject_times: subject_times
              ? subject_times.join(",")
              : "No subject times found",
            subjects: subjects ? subjects.join(",") : "No subjects found",
          };
          setBook(newBook);
          //console.log(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);
  if (loading) return <Loading />;
  return (
    <>
      <section className='book-details'>
        <div className='container max-w-full min-h-screen flex items-center justify-center mt-20  relative '>
          <div className='flex flex-col w-full sm:w-4/5 lg:w-3/5 p-10 shadow-custom-dark rounded-lg '>
            <button
              className='absolute top-4 left-4 flex items-center space-x-2 text-brown '
              onClick={() => navigate("/book")}
            >
              <FaArrowLeftLong size={22} />
              <span className='text-lg font-bold'>Back</span>
            </button>

            <div className='book-details-content flex flex-col items-center text-center '>
              <div className='book-details-img mb-6'>
                <img
                  src={book?.cover_img}
                  alt='cover img'
                  className='w-full h-auto max-h-[500px] object-contain'
                />
              </div>
              <div className='book-details-info'>
                <div className='book-details-item title my-5'>
                  <span className='text-5xl text-brown font-courgette bold'>
                    {book?.title}
                  </span>
                </div>
              </div>

              <div className='book-details-item description my-5'>
                <span className='text-lg font-serif'>{book?.description}</span>
              </div>

              <div className='book-details-item'>
                <span className='text-lg font-serif font-semibold'>
                  Subject Places:{" "}
                </span>
                <span className='italic'>{book?.subject_places}</span>
              </div>

              <div className='book-details-item'>
                <span className='text-lg font-serif font-semibold'>
                  Subject Times:{" "}
                </span>
                <span className='italic'>{book?.subject_times}</span>
              </div>

              <div className='book-details-item'>
                <span className='text-lg font-serif font-semibold'>
                  Subjects:{" "}
                </span>
                <span className='italic'>
                  {book?.subjects && book.subjects.length > 0
                    ? book.subjects.split(",").slice(0, 5).join(", ") // Take first 5 subjects
                    : "No subjects found"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDetails;
