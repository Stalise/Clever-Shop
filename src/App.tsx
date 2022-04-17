import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { sagasConstants } from './constants/saga';
import useUrl from './hooks/useUrl';
import AppRoutes from "./routes/AppRoutes";

const App: FC = () => {

   const dispatch = useDispatch()
   const currentUrl = useUrl()

   useEffect(() => {
      const getIdProduct: string = currentUrl.split('/')[2]

      if (currentUrl.split('/').length === 3) {
         dispatch({
            type: sagasConstants.REQUEST_PRODUCT_SAGA,
            id: getIdProduct
         })
      } else {
         dispatch({ type: sagasConstants.REQUEST_PRODUCTS_SAGA })
      }
   }, [])

   return (
      <AppRoutes />
   );
}

export default App;
