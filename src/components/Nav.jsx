import React from "react";
let Links = [
  { name: "HOME", link: "/" },
  { name: "ABOUT", link: "/" },
  { name: "BLOGS", link: "/" },
  { name: "MORE", link: "/" },
];
const Nav = () => {
  return (
    <>
      <div className='shadow-md w-full fixed'>
        <div className='md:flex items-center justify-between bg-white md:px-10 px-7 py-4 '>
          <div className='cursor-pointer flex items-center font-bold text-2xl text-gray-800 font-indie'>
            <span className='text-amber-950 text-3xl'>
              {" "}
              <ion-icon name='rocket-outline'></ion-icon>
            </span>
            Reader's Nest
          </div>
          <ul className='md:flex md:items-center '>
            {Links.map((Link) => (
              <li key={Link.name} className='md:ml-8 text-xl'>
                <a
                  href={Link.link}
                  className='text-gray-800 hover:text-gray-400 duration-500'
                >
                  {Link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
