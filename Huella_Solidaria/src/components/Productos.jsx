import React from 'react';

function ProductoCard({ imagen, categoria, titulo, precioAntiguo, precioNuevo }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <img className="card-img-top product-img p-3" src={imagen} alt={titulo} />
        <div className="card-body d-flex flex-column">
          <h6 className="card-subtitle mb-2 text-muted">{categoria}</h6>
          <h5 className="card-title">{titulo}</h5>
          <div className="precio-container">
            <del className="text-muted">${precioAntiguo}</del>
            <span className="precio-oferta h4 fw-bold ms-2">${precioNuevo}</span>
          </div>
          <div className="mt-auto">
            <a href="#" className="btn btn-primary w-100 mb-2">Comprar ahora</a>
            <a href="#" className="btn btn-outline-secondary w-100">Añadir al carrito</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Productos({ productos }) {
  return (
    <section id="ofertas" className="mb-5">
      <div className="container">
        <h2 className="text-center mb-4">Ofertas</h2>
        <div className="row">
          {productos.map(producto => (
            <ProductoCard
              key={producto.id} 
              imagen={producto.imagen}
              categoria={producto.categoria}
              titulo={producto.titulo}
              precioAntiguo={producto.precioAntiguo}
              precioNuevo={producto.precioNuevo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Productos;