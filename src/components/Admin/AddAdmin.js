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
    <section className='add-admin-section'>
      <div className='admin'>
        <h1 className='admin__header'>Add admin</h1>
        <form
          className='admin__form'
          onSubmit={handleSubmit}
        >
          <label htmlFor='admin'>Email</label>
          <input
            type='text'
            name='admin'
            id='admin'
            ref={adminRef}
          />
          <button type='submit'> Add </button>
        </form>
      </div>
    </section>
  );
};

export default AddAdmin;
