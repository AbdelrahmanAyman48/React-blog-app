import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../../assets/Union.png";
import './search-styles.css';
import './header-styles.css';


const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (


  <header className='home-header'>
    {/* <h2>Inc. This Morning</h2> */}
    {/* <h1>
      <span>“</span> Blog <span>”</span>
    </h1> */}
        <Link
        to="/"
        rel="Home"
        className="header__logo flex items-center gap-4 lg:gap-[70px]"
      >
        <img src={logo} alt="Blog logo" />
        <h1 className="text-blog font-bold text-2xl ">Blog</h1>
      </Link>
      <Link to="/" rel="Home" className=" text-home">
        Home
      </Link>
  <div className='searchBar-wrap'>
    <form onSubmit={formSubmit}>
      <input
        type='text'
        // placeholder='Search By Category'
        placeholder='Search '
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button>Go</button>
    </form>
  </div>

  </header>
);

export default SearchBar;
