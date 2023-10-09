import "./css/style.css"
export const Inicio = () => {
  return (
    <>

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/src/assets/img/portada1.1.jpeg" className="imgCarrousel" alt="" />
            <div className="carousel-caption top-0 mt-4">
              <h1 className="mt-4">PUEBLOS MÁGICOS</h1>
              <h2>Enamórate de México y explora los 177 Pueblos Mágicos.</h2>
              <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
            </div>
          </div>
          <div className="carousel-item">
            <img src="/src/assets/img/portada2.2.jpeg" className="imgCarrousel" alt="" />
            <div className="carousel-caption top-0 mt-4">
              <h1 className="mt-4">PUEBLOS MÁGICOS</h1>
              <h2>Enamórate de México y explora los 177 Pueblos Mágicos.</h2>
              <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
            </div>
          </div>
          <div className="carousel-item">
            <img src="/src/assets/img/portada3.3.jpeg" className="imgCarrousel" alt="" />
            <div className="carousel-caption top-0 mt-4">
              <h1 className="mt-4">PUEBLOS MÁGICOS</h1>
              <h2>Enamórate de México y explora los 177 Pueblos Mágicos.</h2>
              <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
            </div>
          </div>
          <div className="carousel-item">
            <img src="/src/assets/img/portada4.4.jpeg" className="imgCarrousel" alt="" />
            <div className="carousel-caption top-0 mt-4">
              <h1 className="mt-4">PUEBLOS MÁGICOS</h1>
              <h2>Enamórate de México y explora los 177 Pueblos Mágicos.</h2>
              <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">

        <div className="text-center">
          <h6 className="mt-3 mb-3">SELECCIONA TU PRÓXIMA AVENTURA</h6>
        </div>
        <ul className="nav justify-content-center mt-3">
          <li className="nav-item">
            <img src="/src/assets/img/estados_b.png" className="TamañoDeIconos ms-4" alt="" />
            <a className="nav-link">Estados</a>
          </li>
          <li className="nav-item">
            <img src="/src/assets/img/pmagic_b.png" className="TamañoDeIconos ms-4" alt="" />
            <a className="nav-link" href="#">Pueblos Magicos</a>
          </li>
          <li className="nav-item">
            <img src="/src/assets/img/piramide.png" className="TamañoDeIconos ms-4" alt="" />
            <a className="nav-link" href="#">Atractivos</a>
          </li>
          <li className="nav-item">
            <img src="/src/assets/img/actividades_b.png" className="TamañoDeIconos ms-4" alt="" />
            <a className="nav-link" href="#">Actividades</a>
          </li>
          <li className="nav-item">
            <img src="/src/assets/img/festividades_b.png" className="TamañoDeIconos ms-4" alt="" />
            <a className="nav-link" href="#">Festividades</a>
          </li>
          <li className="nav-item">
            <img src="/src/assets/img/eventos_b.png" className="TamañoDeIconos ms-4" alt="" />
            <a className="nav-link" href="#">Eventos</a>
          </li>
          <li className="nav-item">
            <img src="/src/assets/img/hoteles_b.png" className="TamañoDeIconos ms-4" alt="" />
            <a className="nav-link" href="#">Hoteles</a>
          </li>
          <li className="nav-item">
            <img src="/src/assets/img/restaurantes_b.png" className="TamañoDeIconos ms-4" alt="" />
            <a className="nav-link" href="#">Restaurantes</a>
          </li>
          <li className="nav-item">
            <img src="/src/assets/img/tours_b.png" className="TamañoDeIconos ms-4" alt="" />
            <a className="nav-link" href="#">Tours</a>
          </li>
        </ul>
      </div>

      <div className="text-center mt-2 mb-2">
        <h1 className="mb-2">Estados de la Republica Mexicana</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">

            <div className="row row-cols-1 row-cols-md-4 g-4">
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/card1.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 4 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">AguasCalientes</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card2.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 1 PUEBLO</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Baja Califormia</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card3.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 3 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Baja Califormia Sur</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card4.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 3 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Campeche</h5>
                  </div>
                </div>
              </div>
            </div>


            <div className="row row-cols-1 row-cols-md-4 g-4 mt-1">
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card5.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 6 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Chiapas</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card6.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 5 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Chihuahua</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card7.png" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 8 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Coahuila</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card8.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 1 PUEBLO</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Colima</h5>
                  </div>
                </div>
              </div>
            </div>


            <div className="row row-cols-1 row-cols-md-4 g-4 mt-1">
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card9.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 2 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Durango</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card10.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 12 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Estado de México</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card10.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 6 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Guanajuato</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card10.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 3 PUEBLO</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Guerrero</h5>
                  </div>
                </div>
              </div>
            </div>


            <div className="row row-cols-1 row-cols-md-4 g-4 mt-1">
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card9.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 9 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Hidalgo</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card10.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 12 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Jalisco</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card10.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 10 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Michoacán</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card10.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 4 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Morelos</h5>
                  </div>
                </div>
              </div>
            </div>


            <div className="row row-cols-1 row-cols-md-4 g-4 mt-1">
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card9.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 9 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Nayarit</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card10.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 5 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Nuevo León</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card10.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 6 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Oaxaca</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card10.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 12 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Puebla</h5>
                  </div>
                </div>
              </div>
            </div>


            <div className="row row-cols-1 row-cols-md-4 g-4 mt-1">
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card9.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 7 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Querétaro</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card10.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 4 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Quintana Roo</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card10.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 6 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">San Luis Potosí</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card10.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 5 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Sinaloa</h5>
                  </div>
                </div>
              </div>
            </div>


            <div className="row row-cols-1 row-cols-md-4 g-4 mt-1">
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card9.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 4 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Sonora</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card10.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 3 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Tabasco</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card10.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 2 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Tamaulipas</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card10.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 3 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Tlaxcala</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-md-4 g-4 mt-1">
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card9.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 8 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Veracruz</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card10.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 7 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Yucatán</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-2">
                  <img src="/src/assets/img/Card10.jpg" className="rounded-2" alt="" />
                  <div className="card-img-overlay">
                    <button type="button" className="btn btn-secondary"> <img src="/src/assets/img/rehilete.png" className="imgColorBotonDentroCard" alt="" /> 7 PUEBLOS</button>
                    <br /><br /><br /><br />
                    <h5 className="mt-4  text-white">Zacatecas</h5>
                  </div>
                </div>
              </div>
              <div className="col">

              </div>
            </div>

            <div className="mt-4">
              <img src="/src/assets/img/imglarga.gif" className="TamañoDeImgLarga" alt="" />
            </div>

          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="card border-0">
          <div className="card-body">
            <h1 className="text-center">Temas de interes</h1>
            <hr />
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row">
          <div className="col">

            <div className="row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card rounded-4">
                  <img src="/src/assets/img/PecesMar.jpeg" className="rounded-4" alt="" />
                  <div className="card-img-overlay">
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <h5 className="text-white mt-4 mb-4">El Pueblo Mágico donde se resguarda el origen de la vida
                      El Pueblo Mágico donde se resguarda el origen de la vida</h5>
                    <h6 className="text-white">Coahuila</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 ">
                <br /><br />
                <div className="card border-0 mt-4 mb-4">
                  <div className="card-body">


                    <div className="row row-cols-1 row-cols-md-3 g-4">
                      <div className="col">
                        <div className="card">
                          <img src="/src/assets/img/MarPiramide.jpeg" alt="" />
                          <div className="card-img-overlay">
                            <br />
                            <h6 className="text-white mt-4">Villa del Carbón</h6>
                          </div>
                        </div>
                        {/* Dos */}
                        <div className="card mt-4">
                          <img src="/src/assets/img/MarPiramide.jpeg" alt="" />
                          <div className="card-img-overlay">
                            <br />
                            <h6 className="text-white mt-4">Villa del Carbón</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card">
                          <img src="/src/assets/img/Zacatecas.jpeg" alt="" />
                          <div className="card-img-overlay">
                            <h6 className="text-white mt-4">Zacatlán de las Manzanas</h6>
                          </div>
                        </div>
                        {/* Dos */}
                        <div className="card mt-4">
                          <img src="/src/assets/img/Zacatecas.jpeg" alt="" />
                          <div className="card-img-overlay">
                            <h6 className="text-white mt-4">Zacatlán de las Manzanas</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card">
                          <img src="/src/assets/img/Zacatecas.jpeg" alt="" />
                          <div className="card-img-overlay">
                            <h6 className="text-white mt-4">Huauchinango</h6>
                          </div>
                        </div>
                        {/* Dos */}
                        <div className="card mt-4">
                          <img src="/src/assets/img/Zacatecas.jpeg" alt="" />
                          <div className="card-img-overlay">
                            <h6 className="text-white mt-4">Huauchinango</h6>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <br />
              <img src="/src/assets/img/imglarga.gif" className="TamañoDeImgLarga mt-4" alt="" />
            </div>

          </div>
        </div>
      </div>


      <div className="mt-4">
        <img src="/src/assets/img/texture_icons2_alt.svg" alt="" />
      </div>

      <div className="text-center mt-4">
        <br />
        <img src="/src/assets/img/pm_md-1.svg" className="TamañoDePueblosMAgicos" alt="" />
        <hr />
        <img src="/src/assets/img/IconoDeRedesSociales.png" alt="" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col">

            <div className="row row-cols-1 row-cols-md-3 g-4">

              <div className="col">
                <div className="card border-0">
                  <img src="/src/assets/img/mexico.svg" className="TamañoDeImgUltimos ms-5" alt="" />
                  <div className="card-body">
                    <img src="/src/assets/img/logo-sectur2-master.svg" className="TamañoDeImgUltimos ms-4" alt="" />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0">
                  <img src="" alt="" />
                  <div className="card-body">
                    <h5>Información</h5>
                    <h6>Registro de Proovedores</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0">
                  <img src="" alt="" />
                  <div className="card-body">
                    <h5>Contáctanos</h5>
                    <h6>Secretaria de Turismo <br />México Desconocido  </h6>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="ColorRosa">
        <br />
        <h6 className="text-white">©2023 Pueblos Mágicos | México Desconocido</h6>
      </div>

    </>
  )
}

