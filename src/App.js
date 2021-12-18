import React,{useContext} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './Pages/About';
import Cart from './Pages/Cart';
import Store from './Pages/Store';
import AddProduct from './Pages/addProducts';
import vistaProductos from './Pages/vistaProductos';
import NotFound from './Pages/NotFound'

import 'bootstrap/dist/css/bootstrap.css';
import { ContextProvider } from './context/GlobalContext'
import {AuthContext} from './context/AuthContext';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import Login from './Pages/Login';
import Register from './Pages/Register';
import HeaderUser from './componentes/HeaderUser';

function App() {

  const {isAuthenticated} =  useContext(AuthContext)
  const isAuth = isAuthenticated;
  return (   
    <ContextProvider>
      
      <Router>
        <HeaderUser/>
        <Switch>
           <PublicRoute path="/Login" isAuthenticated={isAuth}>
            <Login />
           </PublicRoute>
            <PublicRoute  path="/Register" isAuthenticated={isAuth}>
              <Register />
            </PublicRoute>

           <PrivateRoute  path="/" isAuthenticated={isAuth}> 
         
            <Route path="/Products" component={Store} />
            <Route path="/About" component={About} />
            <Route path="/Cart" component={Cart} />
            <Route path="/vistaProductos" component={vistaProductos} />
            <Route path="/addproducts" component={AddProduct} />
          
           </PrivateRoute>
           <Route path="*">
            <NotFound />
          </Route>  
        </Switch>
      </Router> 
  </ContextProvider>
 
  );
}
  
export default App;