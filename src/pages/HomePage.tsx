import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { ProductGrid } from '../components/ProductGrid';
import { products } from '../data/products';

export const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/seed/ecommerce_hero/1920/1080?blur=4)', referrerPolicy: 'no-referrer' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h1 className="text-5xl font-bold mb-4">Welcome to E-Shop</h1>
              <p className="text-xl mb-8">Your one-stop shop for the latest gadgets and more!</p>
              <Link to="/products">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Featured Products</h2>
          <ProductGrid products={products.slice(0, 4)} /> {/* Display first 4 products as featured */}
        </section>
      </main>
      <Footer />
    </div>
  );
};
