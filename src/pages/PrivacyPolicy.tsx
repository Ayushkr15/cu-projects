import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Main Card Wrapper */}
        <div className="bg-white p-8 rounded-lg shadow">
          {/* Title & Date */}
          <h1 className="text-3xl font-bold mb-2 text-primary">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Last Updated: <span className="font-medium">10-Mar-2025</span>
          </p>

          {/* Content */}
          <div className="space-y-6 text-justify leading-relaxed text-gray-700">
            <p>
              Welcome to <strong>Cu Project Wallah</strong> (we,” “us,” or
              “our”). We value your trust and are committed to protecting your
              personal information. This Privacy Policy describes how we
              collect, use, and disclose your personal data when you use our
              website and services (collectively, the “Services”).
            </p>

            <p>
              By using our Services, you agree to the terms in this Privacy
              Policy. If you do not agree, please do not use our Services.
            </p>

            {/* 1. Information We Collect */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2 border-b border-gray-200 pb-2">
              1. Information We Collect
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Personal Information:</strong> Includes name, email
                address, phone number, university details, or other information
                you provide when you create an account or place an order.
              </li>
              <li>
                <strong>Payment Information:</strong> We may collect
                payment-related information (e.g., transaction details), but we
                do <strong>not</strong> store credit/debit card numbers on our
                servers. Payment processing is handled by secure third-party
                providers in compliance with the Payment and Settlement Systems
                Act, 2007.
              </li>
              <li>
                <strong>Usage Data:</strong> We automatically collect
                information such as your IP address, browser type, and pages
                visited to improve user experience and troubleshoot technical
                issues.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2 border-b border-gray-200 pb-2">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>To Provide Services:</strong> We use your information to
                process orders, deliver project reports, and communicate with
                you about your requests.
              </li>
              <li>
                <strong>Customer Support:</strong> We may use your information
                to respond to inquiries, resolve complaints, or provide
                technical support.
              </li>
              <li>
                <strong>Improving Services:</strong> Usage data helps us enhance
                site features, develop new products, and personalize your
                experience.
              </li>
              <li>
                <strong>Legal Compliance:</strong> We may use or disclose your
                information to comply with applicable laws and regulations
                (e.g., the Information Technology Act, 2000).
              </li>
            </ul>

            {/* 3. Disclosure of Your Information */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2 border-b border-gray-200 pb-2">
              3. Disclosure of Your Information
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Legal Requirements:</strong> We may disclose information
                if required by law, legal process, or governmental request, in
                accordance with Indian laws (e.g., the Indian Contract Act,
                1872; Information Technology Act, 2000).
              </li>
            </ul>

            {/* 4. Data Security */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2 border-b border-gray-200 pb-2">
              4. Data Security
            </h2>
            <p>
              We take reasonable measures to protect your data from unauthorized
              access, alteration, or destruction. However, no method of
              transmission over the internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>

            {/* 5. Cookies and Similar Technologies */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2 border-b border-gray-200 pb-2">
              5. Cookies and Similar Technologies
            </h2>
            <p>
              We use cookies and similar tracking technologies to enhance user
              experience, analyze trends, and administer the website. You can
              control cookies through your browser settings, but disabling
              cookies may limit some functionalities of our site.
            </p>

            {/* 6. Children’s Privacy */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2 border-b border-gray-200 pb-2">
              6. Children’s Privacy
            </h2>
            <p>
              Our Services are not intended for children under 18. We do not
              collect personal data from minors. If you believe we have
              inadvertently collected such information, please contact us
              immediately to remove it.
            </p>

            {/* 7. Your Rights */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2 border-b border-gray-200 pb-2">
              7. Your Rights
            </h2>
            <p>
              Depending on your jurisdiction, you may have the right to access,
              correct, or delete the personal information we hold about you. For
              any such requests, please contact us at{" "}
              <strong>romanempire1380@gmail.com</strong>.
            </p>

            {/* 8. Changes to This Policy */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2 border-b border-gray-200 pb-2">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated “Last Updated” date.
              Your continued use of our Services constitutes acceptance of these
              changes.
            </p>

            {/* 9. Contact Us */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2 border-b border-gray-200 pb-2">
              9. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <ul className="list-none ml-0 mt-2 space-y-1">
              <li>
                <strong>Email:</strong> romanempire1380@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
