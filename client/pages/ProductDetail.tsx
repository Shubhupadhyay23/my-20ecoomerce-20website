import Layout from "@/components/Layout";
import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <Layout>
      <div className="container-custom py-20">
        <Link
          to="/products"
          className="text-primary hover:text-red-600 font-medium mb-8 inline-block"
        >
          ← Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop"
              alt="Product"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Premium Quality
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Premium Wireless Headphones
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-lg">★★★★★</span>
                <span>(248 reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-primary">$149.99</span>
                <span className="text-xl text-muted-foreground line-through">$249.99</span>
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                  -40%
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="border-t border-b border-border py-6">
              <p className="text-muted-foreground leading-relaxed">
                Experience premium sound quality with active noise cancellation. Features 30-hour battery
                life, premium comfort design, and intuitive touch controls. Perfect for music enthusiasts
                and professionals alike.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="font-bold text-lg">Key Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Active Noise Cancellation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> 30-Hour Battery Life
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Premium Comfort Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Wireless Connectivity
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <button className="flex-1 btn-primary">
                Add to Cart
              </button>
              <button className="px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors font-semibold">
                ♡ Wishlist
              </button>
            </div>

            {/* Shipping Info */}
            <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-sm">
              <p className="font-semibold">📦 Free Shipping on orders over $50</p>
              <p className="text-muted-foreground">✓ Returns accepted within 30 days</p>
              <p className="text-muted-foreground">✓ 1-2 business day processing</p>
            </div>
          </div>
        </div>

        {/* Reviews Section - Placeholder */}
        <div className="mt-20 pt-12 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-8">Customer Reviews</h2>
          <div className="text-center py-12 bg-muted/20 rounded-lg">
            <p className="text-muted-foreground mb-4">Reviews section will be populated with real customer feedback</p>
            <p className="text-sm text-muted-foreground">Continue building this page as needed</p>
          </div>
        </div>

        {/* Related Products - Placeholder */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Products</h2>
          <div className="text-center py-12 bg-muted/20 rounded-lg">
            <p className="text-muted-foreground mb-4">Related products section coming soon</p>
            <p className="text-sm text-muted-foreground">Continue building this page as needed</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
