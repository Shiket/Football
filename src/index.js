import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

// axios.defaults.baseURL = 'https://api.football-data.org/v2/';

ReactDOM.render(
    <Router>
        <App />
    </Router>,

    document.getElementById('root'));

serviceWorker.unregister();

