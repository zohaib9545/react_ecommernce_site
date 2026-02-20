import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { products } from '../data/products';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { useCart } from '../context/CartContext';
import { Star } from 'lucide-react';

export const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<typeof products[number] | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Product Not Found</h1>
          <p className="text-gray-600 mt-4">The product you are looking for does not exist.</p>
          <Link to="/products" className="text-emerald-600 hover:underline mt-6 block">Back to Products</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 bg-white p-8 rounded-xl shadow-md">
          <div className="md:w-1/2">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-lg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">{product.name}</h1>
            <p className="text-emerald-600 text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                    stroke={i < Math.floor(product.rating) ? 'currentColor' : 'gray'}
                  />
                ))}
              </div>
              <span className="text-md text-gray-600 ml-2">({product.rating} Rating)</span>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
            <div className="flex items-center space-x-4 mb-6">
              <Input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                className="w-24 text-center"
                label="Quantity"
              />
              <Button onClick={handleAddToCart} variant="primary" size="lg">
                Add to Cart
              </Button>
            </div>
            <p className="text-sm text-gray-500">Category: <span className="font-medium text-gray-700">{product.category}</span></p>
            <p className="text-sm text-gray-500">In Stock: <span className="font-medium text-gray-700">{product.stock}</span></p>
          </div>
        </div>
        <div className="mt-8">
          <Link to="/products" className="text-emerald-600 hover:underline flex items-center">
            &larr; Back to Products
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};
