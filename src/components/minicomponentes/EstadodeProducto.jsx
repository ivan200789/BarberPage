
export default function EstadodeProducto({ producto }) {
    return (
      <>
        {producto.stock > 0 ? (
          <span className="en-stock">En Stock</span>
        ) : (
          <span className="sin-stock">Sin Stock</span>
        )}
      </>
    );
  }