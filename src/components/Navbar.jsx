import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-blue-600 p-5 shadow-md flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-white text-2xl font-bold flex justify-center">Tienda Virtual</h1>
      <nav className="mt-2">
        <Link to="/" className="text-white hover:text-blue-200 mx-2">Inicio</Link>
        <Link to="/products" className="text-white hover:text-blue-200 mx-2">Productos</Link>
        <Link to="/shopcart" className="text-white hover:text-blue-200 mx-2">Carrito</Link>
      </nav>
    </div>
  );
}

export default Navbar;