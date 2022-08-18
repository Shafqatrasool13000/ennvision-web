import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from './Screens/Home/Index';

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
      <Routes>
        <Route path="/" element={<Home  />} />
      <Route path="*" element={<h3>Page not Found</h3>} />
      </Routes>
    </>
  );
}

export default App;
