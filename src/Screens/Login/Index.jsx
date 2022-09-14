import { Formik } from "formik";
import * as Yup from "yup";
import { Form } from "antd";
import FormControl from "../../Components/FormControl";
import CustomButton from "../../Components/CustomButton/Index";
import { LoginContainer } from "./style";
import ic_logo from "../../assets/icons/ic_logo(1).svg";
import { Link, useNavigate } from "react-router-dom";
import { tertiaryGrey11 } from "../../Components/GlobalStyle";
import SocialFooter from '../../Components/SocialFooter/SocialFooter';
import { Helmet } from "react-helmet";
import scroll_up from '../../assets/icons/ic_scroll_to_top .svg';

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

  const navigateToDashboard = () => { 
    navigate('/');
  }

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <span className='arrow-box'>
        <img src={scroll_up} alt="scroll-up" />
      </span>
      <LoginContainer>
        {/* <Navbar/> */}
        <div className="login-container-card">
          <div className="login-container-card-logo">
            <img src={ic_logo} alt="ic_logo" className="logo" />
          </div>
          <div className="login-container-card-form">
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
                          name="email"
                          label='Email'
                          placeholder="Email Address"
                          className={
                            formik.errors.email && formik.touched.email
                              ? "is-invalid"
                              : "customInput"
                          }
                        />
                      </div>
                      <div className="login-input-fields-field">
                        <label htmlFor="password" className="mb-2">Password</label>
                        <FormControl
                          control="password"
                          type="text"
                          name="password"
                          label='Password'
                          placeholder="Password"
                          className={
                            formik.errors.password && formik.touched.password
                              ? "is-invalid"
                              : "customPasswordInput"
                          }
                        />
                      </div>
                      <p className="forget_password mb-0">
                        <Link to="/forgetPassword" className="forget_password">
                          Forgot Password ?
                        </Link>
                      </p>
                      <div className="remember-password d-flex mb-2 mt-2 align-items-center">
                        <input type="checkbox" name="" id="" />
                        <p className="remember-password-text mb-0 ms-2">Remember me</p>
                      </div>
                      <CustomButton
                        bgcolor={`${tertiaryGrey11}`}
                        color="white"
                        padding="11px 8px"
                        width="100%"
                        type="submit"
                        title="LOG IN"
                        clicked={navigateToDashboard}
                      />
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <div className="login-container-bottom mt-3">
              <p> Don't have an account ?</p>
              <h6 className="ms-1">
                <Link to="/home">
                  Sign Up
                </Link>
              </h6>
            </div>
          </div>
        </div>
        <SocialFooter />
      </LoginContainer>
    </>
  );
};

export default Index;
