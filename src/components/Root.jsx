
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Headers from './Headers';

const Root = () => {
  return (
    <div className='Container mx-auto'>
      
      <Headers></Headers>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;