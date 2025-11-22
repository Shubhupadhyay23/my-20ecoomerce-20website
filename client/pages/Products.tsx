import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";
import { ChevronDown, Filter, X } from "lucide-react";

// Sample products
const allProducts = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 149.99,
    originalPrice: 249.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: 5,
    reviews: 248,
    category: "electronics",
    priceRange: "100-300",
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
    category: "electronics",
    priceRange: "300-500",
  },
  {
    id: "3",
    name: "Ultra Camera Lens",
    price: 599.99,
    image:
      "https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=500&h=500&fit=crop",
    rating: 5,
    reviews: 342,
    category: "electronics",
    priceRange: "500-1000",
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
    category: "accessories",
    priceRange: "50-100",
  },
  {
    id: "5",
    name: "Designer Sunglasses",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 95,
    category: "accessories",
    priceRange: "100-300",
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
    category: "electronics",
    priceRange: "0-50",
  },
  {
    id: "7",
    name: "Mechanical Keyboard RGB",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1587829191301-dc798b83add3?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 267,
    category: "electronics",
    priceRange: "100-300",
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
    category: "electronics",
    priceRange: "50-100",
  },
  {
    id: "9",
    name: "Premium Watch Band",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1523170335684-f006228986c3?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 89,
    category: "accessories",
    priceRange: "0-50",
  },
  {
    id: "10",
    name: "Laptop Stand Pro",
    price: 79.99,
    originalPrice: 119.99,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    rating: 4,
    reviews: 142,
    category: "accessories",
    priceRange: "50-100",
  },
  {
    id: "11",
    name: "USB-C Hub Multi-Port",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 201,
    category: "electronics",
    priceRange: "50-100",
  },
  {
    id: "12",
    name: "Desk Lamp LED",
    price: 54.99,
    originalPrice: 79.99,
    image:
      "https://images.unsplash.com/photo-1565182999555-2dd203ef3c0b?w=500&h=500&fit=crop",
    rating: 4,
    reviews: 165,
    category: "accessories",
    priceRange: "50-100",
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(
    null,
  );
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter products
  let filtered = allProducts;
  if (selectedCategory) {
    filtered = filtered.filter((p) => p.category === selectedCategory);
  }
  if (selectedPriceRange) {
    filtered = filtered.filter((p) => p.priceRange === selectedPriceRange);
  }

  // Sort products
  if (sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === "newest") {
    // Would use creation date in real app
    filtered.reverse();
  } else if (sortBy === "rating") {
    filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-white">
        <div className="container-custom py-4">
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground">Home</span> / Shop
          </p>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-muted/30 py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-foreground">
            Shop All Products
          </h1>
          <p className="text-muted-foreground mt-2">
            Discover our complete collection of premium products
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block space-y-6">
            {/* Filter Header */}
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-lg">Filters</h2>
              {(selectedCategory || selectedPriceRange) && (
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedPriceRange(null);
                  }}
                  className="text-sm text-primary hover:text-red-600 font-medium"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Category</h3>
              <div className="space-y-2">
                {["electronics", "accessories"].map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategory === cat}
                      onChange={() =>
                        setSelectedCategory(
                          selectedCategory === cat ? null : cat,
                        )
                      }
                      className="w-4 h-4 rounded border-border"
                    />
                    <span className="text-foreground capitalize">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Price</h3>
              <div className="space-y-2">
                {["0-50", "50-100", "100-300", "300-500", "500-1000"].map(
                  (range) => (
                    <label
                      key={range}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedPriceRange === range}
                        onChange={() =>
                          setSelectedPriceRange(
                            selectedPriceRange === range ? null : range,
                          )
                        }
                        className="w-4 h-4 rounded border-border"
                      />
                      <span className="text-foreground">${range}</span>
                    </label>
                  ),
                )}
              </div>
            </div>

            {/* Rating Filter */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Rating</h3>
              <div className="space-y-2">
                {[5, 4, 3].map((rating) => (
                  <label
                    key={rating}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-border"
                    />
                    <span className="text-foreground">{rating}★ & up</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
              <p className="text-muted-foreground">
                Showing {filtered.length} products
              </p>

              <div className="flex items-center gap-4">
                {/* Mobile Filter Button */}
                <button
                  className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
                  onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </button>

                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none pl-4 pr-10 py-2 rounded-lg border border-border bg-white cursor-pointer outline-none hover:border-primary transition-colors"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Mobile Filters */}
            {mobileFiltersOpen && (
              <div className="lg:hidden mb-8 p-6 bg-muted/50 rounded-lg space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-bold text-lg">Filters</h2>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="p-1"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Category Filter Mobile */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Category</h3>
                  <div className="space-y-2">
                    {["electronics", "accessories"].map((cat) => (
                      <label
                        key={cat}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCategory === cat}
                          onChange={() =>
                            setSelectedCategory(
                              selectedCategory === cat ? null : cat,
                            )
                          }
                          className="w-4 h-4 rounded border-border"
                        />
                        <span className="text-foreground capitalize">
                          {cat}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter Mobile */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Price</h3>
                  <div className="space-y-2">
                    {["0-50", "50-100", "100-300", "300-500", "500-1000"].map(
                      (range) => (
                        <label
                          key={range}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedPriceRange === range}
                            onChange={() =>
                              setSelectedPriceRange(
                                selectedPriceRange === range ? null : range,
                              )
                            }
                            className="w-4 h-4 rounded border-border"
                          />
                          <span className="text-foreground">${range}</span>
                        </label>
                      ),
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Products Grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <p className="text-lg text-muted-foreground mb-4">
                  No products found with the selected filters
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedPriceRange(null);
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
