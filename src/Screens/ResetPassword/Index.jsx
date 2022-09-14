import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {Form } from "antd";
import {ResetPasswordStyled } from "./style";
import FormControl from "../../Components/FormControl";
import CustomButton from "../../Components/CustomButton/Index";
import {PrimaryColor} from "../../Components/GlobalStyle";
import {useNavigate } from "react-router-dom";
import GenericService from "../../Services/GenericService";
import { API_URL } from "../../Services/config";
import { toast } from "react-toastify";
import { Col, Container, Row } from "react-bootstrap";
import ic_logo from '../../assets/icons/ic_logo.svg';

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
const navigation = useNavigate();
const genericService = new GenericService();

const moveToLogin = () => {
navigation("/");
};

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


return (
<Container fluid className="p-0 overflow-hidden">
    <ResetPasswordStyled>
        <Row>
        <Col md={5}>
        <div className="left-side-img"/>
        </Col>
        <Col md={7}>
            <div className="right-side">
            <div className="text-center img-logo">
                <img src={ic_logo} alt="logo" />
            </div>
            <h4 className="main-heading mt-5">
            Reset password
            </h4>
                
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
                        <Row className="mt-2">
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
                        
                            <div className="mt-2">
                            <CustomButton
                                bgcolor={PrimaryColor}
                                color='white'
                                padding="15 8"
                                width="100%"
                                type="submit"
                                title="SIGN IN"
                                fontSize='24'
                                clicked={moveToLogin}
                            />
                            </div>
                        </Row>
                        </Form>
                    );
                    }}
                </Formik>
                <div className="reset-footer d-flex  justify-content-center">
            <div className="position-absolute bottom-0 d-flex">
            <p className="policy">Terms And Conditions</p>
            <p className="policy ms-4">Privacy Policy</p>
            </div>
            </div>
                </div>
        </Col>
        </Row>
    </ResetPasswordStyled>
</Container>


);
};

export default Index;
