import { NavLink } from "react-router-dom"
import "./css/style.css"
export const NavBar = () => {
  return (

    <>
      <nav className="navbar navbar-expand-lg ColorDeNav">
        <div className="container-fluid">

          <div className="mr-5 ml-5 mx-5 ms-5">
            <img src="/src/assets/img/imgLogo.png" className="TamañoDeLogoDeImg" alt="Mi Logo" />

          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* -------------------- */}

              <div className="mr-2 ml-2 mx-2 ms-2">
                {/* NOTA CAMBIE LA RUTA AQUI  */}
                <NavLink className="nav-link active" aria-current="page" to='/'><h5 className="text-white">Inicio</h5></NavLink>
              </div>
              <div className="mr-2 ml-2 mx-2 ms-2">
                <NavLink className="nav-link active" aria-current="page" to='/AvisoDePrivasidad'><h5 className="text-white">AvisoDePrivasidad</h5></NavLink>
              </div>
              <div className="mr-2 ml-2 mx-2 ms-2">
                <NavLink className="nav-link active" aria-current="page" to='/Estados'><h5 className="text-white">Estados</h5></NavLink>
              </div>
              <div className="mr-2 ml-2 mx-2 ms-2">
                <NavLink className="nav-link active" aria-current="page" to='/LosPueblosMagicos'><h5 className="text-white">LosPueblosMagicos</h5></NavLink>
              </div>
              <div className="mr-2 ml-2 mx-2 ms-2">
                <NavLink className="nav-link active" aria-current="page" to='/MexicoDesconocido'><h5 className="text-white">MexicoDesconocido</h5></NavLink>
              </div>
              {/* -------------------- */}
              <NavLink className="nav-link active" aria-current="page" to='/'></NavLink>
            </div>
          </div>
        </div>
      </nav>



    </>
  )
}

