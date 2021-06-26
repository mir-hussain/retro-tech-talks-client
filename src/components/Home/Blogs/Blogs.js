import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://retro-tech-talks.herokuapp.com/blogs")
      .then((res) => setBlogs(res.data));
    setLoading(false);
  }, []);

  return (
    <div className='blogs'>
      {blogs.map((blogBody) => (
        <Card key={blogBody._id} blogBody={blogBody} />
      ))}
    </div>
  );
};

const Card = ({ blogBody }) => {
  const { _id, title, blog, admin, imageURL } = blogBody;

  const intro = blog.split(" ").slice(0, 50).join(" ");

  return (
    <div className='card'>
      <div className='card__image'>
        <Link to={`/blog/${_id}?name=admin`}>
          <img src={imageURL} alt='' />
        </Link>
      </div>
      <div className='card__details'>
        <h1 className='card__header'>{title}</h1>
        <p className='card__admin'>
          // Posted By {admin} //
        </p>
        <div className='card__divider'></div>
        <p className='card__content'>
          {intro} .....{" "}
          <Link to={`/blog/${_id}?name=admin`}>
            (Read More)
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
