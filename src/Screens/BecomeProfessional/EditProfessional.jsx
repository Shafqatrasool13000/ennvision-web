import React from 'react';
import profileImg from '../../assets/Property Details/Owner.png';
import soldPropertyIcon from '../../assets/icons/ic_professional_post.svg';
import availabeBuildingIcon from '../../assets/icons/ic_property_detail_sold.svg';
import { ProfileBoxStyled } from './style';
import { Col, Row } from 'react-bootstrap';
import { BlackDot, TertiraryHeading,UnderlineBlue } from '../../Components/GlobalStyle';


const ProfileBox = () => {
    return (
        <ProfileBoxStyled>
        <TertiraryHeading className='ms-3'>Denzel Washington</TertiraryHeading>
        <div className='ms-3'>
        <UnderlineBlue />
         <BlackDot/> 
        </div>
            <div className="owner-details">
                <Row>
                    <Col md={6} lg={8}>
                        <div className="d-flex">
                            <img src={profileImg} alt="profile" className="profile-img" />
                            <div className="bio ms-3">
                                <h6>
                                   Denzel Washington</h6>
                                <p className="branch mt-2 mb-2">Denzel Capital Properties LLC</p>
                                <p className="location mb-0">Calgary, Alberta, Canada</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className='mt-3 mt-md-0'>
                        <div className="sold-properties">
                            <Row>
                                <Col md={6} className='mt-md-0 p-0'>
                                    <div className="properties d-flex align-items-center justify-content-center justify-content-md-start p-2">
                                        <span>
                                            <img className='mb-1' src={availabeBuildingIcon} alt="building" />
                                        </span>
                                        <p className="quantity ms-2 mb-0">22</p>
                                    <div className="d-flex justify-content-center">
                                    <p className="title text-center text-md-start ms-2 mb-0">Available</p>
                                    </div>
                                    </div>
                                    <div className="properties d-flex align-items-center justify-content-center justify-content-md-start p-2">
                                        <span>
                                            <img className='mb-1' src={availabeBuildingIcon} alt="building" />
                                        </span>
                                        <p className="quantity ms-2 mb-0">22</p>
                                    <div className="d-flex justify-content-center">
                                    <p className="title text-center text-md-start ms-2 mb-0">Available</p>
                                    </div>
                                    </div>
                                       
                                </Col>
                                <Col md={6} className='p-0'>
                                  
                                    <div className="properties d-flex align-items-center justify-content-center justify-content-md-start p-2">
                                        <span>
                                            <img className='mb-1' src={soldPropertyIcon} alt="" />
                                        </span>
                                        <p className="quantity ms-2 mb-0">47</p>
                                        <p className="title text-center text-md-start ms-2 mb-0">Sold</p>
                                    </div>
                                    <div className="properties d-flex align-items-center justify-content-center justify-content-md-start p-2">
                                        <span>
                                            <img className='mb-1' src={soldPropertyIcon} alt="" />
                                        </span>
                                        <p className="quantity ms-2 mb-0">47</p>
                                        <p className="title text-center text-md-start ms-2 mb-0">Sold</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </ProfileBoxStyled>
    )
}

export default ProfileBox