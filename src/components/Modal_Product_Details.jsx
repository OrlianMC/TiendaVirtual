import { useState } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PropTypes from 'prop-types';
import { useCart } from '../components/context/useCart.jsx';

const ProductsDetails = ({ open, handleClose, product }) => {
    const { dispatch } = useCart();
    const [quantities, setQuantities] = useState({});

    if (!product) {
        return null;
    }


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

        if (product) {
            dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: quantities[id] || 1 } });
        }

        setQuantities((prev) => ({
            ...prev,
            [id]: 0,
        }));
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            className="flex items-center justify-center"
        >
            <Box className="relative bg-gray-200 bg-opacity-85 rounded-lg shadow-lg max-w-md mx-auto p-5 max-h-[670px] overflow-y-auto">
                <div className="flex justify-end">
                    <Button onClick={handleClose} className="mt-4 w-4 bg-red-500 text-white hover:bg-red-600">
                        <CloseIcon className="text-black hover:text-white" />
                    </Button>
                </div>
                <Typography id="modal-title" variant="h6" component="h2" className="text-center mb-4">
                    Detalles del Producto:
                </Typography>

                <div className="flex flex-col items-center">
                    <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-2 rounded" />
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <h5 className="p-4 text-gray-600">
                        <b>Descripción:</b>
                        <div className="max-h-[100px] overflow-y-auto">{product.description}</div>
                    </h5>
                    <h5 className="p-4 text-gray-600">
                        <b>Categoría:</b> {product.category}
                    </h5>
                    <p className="text-gray-700"><b>Precio:</b> ${product.price}</p>

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
                    <button
                        onClick={() => addToCart(product.id)}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        <AddShoppingCartIcon />
                    </button>
                </div>

            </Box>
        </Modal>
    );
};

ProductsDetails.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }),
};

export default ProductsDetails;