import { Plus, Minus, Trash2, Package,X } from 'lucide-react';

export const Carrito = ({ carrito, actualizarCantidad, eliminarDelCarrito, vaciarCarrito, carritoVisible, toggleCarrito }) => {
  const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);

  if (!carritoVisible) return null;

  return (
    <div className="fixed top-0 right-0 h-full z-50">
      <div className="bg-white w-96 h-full overflow-y-auto shadow-2xl border-l border-gray-200">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Carrito de Compras</h2>
            <button
              onClick={toggleCarrito}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={16} />
            </button>
          </div>

          {carrito.length === 0 ? (
            <div className="text-center py-8">
              <Package size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">Tu carrito está vacío</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {carrito.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
                    <img 
                      src={item.imagen} 
                      alt={item.nombre}
                      className="w-12 h-12 object-cover rounded flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-800 text-sm truncate">{item.nombre}</h4>
                      <p className="text-blue-600 font-bold text-sm">${item.precio}</p>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <button
                        onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                        className="p-1 rounded bg-gray-100 hover:bg-gray-200"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-6 text-center font-medium text-sm">{item.cantidad}</span>
                      <button
                        onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                        className="p-1 rounded bg-gray-100 hover:bg-gray-200"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      onClick={() => eliminarDelCarrito(item.id)}
                      className="p-1 text-red-500 hover:bg-red-50 rounded flex-shrink-0"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold">Total:</span>
                  <span className="text-2xl font-bold text-blue-600">${total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors duration-200">
                  Proceder al Pago
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};