import {Link,useHistory} from 'react-router-dom';
import React,{useContext,useState} from 'react';
import AuthServices from '../services/AuthServices';
import { AuthContext } from '../context/AuthContext';
const Login = ()=>{
    const{login} = useContext(AuthContext);
    let history = useHistory();
    const intialFormState = {
        email:"",
        password:""
    }
    const [formData, setFormData]=useState(intialFormState)
    const onChangeHandle = ev =>{
        setFormData({...formData,[ev.target.name]:ev.target.value});
    }
    const handleSubmit = ev =>{
        ev.preventDefault();
        AuthServices.login(formData.email,formData.password).then(data =>{
            login(data);
            history.push("/");
        }, error =>{
            console.log("Usuario y contraseña incorrectos")
        })
    }
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="login-form mt-4 p-4">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <h2 className="text-center mb-3">Ingresar</h2>
                        <div className="col-12">
                            <label>Correo electrónico</label>
                            <input type="email" name="email" className="form-control" value={formData.email} onChange={onChangeHandle} placeholder="Correo electrónico"/>
                        </div>
                        <div className="col-12">
                            <label>Contraseña</label>
                            <input type="password" name="password" className="form-control" value={formData.password} onChange={onChangeHandle} placeholder="Contraseña"/>
                        </div>
                       { /*<div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="rememberMe"/>
                                <label className="form-check-label" for="rememberMe"> Remember me</label>
                            </div>
                        </div>*/}
                        <div className="col-12">
                            <button type="submit" className="btn btn-dark float-end">Login</button>
                        </div>
                    </form>
                    <hr className="mt-4"/>
                    <div className="col-12">
                        <p className="text-center mb-0">No tienes una cuenta aún? <Link to="/register">Regístrate</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Login; 