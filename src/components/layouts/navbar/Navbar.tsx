export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">AndoTrekkeando</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Registrarse</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Noticias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Anuncios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Imagenes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Preguntas frecuentes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Actividades</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Inclusión</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Iniciar sesión</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}