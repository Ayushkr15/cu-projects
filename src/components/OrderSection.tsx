import React, { useState } from "react";
import { Upload, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

interface Order {
  name: string;
  email: string;
  phone: string;
  course: "BBA" | "MBA";
  projectTitle: string;
}

const OrderSection: React.FC = () => {
  const [formData, setFormData] = useState<Order>({
    name: "",
    email: "",
    phone: "",
    course: "BBA",
    projectTitle: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Must be 10 digits";
    }
    if (!formData.projectTitle.trim())
      newErrors.projectTitle = "Project title is required";

    return newErrors;
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const validationErrors = validateForm();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setIsSubmitting(true);

  try {
    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        course: formData.course,
        project_title: formData.projectTitle, // Must match template EXACTLY
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    console.log("EmailJS Success:", result);
    toast.success("Order submitted successfully!");
    setSubmitted(true);
  } catch (error) {
    console.error("EmailJS Failure:", error);
    toast.error("Failed to submit order", {
      description: error.text || "Please check your connection and try again",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="order" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary mb-3 inline-block">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Order Your Custom Project Report
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below to start your order. We'll contact you
            within 24 hours to discuss your project requirements.
          </p>
        </div>

        {submitted ? (
          <div className="max-w-lg mx-auto glass p-8 rounded-lg text-center animate-scale-in">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-8 w-8 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">
              Order Request Submitted!
            </h3>
            <p className="text-muted-foreground mb-6">
              Thank you for your order request. We'll contact you within 24
              hours to discuss your project details and payment instructions.
            </p>
            <div className="glass p-4 rounded-lg text-sm text-left mb-6">
              <h4 className="font-medium mb-2">Next Steps:</h4>
              <ol className="list-decimal list-inside space-y-2">
                <li>Wait for our confirmation email (within 24 hours)</li>
                <li>Pay the ₹1,000 deposit via UPI to secure your order</li>
                <li>
                  Receive your completed project report within the agreed
                  timeframe
                </li>
              </ol>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  course: "BBA",
                  projectTitle: "",
                });
              }}
              className="btn-premium px-6 py-3 font-medium hover:scale-[1.02] transition-transform"
            >
              Submit Another Order
            </button>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto glass p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name*
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.name ? "border-red-300" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.email ? "border-red-300" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone Number*
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.phone ? "border-red-300" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                    placeholder="98XXXXXX90"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Course Field */}
                <div>
                  <label
                    htmlFor="course"
                    className="block text-sm font-medium mb-2"
                  >
                    Course*
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="BBA">BBA</option>
                    <option value="MBA">MBA</option>
                  </select>
                </div>
              </div>

              {/* Project Title Field */}
              <div>
                <label
                  htmlFor="projectTitle"
                  className="block text-sm font-medium mb-2"
                >
                  Project Title/Topic*
                </label>
                <input
                  id="projectTitle"
                  name="projectTitle"
                  type="text"
                  value={formData.projectTitle}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.projectTitle ? "border-red-300" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                  placeholder="e.g., Market Analysis of Electric Vehicles"
                />
                {errors.projectTitle && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle size={12} className="mr-1" />
                    {errors.projectTitle}
                  </p>
                )}
              </div>

              {/* Pricing Section */}
              <div className="pt-4">
                <div className="glass p-4 rounded-md mb-6">
                  <h3 className="font-medium mb-2">Pricing:</h3>
                  <p className="text-sm mb-1">
                    BBA Project Reports:{" "}
                    <span className="font-medium">₹3,000</span>
                  </p>
                  <p className="text-sm mb-3">
                    MBA Project Reports:{" "}
                    <span className="font-medium">₹5,000</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Initial deposit: ₹1,000 (remaining balance due upon project
                    completion)
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-premium py-3 font-medium relative hover:scale-[1.02] transition-transform"
                  disabled={isSubmitting}
                >
                  {isSubmitting && (
                    <span className="absolute left-4 top-1/2 -translate-y-1/2">
                      <div className="h-5 w-5 border-2 border-white/50 rounded-full animate-spin" />
                    </span>
                  )}
                  {isSubmitting ? "Processing..." : "Submit Order Request"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderSection;
