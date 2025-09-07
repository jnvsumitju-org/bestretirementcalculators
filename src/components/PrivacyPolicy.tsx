import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function PrivacyPolicy() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Privacy Policy | Best Retirement Calculator</title>
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://bestretirementcalculators.com/privacy" />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 p-0"
          >
            <ArrowLeft size={20} />
            Back to Calculator
          </Button>
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl text-blue-900">Privacy Policy</CardTitle>
            <p className="text-gray-600 mt-2">Last updated: September 2025</p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none p-8 space-y-6">
            <section className="space-y-4">
              <h2 className="text-xl text-gray-900">Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed">
                Our retirement calculator operates entirely in your browser. We do not collect, store, or transmit any personal financial information you enter into the calculator. All calculations are performed locally on your device.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl text-gray-900">Data Storage</h2>
              <p className="text-gray-700 leading-relaxed">
                Your financial information (current age, savings, expenses, etc.) is temporarily stored in your browser's memory only while using the calculator. This data is automatically cleared when you close your browser or navigate away from the page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl text-gray-900">Analytics and Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                We may use basic analytics tools to understand how visitors use our site (such as page views and time spent). These analytics do not track your personal information or financial data entered into the calculator.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl text-gray-900">Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain affiliate links to financial services we recommend. Clicking these links may share basic referral information with our partners, but never your personal financial data from the calculator.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl text-gray-900">Security</h2>
              <p className="text-gray-700 leading-relaxed">
                Since all calculations happen in your browser and no data is transmitted to our servers, your financial information remains completely private and secure on your device.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl text-gray-900">Changes to Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl text-gray-900">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about this privacy policy or our practices, please contact us through our About page.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}