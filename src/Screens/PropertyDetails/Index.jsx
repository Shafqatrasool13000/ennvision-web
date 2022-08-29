import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SecondaryHeadingMini, TertiraryHeading1 } from '../../Components/GlobalStyle'
import { PropertyDetailsStyled } from './style';
import propertPic1 from '../../assets/Property Details/Property Details (3).png';
import propertPic2 from '../../assets/Property Details/Property Details (1).png';
import propertPic3 from '../../assets/Property Details/Property Details (2).png';
import Navbar from '../../Components/Navbar/Index';
import SocialFooter from '../../Components/SocialFooter/SocialFooter';
import bedroomIcon from '../../assets/icons/ic_property_bed.svg';
import bathIcon from '../../assets/icons/ic_property_bath.svg';
import areaIcon from '../../assets/icons/ic_property_area.svg';
import qualityIcon from '../../assets/icons/ic_property_detail_repair.svg';
import statusIcon from '../../assets/icons/ic_property_detail_features.svg';
import profileImg from '../../assets/Property Details/Owner.png';
import soldPropertyIcon from '../../assets/icons/ic_professional_post.svg';
import availabeBuildingIcon from '../../assets/icons/ic_property_detail_sold.svg';

const propertyDetailsData = [
    {
        name: 'Bedrooms', img: bedroomIcon, quantity: '4'
    },{
        name: 'Bathrooms', img: bathIcon, quantity: '2'
    }, {
        name: 'Square Area', img: areaIcon, quantity: '8x10 m²'
    }, {
        name: 'Repair Quality', img: qualityIcon, quantity: 'Modern Loft'
    }, {
        name: 'Status', img: statusIcon, quantity: 'Available'
    },
]

const Index = () => {
    return (
        <>
            <Navbar />
            <PropertyDetailsStyled>
                <Container>
                    <div className="d-flex justify-content-between">
                        <SecondaryHeadingMini>Sensational And Brilliant Bungalow In Calgary!</SecondaryHeadingMini>
                        <h5>For Sale</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <TertiraryHeading1>83 Woodford Crescent Southwest, Calgary, Alberta, Canada</TertiraryHeading1>
                        <h4>$746,000.00</h4>
                    </div>
                    <div className="imgs-gallery">
                        <Row>
                            <Col md={8}>
                                <img src={propertPic1} alt="peroperty-pic" className='img-large' />
                            </Col>
                            <Col md={4}>
                                <img src={propertPic2} alt="property2" />
                                <img src={propertPic3} alt="property3" />
                            </Col>
                        </Row>
                    </div>
                    <div className="property-details">
                        {
                            propertyDetailsData.map(({ name, img, quantity }, index) => (
                                <div key={index} className="property-details-box">
                                    <div className="property-details-box-inner">
                                        <p className='name mb-0'>{name}</p>
                                        <div className="d-flex mt-1 align-items-center">
                                            <img src={img} alt="bedroom" />
                                            <p className="quantity mb-0 ms-2">{quantity}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="owner-details">
                     <p className="listed-by">Listed by Property owner</p>
                     <Row>
                        <Col md={8}>
                            <div className="d-flex">
                                <img src={profileImg} alt="profile" className="profile-img" />
                                <div className="bio ms-3">
                                    <h6>Denzel Washington</h6>
                                     <p className="branch mt-3">Denzel Capital Properties LLC</p>
                                    <p className="location">Calgary, Alberta, Canada</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="sold-properties">
                                <Row>
                                    <Col md={6}>
                                    <p className="title">Sold Properties    </p>
                                        <div className="properties d-flex">
                                           <span>
                                            <img src={soldPropertyIcon} alt="" />
                                            </span> 
                                            <p className="quantity ms-2">47</p>
                                        </div>
                                        
                                        <button className='chat-btn w-100'> <span><img src="" alt="" /></span> Start Chat</button>
                                        
                                       
                                    </Col>
                                    <Col md={6}>
                                        <p className="title">Available Properties</p>
                                        <div className="properties d-flex">
                                        <span>
                                            <img src={availabeBuildingIcon} alt="building" />
                                            </span> 
                                            <p className="quantity ms-2">22</p>
                                        </div>
                                        <button className='call-btn w-100'><span><img src="" alt="" /></span> Call Now</button>
                                        
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                     </Row>
                    </div>
                    {/* <div className="about-property">
                    <div className="about">
                        <h6 className="title">About this property</h6>
                        <div className="posted-at">
                            <p className="posted">Posted on</p>
                            <p className="date"> - June 29, 2022</p>
                        </div>
                        <p className="area">4500 Sq. Ft. House for Sale in Calgary!</p>
                        <p className="details">A grand 2400 sq. ft. house for sale in E-11/3, Islamabad. It comprises of 10 bedrooms, 12 washrooms, TV lounge, 3 drawing & dining rooms, store room, servant quarters and car parking space. Key lifestyle and convenience around this property includes beautiful parks, commercial area, Restaurants and food outlets, medical care/ hospital, gym, health/sports centre within 1-2 KMs. Margalla Road can be used for daily commute.</p>
                    </div>
                    <div className="key-features">
                        <p className="title">Key features:</p>
                        <div className="details">
                            <div className="d-flex feature">
                                <img src="" alt="" />
                                <p>10 bedrooms </p>
                            </div>
                        </div>
                    </div>   
                     <div className="features">
                        <p className="title">Features</p>
                        <Row>
                            <Col md={4}>

                            </Col><Col md={4}>
                                
                            </Col><Col md={4}>
                                
                            </Col>
                            </Row>
                    </div>
                    <div className="utilities">
                        <p className="title">Features</p>
                        <Row>
                            <Col md={4}>

                            </Col><Col md={4}>
                                
                            </Col><Col md={4}>
                                
                            </Col>
                        </Row>
                    </div>
                    <div className="facing">
                        <p className="title">Facing</p>
                        <Row>
                            <Col md={4}>

                            </Col><Col md={4}>
                                
                            </Col><Col md={4}>
                                
                            </Col>
                        </Row>
                    </div>
                    </div> */}
                    <div className="location-map"></div>
                </Container>
                <SocialFooter />
            </PropertyDetailsStyled>
        </>
    )
}

export default Index