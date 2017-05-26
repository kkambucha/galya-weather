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
import WeatherCard from './components/WeatherCard';
import About from './components/About';
import Science from './components/Science';

const StoreInstance = Redux();

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={StoreInstance}>
            <Router>
                <div>
                    <Sidebar/>
                    <Route exact path="/meteogalya/" component={WeatherCard}/>
                    <Route path="/meteogalya/about/" component={About}/>
                    <Route path="/meteogalya/science/" component={Science}/>
                    <Footer/>
                </div>
            </Router>
        </Provider>
    </MuiThemeProvider>,
  document.getElementById('root')
);
