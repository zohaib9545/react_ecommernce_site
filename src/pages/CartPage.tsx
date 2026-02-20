import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useCart } from '../context/CartContext';
import { CartItem } from '../components/CartItem';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const CartPage = () => {
  const { cart, totalPrice, clearCart } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
            <p className="text-xl text-gray-600 mb-6">Your cart is empty.</p>
            <Link to="/products">
              <Button variant="primary" size="lg">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-md">
              <div className="space-y-6">
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
              <div className="flex justify-end mt-6">
                <Button variant="outline" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </div>
            <div className="lg:col-span-1 bg-white p-8 rounded-xl shadow-md h-fit">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
              <div className="flex justify-between text-lg font-medium text-gray-700 mb-4">
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-medium text-gray-700 mb-6">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-2xl font-bold text-gray-900 border-t pt-4 mt-4">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <Button variant="primary" size="lg" className="w-full mt-8">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};
