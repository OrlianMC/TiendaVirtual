// import { useCart } from '../context/useCart.jsx';
// import { Modal, Box, Typography, Button } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import PropTypes from 'prop-types';

// const ConfirmPurchaseModal = ({ open, handleClose }) => {
//     const { state, dispatch } = useCart();

//     const totalCost = state.items.reduce((total, item) => {
//         return total + item.price * item.quantity;
//     }, 0);

//     const confirmPurchase = () => {
//         console.log('Confirmando compra');
//         dispatch({ type: 'CLEAR_CART' });
//         handleClose();
//     };

//     return (
//         <Modal
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="modal-title"
//             aria-describedby="modal-description"
//             className="flex items-center justify-center"
//         >
//             <Box className="relative bg-gray-200 bg-opacity-85 rounded-lg shadow-lg max-w-md mx-auto p-5 max-h-[670px] overflow-y-auto">
//                 <div className="flex justify-end">
//                     <Button onClick={handleClose} className="mt-4 w-4 bg-red-500 text-white hover:bg-red-600">
//                         <CloseIcon className="text-black hover:text-white" />
//                     </Button>
//                 </div>
//                 <Typography id="modal-title" variant="h6" component="h2" className="text-center mb-4">
//                     Usted va a efectuar la compra de:
//                 </Typography>

//                 <div className="overflow-x-auto">
//                     <table className="min-w-full bg-white border border-gray-200">
//                         <thead>
//                             <tr className="bg-gray-100 text-gray-700">
//                                 <th className="py-2 px-4 border-b">Producto</th>
//                                 <th className="py-2 px-4 border-b text-right">Cantidad</th>
//                                 <th className="py-2 px-4 border-b text-right">Costo</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {state.items.length === 0 ? (
//                                 <tr>
//                                     <td colSpan="3" className="py-2 text-center">No hay productos en el carrito.</td>
//                                 </tr>
//                             ) : (
//                                 state.items.map(item => (
//                                     <tr key={item.id} className="hover:bg-gray-50">
//                                         <td className="py-2 px-4 border-b">{item.title}</td>
//                                         <td className="py-2 px-4 border-b text-right">{String(item.quantity).padStart(2, '0')}</td>
//                                         <td className="py-2 px-4 border-b text-right">${(item.price * item.quantity).toFixed(2)}</td>
//                                     </tr>
//                                 ))
//                             )}
//                         </tbody>
//                     </table>
//                 </div>

//                 <h3 className="mt-4 text-lg font-bold text-center">Total: ${(totalCost).toFixed(2)}</h3>

//                 <div className="flex justify-between mt-4">
//                     <Button
//                         onClick={confirmPurchase}
//                         className="bg-green-500 text-black py-2 px-4 rounded hover:bg-green-600 hover:text-white"
//                     >
//                         Aceptar
//                     </Button>
//                     <Button
//                         onClick={handleClose}
//                         className="bg-red-500 text-black py-2 px-4 rounded hover:bg-red-600 hover:text-white"
//                     >
//                         Cancelar
//                     </Button>
//                 </div>
//             </Box>
//         </Modal>
//     );
// };

// ConfirmPurchaseModal.propTypes = {
//     open: PropTypes.bool.isRequired,
//     handleClose: PropTypes.func.isRequired,
// };

// export default ConfirmPurchaseModal;
import { useState } from 'react';
import { useCart } from '../context/useCart.jsx';
import { Modal, Box, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

const ConfirmPurchaseModal = ({ open, handleClose }) => {
    const { state, dispatch } = useCart();
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const totalCost = state.items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    const confirmPurchase = () => {
        console.log('Confirmando compra');
        dispatch({ type: 'CLEAR_CART' });
        setConfirmationMessage('Pago realizado satisfactoriamente');
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
                    Usted va a efectuar la compra de:
                </Typography>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700">
                                <th className="py-2 px-4 border-b">Producto</th>
                                <th className="py-2 px-4 border-b text-right">Cantidad</th>
                                <th className="py-2 px-4 border-b text-right">Costo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.items.length === 0 ? (
                                <tr>
                                    <td colSpan="3" className="py-2 text-center">No hay productos en el carrito.</td>
                                </tr>
                            ) : (
                                state.items.map(item => (
                                    <tr key={item.id} className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border-b">{item.title}</td>
                                        <td className="py-2 px-4 border-b text-right">{String(item.quantity).padStart(2, '0')}</td>
                                        <td className="py-2 px-4 border-b text-right">${(item.price * item.quantity).toFixed(2)}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                <h3 className="mt-4 text-lg font-bold text-center">Total: ${(totalCost).toFixed(2)}</h3>

                {confirmationMessage && (
                    <Typography className="mt-4 text-green-600 text-center">
                        {confirmationMessage}
                    </Typography>
                )}

                <div className="flex justify-between mt-4">
                    <Button
                        onClick={confirmPurchase}
                        className="bg-green-500 text-black py-2 px-4 rounded hover:bg-green-600 hover:text-white"
                    >
                        Aceptar
                    </Button>
                    <Button
                        onClick={handleClose}
                        className="bg-red-500 text-black py-2 px-4 rounded hover:bg-red-600 hover:text-white"
                    >
                        Cancelar
                    </Button>
                </div>
            </Box>
        </Modal>
    );
};

ConfirmPurchaseModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default ConfirmPurchaseModal;