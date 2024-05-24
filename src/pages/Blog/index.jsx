/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import articleImage from '../../assets/Image.png'
import adSpace from '../../assets/o-ads-space.png'
import BlogList from '../../components/Home/BlogList';
import SearchBar from '../../components/Home/SearchBar';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);


  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    // <div><h1>blog</h1></div>
    <>
      {/* <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link> */}
      <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchBar}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
          />
      
      {blog ? (
        
        <div className='blog-wrap'>

          <header>
            
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div >
                  <Chip key={i} label={category} />
                </div>
              ))}
            </div>
            <h1>{blog.title}</h1>
            {/* <p className='blog-date'>Published {blog.createdAt}</p> */}
            <footer>
        <div className='blogItem-author'>
          <img src={blog.authorAvatar} alt='avatar' />
          <div>
            <h6>{blog.authorName}</h6>
            <p>{blog.createdAt}</p>
          </div>
        </div>
        {/* <Link className='blogItem-link' to={`/blog/${id}`}> ➝ </Link> */}
      </footer>  
            
          </header>
          <img class= "blog-img" src={blog.cover} alt='cover' />
          {/* <div className='blog-desc'>{blog.description}</div> */}
          <div className='blog-desc' dangerouslySetInnerHTML={{ __html: blog.description }}></div>

          <p className='blog-quote'>{blog.quote}</p>
          <img src={articleImage} alt="articleImage" className="blog-img" />
      <img src={adSpace} alt="adSpace" className="blog-ad" />
      <div className='blog-desc' dangerouslySetInnerHTML={{ __html: blog.htmlContent }}></div>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;











/* eslint-disable */

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
// import { blogList } from '../../config/data';
// import Chip from '../../components/common/Chip';
// import EmptyList from '../../components/common/EmptyList';
// import './styles.css';

// const Blog = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     let blog = blogList.find((blog) => blog.id === parseInt(id));
//     if (blog) {
//       setBlog(blog);
//     }
//   }, []);

//   return (
//     // <div><h1>blog</h1></div>
//     <>
//       <Link className='blog-goBack' to='/'>
//         <span> &#8592;</span> <span>Go Back</span>
//       </Link>
//       {blog ? (
//         <div className='blog-wrap'>
//           <header>
//             <p className='blog-date'>Published {blog.createdAt}</p>
//             <h1>{blog.title}</h1>
//             <div className='blog-subCategory'>
//               {blog.subCategory.map((category, i) => (
//                 <div >
//                   <Chip key={i} label={category} />
//                 </div>
//               ))}
//             </div>
//           </header>
//           <img src={blog.cover} alt='cover' />
//           <p className='blog-desc'>{blog.description}</p>
//         </div>
//       ) : (
//         <EmptyList />
//       )}
//     </>
//   );
// };

// export default Blog;
