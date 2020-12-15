import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Syndicate from './Pages/Syndicate'
import Login from './Pages/Login'
import Register from './Pages/Register'
import ModalPopup from './Reuseable.js/ModalPopup'
import SyndicateDetail from './Pages/SyndicateDetail'
import SyndicateCart from './Pages/SyndicateCart'
import Checkout from './Pages/Checkout'
import Results from './Pages/Results'
import Faqs from './Pages/Faqs'
import Profile from './Pages/Profile'
import Dashboard from './Dashboard/Dashboard'
import Privacy from './Pages/Privacy'
import Terms from './Pages/Terms'
import Jackpot from './Pages/Jackpot'
import CustomTab from './Reuseable.js/CustomTab'

const Routes = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route  exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/syndicate" component={Syndicate} />
            <Route exact path="/modal" component={ModalPopup} />
            <Route exact path="/syndicate-detail" component={SyndicateDetail} />
            <Route exact path="/cart" component={SyndicateCart} />
            <Route exact path="/checkout" component={Checkout}/>
            <Route exact path="/results" component={Results} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/faqs" component={Faqs} />
            <Route exact path="/tabs" component={CustomTab} />
            <Route exact path="/supermillion-jackpot" component={Jackpot} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Register} />
          </Switch>
            
        </BrowserRouter>
    )
}

export default Routes
