import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render(
   <Provider store={store}>
      <Router>
         <App />
      </Router>
   </Provider>,
   document.getElementById('root')
);
