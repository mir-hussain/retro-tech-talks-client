import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/blogs")
      .then((res) => setBlogs(res.data));
  }, []);

  return (
    <div className='blogs'>
      <Link to={`/blog/${blogs?.[0]?._id}`}>
        <h1>{blogs?.[0]?.title}</h1>
      </Link>
    </div>
  );
};

export default Blogs;
