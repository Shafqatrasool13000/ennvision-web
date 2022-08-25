import React, { useEffect } from "react";
import "./App.css";
import scroll_up from './assets/icons/ic_scroll_to_top .svg';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from './Screens/Home/Index';
import 'react-alice-carousel/lib/alice-carousel.css';
import FindHome from "./Screens/FindHome/Index";

function App() {

  const clearCacheData = () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
  };

  useEffect(() => {
    clearCacheData();
  }, [])

  return (
    <>
      <ToastContainer />
      <span className='arrow-box'>
      <img src={scroll_up} alt="scroll-up" />
      </span>
      <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/find-home" element={<FindHome />} />
      <Route path="*" element={<h3>Page not Found</h3>} />
      </Routes>
    </>
  );
}

export default App;
