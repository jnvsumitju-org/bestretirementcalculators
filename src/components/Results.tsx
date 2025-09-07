import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { TrendingUp, AlertTriangle } from 'lucide-react';

export function Results({ results, ...props }) {
  const formatCurrency = (amount) => {
    if (amount >= 1000000000000) {
      return `${(amount / 1000000000000).toFixed(4)}T`;
    } else if (amount >= 1000000000) {
      return `${(amount / 1000000000).toFixed(4)}B`;
    } else {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount);
    }
  };

  const formatGrowthValue = (amount) => {
    if (amount >= 1000000000000) {
      return `${(amount / 1000000000000).toFixed(2)}T`;
    } else if (amount >= 1000000000) {
      return `${(amount / 1000000000).toFixed(2)}B`;
    } else if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(2)}M`;
    } else if (amount >= 1000) {
      return `${(amount / 1000).toFixed(2)}K`;
    } else {
      return `${Math.round(amount)}`;
    }
  };

  const chartData = [
    {
      name: 'Current Trajectory',
      value: results.projectedSavings,
      color: results.isOnTrack ? '#059669' : '#dc2626'
    },
    {
      name: 'Retirement Target',
      value: results.retirementTarget,
      color: '#1e40af'
    }
  ];

  return (
    <div {...props} className="space-y-8 py-16 border-t border-gray-100">
      {/* Main Result */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-3 mb-4">
          {results.isOnTrack ? (
            <>
              <TrendingUp className="text-green-600" size={24} />
              <Badge className="px-4 py-2 bg-green-100 text-green-800 border-green-200 text-base">
                You're on track 🎉
              </Badge>
            </>
          ) : (
            <>
              <AlertTriangle className="text-orange-600" size={24} />
              <Badge className="px-4 py-2 bg-orange-100 text-orange-800 border-orange-200 text-base">
                You need to save more ⚠️
              </Badge>
            </>
          )}
        </div>
        
        <h2 className="text-2xl text-gray-600 mb-2">Your Retirement Number:</h2>
        <div className="text-5xl sm:text-6xl lg:text-7xl text-blue-900 mb-4">
          {formatCurrency(results.retirementTarget)}
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          This is how much you'll need to retire comfortably based on your expected annual expenses.
        </p>

        {/* Progress Bar */}
        <div className="max-w-lg mx-auto space-y-3">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Progress to Goal</span>
            <span>{Math.round((results.projectedSavings / results.retirementTarget) * 100)}%</span>
          </div>
          <Progress 
            value={Math.min((results.projectedSavings / results.retirementTarget) * 100, 100)} 
            className="h-3"
          />
        </div>
      </div>

      {/* Chart Section */}
      <Card className="max-w-4xl mx-auto border-0 shadow-lg">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl text-gray-800">
            Current Savings vs. Retirement Target
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="h-64 w-full mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  className="text-sm text-gray-600"
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => {
                    if (value >= 1000000000000) {
                      return `${(value / 1000000000000).toFixed(1)}T`;
                    } else if (value >= 1000000000) {
                      return `${(value / 1000000000).toFixed(1)}B`;
                    } else if (value >= 1000000) {
                      return `${(value / 1000000).toFixed(1)}M`;
                    } else if (value >= 1000) {
                      return `${(value / 1000).toFixed(1)}K`;
                    } else {
                      return `${value}`;
                    }
                  }}
                  className="text-sm text-gray-600"
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl text-blue-900 mb-1">
                {formatCurrency(results.currentSavings)}
              </div>
              <div className="text-sm text-blue-700">Current Savings</div>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl text-gray-900 mb-1">
                {formatCurrency(results.projectedSavings)}
              </div>
              <div className="text-sm text-gray-700">
                Projected at Age 65
              </div>
            </div>
            
            <div className={`text-center p-4 rounded-lg ${
              results.isOnTrack ? 'bg-green-50' : 'bg-red-50'
            }`}>
              <div className={`text-2xl mb-1 ${
                results.isOnTrack ? 'text-green-900' : 'text-red-900'
              }`}>
                {results.isOnTrack 
                  ? formatCurrency(results.surplus)
                  : formatCurrency(results.shortfall)
                }
              </div>
              <div className={`text-sm ${
                results.isOnTrack ? 'text-green-700' : 'text-red-700'
              }`}>
                {results.isOnTrack ? 'Surplus' : 'Shortfall'}
              </div>
            </div>
          </div>

          {/* Action Items */}
          {!results.isOnTrack && results.yearsToRetirement > 0 && (
            <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="text-lg text-yellow-900 mb-2">
                To reach your retirement goal:
              </h3>
              <p className="text-yellow-800">
                You need to save an additional{' '}
                <span className="font-semibold">
                  {formatCurrency(results.monthlyNeeded)} per month
                </span>{' '}
                for the next {results.yearsToRetirement} years.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Year-by-Year Growth Chart */}
      {results.yearlyGrowthData && results.yearlyGrowthData.length > 1 && (
        <Card className="max-w-4xl mx-auto border-0 shadow-lg">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl text-gray-800">
              How Your Money Will Grow Year by Year
            </CardTitle>
            <p className="text-gray-600">
              Based on your {parseFloat(((results.projectedSavings / results.currentSavings - 1) / results.yearsToRetirement * 100) || 0).toFixed(1)}% expected annual return
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={results.yearlyGrowthData} 
                  margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                >
                  <XAxis 
                    dataKey="label" 
                    axisLine={false}
                    tickLine={false}
                    className="text-xs text-gray-600"
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    interval={Math.max(1, Math.floor(results.yearlyGrowthData.length / 10))}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={formatGrowthValue}
                    className="text-xs text-gray-600"
                  />
                  <Bar 
                    dataKey="amount" 
                    radius={[4, 4, 0, 0]}
                    fill="#2563eb"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      )}


    </div>
  );
}