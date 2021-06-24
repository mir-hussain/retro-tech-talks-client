import React from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Topics = () => {
  return (
    <div className='topics'>
      <div className='topics__header'>
        <h1> Recommended Topics </h1>
      </div>
      <div className='topics__items'>
        <div>
          <FontAwesomeIcon
            className='topics__icon'
            icon={faCircle}
          />
          <p>Computer</p>
        </div>
        <div>
          <FontAwesomeIcon
            className='topics__icon'
            icon={faCircle}
          />
          <p>Mobile</p>
        </div>
        <div>
          <FontAwesomeIcon
            className='topics__icon'
            icon={faCircle}
          />
          <p>Television</p>
        </div>
        <div>
          <FontAwesomeIcon
            className='topics__icon'
            icon={faCircle}
          />
          <p>cars</p>
        </div>
        <div>
          <FontAwesomeIcon
            className='topics__icon'
            icon={faCircle}
          />
          <p>Home Gadget</p>
        </div>
        <div>
          <FontAwesomeIcon
            className='topics__icon'
            icon={faCircle}
          />
          <p>Camera</p>
        </div>
      </div>
    </div>
  );
};

export default Topics;
