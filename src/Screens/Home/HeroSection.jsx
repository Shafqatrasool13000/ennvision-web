import React, { useState } from 'react'
import { HeroSectionStyled } from './style';
import Navbar from '../../Components/Navbar/Index';
import { Col, Container, Row } from 'react-bootstrap';
import search_icon from '../../assets/icons/ic_search.svg';
import ic_instagram from '../../assets/icons/ic_instagram.svg';
import ic_linkedin from '../../assets/icons/ic_linkedin.svg';
import ic_twitter from '../../assets/icons/ic_twitter.svg';
import ic_facebook from '../../assets/icons/ic_facebook.svg';
const HeroSection = () => {

    const [apartment, setApartment] = useState('Rent');
    const apartmentHandler=()=>{
        setApartment(apartment==='Rent'?'Buy':'Rent');
    }
    return (
        <>
        <Container>
        <Navbar/>
        </Container>
        <HeroSectionStyled>
            <div className="inner-container d-flex align-items-center flex-column justify-content-center">
                <h4 className="inner-container-main-heading">
                    <span> Own the way you sell your home</span>
                    <span className='d-block'> Only with <span className='house-up'>
                    HouseUp </span> </span>
                </h4>
            <div className="purchase-btns d-flex justify-content-between gap-3  w-100">
                 <button className={`purchase-btns-rent w-50 ${apartment==='Rent'?"active":""}`} onClick={apartmentHandler}>RENT</button>
                 <button className={`purchase-btns-buy w-50 ${apartment==='Rent'?"":"active"}`} onClick={apartmentHandler}>BUY</button>
                </div>
            <Row className="location-select-section d-flex justify-content-between w-100 p-3 align-items-center">
                <Col md={6} className="location">
                <h5 className='title'>Location</h5>
                <h6 className='sub-title'>City, Area, etc</h6>
                </Col>
                <Col md={6} className="property-type d-flex justify-content-between">
                <div className="left-section ps-4">
                <h5 className='title'>Property Type</h5>
                <h6 className='sub-title'>All Residentials</h6>
                    </div>
                    <div className="search-box">
                        <img src={search_icon} alt="search" />
                    </div>
                </Col>
            </Row>
            <div className="hero-footer p-4 w-100">
                <Container>
                <span className='icon'>
                    <img src={ic_facebook} alt="icon" />
                </span>
                <span className='icon'> <img src={ic_instagram} alt="icon" /></span>
                <span className='icon'> <img src={ic_linkedin} alt="icon" /></span>
                <span className='icon'> <img src={ic_twitter} alt="icon" /></span>
                </Container>
            </div>
            </div>
        </HeroSectionStyled>
        </>
    )
}

export default HeroSection