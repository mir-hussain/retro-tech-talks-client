import axios from "axios";
import React, { useImperativeHandle, useRef } from "react";

const AddAdmin = () => {
  const adminRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const adminEmail = {
      email: adminRef.current.value,
    };

    axios
      .post("http://localhost:5000/addAdmin", adminEmail)
      .then((res) => {
        console.log(res);
        alert("E-mail Added");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>This is admin</h1>
      <form className='admin' onSubmit={handleSubmit}>
        <input
          type='text'
          name='admin'
          id='admin'
          ref={adminRef}
        />
        <input type='submit' value='Add' />
      </form>
    </div>
  );
};

export default AddAdmin;
