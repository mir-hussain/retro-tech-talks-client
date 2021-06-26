import axios from "axios";
import React, { useRef } from "react";
import add from "../../images/add.png";

const AddAdmin = () => {
  const adminRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const adminEmail = {
      email: adminRef.current.value,
    };

    axios
      .post(
        "https://retro-tech-talks.herokuapp.com/addAdmin",
        adminEmail
      )
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
          <div className='admin__input'>
            <label htmlFor='admin'>Email</label>

            <input
              type='text'
              name='admin'
              id='admin'
              ref={adminRef}
            />
          </div>
          <div className='image-button-container'>
            <button type='submit' className='button-img'>
              <img src={add} alt='' />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddAdmin;
