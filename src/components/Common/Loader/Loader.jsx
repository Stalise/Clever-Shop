import './Loader.scss';

const Loader = () => {

   return (
      <div className="cssload-container" data-test-id='loader'>
         <ul className="cssload-flex-container">
            <li>
               <span className="cssload-loading cssload-one"></span>
               <span className="cssload-loading cssload-two"></span>
               <span className="cssload-loading-center"></span>
            </li>
         </ul>
      </div>
   );
}

export default Loader;