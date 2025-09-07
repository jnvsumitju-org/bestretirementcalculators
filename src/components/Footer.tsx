import * as React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Legal & Links */}
        <div>
          <div className="text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <Link 
                to="/privacy"
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/about"
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                About
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              © 2025 bestretirementcalculators.com - This tool provides estimates for educational purposes only. 
              Consult a financial advisor for personalized advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}