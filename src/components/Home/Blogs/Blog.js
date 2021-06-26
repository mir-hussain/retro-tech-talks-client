import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { key } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/getBlog/" + key)
      .then((res) => setBlog(res.data));
  }, [key]);

  return (
    <div>
      <h1>This is single blog </h1>
      <h1>This is single blog</h1>
      <h1>This is single blog</h1>
      <h1>This is single blog</h1>
      <h1>This is single blog</h1>
      <h1>This is single blog</h1>
      <h1>This is single blog {key}</h1>
    </div>
  );
};

export default Blog;
