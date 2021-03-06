import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useEffect} from "react";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51K1RAySGpHHUoYROYGM9' +
    'OwW04LRIrFoR9SSsF9fXEi3X8VW1qBRVJbP7B5hillhFCK83AY84pG9cLcgn2ZnzC2rH00Qbo50m6c');

function App() {

    const [{}, dispatch] = useStateValue();
    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            console.log('THE USER IS ', authUser)

            if (authUser) {
                // the user just logged in / the user was logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else {
                // the user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    }, [])
    return (

        // BEM
        <Router>
            <div className="App">
                <Switch>

                    <Route path="/login">
                        <Login/>
                    </Route>

                    <Route path="/checkout">
                        <Header/>
                        <Checkout/>
                    </Route>

                    <Route path="/payment">
                        <Header/>
                        <Elements stripe={promise}>
                            <Payment/>
                        </Elements>

                    </Route>

                    <Route path="/">
                        <Header/>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
