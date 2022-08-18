import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ExplorePropertyStyled } from './style';
import ic_image_2 from '../../assets/Image/ic_image_2.png';
const ExploreProperty = () => {
  return (
    <Container>
    <ExplorePropertyStyled>
        <h4 className="heading">Explore MPAC Property</h4>
        <div className="sub-heading">Browse Listings Curated By Neighborhoods</div>
        <div className="underline"></div>
     <Row className='align-items-center'>
    <Col md={8}>
        <div className="img-section">
            <img src={ic_image_2} alt="property" />
        </div>
    </Col>
    <Col md={4}>
        <h6 className="title">MPAC Autofill property</h6>
        <p className="sub-title">Power your search with our House Up real estate platform, for timely listings and a seamless experience</p> 
        <h6 className="title">Get MPAC Reports</h6>
        <p className="sub-title">
            <span>Power your search with our House Up real estate platform, for timely listings and a seamless experience</span>
            <span className='d-block mt-3'>Power your search with our House Up real estate platform, for timely listings and a seamless experience</span>
        </p>
    </Col>
     </Row>
    </ExplorePropertyStyled>
    </Container>
  )
}

export default ExploreProperty