import React from 'react';
import './blogCard.css';

const BlogCard = ({blogImg, description}) => {
  return (
    <div className='blog_card_container'>
        <div className="blog_top_div">
            <p>BEST PRACTICES</p>
            <h2>{description}</h2>
        </div>
        <div className="blog_bottom_div">
            <img src={blogImg} alt="blogImage" />
        </div>
    </div>
  )
}

export default BlogCard