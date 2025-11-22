import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus } from "lucide-react";

export default function Cart() {
  // Empty cart state - would be populated from state management
  const cartItems = [];
  const subtotal = 0;
  const shipping = 0;
  const tax = 0;
  const total = 0;

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-white">
        <div className="container-custom py-4">
          <p className="text-sm text-muted-foreground">
            <Link to="/" className="text-foreground hover:text-primary">
              Home
            </Link>{" "}
            / Cart
          </p>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-muted/30 py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-foreground">Shopping Cart</h1>
        </div>
      </section>

      {/* Cart Content */}
      <div className="container-custom py-12">
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Your cart is empty
            </h2>
            <p className="text-muted-foreground mb-8">
              Start shopping to add items to your cart
            </p>
            <Link to="/products" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-white border border-border rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <p className="text-lg font-bold text-primary mt-2">
                      ${item.price}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-muted rounded">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-semibold">
                      {item.quantity}
                    </span>
                    <button className="p-1 hover:bg-muted rounded">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="p-2 hover:bg-red-50 rounded text-destructive transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="h-fit bg-muted/50 rounded-lg p-6 space-y-4">
              <h2 className="text-xl font-bold text-foreground">
                Order Summary
              </h2>

              <div className="space-y-3 py-4 border-y border-border">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between text-lg">
                <span className="font-bold text-foreground">Total</span>
                <span className="font-bold text-primary text-xl">
                  ${total.toFixed(2)}
                </span>
              </div>

              <Link
                to="/checkout"
                className="w-full btn-primary justify-center"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/products"
                className="w-full block text-center py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors font-semibold"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
