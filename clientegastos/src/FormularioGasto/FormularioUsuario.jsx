export function FormularioUsuario(){
    return(
        <>
            <section className="container">
                <div className="row my-5">
                    <div className="col-12 col-md-8">
                        <h3>Reguistro de Usuario:</h3>
                        <hr />
                        <form className="p-5 border rounded">

                        
                        
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="bi bi-person-circle"></i>                            </span>
                            <input type="text" class="form-control" placeholder="Nombre"/>
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="bi bi-0-circle-fill"></i>
                            </span>
                            <input type="number" class="form-control" placeholder="edad"/>
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="bi bi-telephone"></i>
                            </span>
                            <input type="date" class="form-control" placeholder="telefono"/>
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="bi bi-envelope"></i>
                            </span>
                            <input type="text" class="form-control" placeholder="correo"/>
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="bi bi-lock"></i>
                            </span>
                            <input type="text" class="form-control" placeholder="contraseña"/>
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text">
                            <i class="bi bi-calendar"></i>
                            </span>
                            <input type="text" class="form-control" placeholder="Fecha de Registro"/>
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="bi bi-house-door-fill"></i>
                            </span>
                            <input type="text" class="form-control" placeholder="ciudad"/>
                        </div>

                     

                        <button className="btn btn-outline-primary w-100">Registrar</button>

                        </form>
                    </div>
                </div>
            </section>   
        </>
    )
}