import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Checkbox, Form, InputNumber } from "antd";
import { RegisterStyledContainer } from "./style";
import FormControl from "../../Components/FormControl";
import CustomButton from "../../Components/CustomButton/Index";
import { PrimaryColor, secondaryDark3, tertiaryGrey5 } from "../../Components/GlobalStyle";
import { useNavigate } from "react-router-dom";
import GenericService from "../../Services/GenericService";
import { API_URL } from "../../Services/config";
import { toast } from "react-toastify";
import { Col, Container, Row } from "react-bootstrap";
import ic_logo from '../../assets/icons/ic_logo.svg';
import AddMoreOptions from "./AddMoreOptions";
import flag from '../../assets/icons/ic_flag.svg';
const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required!")
    .email("Valid email address is required"),
  password: Yup.string()
    .required("Invalid credentials. Please try again!")
    .min(6, "Minimum six character is required"),
});

const Index = ({ logIn }) => {
  const [showMore, setShowMore] = useState(false);
  const navigation = useNavigate();
  const genericService = new GenericService();

  const onSubmit = (value) => {
    console.log(value, "value");
    genericService
      .post(`${API_URL}auth/signin`, value)
      .then((msg) => {
        if (msg.resultCode == 200) {
          logIn();
          localStorage.setItem("userData", JSON.stringify(msg.data));
          navigation("/my-home");
        } else {
          toast(msg.message, "top-right");
        }
      })
      .catch((error) => {
        console.log(error, "error");
        if (error.response.status == 401) {
          toast("login credentials is invalid", "top-right");
        }
      });
  };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <Container fluid className="p-0 overflow-hidden">
      <RegisterStyledContainer>
        <Row>
          <Col md={5}>
            <div className="left-side-img" />
          </Col>
          <Col md={7}>
            <div className="right-section">
              <div className="right-section-inner-container">
                <div className="text-center img-logo">
                  <img src={ic_logo} alt="logo" />
                </div>
                <h4 className="main-heading">
                  <span className="d-block">
                    Want To Be A Ennvisions
                  </span>
                  <span>
                    Merchant? (CANADA)
                  </span>
                </h4>
                <p className="mini-heading">Leave your restaurant details here and we will be in touch shortly.</p>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {(formik) => {
                    return (
                      <Form
                        name="basic"
                        onFinish={formik.handleSubmit}
                        autoComplete="off"
                        validateMessages={validationSchema}
                      >
                        <Row>
                          <Col md={12}>
                            <FormControl
                              control="largeInput"
                              type="text"
                              name="location"
                              placeholder="Location Name"
                              className={
                                formik.errors.email && formik.touched.email
                                  ? "is-invalid"
                                  : "customInput"
                              }
                            />
                          </Col>
                          <Col md={6} className="login-input-fields-field">
                            <FormControl
                              control="largeInput"
                              type="text"
                              name="first-name"
                              placeholder="First Name"
                              className={
                                formik.errors.password && formik.touched.password
                                  ? "is-invalid"
                                  : "customInput"
                              }
                            />
                          </Col>
                          <Col md={6} className="login-input-fields-field">
                            <FormControl
                              control="largeInput"
                              type="text"
                              name="last- name"
                              placeholder="Last Name"
                              className={
                                formik.errors.password && formik.touched.password
                                  ? "is-invalid"
                                  : "customInput"
                              }
                            />
                          </Col>
                          <Col md={6} >
                          <InputNumber addonBefore={<div style={{width:'40px',height:"20px"}} className="d-flex align-items-center">
                            <img src={flag} alt="flag" className="me-2"/>
                            <h6 className="m-0 fw-bold">+1</h6>
                          </div>} className="phone-input py-2 w-100" controls={false}  />
                          </Col>
                          <Col md={6} >
                          <InputNumber addonBefore={<div style={{width:'40px'}} className="d-flex align-items-center">
                            <img src={flag} alt="flag" className="me-2"/>
                            <h6 className="m-0 fw-bold">+1</h6>
                          </div>} className="phone-input py-2 w-100" controls={false}  />
                          </Col>

                          <Col md={12} className='mt-2'>
                            <FormControl
                              control="largeInput"
                              type="text"
                              name="email"
                              placeholder="Official Email"
                              className={
                                formik.errors.email && formik.touched.email
                                  ? "is-invalid"
                                  : "customInput"
                              }
                            />
                          </Col>
                          <Col md={6} className='mt-2'>
                            <FormControl
                              control="largeSelect"
                              type="text"
                              name="state"
                              label='State'
                              placeholder="Enter State"
                              className={
                                formik.errors.email && formik.touched.email
                                  ? "is-invalid"
                                  : "customInput"
                              }
                              options={[{id:"0",name:'Washington'},{id:"1",name:'Calfornia'}]}
                            />
                          </Col>
                          <Col md={6} className='mt-2'>
                            <FormControl
                              control="largeSelect"
                              type="text"
                              name="city"
                              label='City'
                              placeholder="Enter City"
                              className={
                                formik.errors.email && formik.touched.email
                                  ? "is-invalid"
                                  : "customInput"
                              }
                              options={[{id:"0",name:'City 1'},{id:"1",name:'City 2'},]}
                            />
                          </Col>
                          <Col md={12} className='mt-3'>
                            <FormControl
                              control="largeInput"
                              type="text"
                              name="address"
                              placeholder="Address"
                              className={
                                formik.errors.email && formik.touched.email
                                  ? "is-invalid"
                                  : "customInput"
                              }
                            />
                          </Col>
                          <Col md={12}>
                            <FormControl
                              control="largeInput"
                              type="text"
                              name="social-page"
                              placeholder="Facebook Page / Company Website"
                              className={
                                formik.errors.email && formik.touched.email
                                  ? "is-invalid"
                                  : "customInput"
                              }
                            />
                          </Col>
                          <Row className="mt-3 ownership">
                            <h5 className="ownership-heading">Are you the owner or manager of this place? *</h5>
                            <Col md={6} className='mt-2'>
                              <Checkbox className="ownership-checkbox" onChange={onChange}>I'm not the owner/manager</Checkbox>
                            </Col>
                            <Col md={6} className='mt-2'>
                              <Checkbox onChange={onChange}>I'm the owner/manager</Checkbox>
                            </Col>
                          </Row>
                          <Col md={12} className='mt-3'>
                            <FormControl
                              control="multilargeSelect"
                              type="text"
                              name="business-catagory"
                              placeholder="largeSelect Contact"
                              defaultValue={['a10', 'c12']}
                              label="Business Category"
                              className={
                                formik.errors.contacts && formik.touched.contacts
                                  ? "is-invalid"
                                  : "customInput"
                              }
                            // options={contactsData?.data.result}
                            />
                          </Col>
                          <Col md={12} className='mt-2'>
                            <FormControl
                              control="largeSelect"
                              name="sole"
                              label='Business Type'
                              placeholder="Sole Proprietorship"
                              className={
                                formik.errors.email && formik.touched.email
                                  ? "is-invalid"
                                  : "customInput"
                              }
                              options={[{ id: '0', name: 'yes' }, { id: '1', name: 'No' }]}
                            />
                          </Col>
                          <Col md={12} className='mt-2'>
                            <FormControl
                              control="largeInput"
                              type="text"
                              name="company-name"
                              placeholder="Company Name (SSM)"
                              className={
                                formik.errors.email && formik.touched.email
                                  ? "is-invalid"
                                  : "customInput"
                              }
                            />
                          </Col>
                          <Col md={12} className='mt-2'>
                            <FormControl
                              control="largeInput"
                              type="number"
                              name="company-register-number"
                              placeholder="Company Registration Number (SSM)"
                              className={
                                formik.errors.email && formik.touched.email
                                  ? "is-invalid"
                                  : "customInput"
                              }
                            />
                          </Col>
                          <Col md={6} className='mt-2'>
                            <FormControl
                              control="largeSelect"
                              name="sole"
                              label='Business Type'
                              placeholder="Sole Proprietorship"
                              className={
                                formik.errors.email && formik.touched.email
                                  ? "is-invalid"
                                  : "customInput"
                              }
                              options={[{ id: '0', name: 'yes' }, { id: '1', name: 'No' }]}
                            />
                          </Col>
                          <Col md={6} className='mt-2'>
                            <FormControl
                              control="largeSelect"
                              name="house-delivery"
                              label='House delivery services?'
                              placeholder="yes"
                              className={
                                formik.errors.email && formik.touched.email
                                  ? "is-invalid"
                                  : "customInput"
                              }
                              options={[{ id: '0', name: 'yes' }, { id: '1', name: 'No' }]}
                            />
                          </Col>
                          <Col md={12} className='mt-2'>
                            <FormControl
                              control="largeSelect"
                              name="sole"
                              label='Opening status'
                              placeholder="This place is already open"
                              className={
                                formik.errors.email && formik.touched.email
                                  ? "is-invalid"
                                  : "customInput"
                              }
                              options={[{ id: '0', name: 'Urgent' }, { id: '1', name: 'Late' }]}
                            />
                          </Col>

                          <div className="mt-2">
                            <CustomButton
                              bgcolor={tertiaryGrey5}
                              color={secondaryDark3}
                              padding="15 8"
                              width="100%"
                              type="submit"
                              title="+Add more info"
                              fontSize='18'
                              clicked={() => setShowMore(!showMore)}
                            />
                          </div>
                          <div className={`${showMore ? 'd-block' : 'd-none'}`}>
                            <AddMoreOptions />
                          </div>
                          <div className="mt-4">
                            <CustomButton
                              bgcolor={PrimaryColor}
                              color='white'
                              padding="15 8"
                              width="100%"
                              type="submit"
                              title="SUBMIT"
                              fontSize='24'
                            />
                          </div>
                          <p className="terms text-center mt-3">I agree that you can collect, use and disclose the information provided by me in accordance with your <span style={{ color: `${PrimaryColor}` }}>Privacy Policy</span> which I have read and understand</p>
                        </Row>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </Col>
        </Row>
      </RegisterStyledContainer>
    </Container>
  );
};

export default Index;
