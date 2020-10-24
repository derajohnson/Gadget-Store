import React from 'react';
import Navbar from './layout/Navbar';
import Home from './components/Home';
import Product from './components/Products';
import Purchases from './components/Purchases'
import Footer from './layout/Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'

function App () {
  return (
    <Router> 
   <div className='app'>
     <Navbar />
     <Switch>
       <Route exact path='/'>
       <Home />
     <Product />
       </Route>
    <Route exact path='/purchases'>
    <Purchases />
    </Route>
     
     </Switch>
   
     <Footer />
   </div>
   </Router>
  );
}

export default App;
