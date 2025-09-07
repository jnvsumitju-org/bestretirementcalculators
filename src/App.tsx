import * as React from 'react';
import { useState, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calculator } from './components/Calculator';
import { Footer } from './components/Footer';

const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const Results = lazy(() => import('./components/Results').then(m => ({ default: m.Results })));

export default function App() {
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

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>Best Retirement Calculator | Plan Your Retirement Number</title>
        <meta name="description" content="Free retirement calculator using the 4% rule. Estimate your retirement number, see if you're on track, and get clear charts and guidance." />
        <meta name="keywords" content="retirement calculator, 4% rule, financial independence, retirement planning, FIRE" />
        <link rel="canonical" href="https://bestretirementcalculators.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Best Retirement Calculator" />
        <meta property="og:description" content="Estimate your retirement number in seconds with the 4% rule." />
        <meta property="og:url" content="https://bestretirementcalculators.com/" />
        <meta property="og:image" content="/og.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Retirement Calculator" />
        <meta name="twitter:description" content="Estimate your retirement number in seconds with the 4% rule." />
        <meta name="twitter:image" content="/og.svg" />
      </Helmet>
      <main className="flex-1">
        <Suspense fallback={<div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-gray-500">Loading…</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                  <Calculator onCalculate={handleCalculate} onShowFAQ={handleShowFAQ} />
                  {calculationResults && (
                    <Suspense fallback={<div className="text-gray-500 mt-8">Loading results…</div>}>
                      <Results id="results" results={calculationResults} />
                    </Suspense>
                  )}
                  <div id="faq" className="py-16 border-t border-gray-100">
                    <FAQ />
                  </div>
                </div>
              }
            />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}