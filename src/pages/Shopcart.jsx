import { useState } from 'react';
import { useCart } from '../components/context/useCart';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmPurchaseModal from '../components/modals/Modal_Purchase_Payment.jsx';

function Shopcart() {
    const { state, dispatch } = useCart();
    const [modalOpen, setModalOpen] = useState(false);

    const increaseQuantity = (id) => {
        dispatch({ type: 'INCREASE_QUANTITY', payload: { id } });
    };

    const decreaseQuantity = (id) => {
        dispatch({ type: 'DECREASE_QUANTITY', payload: { id } });
    };

    const cleanCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const deleteProduct = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
    };

    const totalCost = state.items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Carro de Compras:</h2>
            {state.items.length === 0 ? (
                <p>No hay productos en el carro de compras.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700">
                                <th className="py-2 px-4 border-b">Producto</th>
                                <th className="py-2 px-4 border-b text-right">Cantidad</th>
                                <th className="py-2 px-4 border-b text-right">Costo</th>
                                <th className="py-2 px-4 border-b text-right">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.items.map(item => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b">{item.title}</td>
                                    <td className="py-2 px-4 border-b text-right">
                                        <button
                                            onClick={() => decreaseQuantity(item.id)}
                                            className="bg-gray-200 px-2 py-2 rounded hover:bg-gray-300"
                                        >
                                            -
                                        </button>
                                        {String(item.quantity).padStart(2, '0')}
                                        <button
                                            onClick={() => increaseQuantity(item.id)}
                                            className="bg-gray-200 px-2 py-2 rounded hover:bg-gray-300 ml-2"
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td className="py-2 px-4 border-b text-right">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </td>
                                    <td className="py-2 px-4 border-b text-right">
                                        <button
                                            onClick={() => deleteProduct(item.id)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            <DeleteIcon />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button
                        onClick={() => setModalOpen(true)}
                        className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    >
                        Pagar
                    </button>
                </div>
            )}
            <button
                onClick={cleanCart}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
                Limpiar Carrito
            </button>
            <h3 className="mt-4 text-lg font-bold">Total: ${(totalCost).toFixed(2)}</h3>

            <ConfirmPurchaseModal 
                open={modalOpen} 
                handleClose={() => setModalOpen(false)} 
            />
        </div>
    );
}

export default Shopcart;