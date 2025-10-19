import React from 'react';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-apple">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/8971/8971659.png"
              alt="Logo Huella Solidaria"
              width="30"
              height="30"
              className="me-2"
            />
            Huella Solidaria
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                  <a className="dropdown-item" href="#">Producto 1</a>
                  <a className="dropdown-item" href="#">Producto 2</a>
                  <a className="dropdown-item" href="#">Producto 3</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Servicios
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                  <a className="dropdown-item" href="#">Servicio A</a>
                  <a className="dropdown-item" href="#">Servicio B</a>
                  <a className="dropdown-item" href="#">Servicio C</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Fundaciones
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                  <a className="dropdown-item" href="https://www.garrasypatas.cl/" target="_blank" rel="noopener noreferrer">
                    Fundación Garras y Patas
                  </a>
                  <a className="dropdown-item" href="https://fundacionadopta.cl/" target="_blank" rel="noopener noreferrer">
                    Fundación Adopta
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="https://fundacionhuellaanimal.cl/" target="_blank" rel="noopener noreferrer">
                    Fundación Huella Animal
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">Contacto</a>
              </li>
            </ul>

            <div className="ms-auto d-flex align-items-center">
              <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#loginModal" data-bs-placement="bottom" title="Iniciar Sesión">
                <i className="bi bi-person-circle" style={{ fontSize: '1.5rem' }}></i>
              </a>
              <a href="#" className="btn btn-light ms-2 d-inline-block" data-bs-toggle="modal" data-bs-target="#registroModal">
                Registrarse
              </a>
            </div>

            <div className="carrito">
              <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />
              <div id="cart" className="bg-white p-3">
                {isEmpty ? (
                  <p className="text-center">El carrito está vacío</p>
                ) : (
                  <>
                    <table className="w-100">
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Categoria</th>
                          <th>Título</th>
                          <th>Precio Antiguo</th>
                          <th>Precio Nuevo</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map(data => (
                          <tr key={data.id}>
                            <td>
                              <img className="img-fluid" src={`/img/${data.imagenSrc}.webp`} alt="imagen producto" />
                            </td>
                            <td>{data.categoria}</td>
                            <td>{data.titulo}</td>
                            <td className="fw-light text-decoration-line-through">
                              {data.precioAntiguo ? `$${data.precioAntiguo}` : ''}
                            </td>
                            <td className="fw-bold">{`$${data.precioNuevo}`}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
}


export default Header;
