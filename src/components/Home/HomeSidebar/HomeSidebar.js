import React from "react";
import Follow from "./Follow";
import Topics from "./Topics";

const HomeSidebar = () => {
  return (
    <section className='sidebar-section'>
      <div className='sidebar'>
        <Topics />
        <div className='divider'>
          <span>×××</span>
        </div>
        <Follow />
      </div>
    </section>
  );
};

export default HomeSidebar;
