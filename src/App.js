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
import {AuthContext} from './context/AuthContext';

import PublicRoute from './routers/PublicRoute';
import PrivateRoute from './routers/PrivateRoute';
import Login from './Pages/Login';
import Register from './Pages/Register';
import HeaderUser from './componentes/HeaderUser';

function App() {

  const {isAuthenticated} =  React.useContext(AuthContext)
  const isAuth = isAuthenticated;
  return (   
    <ContextProvider>
      
      <Router>
        <HeaderUser/>
        <Switch>
           <PublicRoute path="/login" isAuthenticated={isAuth}>
            <Login />
           </PublicRoute>
          
            <PublicRoute  path="/register" isAuthenticated={isAuth}>
              <Register />
            </PublicRoute>
           <PrivateRoute  path="/" isAuthenticated={isAuth}> 
            <Redirect exact from="/" to="/Products" />
            <Route path="/Products" component={Store} />
            <Route path="/About" component={About} />
            <Route path="/Cart" component={Cart} />
            <Route path="/vistaProductos" component={vistaProductos} />
            <Route path="/addproducts" component={AddProduct} />
          
           </PrivateRoute>
           <Route component={NotFound} />   
        </Switch>
      </Router> 
  </ContextProvider>
 
  );
}
  
export default App;