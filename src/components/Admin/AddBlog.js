import React, { useState, useRef } from "react";
import axios from "axios";

const AddBlog = () => {
  const [imageURL, setImageURL] = useState(null);
  console.log(imageURL);

  const titleRef = useRef();
  const blogRef = useRef();
  const adminRef = useRef();
  const imageRef = useRef();
  const keyRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const blogData = {
      key: keyRef.current.value,
      title: titleRef.current.value,
      blog: blogRef.current.value,
      admin: adminRef.current.value,
      imageURL: imageURL,
    };
    axios
      .post("http://localhost:5000/addBlog", blogData)
      .then((res) => {
        console.log(res);
        alert("Blog post Added");
      })
      .catch((err) => console.log(err));
  };

  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    console.log(image);
    const imageData = new FormData();
    imageData.set(
      "key",
      "a7974116ef15487481060769cb1123e6"
    );
    imageData.append("image", image);
    console.log(imageData);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        const imageLink = response.data.data.display_url;
        setImageURL(imageLink);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className='add-service-section'>
      <form
        className='add-service-form'
        onSubmit={handleSubmit}
      >
        <h1 className='form-header'>Add service here </h1>
        <div className='input-field'>
          <label htmlFor='name'>Blog Title</label>
          <input id='title' name='title' ref={titleRef} />
        </div>
        <div className='input-field'>
          <label htmlFor='description'>Blog Body</label>
          <textarea name='blog' id='blog' ref={blogRef} />
        </div>
        <div className='input-field'>
          <label htmlFor='key'>Blog Key</label>
          <input id='key' name='key' ref={keyRef} />
        </div>
        <div className='input-field'>
          <label htmlFor='price'>Admin name</label>
          <input id='admin' name='admin' ref={adminRef} />
        </div>
        <div className='input-field add-image'>
          <label htmlFor='image'>Add image</label>
          <input
            id='image'
            name='image'
            type='file'
            onChange={handleImageUpload}
            ref={imageRef}
          />
        </div>
        {imageURL === null ? (
          <input
            className='primary-btn'
            type='submit'
            value='Save'
            disabled
          />
        ) : (
          <input
            className='primary-btn'
            type='submit'
            value='Save'
          />
        )}
      </form>
    </div>
  );
};

export default AddBlog;
