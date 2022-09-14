import logo from '../../assets/icons/ic_logo(1).svg';
import CustomButton from '../../Components/CustomButton/Index';
import { lightblue, secondaryDark3, tertiaryGrey13 } from '../../Components/GlobalStyle';
import { ConfirmationStyled } from './style';
const Index = ({setIsModalVisible}) => {
    return (
        <ConfirmationStyled>
            <div className="inner-container">
            <img src={logo} alt="logo" />
            <p className="message">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna</p>
           <div className="mt-4 d-flex gap-2">
            <CustomButton
            bgcolor={lightblue}
            color="white"
            padding="8px 8px"
            width="100%"
            type="submit"
            title="Yes"
            margin="auto"
            fontSize='16px'
            clicked={()=>setIsModalVisible(false)}
            />
             <CustomButton
            bgcolor={tertiaryGrey13}
            color={secondaryDark3}
            padding="8px 8px"
            width="100%"
            type="submit"
            title="Cancel"
            margin="auto"
            fontSize='16px'
            clicked={()=>setIsModalVisible(false)}
            />
            </div>
            </div>
        </ConfirmationStyled>
    )
}

export default Index;