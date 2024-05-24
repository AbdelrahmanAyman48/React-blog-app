/*eslint-disable*/
import React from 'react';
import BlogItem from './BlogItem';
import './styles.css';

const BlogList = ({ blogs }) => {
  // Check the type of blogs to debug
  console.log('Type of blogs:', typeof blogs);
  console.log(blogs);

  // Ensure blogs is an array before mapping over it
  if (!Array.isArray(blogs)) {
    // Handle the case where blogs is not an array
    return <p>No blogs to display</p>;
  }
  return (
    <div className='blogList-wrap'>
      
      {blogs.map((blog) => (
        <BlogItem blog={blog}/>
      ))}
    </div>
  );
};

export default BlogList;


      {/* {blogs.map((blog) => (
        <BlogItem blog={blog}/>
      ))} */}

{/* {blogs.length > 0 ? (
      blogs.map(blog => <BlogItem key={blog.id} blog={blog} />)
    ) : (
      <p>No blogs to display</p>
    )} */}
    {/* {Array.isArray(blogs) ? (
  blogs.map(blog => <BlogItem key={blog.id} blog={blog} />)
) : (
  <p>No blogs to display</p>
)} */}