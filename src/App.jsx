import React, { useState } from 'react';
import LoginPage from './components/ui/LoginPage';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';

// Layout Component
const AppLayout = ({ children, onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-50/40">
      <nav className="bg-white/70 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl text-gray-800 font-medium">Investments</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">John Doe</span>
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-sm text-indigo-600 font-medium">JD</span>
              </div>
              <button
                onClick={onLogout}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-5xl mx-auto py-8 px-4">
        {children}
      </main>
    </div>
  );
};

// Balance Matrix Component
const BalanceMatrix = () => {
  const sampleData = {
    funds: [
      { id: 1, name: 'Vanguard 500 Index Fund', type: 'Stock' },
      { id: 2, name: 'Fidelity Growth Fund', type: 'Stock' },
      { id: 3, name: 'T.Rowe Price Bond Fund', type: 'Bond' }
    ],
    contributionTypes: [
      { id: 1, name: 'Traditional 401(k)' },
      { id: 2, name: 'Roth 401(k)' },
      { id: 3, name: 'Employer Match' }
    ],
    balances: [
      { fundId: 1, contributionTypeId: 1, units: 105.234, nav: 250.75, balance: 26386.42 },
      { fundId: 1, contributionTypeId: 2, units: 45.123, nav: 250.75, balance: 11312.10 },
      { fundId: 2, contributionTypeId: 1, units: 89.456, nav: 175.50, balance: 15699.53 },
      { fundId: 3, contributionTypeId: 3, units: 67.890, nav: 95.25, balance: 6466.52 }
    ]
  };

  const calculateTotalsByFund = () => {
    return sampleData.funds.map(fund => {
      const fundBalances = sampleData.balances.filter(b => b.fundId === fund.id);
      return {
        ...fund,
        total: fundBalances.reduce((sum, b) => sum + b.balance, 0)
      };
    });
  };

  const calculateTotalsByType = () => {
    return sampleData.contributionTypes.map(type => {
      const typeBalances = sampleData.balances.filter(b => b.contributionTypeId === type.id);
      return {
        ...type,
        total: typeBalances.reduce((sum, b) => sum + b.balance, 0)
      };
    });
  };

  const getBalance = (fundId, typeId) => {
    const balance = sampleData.balances.find(
      b => b.fundId === fundId && b.contributionTypeId === typeId
    );
    return balance ? balance.balance : 0;
  };

  const totalsByFund = calculateTotalsByFund();
  const totalsByType = calculateTotalsByType();
  const grandTotal = totalsByType.reduce((sum, type) => sum + type.total, 0);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="rounded-xl border-0 shadow-sm bg-white/60 backdrop-blur-lg">
      <CardHeader className="px-6">
        <CardTitle className="text-xl font-medium text-gray-900">Current Balance</CardTitle>
      </CardHeader>
      <CardContent className="px-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-4 px-4 text-left text-sm font-medium text-gray-500 border-b">
                  Investment
                </th>
                {sampleData.contributionTypes.map(type => (
                  <th key={type.id} className="py-4 px-4 text-right text-sm font-medium text-gray-500 border-b">
                    {type.name}
                  </th>
                ))}
                <th className="py-4 px-4 text-right text-sm font-medium text-gray-500 border-b">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {totalsByFund.map(fund => (
                <tr key={fund.id} className="group">
                  <td className="py-4 px-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">{fund.name}</span>
                      <span className="text-xs text-gray-500">{fund.type}</span>
                    </div>
                  </td>
                  {sampleData.contributionTypes.map(type => (
                    <td key={type.id} className="py-4 px-4 text-right text-sm text-gray-600">
                      {formatCurrency(getBalance(fund.id, type.id))}
                    </td>
                  ))}
                  <td className="py-4 px-4 text-right text-sm font-medium text-gray-900">
                    {formatCurrency(fund.total)}
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-50/50">
                <td className="py-4 px-4 font-medium text-sm text-gray-900">Total</td>
                {totalsByType.map(type => (
                  <td key={type.id} className="py-4 px-4 text-right font-medium text-sm text-gray-900">
                    {formatCurrency(type.total)}
                  </td>
                ))}
                <td className="py-4 px-4 text-right font-medium text-sm text-gray-900">
                  {formatCurrency(grandTotal)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

// Account Page Component
const AccountPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-medium text-gray-900">Account Overview</h1>
        <p className="mt-1 text-sm text-gray-500">
          Track your retirement savings and investment allocations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-xl border-0 shadow-sm bg-white/60 backdrop-blur-lg">
          <CardContent className="p-6">
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">Total Balance</p>
              <p className="text-3xl font-medium text-gray-900">$59,864</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-xl border-0 shadow-sm bg-white/60 backdrop-blur-lg">
          <CardContent className="p-6">
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">YTD Return</p>
              <p className="text-3xl font-medium text-green-600">+12.4%</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl border-0 shadow-sm bg-white/60 backdrop-blur-lg">
          <CardContent className="p-6">
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">Contribution Rate</p>
              <p className="text-3xl font-medium text-gray-900">8%</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <BalanceMatrix />
    </div>
  );
};

// Main App Component
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (credentials) => {
    const { email, password } = credentials;
    if (email === 'john.doe@example.com' && password === 'password1234') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <AppLayout onLogout={handleLogout}>
      <AccountPage />
    </AppLayout>
  );
};

export default App;