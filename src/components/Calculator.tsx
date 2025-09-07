import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent } from './ui/card';
import { Slider } from './ui/slider';
import { HelpCircle } from 'lucide-react';
import { Badge } from './ui/badge';

export function Calculator({ onCalculate, onShowFAQ }) {
  const [formData, setFormData] = useState({
    currentAge: '35',
    currentSavings: '50000',
    annualExpenses: '60000',
    returnRate: '7'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSliderChange = (field, values) => {
    setFormData(prev => ({
      ...prev,
      [field]: values[0].toString()
    }));
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const calculateRetirement = () => {
    const age = parseInt(formData.currentAge);
    const savings = parseFloat(formData.currentSavings) || 0;
    const expenses = parseFloat(formData.annualExpenses);
    const returnRate = parseFloat(formData.returnRate) / 100;
    
    // Retirement calculation using 4% withdrawal rule
    const retirementTarget = expenses / 0.04; // 25x annual expenses
    const yearsToRetirement = Math.max(0, 65 - age); // Assume retirement at 65
    
    // Calculate projected savings at retirement with compound growth
    const projectedSavings = savings * Math.pow(1 + returnRate, yearsToRetirement);
    
    // Generate year-by-year growth data
    const yearlyGrowthData = [];
    let currentAmount = savings;
    
    for (let year = 0; year <= yearsToRetirement; year++) {
      yearlyGrowthData.push({
        year: age + year,
        amount: Math.round(currentAmount),
        label: year === 0 ? 'Now' : `Age ${age + year}`
      });
      currentAmount = currentAmount * (1 + returnRate);
    }
    
    // Calculate shortfall/surplus
    const shortfall = Math.max(0, retirementTarget - projectedSavings);
    const surplus = Math.max(0, projectedSavings - retirementTarget);
    
    const results = {
      retirementTarget: Math.round(retirementTarget),
      currentSavings: savings,
      projectedSavings: Math.round(projectedSavings),
      shortfall,
      surplus,
      yearsToRetirement,
      monthlyNeeded: shortfall > 0 ? Math.round(shortfall / (yearsToRetirement * 12)) : 0,
      isOnTrack: projectedSavings >= retirementTarget,
      yearlyGrowthData
    };
    
    onCalculate(results);
  };

  const isFormValid = formData.currentAge && formData.annualExpenses && 
                     parseInt(formData.currentAge) >= 18 && 
                     parseInt(formData.currentAge) <= 100 &&
                     parseFloat(formData.annualExpenses) > 0;

  return (
    <div className="text-center space-y-8 mb-16">
      {/* Hero Section */}
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-blue-900 max-w-4xl mx-auto leading-tight">
          How much do I need to retire?
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Enter your details and find your retirement number in seconds.
        </p>
        
        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
          <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
            ✓ Trusted by 50,000+ users
          </Badge>
          <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
            ✓ Featured in major finance blogs
          </Badge>
        </div>
        
        <button 
          onClick={onShowFAQ}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm transition-colors"
        >
          <HelpCircle size={16} />
          How do we calculate this?
        </button>
      </div>

      {/* Calculator Form */}
      <Card className="max-w-2xl mx-auto border-0 shadow-lg">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Age */}
            <div className="space-y-2">
              <Label className="text-left block text-gray-700">
                Current Age
              </Label>
              <Input
                type="number"
                value={formData.currentAge}
                onChange={(e) => handleInputChange('currentAge', e.target.value)}
                min="18"
                max="60"
                className="w-full"
                placeholder="35"
              />
            </div>

            {/* Current Savings */}
            <div className="space-y-2">
              <Label className="text-left block text-gray-700">
                Current Savings ($)
              </Label>
              <Input
                type="number"
                value={formData.currentSavings}
                onChange={(e) => handleInputChange('currentSavings', e.target.value)}
                min="0"
                className="w-full"
                placeholder="50000"
              />
            </div>

            {/* Annual Expenses */}
            <div className="space-y-2">
              <Label className="text-left block text-gray-700">
                Annual Retirement Expenses ($)
              </Label>
              <Input
                type="number"
                value={formData.annualExpenses}
                onChange={(e) => handleInputChange('annualExpenses', e.target.value)}
                min="0"
                className="w-full"
                placeholder="60000"
              />
            </div>

            {/* Expected Return */}
            <div className="space-y-2">
              <Label className="text-left block text-gray-700">
                Expected Annual Return (%)
              </Label>
              <Input
                type="number"
                value={formData.returnRate}
                onChange={(e) => handleInputChange('returnRate', e.target.value)}
                min="0"
                max="200"
                step="0.5"
                className="w-full"
                placeholder="7"
              />
            </div>
          </div>

          <Button
            onClick={calculateRetirement}
            disabled={!isFormValid}
            className="w-full mt-8 h-14 text-lg bg-blue-900 hover:bg-blue-800 text-white disabled:bg-gray-300 disabled:text-gray-500"
          >
            Calculate My Retirement Number
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}