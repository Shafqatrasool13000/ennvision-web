
import { NavbarStyled } from './style';
import searchIcon from '../../assets/icons/ic_search(1).svg';
import notificationIcon from '../../assets/icons/ic_notification.svg';
import avatar from '../../assets/icons/ic_user_role.svg'; import flag from '../../assets/icons/ic_pakistan.svg';
import { Container } from 'react-bootstrap';
import logo from '../../assets/icons/ic_logo(1).svg';
import { useContext } from 'react';
import { SidebarContext } from '../../App';

function Index() {

    const {showSidebar,setShowSidebar}=useContext(SidebarContext);

    return (
        <NavbarStyled>
                <Container>
                <div className="d-flex justify-content-between">
                    <img onClick={()=>setShowSidebar(!showSidebar)} src={logo} alt="logo" />
                    <div className='right-side d-flex justify-content-center align-items-center'>
                        <img src={searchIcon} alt="" />
                        <img src={notificationIcon} alt="" />
                        <img src={flag} alt="flag" />
                        <p className="name ms-2">Hi, Adnan</p>
                        <img src={avatar} alt="avatar" />
                    </div>
                </div>
        </Container>
            </NavbarStyled>
    );
}

export default Index;