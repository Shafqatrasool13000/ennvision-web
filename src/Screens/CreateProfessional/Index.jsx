import logo from '../../assets/icons/ic_logo(1).svg';
import CustomButton from '../../Components/CustomButton/Index';
import { lightblue } from '../../Components/GlobalStyle';
import { ConfirmedStyled } from './style';
import FormControl from "../../Components/FormControl";
import { Formik } from 'formik';
import * as Yup from "yup";
import {useNavigate } from 'react-router-dom';


const Index = () => {
const navigate=useNavigate();
    let initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        password: Yup.string()
            .required("Password is required!")
            .matches(/^(\S+$)/g, "Username cannot contain blankspaces"),
        email: Yup.string().email('Email should be valid')
            .required("Email is required")
    });

    const verifyOtpNavigation=() => {
      navigate('/verify-otp')
    }
    return (
        <ConfirmedStyled>
            <div className="inner-container">
                <img src={logo} alt="logo" />
                <p className="message">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna</p>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                // onSubmit={onSubmit}
                >
                    {(formik) => {
                        return (
                            <div className="login-input-fields-field mt-2">
                                <FormControl
                                    control="input"
                                    type="text"
                                    name="userName"
                                    border='1px solid #EFEFF4'
                                    placeholder="User Name"
                                    className={
                                        formik.errors.password && formik.touched.password
                                            ? "is-invalid"
                                            : "customPasswordInput"
                                    }
                                />
                            </div>)
                    }}
                </Formik>
                <div className="mt-3">
                    <CustomButton
                        bgcolor={lightblue}
                        color="white"
                        padding="8px 8px"
                        width="100%"
                        type="submit"
                        title="NEXT!"
                        margin="auto"
                        fontSize='16px'
                        clicked={verifyOtpNavigation}
                    />
                </div>
            </div>
        </ConfirmedStyled>
    )
}

export default Index;