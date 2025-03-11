import React from "react";
import { Mail, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between pb-8 border-b border-gray-800">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <span className="text-primary font-bold text-xl mr-2">CU</span>
              <span className="font-medium">Project Reports</span>
            </div>
            <p className="text-gray-400 max-w-xs mb-6">
              Professional project report writing services for Chandigarh
              University BBA and MBA students.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:support@cuprojectreports.com"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                aria-label="Email us"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+919876543210"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                aria-label="Call us"
              >
                <PhoneCall size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-medium uppercase mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("services")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    BBA Reports
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("services")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    MBA Reports
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("portfolio")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    View Samples
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("home")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("order")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    Order Now
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("services")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    Pricing
                  </button>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="text-sm font-medium uppercase mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Mail size={16} className="mt-1 mr-3 text-gray-400" />
                  <span className="text-gray-400 text-sm">
                    romanempire1380@gmail.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} CU Project Wallah. All rights
            reserved.
          </p>
          <p className="mt-2">
            <Link
              to="/privacy-policy"
              className="mx-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="mx-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Terms of Service
            </Link>
          </p>
          <p className="mt-4 text-xs">
            Disclaimer: We provide customized model reports for reference
            purposes only. Students are advised to use our services ethically
            and responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
