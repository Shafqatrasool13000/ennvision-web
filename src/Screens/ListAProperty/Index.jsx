import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../Components/Navbar/AuthNavbar';
import SocialFooter from '../../Components/SocialFooter/SocialFooter';

const Index = () => {
  return (
    <>
     <Helmet>
    <title>List Property</title>
    </Helmet>
    <Navbar/>
    <SocialFooter/>
    <h4 className='mt-5'>List Properties</h4>
    </>
  )
}

export default Index