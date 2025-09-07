import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqItems = [
    {
      question: "How is my retirement number calculated?",
      answer: "We use the widely-accepted 4% withdrawal rule, which suggests you can safely withdraw 4% of your retirement savings annually. Your retirement number is calculated as your annual expenses divided by 0.04 (or multiplied by 25). This ensures your savings will last throughout retirement when invested in a diversified portfolio."
    },
    {
      question: "What is a safe withdrawal rate?",
      answer: "The 4% rule is considered a safe withdrawal rate based on historical market data. It's designed to ensure your retirement savings last for 30+ years. Some financial experts suggest 3.5% for longer retirements or more conservative approaches, while others believe 4.5% may be sustainable with proper portfolio management."
    },
    {
      question: "How much should I save each month?",
      answer: "The amount depends on your current age, existing savings, and retirement goals. Generally, experts recommend saving 10-15% of your income for retirement. Our calculator shows exactly how much additional monthly savings you need based on your specific situation and timeline."
    },
    {
      question: "What investment return should I expect?",
      answer: "Historically, the S&P 500 has averaged about 10% annually, but a conservative estimate of 6-8% is often used for retirement planning to account for inflation and market volatility. Our default of 7% represents a balanced, long-term growth expectation for a diversified portfolio."
    },
    {
      question: "Should I include Social Security in my calculations?",
      answer: "This calculator focuses on your personal retirement savings needs. Social Security can supplement your retirement income, but it's wise to plan as if it's a bonus rather than your primary income source. The average Social Security benefit replaces only about 40% of pre-retirement income."
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl text-blue-900">Frequently Asked Questions</h2>
        <p className="text-gray-600">Everything you need to know about retirement planning</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <Card key={index} className="border border-gray-200">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-lg text-gray-900">{item.question}</h3>
              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}