import logo from '../../assets/icons/ic_logo(1).svg';
import CustomButton from '../../Components/CustomButton/Index';
import { lightblue } from '../../Components/GlobalStyle';
import { ConfirmedStyled } from './style';
const Index = () => {
    return (
        <ConfirmedStyled>
            <div className="inner-container">
            <img src={logo} alt="logo" />
            <p className="message">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna</p>
           <div className="mt-4">
            <CustomButton
            bgcolor={lightblue}
            color="white"
            padding="8px 8px"
            width="100%"
            type="submit"
            title="THANKS!"
            margin="auto"
            fontSize='16px'
            />
            </div>
            </div>
        </ConfirmedStyled>
    )
}

export default Index;