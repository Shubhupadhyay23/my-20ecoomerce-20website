import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, RotateCcw } from "lucide-react";

// Sample featured products
const featuredProducts = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 149.99,
    originalPrice: 249.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: 5,
    reviews: 248,
  },
  {
    id: "2",
    name: "Sleek Smartwatch Pro",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 186,
  },
  {
    id: "3",
    name: "Ultra Camera Lens",
    price: 599.99,
    image:
      "https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=500&h=500&fit=crop",
    rating: 5,
    reviews: 342,
  },
  {
    id: "4",
    name: "Professional Backpack",
    price: 89.99,
    originalPrice: 129.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    rating: 4,
    reviews: 124,
  },
  {
    id: "5",
    name: "Designer Sunglasses",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 95,
  },
  {
    id: "6",
    name: "Portable Charger 20K",
    price: 49.99,
    originalPrice: 79.99,
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop",
    rating: 5,
    reviews: 512,
  },
  {
    id: "7",
    name: "Mechanical Keyboard RGB",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1587829191301-dc798b83add3?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 267,
  },
  {
    id: "8",
    name: "Wireless Mouse Pro",
    price: 59.99,
    originalPrice: 89.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    rating: 4,
    reviews: 178,
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 overflow-hidden">
        <div className="container-custom py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <div className="inline-block mb-4">
                  <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
                    🎉 NEW COLLECTION 2024
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Discover Your
                  <span className="text-primary"> Perfect Style</span>
                </h1>
              </div>

              <p className="text-lg text-muted-foreground max-w-md">
                Explore our curated collection of premium products. From tech
                gadgets to fashion essentials, find everything you need at
                unbeatable prices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn-primary">
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <button className="btn-outline">View Collections</button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8 border-t border-border">
                <div>
                  <p className="text-2xl font-bold text-primary">50K+</p>
                  <p className="text-sm text-muted-foreground">Products</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">100K+</p>
                  <p className="text-sm text-muted-foreground">
                    Happy Customers
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground">Support</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 lg:h-full min-h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl" />
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop"
                alt="Hero Product"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">
                  On orders over $50. Fast delivery to your doorstep.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Secure Payment</h3>
                <p className="text-sm text-muted-foreground">
                  100% secure transactions with multiple payment options.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <RotateCcw className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Easy Returns</h3>
                <p className="text-sm text-muted-foreground">
                  30-day return policy for your peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Check out our most popular items curated for your shopping
              pleasure
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-foreground text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay in the Loop
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Subscribe to our newsletter for exclusive deals, new arrivals, and
              style tips delivered straight to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground outline-none"
              />
              <button className="btn-secondary">Subscribe</button>
            </div>

            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
