import { Plus } from "lucide-react";

export const TarjetaProducto = ({ producto, agregarAlCarrito }) => {
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img 
        src={producto.imagen} 
        alt={producto.nombre}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{producto.nombre}</h3>
        <p className="text-sm text-gray-600 mb-2">{producto.descripcion}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">${producto.precio}</span>
          <button
            onClick={() => agregarAlCarrito(producto)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200"
          >
            <Plus size={16} />
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};