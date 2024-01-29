import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

function MainLayout(props) {
  return (
    <div>
          <Header/>
          <Main/>
          <Footer/>
    </div>
  );
}

export default MainLayout;    