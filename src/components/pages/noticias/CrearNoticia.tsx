export const CrearNoticia = () => {
    return (
        <div className="container p-3">
            <div className="row">
                <div className="col-12">
                    <h1>Nueva noticia</h1>
                </div>
                <div className="col-12">
                    <form action="">
                        <div className="form group">
                            <label htmlFor="">Título</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form group">
                            <label htmlFor="">Extracto</label>
                            <textarea className="form-control"></textarea>
                        </div>
                        <div className="form group">
                            <label htmlFor="">Cuerpo</label>
                            <textarea className="form-control"></textarea>
                        </div>
                        <div className="form group">
                            <label htmlFor="">Imagen</label>
                            <input className="form-control" type="file" />
                        </div>
                        <button className="btn btn-dark w-100 mt-2">Publicar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}