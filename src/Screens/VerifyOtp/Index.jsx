import { Formik } from 'formik';
import logo from '../../assets/icons/ic_logo(1).svg';
import CustomButton from '../../Components/CustomButton/Index';
import { lightblue } from '../../Components/GlobalStyle';
import { VerifyOtpStyled } from './style';
import * as Yup from "yup";
import FormControl from "../../Components/FormControl";
import { useNavigate } from 'react-router-dom';


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

    const becomeProNavigation=() => {
      navigate('/become-professional');
    }
    return (
        <VerifyOtpStyled>
            <div className="inner-container">
            <img src={logo} alt="logo" />
            <h6 className='title'>Veriﬁcation codes OTP</h6>
            <p className="message">A verification codes has been sent to: <span className='number'>1 (617) 397-8483</span></p>
           <div className="mt-3">
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
            title="SUBMIT"
            margin="auto"
            fontSize='16px'
            clicked={becomeProNavigation}
            />
            </div>

            </div>
            </div>
        </VerifyOtpStyled>
    )
}

export default Index;