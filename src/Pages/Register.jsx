import { Link } from "react-router-dom";
const Register = ()=>{
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="login-form mt-4 p-4">
                    <form className="row g-3">
                        <h2 className="text-center mb-3">Crear una cuenta de usuario</h2>
                        <div className="col-12">
                            <label>Nombre</label>
                            <input type="text" name="name" className="form-control" placeholder="Nombre y apellido"/>
                        </div>
                        <div className="col-12">
                            <label>Correo electrónico</label>
                            <input type="email" name="email" className="form-control" placeholder="Correo electrónico"/>
                        </div>
                        <div className="col-12">
                            <label>Contraseña</label>
                            <input type="password" name="password" className="form-control" placeholder="Contraseña"/>
                        </div>
                         <div class="col-12 d-flex justify-content-center">
                            <button type="button" class="btn btn-dark btn-block btn-lg">Registrarse</button>
                        </div>

                    </form>
                    <hr className="mt-4"/>
                    <div className="col-12">
                        <p className="text-center mb-0">Ya tienes una cuenta? <Link to="/login">Ingresar</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>



    );
}

export default Register;