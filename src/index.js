import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App/App';
import 'normalize.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import Store from './store';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';

const StoreInstance = Store();

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={StoreInstance}>
            <Router>
                <div>
                    <App/>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </div>
            </Router>
        </Provider>
    </MuiThemeProvider>,
  document.getElementById('root')
);
