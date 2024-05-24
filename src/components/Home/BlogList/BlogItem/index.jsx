import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';

const BlogItem = ({
  blog: {
    id,
    title,
    category,
    description,
    createdAt,
    authorName,
    authorAvatar,
    cover,

  },
})=> {
  return(
    <Link className='blogItem-link' to={`/blog/${id}`}> 
    <div className='blogItem-wrap'>
      {/* <h1>blog item</h1>       */}
      <img className='blogItem-cover' src={cover} alt='cover' />
      <Chip label={category} />
      <h3>{title}</h3>
      {/* <p className='blogItem-desc'>{description}</p> */}
      <footer>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        {/* <Link className='blogItem-link' to={`/blog/${id}`}> ➝ </Link> */}
      </footer>  
    </div>
    </Link>
);
};


export default BlogItem;
