import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
// React Router Import
import { Switch, Route, BrowserRouter } from 'react-router-dom';
// Import Pages
import Home from './components/pages/Home';
import News from './components/pages/News';
import Contacts from './components/pages/Contacts';
import CurrencyCalculator from './components/pages/CurrencyCalculator';
import NotFoundPage from './components/pages/NotFoundPage';
import ApartmentSearch from './components/pages/ApartmentSearch';
// new currency page addition






class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
        <Route exact path='/' component={Home}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/news' component={News}/>
          <Route exact path='/CurrencyCalculator' component={CurrencyCalculator}/>
          <Route exact path='/contacts' component={Contacts}/>
          <Route exact path='/ApartmentSearch' component={ApartmentSearch}/>
          <Route component='/not-found-page' component={NotFoundPage}/>
        </Switch>
        
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;