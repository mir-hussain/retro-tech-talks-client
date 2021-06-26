import React, { useState, useRef } from "react";
import axios from "axios";

const AddBlog = () => {
  const [imageURL, setImageURL] = useState(null);

  const titleRef = useRef();
  const blogRef = useRef();
  const adminRef = useRef();
  const imageRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const blogData = {
      title: titleRef.current.value,
      blog: blogRef.current.value,
      admin: adminRef.current.value,
      imageName: imageRef.current.value,
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
    const imageData = new FormData();
    imageData.set(
      "key",
      "a7974116ef15487481060769cb1123e6"
    );
    imageData.append("image", image);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        const imageLink = response.data.data.display_url;
        setImageURL(imageLink);
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
            <input
              id='title'
              name='title'
              ref={titleRef}
              required
            />
          </div>
          <div className='blog-form__input'>
            <label htmlFor='description'>Blog Body</label>
            <textarea
              name='blog'
              id='blog'
              ref={blogRef}
              required
            />
          </div>
          <div className='blog-form__input'>
            <label htmlFor='admin'>Admin name</label>
            <input
              id='admin'
              name='admin'
              ref={adminRef}
              required
            />
          </div>
          <div className='blog-form__input'>
            <label htmlFor='image-name'>Image Title</label>
            <input
              id='image-name'
              name='image-name'
              ref={imageRef}
              required
            />
          </div>
          <div className='blog-form__input add-image'>
            <label htmlFor='image'>Add image</label>
            <input
              id='image'
              name='image'
              type='file'
              onChange={handleImageUpload}
              required
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
