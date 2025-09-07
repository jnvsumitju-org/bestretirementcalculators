import { Card, CardContent } from './ui/card';
import { Calculator, Target, TrendingUp, PiggyBank } from 'lucide-react';

export function Footer() {
  const relatedTools = [
    {
      icon: Calculator,
      title: "401(k) Calculator",
      description: "Optimize your employer retirement plan"
    },
    {
      icon: Target,
      title: "FIRE Calculator", 
      description: "Calculate your Financial Independence timeline"
    },
    {
      icon: TrendingUp,
      title: "Investment Calculator",
      description: "Project your investment growth over time"
    },
    {
      icon: PiggyBank,
      title: "Savings Rate Calculator",
      description: "Find your optimal monthly savings rate"
    }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Related Tools */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl text-gray-900">Related Financial Calculators</h2>
            <p className="text-gray-600">Explore more tools to optimize your financial future</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedTools.map((tool, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <tool.icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-gray-900">{tool.title}</h3>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Legal & Links */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <p className="text-sm text-gray-500">
              © 2024 Retirement Calculator. This tool provides estimates for educational purposes only. 
              Consult a financial advisor for personalized advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}