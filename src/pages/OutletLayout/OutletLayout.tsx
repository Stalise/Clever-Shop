import './OutletLayout.scss';
import { Outlet, Link } from 'react-router-dom';
import Header from '../../components/Common/Header/Header';
import Footer from '../../components/Common/Footer/Footer';

const OutletLayout = () => {

   return (
      <div className='wrapper'>
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
}

export default OutletLayout;