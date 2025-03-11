import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Main Card Wrapper */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-2 text-primary">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Last Updated: <span className="font-medium">10-Mar-2025</span>
          </p>

          <div className="space-y-6 text-justify leading-relaxed text-gray-700">
            <p>
              By accessing or using our website and services, you agree to
              comply with these Terms of Service. If you disagree with any part
              of these terms, you may not access the service.
            </p>

            {/* 1. Use of Services */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2 border-b border-gray-200 pb-2">
              1. Use of Services
            </h2>
            <p>
              Our services are provided for academic project assistance and are
              intended for educational purposes only. Users must not submit
              these projects as their own without proper referencing. Our
              services adhere to the Indian Copyright Act, 1957, and the IT Act,
              2000.
            </p>

            {/* 2. Payments and Refunds */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2 border-b border-gray-200 pb-2">
              2. Payments and Refunds
            </h2>
            <p>
              Payments for our services are non-refundable once the project
              report is delivered. We ensure quality and proper documentation,
              but the final use and submission remain the user’s responsibility.
            </p>

            {/* 3. User Responsibilities */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2 border-b border-gray-200 pb-2">
              3. User Responsibilities
            </h2>
            <p>
              Users are responsible for ensuring that their use of our reports
              complies with their institution’s academic integrity guidelines.
              We are not liable for any misuse or violation of university rules.
            </p>

            {/* 4. Changes to Terms */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2 border-b border-gray-200 pb-2">
              4. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be communicated via email or posted on our website. Your
              continued use of our services after any modifications indicates
              acceptance of the revised terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
