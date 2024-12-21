import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a la Tienda Virtual</h1>
      <p className="text-lg text-center mb-6">
        Explora nuestros productos y encuentra lo que más te gusta.
      </p>
      <Link to="/products" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
        Ver Productos
      </Link>
      {/* <Link to="/about" className="mt-4 text-blue-600 hover:underline">
        Acerca de Nosotros
      </Link> */}
    </div>
  );
}

export default Home;