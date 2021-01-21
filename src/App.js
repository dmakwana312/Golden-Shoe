import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './Components/HomePage/HomePage.js';
import ComingSoonPage from './Components/ComingSoonPage/ComingSoonPage.js';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>

                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/products">
                        <ComingSoonPage title="Products" />
                    </Route>
                    <Route path="/myaccount">
                        <ComingSoonPage title="My Account"/>
                    </Route>
                    <Route path="/about">
                        <ComingSoonPage title="About"/>
                    </Route>
                    <Route path="/contact">
                        <ComingSoonPage title="Contact Us"/>
                    </Route>                
                
                </Switch>
            </Router>
        </div>
    );
}

export default App;
