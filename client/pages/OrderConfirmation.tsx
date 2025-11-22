import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function OrderConfirmation() {
  return (
    <Layout>
      <div className="container-custom py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-20 h-20 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Order Confirmed!
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Thank you for your purchase
            </p>
            <p className="text-muted-foreground">
              Order #12345 • December 15, 2024
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-white border border-border rounded-lg p-8 mb-8 text-left">
            <h2 className="text-xl font-bold text-foreground mb-6">Order Details</h2>

            <div className="space-y-4 pb-6 border-b border-border mb-6">
              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop"
                  alt="Product"
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="font-semibold text-foreground">
                    Premium Wireless Headphones
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">Qty: 1</p>
                  <p className="text-primary font-bold mt-2">$299.99</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">$299.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-semibold">FREE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span className="font-semibold">$24.00</span>
              </div>
              <div className="flex justify-between text-lg border-t border-border pt-3">
                <span className="font-bold text-foreground">Total</span>
                <span className="font-bold text-primary">$323.99</span>
              </div>
            </div>
          </div>

          {/* Shipping & Billing Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-muted/50 rounded-lg p-6 text-left">
              <h3 className="font-bold text-foreground mb-4">Shipping Address</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                John Doe
                <br />
                123 Main Street
                <br />
                New York, NY 10001
                <br />
                (555) 123-4567
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 text-left">
              <h3 className="font-bold text-foreground mb-4">Billing Address</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                John Doe
                <br />
                123 Main Street
                <br />
                New York, NY 10001
                <br />
                (555) 123-4567
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-bold text-foreground mb-4">What's Next?</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ A confirmation email has been sent to your email</li>
              <li>✓ Your order will be processed and shipped within 1-2 business days</li>
              <li>✓ You can track your order from your account dashboard</li>
              <li>✓ Questions? Contact our support team anytime</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-outline">
              Continue Shopping
            </Link>
            <button className="btn-primary">
              Download Invoice
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
