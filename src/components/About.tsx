import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft, Calculator, TrendingUp, Shield, Users } from 'lucide-react';

export function About({ onNavigateHome }) {
  const features = [
    {
      icon: Calculator,
      title: "Simple & Accurate",
      description: "Uses the proven 4% withdrawal rule for reliable retirement planning calculations."
    },
    {
      icon: Shield,
      title: "100% Private",
      description: "All calculations happen in your browser. No data is stored or transmitted."
    },
    {
      icon: TrendingUp,
      title: "Visual Results",
      description: "Interactive charts show your retirement progress and year-by-year growth."
    },
    {
      icon: Users,
      title: "Expert Backed",
      description: "Based on widely-accepted financial planning principles and research."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={onNavigateHome}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 p-0"
          >
            <ArrowLeft size={20} />
            Back to Calculator
          </Button>
        </div>

        <div className="space-y-8">
          {/* Hero Section */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl text-blue-900">About Our Retirement Calculator</CardTitle>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                A free, privacy-focused tool to help you plan for a secure retirement using proven financial principles.
              </p>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              {/* Mission */}
              <section className="text-center space-y-4">
                <h2 className="text-2xl text-gray-900">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  We believe everyone deserves access to simple, reliable retirement planning tools. Our calculator helps you understand exactly how much you need to save for retirement, without complicated jargon or hidden fees.
                </p>
              </section>

              {/* Features Grid */}
              <section className="space-y-6">
                <h2 className="text-2xl text-gray-900 text-center">Why Choose Our Calculator</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <feature.icon className="text-blue-600" size={24} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg text-gray-900">{feature.title}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </CardContent>
          </Card>

          {/* Methodology */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Our Methodology</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl text-gray-900">The 4% Withdrawal Rule</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our calculator is based on the widely-accepted 4% withdrawal rule, developed through extensive historical market analysis. This rule suggests that you can safely withdraw 4% of your retirement portfolio annually, adjusted for inflation, with a high probability that your money will last 30+ years.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl text-gray-900">Conservative Assumptions</h3>
                <p className="text-gray-700 leading-relaxed">
                  We use conservative growth assumptions (default 7% annual return) to provide realistic projections. This accounts for market volatility and inflation over long investment periods, giving you confidence in your retirement planning.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl text-gray-900">Transparency</h3>
                <p className="text-gray-700 leading-relaxed">
                  All our calculations are transparent and based on established financial planning principles. We provide clear explanations in our FAQ section so you understand exactly how your retirement number is determined.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="border-0 shadow-lg bg-yellow-50 border-yellow-200">
            <CardContent className="p-8">
              <div className="space-y-4">
                <h3 className="text-xl text-yellow-900">Important Disclaimer</h3>
                <p className="text-yellow-800 leading-relaxed">
                  This calculator provides educational estimates based on the information you provide. Results should not be considered as personalized financial advice. Market conditions, inflation, healthcare costs, and other factors can significantly impact your actual retirement needs. We strongly recommend consulting with a qualified financial advisor for comprehensive retirement planning tailored to your specific situation.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline" className="border-yellow-400 text-yellow-700">Educational Tool Only</Badge>
                  <Badge variant="outline" className="border-yellow-400 text-yellow-700">Not Financial Advice</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center space-y-4">
              <h3 className="text-xl text-gray-900">Questions or Feedback?</h3>
              <p className="text-gray-700">
                We're committed to improving our tool and helping you plan for retirement. 
                If you have suggestions or find any issues, we'd love to hear from you.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 inline-block">
                <p className="text-gray-900 mb-2">Contact us at:</p>
                <a 
                  href="mailto:hello@retirementcalculator.com" 
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  hello@retirementcalculator.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}