import React from 'react';
import './Blog.css';
import Blog1 from '../../assets/Blog1.png';
import Blog2 from '../../assets/Blog2.png';
import Blog3 from '../../assets/Blog3.png';
import Blog4 from '../../assets/Blog4.png';
import BlogCard from '../../common/blogCard/BlogCard';


const Blog = () => {
  return (
    <div className='blog_container'>
        <h1>Recent Blogs</h1>
        <div className='first_blog'>
            <div className="blog_left_div">
                <p>BEST PRACTICES</p>
                <h2>In design active temper be uneasy.
                    Thirty for remove plenty regard.
                </h2>
                <h5>Read more →</h5>
            </div>
            <div className="blog_right_div">
                <img src={Blog1} alt="blog_picture" />
            </div>
        </div>
        <div className='other_blogs'>
            <BlogCard 
            description='Partiality on or continuing particular principles as. '
            blogImg = {Blog2}
            />
            <BlogCard 
            description='Village did removed enjoyed explain'
            blogImg = {Blog3}
            />
            <BlogCard 
            description='Wise busy past both park when an ye no. Nay likely her length.'
            blogImg = {Blog4}
            />
        </div>
        
    </div>
  )
}

export default Blog