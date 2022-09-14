import { Formik } from "formik";
import * as Yup from "yup";
import { Form, InputNumber } from "antd";
import FormControl from "../../Components/FormControl";
import CustomButton from "../../Components/CustomButton/Index";
import { CreateUserStyled } from "./style";
import { useNavigate } from "react-router-dom";
import { tertiaryGrey11 } from "../../Components/GlobalStyle";
import SocialFooter from '../../Components/SocialFooter/SocialFooter';
import { Helmet } from "react-helmet";
import flag from '../../assets/icons/ic_flag.svg';


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

const Index = () => {
    const navigate = useNavigate();
    const onSubmit = (value) => {
    };

    const userListNavigator = () => {
        navigate('/user-list');
    }

    return (
        <>
            <Helmet>
                <title>Create User</title>
            </Helmet>

            <CreateUserStyled>
                <div className="inner-container-card">

                    <div className="inner-container-card-form">
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
                                        // onFinishFailed={onFinishFailed}
                                        autoComplete="off"
                                        validateMessages={validationSchema}
                                    >
                                        <div className="login-input-fields">
                                            <div>
                                                <FormControl
                                                    control="input"
                                                    type="text"
                                                    name="firstName"
                                                    border='1px solid #EFEFF4'
                                                    placeholder="First Name"
                                                    className={
                                                        formik.errors.email && formik.touched.email
                                                            ? "is-invalid"
                                                            : "customInput"
                                                    }
                                                />
                                            </div>
                                            <div>
                                                <FormControl
                                                    control="input"
                                                    type="text"
                                                    name="lastName"
                                                    border='1px solid #EFEFF4'

                                                    placeholder="Last Name"
                                                    className={
                                                        formik.errors.email && formik.touched.email
                                                            ? "is-invalid"
                                                            : "customInput"
                                                    }
                                                />
                                            </div>
                                            <div>
                                                <FormControl
                                                    control="input"
                                                    type="email"
                                                    name="email"
                                                    border='1px solid #EFEFF4'

                                                    placeholder="Enter Email"
                                                    className={
                                                        formik.errors.email && formik.touched.email
                                                            ? "is-invalid"
                                                            : "customInput"
                                                    }
                                                />
                                            </div>
                                            <InputNumber style={{ border: 'none', height: '40px',marginBottom:'4px' }} className="w-100 border-0" controls={false} addonBefore={<div style={{ width: '40px', height: '40px' }} className="d-flex align-items-center">
                                                <img src={flag} alt="flag" className="me-2" />
                                                <p className="m-0">+1</p>
                                            </div>} />

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
                                            </div>
                                            <div className="login-input-fields-field">

                                                <FormControl
                                                    control="password"
                                                    type="text"
                                                    name="password"
                                                    border='1px solid #EFEFF4'

                                                    placeholder="Password"
                                                    className={
                                                        formik.errors.password && formik.touched.password
                                                            ? "is-invalid"
                                                            : "customPasswordInput"
                                                    }
                                                />
                                            </div>
                                            <div className="login-input-fields-field">
                                                <FormControl
                                                    control="password"
                                                    type="text"
                                                    name="confirmPassword"
                                                    border='1px solid #EFEFF4'

                                                    placeholder="Password"
                                                    className={
                                                        formik.errors.password && formik.touched.password
                                                            ? "is-invalid"
                                                            : "customPasswordInput"
                                                    }
                                                />
                                            </div>
                                            <div className="mt-1    ">

                                                <CustomButton
                                                    bgcolor={`${tertiaryGrey11}`}
                                                    color="white"
                                                    padding="11px 8px"
                                                    width="100%"
                                                    type="submit"
                                                    title="Register"
                                                    fontSize='16px'
                                                    clicked={userListNavigator}
                                                />
                                            </div>
                                        </div>
                                    </Form>
                                );
                            }}
                        </Formik>

                    </div>
                </div>
                <SocialFooter />
            </CreateUserStyled>
        </>
    );
};

export default Index;
