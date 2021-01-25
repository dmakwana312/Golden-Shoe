import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './Components/HomePage/HomePage.js';
import ComingSoonPage from './Components/ComingSoonPage/ComingSoonPage.js';
import ProductsPage from './Components/ProductsPage/ProductsPage.js';

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

                    
                    <Route path="/Golden-Shoe/products">
                        <ProductsPage />
                    </Route>
                    <Route path="/Golden-Shoe/myaccount">
                        <ComingSoonPage title="My Account"/>
                    </Route>
                    <Route path="/Golden-Shoe/about">
                        <ComingSoonPage title="About"/>
                    </Route>
                    <Route path="/Golden-Shoe/contact">
                        <ComingSoonPage title="Contact Us"/>
                    </Route>       
                    <Route path="/Golden-Shoe">
                        <HomePage />
                    </Route>         
                
                </Switch>
            </Router>
        </div>
    );
}

export default App;
