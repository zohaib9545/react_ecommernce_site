import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { Button } from './Button';
import { useCart } from '../context/CartContext';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
      <Link to={`/products/${product.id}`} className="block relative h-48 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 flex-grow">
          <Link to={`/products/${product.id}`} className="hover:text-emerald-600 transition-colors">
            {product.name}
          </Link>
        </h3>
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                stroke={i < Math.floor(product.rating) ? 'currentColor' : 'gray'}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
        </div>
        <p className="text-gray-900 font-bold text-xl mb-4">${product.price.toFixed(2)}</p>
        <Button onClick={handleAddToCart} className="w-full" variant="primary">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
