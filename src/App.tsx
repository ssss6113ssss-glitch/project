import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { CartDrawer } from '@/components/CartDrawer';
import { Hero } from '@/components/Hero';
import { Heritage } from '@/components/Heritage';
import { ProductCollection } from '@/components/ProductCollection';
import { RugCollection } from '@/components/RugCollection';
import { Checkout } from '@/components/Checkout';
import { Contact, Footer } from '@/components/Contact';
import { PRODUCTS } from '@/data/products';

function App() {
  const saffronProducts = PRODUCTS.filter((p) => p.category === 'saffron');
  const gazProducts = PRODUCTS.filter((p) => p.category === 'confectionery');

  return (
    <CartProvider>
      <div className="min-h-screen bg-espresso-950">
        <Navbar />
        <CartDrawer />
        <main>
          <Hero />
          <Heritage />
          <ProductCollection
            id="saffron"
            products={saffronProducts}
            eyebrow="The Golden Spice"
            title="Premium Persian"
            highlight="Saffron"
            intro="Hand-harvested Negin, Sargol, and Pushal saffron from the sun-drenched fields of Khorasan — the historic homeland of the world's finest saffron for more than three millennia."
          />
          <ProductCollection
            id="confectionery"
            products={gazProducts}
            eyebrow="Persian Confectionery"
            title="Authentic Iranian"
            highlight="Gaz Nougat"
            intro="Traditional pistachio nougat from Bojnourd and Boldaji — soft manna-and-egg-white Gaz studded with premium Akbari pistachios. The beloved sweet of Persian celebrations, now available worldwide."
          />
          <RugCollection />
          <Checkout />
          <Contact />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
