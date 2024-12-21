import { Link } from 'react-router-dom';

function Home() {
  return (
    <div 
      className="flex flex-col items-center justify-center text-center min-h-screen p-4 bg-cover bg-center w-auto h-auto" 
      style={{ backgroundImage: 'url(/online_shop.jpg)' }}
    >
      <h1 className="text-4xl font-bold mb-4 text-black bg-opacity-50 bg-gray-300 shadow-md">Bienvenido a la Tienda Virtual</h1>
      <p className="text-lg text-center mb-6 text-black bg-opacity-50 bg-gray-300 shadow-sm">
        Explora nuestros productos y encuentra lo que más te gusta.
      </p>
      <Link to="/products" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
        Ver Productos
      </Link>
    </div>
  );
}

export default Home;