export const Register = () => {
    return (
        <div className="container p-3">
            <div className="row">
                <div className="col-12">
                    <h1>Registrarse</h1>
                </div>
                <div className="col-12">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="">Nombre</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Apellido Paterno</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Apellido Materno</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Correo</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Contraseña</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Rut</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Telefono</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Dirección</label>
                            <input className="form-control" type="text" />
                        </div>
                        <button className="btn btn-dark w-100 mt-2" >Crear</button>
                    </form>
                </div>
            </div>
        </div>
    )
}