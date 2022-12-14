import React, { useEffect } from "react";
import "./App.css";
import scroll_up from './assets/icons/ic_scroll_to_top .svg';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from './Screens/Home/Index';
import 'react-alice-carousel/lib/alice-carousel.css';
import FindHome from "./Screens/FindHome/Index";
import PropertyDetails from "./Screens/PropertyDetails/Index";
import FindProfessionals from './Screens/FindProfessionals/Index';
import ListAProperty from './Screens/ListAProperty/Index';
import Resources from './Screens/Resources/Index';


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
      <Route path="/property-details/:id" element={<PropertyDetails />} /> <Route path="/find-professionals" element={<FindProfessionals />} />
      <Route path="/list-properties" element={<ListAProperty />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="*" element={<h3>Page not Found</h3>} />
      </Routes>
    </>
  );
}

export default App;
