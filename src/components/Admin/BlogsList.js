import React, { useEffect, useState } from "react";
import axios from "axios";
const BlogsList = () => {
  const [blogs, setBlogs] = useState([]);
  const [deleted, setDeleted] = useState(false);
  console.log(deleted);

  if (deleted) {
    window.location.reload();
    setDeleted(false);
  }

  const deleteBlog = (id) => {
    axios
      .delete(
        "https://retro-tech-talks.herokuapp.com/deleteBlog/" +
          id
      )
      .then((res) => setDeleted(res.data));
  };

  useEffect(() => {
    axios
      .get("https://retro-tech-talks.herokuapp.com/blogs")
      .then((res) => setBlogs(res.data));
  }, []);

  return (
    <section className='blog-list-section'>
      {blogs.map((blog) => (
        <Row
          key={blog._id}
          blog={blog}
          deleteBlog={deleteBlog}
        />
      ))}
    </section>
  );
};

const Row = ({ blog, deleteBlog }) => {
  const { _id, title } = blog;
  return (
    <div className='row'>
      <h1>{title}</h1>
      <button
        className='button-s'
        onClick={() => deleteBlog(_id)}
      >
        Delete
      </button>
    </div>
  );
};

export default BlogsList;
