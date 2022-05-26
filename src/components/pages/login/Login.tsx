export const Login = () => {
    return (
        <div className="container p-3">
            <div className="row">
                <div className="col-12">
                    <h1>
                        Iniciar sesión
                    </h1>
                </div>
                <div className="col-12 ">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="">Correo</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Contraseña</label>
                            <input className="form-control" type="password" />
                        </div>
                        <button className="btn btn-dark w-100 mt-2">Entrar</button>
                    </form>
                </div>
            </div>



        </div>
    )
}
