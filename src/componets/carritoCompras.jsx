import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Carrito } from './carrito';
import { TarjetaProducto } from './tarjetaProducto';
import { productosIniciales } from '../data/productos';

// Componente principal
const CarritoCompras = () => {
  
  const [productos] = useState(productosIniciales);
  const [carrito, setCarrito] = useState([]);
  const [carritoVisible, setCarritoVisible] = useState(false);

  const agregarAlCarrito = (producto) => {
    setCarrito(carritoActual => {
      const productoExistente = carritoActual.find(item => item.id === producto.id);
      
      if (productoExistente) {
        return carritoActual.map(item =>
          item.id === producto.id 
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...carritoActual, { ...producto, cantidad: 1 }];
      }
    });
  };

  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad <= 0) {
      eliminarDelCarrito(id);
      return;
    }
    
    setCarrito(carritoActual =>
      carritoActual.map(item =>
        item.id === id ? { ...item, cantidad: nuevaCantidad } : item
      )
    );
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carritoActual => carritoActual.filter(item => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const toggleCarrito = () => {
    setCarritoVisible(!carritoVisible);
  };

  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-800">Mi Tienda Online</h1>
            <button
              onClick={toggleCarrito}
              className="relative bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200"
            >
              <ShoppingCart size={20} />
              Carrito
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Productos Destacados</h2>
          <p className="text-gray-600">Encuentra los mejores productos al mejor precio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.map((producto) => (
            <TarjetaProducto
              key={producto.id}
              producto={producto}
              agregarAlCarrito={agregarAlCarrito}
            />
          ))}
        </div>
      </main>

      <Carrito
        carrito={carrito}
        actualizarCantidad={actualizarCantidad}
        eliminarDelCarrito={eliminarDelCarrito}
        vaciarCarrito={vaciarCarrito}
        carritoVisible={carritoVisible}
        toggleCarrito={toggleCarrito}
      />
    </div>
  );
};

export default CarritoCompras;