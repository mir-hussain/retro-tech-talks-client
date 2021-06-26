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
    <section className='add-blog-section'>
      <div className='add-blog'>
        <h1 className='add-blog__header'>Add Blog</h1>
        <form className='blog-form' onSubmit={handleSubmit}>
          <div className='blog-form__input'>
            <label htmlFor='name'>Blog Title</label>
            <input id='title' name='title' ref={titleRef} />
          </div>
          <div className='blog-form__input'>
            <label htmlFor='description'>Blog Body</label>
            <textarea name='blog' id='blog' ref={blogRef} />
          </div>
          <div className='blog-form__input'>
            <label htmlFor='key'>Blog Key</label>
            <input id='key' name='key' ref={keyRef} />
          </div>
          <div className='blog-form__input'>
            <label htmlFor='price'>Admin name</label>
            <input id='admin' name='admin' ref={adminRef} />
          </div>
          <div className='blog-form__input add-image'>
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
              value='Post'
              disabled
            />
          ) : (
            <input
              className='primary-btn'
              type='submit'
              value='Post'
            />
          )}
        </form>
      </div>
    </section>
  );
};

export default AddBlog;
