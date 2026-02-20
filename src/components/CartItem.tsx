import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Input } from './Input';
import { Button } from './Button';
import { Trash2 } from 'lucide-react';

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
  };
}

export const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const handleRemoveClick = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-4 last:border-b-0">
      <div className="flex items-center space-x-4">
        <Link to={`/products/${item.id}`} className="flex-shrink-0">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-20 h-20 object-cover rounded-md"
            referrerPolicy="no-referrer"
          />
        </Link>
        <div className="flex flex-col">
          <Link to={`/products/${item.id}`} className="text-lg font-medium text-gray-800 hover:text-emerald-600 transition-colors">
            {item.name}
          </Link>
          <span className="text-gray-600">${item.price.toFixed(2)}</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Input
          id={`quantity-${item.id}`}
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-20 text-center"
        />
        <Button variant="ghost" onClick={handleRemoveClick} aria-label="Remove item">
          <Trash2 size={20} className="text-red-500" />
        </Button>
      </div>
    </div>
  );
};
