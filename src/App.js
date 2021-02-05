import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './Components/HomePage/HomePage.js';
import ComingSoonPage from './Components/ComingSoonPage/ComingSoonPage.js';
import ProductsPage from './Components/ProductsPage/ProductsPage.js';

import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>

                    
                    <Route path="/products">
                        <ProductsPage />
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
                    <Route path="/">
                        <HomePage />
                    </Route>         
                
                </Switch>
            </Router>
        </div>
    );
}

export default App;
