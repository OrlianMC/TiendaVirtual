import { useContext } from 'react';
import { CartContext } from './CartContext.jsx';

export const useCart = () => {
    return useContext(CartContext);
};