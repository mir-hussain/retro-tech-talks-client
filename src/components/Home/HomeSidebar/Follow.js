import React from "react";
import Emanuel from "../../../images/Emanuel-Sparks.jpg";
import Steve from "../../../images/Steve-Thornton.jpg";
import Tommy from "../../../images/Tommy-Benson.jpg";

const Follow = () => {
  return (
    <div className='follow'>
      <div className='follow__header'>
        <h1>Who to follow</h1>
      </div>
      <div className='follow__people'>
        <div className='people'>
          <div className='people__image'>
            <div>
              <img src={Emanuel} alt='' />
            </div>
          </div>
          <div className='people__info'>
            <h1>Emanuel Sparks</h1>
            <p>
              Passionate about coding and cybersecurity.
            </p>
          </div>
          <button className='button-p'>Follow</button>
        </div>

        <div className='people'>
          <div className='people__image'>
            <div>
              <img src={Steve} alt='' />
            </div>
          </div>
          <div className='people__info'>
            <h1> Steve Thornton </h1>
            <p>
              Learning and sharing things about UI design.
            </p>
          </div>
          <button className='button-p'>Follow</button>
        </div>

        <div className='people'>
          <div className='people__image'>
            <div>
              <img src={Tommy} alt='' />
            </div>
          </div>
          <div className='people__info'>
            <h1>Tommy Benson</h1>
            <p>
              I am a UX designer, I write to help upcoming
              UX design
            </p>
          </div>
          <button className='button-p'>Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Follow;
