import React from 'react';

function Header({ cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, onOpenLogin, onOpenRegister }) {
  // Calculamos si el carrito está vacío
  const isEmpty = React.useMemo(() => cart.length === 0, [cart]);
  // Calculamos el total a pagar
  const cartTotal = React.useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.precioNuevo), 0), [cart]);

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
              <a 
                href="#" 
                className="nav-link" 
                onClick={(e) => { e.preventDefault(); onOpenLogin(); }} 
                data-bs-placement="bottom" 
                title="Iniciar Sesión"
              >
                <i className="bi bi-person-circle" style={{ fontSize: '1.5rem' }}></i>
              </a>
              <button 
                type="button" 
                className="btn btn-light ms-2 d-inline-block" 
                onClick={onOpenRegister}
              >
                Registrarse
              </button>
            </div>

            <div className="carrito">
              <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />
              <div id="carrito" className="bg-white p-3">
                {isEmpty ? (
                  <p className="text-center">El carrito está vacío</p>
                ) : (
                  <>
                    <table className="w-100 table">
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map(producto => (
                          <tr key={producto.id}>
                            <td>
                              <img className="img-fluid" src={producto.imagen} alt="imagen producto" style={{width: '80px'}}/>
                            </td>
                            <td>{producto.titulo}</td>
                            <td className="fw-bold">{`$${producto.precioNuevo}`}</td>
                            <td className="flex align-items-start gap-4">
                              <button type="button" className="btn btn-dark" onClick={() => decreaseQuantity(producto.id)}>
                                -
                              </button>
                              {producto.quantity}
                              <button type="button" className="btn btn-dark" onClick={() => increaseQuantity(producto.id)}>
                                +
                              </button>
                            </td>
                            <td>
                              <button className="btn btn-danger" type="button" onClick={() => removeFromCart(producto.id)}>
                                X
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal}</span></p>
                    <button className="btn btn-dark w-100 mt-3 p-2" onClick={clearCart}>Vaciar Carrito</button>
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
