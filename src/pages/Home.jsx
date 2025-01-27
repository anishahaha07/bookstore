import React from "react";
import Nav from "../components/Nav";
import Section from "../components/Section";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <main>
      <Nav />
      <div className='bg-amber-200 w-full h-screen'>
        <Section />
      </div>
      <Outlet />
    </main>
  );
};

export default Home;
