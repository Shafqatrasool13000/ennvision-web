import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {Form } from "antd";
import {ForgetPasswordStyled} from "./style";
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
const navigate = useNavigate();
const genericService = new GenericService();

const moveToResetPassword=()=>{
    navigate('/reset-password');
}
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

return (
<Container fluid className="p-0 overflow-hidden">
    <ForgetPasswordStyled>
        <Row>
        <Col md={5}>
        <div className="left-side-img"/>
        </Col>
        <Col md={7}>
            <div className="right-side d-flex flex-column justify-content-center">
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
                        <Row className="login-input-fields">
                            <Col md={12}>
                            <FormControl
                                control="largeInput"
                                type="email"
                                name="email"
                                placeholder="Enter Email Address"
                                className={
                                formik.errors.email && formik.touched.email
                                    ? "is-invalid"
                                    : "customInput"
                                }
                            />
                            </Col>
                            <div className="mt-2">
                            <CustomButton
                                bgcolor={PrimaryColor}
                                color='white'
                                padding="15 8"
                                width="100%"
                                type="submit"
                                title="NEXT"
                                fontSize='24'
                                clicked={moveToResetPassword}
                            />
                            </div>
                        </Row>
                        </Form>
                    );
                    }}
                </Formik>
                <div className="forget-footer d-flex  justify-content-center">
            <div className="position-absolute bottom-0 d-flex">
            <p className="policy">Terms And Conditions</p>
            <p className="policy ms-4">Privacy Policy</p>
            </div>
            </div>
            </div>
        </Col>
        </Row>
    
    </ForgetPasswordStyled>
</Container>


);
};

export default Index;
