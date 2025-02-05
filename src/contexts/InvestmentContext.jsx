import React, { createContext, useContext, useState, useEffect } from 'react';
import investmentData from '../data/investments.json';

const InvestmentContext = createContext();
const STORAGE_KEY = 'investment_data';

// Move useInvestments definition before InvestmentProvider
function useInvestments() {
  const context = useContext(InvestmentContext);
  if (!context) {
    throw new Error('useInvestments must be used within an InvestmentProvider');
  }
  return context;
}

function InvestmentProvider({ children }) {
  // Initialize state from localStorage or fall back to investmentData
  const [investments, setInvestments] = useState(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : investmentData;
  });

  // Persist to localStorage whenever investments change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(investments));
  }, [investments]);

  if (!investments) {
    console.error('No investment data available');
    return null;
  }

  const transferFunds = ({ fromFund, fromType, toFund, amount }) => {
    setInvestments(prev => {
      const updatedBalances = [...prev.balances];
      
      // Get source balance for specific fund and contribution type
      const sourceBalance = updatedBalances.find(
        b => b.fundId === parseInt(fromFund) && 
        b.contributionTypeId === parseInt(fromType)
      );

      if (!sourceBalance) return prev;

      const targetNav = updatedBalances.find(
        b => b.fundId === parseInt(toFund) && 
        b.contributionTypeId === parseInt(fromType)
      )?.nav || sourceBalance.nav;

      // Calculate units to transfer
      const unitsToTransfer = amount / sourceBalance.nav;

      // Update source fund
      sourceBalance.units -= unitsToTransfer;
      sourceBalance.balance = sourceBalance.units * sourceBalance.nav;

      // Find or create target balance entry for the same contribution type
      let targetBalance = updatedBalances.find(
        b => b.fundId === parseInt(toFund) && 
        b.contributionTypeId === parseInt(fromType)
      );

      if (!targetBalance) {
        targetBalance = {
          fundId: parseInt(toFund),
          contributionTypeId: parseInt(fromType),
          units: 0,
          nav: targetNav,
          balance: 0
        };
        updatedBalances.push(targetBalance);
      }

      // Update target fund
      targetBalance.units += amount / targetBalance.nav;
      targetBalance.balance = targetBalance.units * targetBalance.nav;

      return { ...prev, balances: updatedBalances };
    });
  };

  const reallocateFunds = (allocations) => {
    setInvestments(prev => {
      const totalBalance = prev.balances.reduce((sum, b) => sum + b.balance, 0);
      const updatedBalances = [...prev.balances];

      // Calculate new balances based on allocation percentages while preserving contribution types
      prev.funds.forEach(fund => {
        const percentage = allocations[fund.id];
        const targetAmount = (totalBalance * percentage) / 100;
        
        // Get all contribution types for this fund
        const fundBalances = updatedBalances.filter(b => b.fundId === fund.id);
        const fundTotal = fundBalances.reduce((sum, b) => sum + b.balance, 0);
        
        // Adjust each contribution type proportionally
        fundBalances.forEach(balance => {
          const proportion = fundTotal > 0 ? balance.balance / fundTotal : 1 / fundBalances.length;
          const newBalance = targetAmount * proportion;
          balance.units = newBalance / balance.nav;
          balance.balance = balance.units * balance.nav;
        });
      });

      // Persist to localStorage (handled by useEffect)
      return { ...prev, balances: updatedBalances };
    });
  };

  // Reset data to initial state
  const resetToInitial = () => {
    setInvestments(investmentData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(investmentData));
  };

  const value = {
    investments,
    transferFunds,
    reallocateFunds,
    resetToInitial // Expose reset function
  };

  return (
    <InvestmentContext.Provider value={value}>
      {children}
    </InvestmentContext.Provider>
  );
}

// Export both as named exports
export { InvestmentProvider, useInvestments };
