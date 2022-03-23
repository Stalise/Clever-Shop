import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { actionTypes } from './store/sagas/productsSaga/constants';
import useUrl from './hooks/useUrl';
import AppRoutes from "./routes/AppRoutes";

const App: FC = () => {

   const dispatch = useDispatch()
   const currentUrl = useUrl()

   useEffect(() => {
      const getIdProduct = currentUrl.split('/')[3]

      if (currentUrl.split('/').length === 4) {
         dispatch({
            type: actionTypes.REQUEST_PRODUCT,
            id: getIdProduct
         })
      } else {
         dispatch({ type: actionTypes.REQUEST_PRODUCTS })
      }
   }, [])

   return (
      <AppRoutes />
   );
}

export default App;
