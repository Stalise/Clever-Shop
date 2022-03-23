import { useLocation } from 'react-router-dom';

const useUrl = () => {
   const location = useLocation();
   return location.pathname
}

export default useUrl;