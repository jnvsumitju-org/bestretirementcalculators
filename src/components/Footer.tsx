export function Footer({ onNavigate }) {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Legal & Links */}
        <div>
          <div className="text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <button 
                onClick={() => onNavigate('privacy')}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                About
              </button>
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