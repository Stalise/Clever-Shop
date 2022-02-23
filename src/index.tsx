import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render( 
   <Router>
      <App />
   </Router>,
   document.getElementById('root')
);
