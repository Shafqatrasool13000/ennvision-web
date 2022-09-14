import { Checkbox } from 'antd';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import CustomButton from '../../Components/CustomButton/Index';
import FormControl from '../../Components/FormControl';
import { PrimaryColor } from '../../Components/GlobalStyle';
import deleteImg from '../../assets/icons/ic_delete_time.svg';
import { AddMoreOptionsStyled } from './style';
const AddMoreOptions = () => {
    return (
        <AddMoreOptionsStyled>
            <div className="location-section">
                <h5 className="heading mt-3">
                    Locations
                </h5>
                <div className="location-section-box p-2">

                    <FormControl
                        control="largeInput"
                        type="text"
                        name="email"
                        placeholder="Enter Email Address"
                    // className={
                    // formik.errors.email && formik.touched.email
                    // ? "is-invalid"
                    // : "customInput"
                    // }
                    />
                    <div className='location-section-map'></div>
                </div>
            </div>
            <div className="characteristics-section">
                <h5 className="heading mt-3">
                    Characteristics
                </h5>
                <div className='mt-3'>
                    <FormControl
                        control="largeSelect"
                        name="achol"
                        label='Alchol'
                        placeholder="Doesn't serve alcohol"
                        className='customInput'
                        //   className={
                        //     formik.errors.email && formik.touched.email
                        //       ? "is-invalid"
                        //       : "customInput"
                        //   }
                        options={[{ key: 'city 1', value: 'city1' }, { key: 'city 2', value: 'city2' }]}
                    />
                </div>
            </div>
            <div className="who-serve mt-4">
                <h5 className="heading">Who your serve</h5>
                <div className="serve-events d-flex align-items-center">
                    <Checkbox>Delivery</Checkbox>
                    <Checkbox>Pickup</Checkbox>
                    <Checkbox>Back for Event</Checkbox>
                    <Checkbox>Din Inn</Checkbox>
                    <Checkbox>NighLife</Checkbox>
                </div>
            </div>
            <div className="menu-service mt-4">
                <h5 className="heading">Menu services</h5>
                <div className="serve-events d-flex align-items-center">
                    <Checkbox>Breakfast</Checkbox>
                    <Checkbox>Lunch</Checkbox>
                    <Checkbox>Dinner</Checkbox>
                    <Checkbox>Cafe</Checkbox>
                    <Checkbox>NighLife</Checkbox>
                </div>
            </div>
            <div className='mt-3'>
                <FormControl
                    control="largeSelect"
                    name="achol"
                    label='Seating'
                    placeholder="Doesn't serve alcohol"
                    className='customInput'
                    //   className={
                    //     formik.errors.email && formik.touched.email
                    //       ? "is-invalid"
                    //       : "customInput"
                    //   }
                    options={[{ key: 'city 1', value: 'city1' }, { key: 'city 2', value: 'city2' }]}
                />
            </div>
            <div className="payment-method mt-4">
                <h5 className="heading">Payment Method</h5>
                <div className="serve-events d-flex align-items-center flex-wrap">
                    <Checkbox>Paypal</Checkbox>
                    <Checkbox>Credit Card</Checkbox>
                    <Checkbox>Dinner</Checkbox>
                    <Checkbox>Xp Wallet</Checkbox>
                    <Checkbox>Cash on Delivery</Checkbox>
                </div>
            </div>
            <div className="cuisines mt-3">
                <FormControl
                    control="largeSelect"
                    name="achol"
                    label='Seating'
                    placeholder="Doesn't serve alcohol"
                    className='customInput'
                    //   className={
                    //     formik.errors.email && formik.touched.email
                    //       ? "is-invalid"
                    //       : "customInput"
                    //   }
                    options={[{ key: 'city 1', value: 'city1' }, { key: 'city 2', value: 'city2' }]}
                />
            </div>
            <h5 className="heading mt-3">Timings</h5>
            <div className="timing">
                <div className="timing-days mt-3">
                    <Checkbox className='fs-5'>Monday</Checkbox>
                    <Checkbox className='fs-5'>Tuesday</Checkbox>
                    <Checkbox className='fs-5'>Wenesday</Checkbox>
                    <Checkbox className='fs-5'>Thursday</Checkbox>
                    <Checkbox className='fs-5'>Friday</Checkbox>
                    <Checkbox className='fs-5'>Saturday</Checkbox>
                    <Checkbox className='fs-5'>Saunday</Checkbox>
                </div>
                <div className="timing-crud mt-3">
                    <Row>
                        <Col md={4} className=" align-items-center">
                            <FormControl
                                control="largeSelect"
                                name="achol"
                                label='Seating'
                                placeholder="12:00AM"
                                className='customInput'
                                //   className={
                                //     formik.errors.email && formik.touched.email
                                //       ? "is-invalid"
                                //       : "customInput"
                                //   }
                                options={[{ key: 'city 1', value: 'city1' }, { key: 'city 2', value: 'city2' }]}
                            />
                        </Col><Col md={4} className="">
                            <FormControl
                                control="largeSelect"
                                name="achol"
                                label='Seating'
                                placeholder="12:00PM"
                                className='customInput'
                                //   className={
                                //     formik.errors.email && formik.touched.email
                                //       ? "is-invalid"
                                //       : "customInput"
                                //   }
                                options={[{ key: 'city 1', value: 'city1' }, { key: 'city 2', value: 'city2' }]}
                            />
                        </Col>
                        <Col md={4} className='add-time-btn' >
                            <CustomButton
                                bgcolor={PrimaryColor}
                                color='white'
                                padding="14 8"
                                width="100%"
                                type="submit"
                                title="ADD TIME"
                                fontSize='20'
                            />

                        </Col>
                    </Row>
                </div>
                <div className="timing-details-list">
                    {
                        ['monday','tuesday','wenesday','thursday'].map((title,index)=>(
                            <div key={index} className=' timing-details-list-single-day align-items-center'>
                            <p className="name fw-bold fs-6 text-captilize">{title}</p>
                            <p className="time">12:00AM</p>
                            <p className="time">09:00PM</p>
                            <p className="mark-close">Mark day as read</p>
                                <img src={deleteImg} alt="delee" className='ms-2'/>
                            {/* <p className="start-time"></p>
                    <p className="day-name"></p> */}
                        </div>
                        ))
                    }
                </div>
            </div>

        </AddMoreOptionsStyled>
    )
}

export default AddMoreOptions