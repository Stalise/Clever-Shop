import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import OutletLayout from '../pages/OutletLayout/OutletLayout';
import MainPage from '../pages/MainPage/MainPage';
import CategoryPage from '../pages/CategoryPage/CategoryPage';
import ProductPage from '../pages/ProductPage/ProductPage';

const AppRoutes: FC = () => {

   return (
      <Routes>
         <Route path='/' element={<OutletLayout />}>
            <Route index element={<MainPage />} />
            <Route path='/category/:category' element={<CategoryPage />} />
            <Route path='/category/:category/:id' element={<ProductPage />} />
            <Route path='*' element={<MainPage />} />
         </Route>
         {/* <Route path='/autho' element={<AuthorizationPage />} /> */}
      </Routes >
   );
}

export default AppRoutes;