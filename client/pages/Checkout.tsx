import Layout from "@/components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function Checkout() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });

  const steps = [
    { number: 1, title: "Shipping", description: "Where to send your order" },
    { number: 2, title: "Payment", description: "How you'll pay" },
    { number: 3, title: "Review", description: "Confirm your order" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Would process order here
    navigate("/order-confirmation");
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-white">
        <div className="container-custom py-4">
          <p className="text-sm text-muted-foreground">
            <Link to="/" className="text-foreground hover:text-primary">Home</Link> / Checkout
          </p>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-muted/30 py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-foreground">Checkout</h1>
        </div>
      </section>

      {/* Checkout Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Steps */}
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
                      currentStep >= step.number
                        ? "bg-primary text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.number ? "✓" : step.number}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-foreground">{step.title}</p>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-1 mx-4 transition-colors ${
                        currentStep > step.number ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Form Content */}
            <div className="bg-white rounded-lg border border-border p-8">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Shipping Information</h2>

                  <div className="space-y-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <input
                      type="text"
                      name="address"
                      placeholder="Street address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                    />

                    <div className="grid grid-cols-3 gap-4">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                      />
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                      />
                      <input
                        type="text"
                        name="zipCode"
                        placeholder="ZIP Code"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Payment Information</h2>

                  <div className="space-y-4">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="cardExpiry"
                        placeholder="MM/YY"
                        value={formData.cardExpiry}
                        onChange={handleInputChange}
                        className="px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                      />
                      <input
                        type="text"
                        name="cardCvc"
                        placeholder="CVC"
                        value={formData.cardCvc}
                        onChange={handleInputChange}
                        className="px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-900">
                      For demo purposes, use any valid-looking card number. Your payment information is secure.
                    </p>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Order Summary</h2>

                  <div className="space-y-4 py-6 border-y border-border">
                    <div className="flex justify-between">
                      <span className="text-foreground">Subtotal</span>
                      <span className="font-semibold">$299.99</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Shipping</span>
                      <span className="font-semibold">FREE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Tax</span>
                      <span className="font-semibold">$24.00</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-lg">
                    <span className="font-bold text-foreground">Total</span>
                    <span className="font-bold text-primary text-xl">$323.99</span>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-green-900">
                      ✓ Shipping: 1-2 business days
                      <br />✓ 30-day returns accepted
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              {currentStep > 1 && (
                <button
                  onClick={handlePrevStep}
                  className="px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors font-semibold"
                >
                  Back
                </button>
              )}

              {currentStep < 3 ? (
                <button onClick={handleNextStep} className="ml-auto btn-primary">
                  Next
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              ) : (
                <button onClick={handleSubmit} className="ml-auto btn-primary">
                  Place Order
                </button>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="h-fit bg-muted/50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-6">Order Summary</h3>
            <div className="space-y-4">
              <div className="flex gap-3 pb-4 border-b border-border">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&h=80&fit=crop"
                  alt="Product"
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <p className="font-semibold text-sm">Premium Wireless Headphones</p>
                  <p className="text-primary font-bold mt-1">$299.99</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">$299.99</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold">FREE</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-semibold">$24.00</span>
                </div>
              </div>

              <div className="flex justify-between text-lg pt-4 border-t border-border">
                <span className="font-bold">Total</span>
                <span className="font-bold text-primary">$323.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
