// eslint-disable
/* eslint-disable */
import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';


// import Home from './pages/Home';
// import { Redirect, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default App;


// const App = () => {
//   return (
//     // <div className='container'>
//       <Router>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/blog/:id' element={<Blog />} />
//         </Routes>
//       </Router>
//     // </div>
//   );
// };