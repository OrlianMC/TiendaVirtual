// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Modal_Product_Details from '../components/Modal_Product_Details.jsx';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import WysiwygIcon from '@mui/icons-material/Wysiwyg';

// function Products() {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [productDetails, setProductDetails] = useState();
//     const [modalOpen, setModalOpen] = useState(false);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get('https://fakestoreapi.com/products');
//                 setProducts(response.data);
//             } catch (err) {
//                 setError('Error al obtener los productos');
//                 console.log(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, []);

//     const [quantities, setQuantities] = useState({});

//     const increaseQuantity = (id) => {
//         setQuantities((prev) => ({
//             ...prev,
//             [id]: (prev[id] || 0) + 1,
//         }));
//     };

//     const decreaseQuantity = (id) => {
//         setQuantities((prev) => ({
//             ...prev,
//             [id]: Math.max((prev[id] || 0) - 1, 0),
//         }));
//     };

//     const addToCart = (id) => {
//         console.log(`Añadir producto ${id} al carrito con cantidad: ${quantities[id] || 0}`);
//         setQuantities((prev) => ({
//             ...prev,
//             [id]: 0,
//         }));
//     };

//     const viewDetails = (product) => {
//         console.log(`Ver detalles del producto: ${product.id} con nombre: ${product.title} y descripción: ${product.description}`);
//         setProductDetails(product);
//         setModalOpen(true);
//     };

//     const handleCloseModal = () => {
//         setModalOpen(false);
//         setProductDetails(undefined);
//     };

//     if (loading) return <div className="text-center">Cargando productos...</div>;
//     if (error) return <div className="text-red-500 text-center">{error}</div>;

//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
//             {products.map(product => (
//                 <div key={product.id} className="bg-white shadow-md rounded-lg p-4 w-30 h-30 flex flex-col items-center min-h-[300px]">
//                     <img src={product.image} alt={product.title} className="w-full h-20 object-contain mb-2" />
//                     <h3 className="text-lg font-semibold text-center w-full min-h-[80px]">{product.title}</h3>
//                     <p className="text-gray-700">Precio: ${product.price}</p>

//                     <div className="flex items-center mt-2">
//                         <button
//                             onClick={() => decreaseQuantity(product.id)}
//                             className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400"
//                         >
//                             -
//                         </button>
//                         <span className="mx-2">{quantities[product.id] || 0}</span>
//                         <button
//                             onClick={() => increaseQuantity(product.id)}
//                             className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400"
//                         >
//                             +
//                         </button>
//                     </div>

//                     <div className="flex justify-end p-3">
//                         <button
//                             onClick={() => addToCart(product.id)}
//                             className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mx-2"
//                         >
//                             <AddShoppingCartIcon />
//                         </button>
//                         <button
//                             onClick={() => viewDetails(product)}
//                             className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mx-2"
//                         >
//                             <WysiwygIcon />
//                         </button>
//                     </div>
//                 </div>
//             ))}
//             <Modal_Product_Details
//                 open={modalOpen}
//                 handleClose={handleCloseModal}
//                 product={productDetails}
//             />
//         </div>
//     );
// }

// export default Products;
import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal_Product_Details from '../components/Modal_Product_Details.jsx';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [productDetails, setProductDetails] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (err) {
                setError('Error al obtener los productos');
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = products.filter(product => {
        const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
        return matchesSearchTerm && matchesCategory;
    });

    const [quantities, setQuantities] = useState({});

    const increaseQuantity = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + 1,
        }));
    };

    const decreaseQuantity = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: Math.max((prev[id] || 0) - 1, 0),
        }));
    };

    const addToCart = (id) => {
        console.log(`Añadir producto ${id} al carrito con cantidad: ${quantities[id] || 0}`);
        setQuantities((prev) => ({
            ...prev,
            [id]: 0,
        }));
    };

    const viewDetails = (product) => {
        console.log(`Ver detalles del producto: ${product.id} con nombre: ${product.title} y descripción: ${product.description}`);
        setProductDetails(product);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setProductDetails(undefined);
    };

    if (loading) return <div className="text-center">Cargando productos...</div>;
    if (error) return <div className="text-red-500 text-center">{error}</div>;

    return (
        <div className="p-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 w-full md:w-1/2">
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        className="border p-2 rounded w-full"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="mb-4 w-full md:w-1/3">
                    <select
                        className="border p-2 rounded w-full"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">Todas las categorías</option>
                        {Array.from(new Set(products.map(product => product.category))).map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredProducts.map(product => (
                    <div key={product.id} className="bg-white shadow-md rounded-lg p-4 w-30 h-30 flex flex-col items-center min-h-[300px]">
                        <img src={product.image} alt={product.title} className="w-full h-20 object-contain mb-2" />
                        <h3 className="text-lg font-semibold text-center w-full min-h-[80px]">{product.title}</h3>
                        <p className="text-gray-700">Precio: ${product.price}</p>

                        <div className="flex items-center mt-2">
                            <button
                                onClick={() => decreaseQuantity(product.id)}
                                className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400"
                            >
                                -
                            </button>
                            <span className="mx-2">{quantities[product.id] || 0}</span>
                            <button
                                onClick={() => increaseQuantity(product.id)}
                                className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400"
                            >
                                +
                            </button>
                        </div>

                        <div className="flex justify-end p-3">
                            <button
                                onClick={() => addToCart(product.id)}
                                className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mx-2"
                            >
                                <AddShoppingCartIcon />
                            </button>
                            <button
                                onClick={() => viewDetails(product)}
                                className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mx-2"
                            >
                                <WysiwygIcon />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Modal_Product_Details
                open={modalOpen}
                handleClose={handleCloseModal}
                product={productDetails}
            />
        </div>
    );
}

export default Products;