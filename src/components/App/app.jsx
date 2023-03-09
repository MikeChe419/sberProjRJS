import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import api from '../../utils/api';
import cn from "classnames";
import Footer from '../Footer/footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import PostList from '../../pages/PostList/post-list';
import Auth from '../../pages/Authorization/Authorization';


function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Routes>
          <Route
          element={
            <Main />
            }
            exact
            path="/"
          />
          <Route exact path='/postlist' element={<PostList/>}></Route>
          <Route exact path='/authorization' element={<Auth/>}></Route>
          <Route exact path ='/postCard'></Route>
        </Routes>
      </div>
      <Footer />
      
    </>
  )
}

export default App;
