import Sidebar from '../../Components/Sidebar/Index';
import Navbar from '../../Components/Navbar/Index';
import { Outlet } from 'react-router-dom';

const Index = () => {
  return (
    <>
    <Navbar />
    <Sidebar />
    <Outlet/>
    </>
  )
}

export default Index