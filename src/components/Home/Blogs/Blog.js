import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
const Blog = () => {
  const { key } = useParams();
  const [blogPost, setBlogPost] = useState({});
  const { title, imageURL, blog, admin, imageName } =
    blogPost;

  useEffect(() => {
    axios
      .get(
        "https://retro-tech-talks.herokuapp.com/getBlog/" +
          key
      )
      .then((res) => setBlogPost(res.data));
  }, [key]);

  return (
    <section className='blog-section'>
      <div className='top-bar'></div>
      <div className='go-back'>
        <Link to='/'>❬❬❬❬ Home ❬❬❬❬</Link>
      </div>
      <div className='blog'>
        <div className='blog__image'>
          <img src={imageURL} alt='' />
          <p className='image__title'>{imageName}</p>
          <div className='line'></div>
        </div>
        <div className='blog__body'>
          <h1 className='body__header'>{title}</h1>
          <p className='body__admin'>
            // Posted by {admin}//
          </p>
          <p className='body__content'>{blog}</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
