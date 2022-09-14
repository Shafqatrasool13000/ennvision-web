import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {Form } from "antd";
import { LoginStyledContainer } from "./style";
import FormControl from "../../Components/FormControl";
import CustomButton from "../../Components/CustomButton/Index";
import { lightGrey2, PrimaryColor} from "../../Components/GlobalStyle";
import {useNavigate } from "react-router-dom";
import GenericService from "../../Services/GenericService";
import { API_URL } from "../../Services/config";
import { toast } from "react-toastify";
import { Col, Container, Row } from "react-bootstrap";
import ic_logo from '../../assets/icons/ic_logo.svg';
import googleImg from '../../assets/icons/ic_gmail.svg';
import SocialFooter from '../../Components/SocialFooter/SocialFooter';

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
const navigate = useNavigate();
const genericService = new GenericService();

const onSubmit = (value) => {
console.log(value, "value");
genericService
.post(`${API_URL}auth/signin`, value)
.then((msg) => {
if (msg.resultCode == 200) {
logIn();
localStorage.setItem("userData", JSON.stringify(msg.data));
navigate("/my-home");
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

const moveToRegister=()=>{
    navigate('/register')
}

const moveToForgetPassword=()=>{
    navigate('/forgot-password')
}

return (
<LoginStyledContainer>
    <SocialFooter/>
<Container fluid className="p-0 overflow-hidden">
<Row>
    <Col sm={3} md={4} lg={5}  >
    <div className="left-side-img"/>
    </Col>
    <Col sm ={9} md={8} lg={7}>
        <div className="right-side">
            <div className="text-center img-logo">
                <img src={ic_logo} alt="logo" />
            </div>
            <h4 className="main-heading">
                Welcome to EnnVisions
            </h4>
            <div className="create-account-linking d-flex">
                <h6>New Here?</h6>
                <p className="ms-1" onClick={moveToRegister}>Create an Account</p>
            </div>
            <div className="inputs-section">
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
                                    <div className="mt-3">
                                    <Col md={12}>
                                    <FormControl
                                    control="largeInput"
                                    type="text"
                                    name="email"
                                    placeholder="Enter Email Address"
                                    className={
                                    formik.errors.email && formik.touched.email
                                    ? "is-invalid"
                                    : "customInput"
                                    }
                                    />
                                    </Col>
                                    </div>
                                    <Col md={12}>
                                    <div className="password-input position-relative">
                                    <FormControl
                                    control="largeInput"
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    className={
                                    formik.errors.email && formik.touched.email
                                    ? "is-invalid"
                                    : "customInput"
                                    }
                                    />
                                    <h6 className="show-text position-absolute">SHOW</h6>
                                    </div>
                                    </Col>
                                    <p className="forget-password text-end" onClick={moveToForgetPassword}>FORGOT PASSWORD?</p>
                                    <div className="mt-2 d-flex login-btns">
                                    <div className="sign-in-btn">

                                    <CustomButton
                                    bgcolor={PrimaryColor}
                                    color='white'
                                    padding="20 8"
                                    width='142'
                                    height='67'
                                    type="submit"
                                    title="SIGN IN"
                                    fontSize='24'
                                    />
                                    </div>
                                    <div className=" ms-lg-3  ms-sm-5 ms-5 position-relative sign-google-btn d-flex align-items-center">
                                    <img src={googleImg} alt="google-img" className="position-absolute" />
                                    <div className="button">
                                    <CustomButton
                                    bgcolor={lightGrey2}
                                    color={PrimaryColor}
                                    padding="20 8"
                                    width='323'
                                    height='62'
                                    type="submit"
                                    title="SIGN IN WITH GOOGLE"
                                    fontSize='21'
                                    />
                                    </div>
                                    </div>
                                    </div>
                                    </Row>
                                </Form>
                            );
                        }}
                    </Formik>
                
            </div>
            </div>
            <div className="login-footer d-flex  justify-content-center">
            <div className="inner-container position-absolute bottom-0 d-flex">
            <p className="policy">Terms And Conditions</p>
            <p className="policy ms-4">Privacy Policy</p>
            </div>
            </div>
    </Col>
</Row>

</Container>
</LoginStyledContainer>


);
};

export default Index;
