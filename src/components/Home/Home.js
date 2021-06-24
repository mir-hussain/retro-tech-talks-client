import React from "react";
import Blogs from "./Blogs/Blogs";
import HomeSidebar from "./HomeSidebar/HomeSidebar";

const Home = () => {
  return (
    <div className='home'>
      <Blogs />
      <HomeSidebar />
    </div>
  );
};

export default Home;
