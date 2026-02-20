import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-emerald-600 transition-colors">
          E-Shop
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/products" className="text-gray-700 hover:text-emerald-600 transition-colors text-lg font-medium">
            Products
          </Link>
          <Link to="/cart" className="relative text-gray-700 hover:text-emerald-600 transition-colors">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-emerald-600 transition-colors">
            <User size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};
