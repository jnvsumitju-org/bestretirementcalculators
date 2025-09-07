import { useState } from 'react';
import { Calculator } from './components/Calculator';
import { Results } from './components/Results';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { About } from './components/About';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [calculationResults, setCalculationResults] = useState(null);

  const handleCalculate = (results) => {
    setCalculationResults(results);
    // Smooth scroll to results
    setTimeout(() => {
      const resultsElement = document.getElementById('results');
      if (resultsElement) {
        resultsElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  const handleShowFAQ = () => {
    setTimeout(() => {
      const faqElement = document.getElementById('faq');
      if (faqElement) {
        faqElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const navigateHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  // Render different pages based on current page
  if (currentPage === 'privacy') {
    return <PrivacyPolicy onNavigateHome={navigateHome} />;
  }

  if (currentPage === 'about') {
    return <About onNavigateHome={navigateHome} />;
  }

  // Home page (default)
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Calculator onCalculate={handleCalculate} onShowFAQ={handleShowFAQ} />
        
        {calculationResults && (
          <Results 
            id="results"
            results={calculationResults} 
          />
        )}
        
        <div id="faq" className="py-16 border-t border-gray-100">
          <FAQ />
        </div>
      </div>
      
      <Footer onNavigate={navigateToPage} />
    </div>
  );
}