// basic
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// redux
import { Provider } from 'react-redux';
import Redux from './redux';

// router
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

const StoreInstance = Redux();

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={StoreInstance}>
            <Router>
                <div>
                    <Sidebar/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Footer/>
                </div>
            </Router>
        </Provider>
    </MuiThemeProvider>,
  document.getElementById('root')
);
