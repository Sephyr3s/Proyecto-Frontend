import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import About from './Pages/About';
import Cart from './Pages/Cart';
import Store from './Pages/Store';
import AddProduct from './Pages/addProducts';
import vistaProductos from './Pages/vistaProductos';
import NotFound from './Pages/NotFound'

import 'bootstrap/dist/css/bootstrap.css';
import { ContextProvider } from './context/GlobalContext'



function App() {
  return (   
    <ContextProvider>
     
      <Router>
        <Switch>
          <Redirect exact from="/" to="/Products" />
          <Route path="/Products" component={Store} />
          <Route path="/About" component={About} />
          <Route path="/Cart" component={Cart} />
          <Route path="/vistaProductos" component={vistaProductos} />
          <Route path="/addproducts" component={AddProduct} />
          <Route component={NotFound} />  
        </Switch>
      </Router> 
  </ContextProvider>
 
  );
}
  
export default App;