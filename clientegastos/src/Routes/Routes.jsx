import { Routes, Route } from "react-router-dom"
import { FormularioUsuario } from "../FormularioGasto/FormularioUsuario"
import { FormularioGasto } from "../FormularioGasto/FormularioGasto"
import { FormularioCategoria } from "../FormularioGasto/FormularioCategoria"
import { FormularioMetodoPago } from "../FormularioGasto/FormularioMetodoPago"
import { Home } from "../Home/Home"

export function Rutas(){
    return (
        <div >
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/registrousuario" element={ <FormularioUsuario /> } />
            <Route path="/registrogasto" element={ <FormularioGasto /> } />
            <Route path="/registrocategoria" element={ <FormularioCategoria /> } />
            <Route path="/registrometodopago" element={ <FormularioMetodoPago /> } />
          </Routes>
        </div>
      )
}