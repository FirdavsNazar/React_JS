import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { navbar } from '../utils/navbar';

// import Home from '../components/Home';
// import About from '../components/About';
// import Projects from '../components/Projects';
// import Contacts from '../components/Contacts';


const Root = () => {

  const token = JSON.parse(localStorage.getItem('token'))
  return (
    <Router>
      <div>
        <Navbar />

        <Routes element={<Navbar/>}>

        {
        navbar.map((item) => {
          return <Route path={item.path} element={item.element} />
        })
      }
          {/* <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={
           token?
          <Projects />
          :<Navigate  to={'/contacts'}/>
        }  />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<h1>404 Not Found</h1>} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default Root;


//react-router-dom5 => //react-router-dom6