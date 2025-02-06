import React, { useState, useEffect, useRef } from 'react';
import { useInvestments } from '../../contexts/InvestmentContext';

const PreviewMatrix = ({ currentBalances, projectedBalances, contributionTypes, funds }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getBalance = (balances, fundId, typeId) => {
    const balance = balances.find(
      b => b.fundId === parseInt(fundId) && b.contributionTypeId === parseInt(typeId)
    );
    return balance ? balance.balance : 0;
  };

  return (
    <div className="mt-4 overflow-x-auto">
      <h3 className="text-lg font-medium text-gray-900 mb-2">Preview Changes</h3>
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="text-left py-2">Fund</th>
            {contributionTypes.map(type => (
              <th key={type.id} className="text-right py-2">{type.name}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {funds.map(fund => (
            <tr key={fund.id}>
              <td className="py-2">{fund.name}</td>
              {contributionTypes.map(type => (
                <td key={type.id} className="text-right py-2">
                  <div className="space-y-1">
                    <div className={getBalance(projectedBalances, fund.id, type.id) !== 
                         getBalance(currentBalances, fund.id, type.id) ? "text-indigo-600 font-medium" : ""}>
                      {formatCurrency(getBalance(projectedBalances, fund.id, type.id))}
                    </div>
                    {getBalance(projectedBalances, fund.id, type.id) !== 
                     getBalance(currentBalances, fund.id, type.id) && (
                      <div className="text-xs text-gray-500">
                        was: {formatCurrency(getBalance(currentBalances, fund.id, type.id))}
                      </div>
                    )}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const MoveMoneyModal = ({ isOpen, onClose }) => {
  const { investments, transferFunds, reallocateFunds } = useInvestments();
  const [mode, setMode] = useState('select'); // select, transfer, reallocate, preview-transfer, preview-reallocate
  const [transferData, setTransferData] = useState({
    fromFund: '',
    fromType: '',
    toFund: '',
    amount: ''
  });
  const [allocations, setAllocations] = useState(
    investments.funds.reduce((acc, fund) => ({ ...acc, [fund.id]: '' }), {})
  );
  const [previewBalances, setPreviewBalances] = useState(null);
  const modalRef = useRef();

  // Add formatCurrency function
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Make sure state is properly initialized
  const resetTransferData = () => {
    setTransferData({
      fromFund: '',
      fromType: '',
      toFund: '',
      amount: ''
    });
  };

  // Reset all state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setMode('select');
      resetTransferData();
      setAllocations(investments.funds.reduce((acc, fund) => ({ ...acc, [fund.id]: '' }), {}));
    }
  }, [isOpen, investments.funds]);

  const handleTransferSubmit = (e) => {
    e.preventDefault();
    transferFunds(transferData);
    onClose();
  };

  const handleReallocationSubmit = (e) => {
    e.preventDefault();
    const numericAllocations = Object.entries(allocations).reduce((acc, [key, value]) => ({
      ...acc,
      [key]: Number(value) || 0
    }), {});
    reallocateFunds(numericAllocations);
    onClose();
  };

  const updateAllocation = (fundId, value) => {
    const cleanValue = value.replace(/^0+/, '') || '';
    setAllocations(prev => ({ ...prev, [fundId]: cleanValue }));
  };

  const totalAllocation = Object.values(allocations).reduce((sum, val) => 
    sum + (val === '' ? 0 : Number(val)), 0
  );

  const handleClose = () => {
    resetTransferData();
    setMode('select');
    onClose();
  };

  const getAvailableBalance = (fundId, typeId) => {
    const balance = investments.balances.find(
      b => b.fundId === parseInt(fundId) && b.contributionTypeId === parseInt(typeId)
    );
    return balance ? balance.balance : 0;
  };

  const eligibleContributionTypes = investments.contributionTypes.filter(
    type => type.name !== 'Loan Fund' // Exclude loan fund
  );

  const calculatePreviewBalances = () => {
    const updatedBalances = [...investments.balances];
    const amount = parseFloat(transferData.amount);
    
    // Find source balance
    const sourceBalance = updatedBalances.find(
      b => b.fundId === parseInt(transferData.fromFund) && 
      b.contributionTypeId === parseInt(transferData.fromType)
    );

    if (!sourceBalance) return updatedBalances;

    const sourceNav = sourceBalance.nav;
    const targetNav = updatedBalances.find(
      b => b.fundId === parseInt(transferData.toFund) && 
      b.contributionTypeId === parseInt(transferData.fromType)
    )?.nav || sourceNav;

    // Calculate and update preview balances
    const unitsToTransfer = amount / sourceNav;
    const previewSource = { ...sourceBalance };
    previewSource.units -= unitsToTransfer;
    previewSource.balance = previewSource.units * previewSource.nav;

    let previewTarget = updatedBalances.find(
      b => b.fundId === parseInt(transferData.toFund) && 
      b.contributionTypeId === parseInt(transferData.fromType)
    );

    if (!previewTarget) {
      previewTarget = {
        fundId: parseInt(transferData.toFund),
        contributionTypeId: parseInt(transferData.fromType),
        units: 0,
        nav: targetNav,
        balance: 0
      };
      updatedBalances.push(previewTarget);
    }

    previewTarget = { ...previewTarget };
    previewTarget.units += amount / targetNav;
    previewTarget.balance = previewTarget.units * previewTarget.nav;

    return updatedBalances.map(balance => {
      if (balance.fundId === previewSource.fundId && 
          balance.contributionTypeId === previewSource.contributionTypeId) {
        return previewSource;
      }
      if (balance.fundId === previewTarget.fundId && 
          balance.contributionTypeId === previewTarget.contributionTypeId) {
        return previewTarget;
      }
      return balance;
    });
  };

  const handlePreview = (e) => {
    e.preventDefault();
    const projectedBalances = calculatePreviewBalances();
    setPreviewBalances(projectedBalances);
    setMode('preview-transfer');
  };

  const calculateReallocationPreview = () => {
    const updatedBalances = [...investments.balances];
    const totalBalance = updatedBalances.reduce((sum, b) => sum + b.balance, 0);

    // Calculate new balances based on allocation percentages while preserving contribution types
    investments.funds.forEach(fund => {
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

    return updatedBalances;
  };

  const handleReallocationPreview = (e) => {
    e.preventDefault();
    const projectedBalances = calculateReallocationPreview();
    setPreviewBalances(projectedBalances);
    setMode('preview-reallocate');
  };

  // Handle click outside modal
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div ref={modalRef} className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
        {/* Close button - always visible */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <h2 className="text-xl font-medium text-gray-900 mb-4">Move Money</h2>
        
        {mode === 'select' && (
          <div className="space-y-4">
            <button
              className="w-full p-4 text-left border rounded-lg hover:bg-gray-50"
              onClick={() => setMode('transfer')}
            >
              <h3 className="font-medium">Transfer</h3>
              <p className="text-sm text-gray-500">Move money from one fund to another</p>
            </button>
            <button
              className="w-full p-4 text-left border rounded-lg hover:bg-gray-50"
              onClick={() => setMode('reallocate')}
            >
              <h3 className="font-medium">Reallocate</h3>
              <p className="text-sm text-gray-500">Adjust allocation across all funds</p>
            </button>
          </div>
        )}

        {mode === 'transfer' && (
          <form onSubmit={handlePreview} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">From Fund</label>
              <select
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                value={transferData.fromFund}
                onChange={(e) => setTransferData(prev => ({ ...prev, fromFund: e.target.value, fromType: '' }))}
                required
              >
                <option value="">Select Fund</option>
                {investments.funds.map(fund => (
                  <option key={fund.id} value={fund.id}>{fund.name}</option>
                ))}
              </select>
            </div>

            {transferData.fromFund && (
              <div>
                <label className="block text-sm font-medium text-gray-700">From Bucket</label>
                <select
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                  value={transferData.fromType}
                  onChange={(e) => setTransferData(prev => ({ ...prev, fromType: e.target.value }))}
                  required
                >
                  <option value="">Select Bucket</option>
                  {eligibleContributionTypes.map(type => (
                    <option key={type.id} value={type.id}>
                      {type.name} ({formatCurrency(getAvailableBalance(transferData.fromFund, type.id))})
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">To Fund</label>
              <select
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                value={transferData.toFund}
                onChange={(e) => setTransferData(prev => ({ ...prev, toFund: e.target.value }))}
                required
              >
                <option value="">Select Fund</option>
                {investments.funds.map(fund => (
                  <option key={fund.id} value={fund.id}>{fund.name}</option>
                ))}
              </select>
            </div>

            {transferData.fromType && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Amount ($)</label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                  value={transferData.amount}
                  onChange={(e) => setTransferData(prev => ({ ...prev, amount: e.target.value }))}
                  required
                  min="0"
                  max={getAvailableBalance(transferData.fromFund, transferData.fromType)}
                />
                <p className="mt-1 text-sm text-gray-500">
                  Available: {formatCurrency(getAvailableBalance(transferData.fromFund, transferData.fromType))}
                </p>
              </div>
            )}
            
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
              >
                Preview Transfer
              </button>
            </div>
          </form>
        )}

        {mode === 'preview-transfer' && (
          <div className="space-y-4">
            <PreviewMatrix 
              currentBalances={investments.balances}
              projectedBalances={previewBalances}
              contributionTypes={investments.contributionTypes}
              funds={investments.funds}
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setMode('transfer')}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Back
              </button>
              <button
                onClick={() => {
                  transferFunds(transferData);
                  onClose();
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
              >
                Confirm Transfer
              </button>
            </div>
          </div>
        )}

        {mode === 'reallocate' && (
          <form onSubmit={handleReallocationPreview} className="space-y-4">
            {investments.funds.map(fund => (
              <div key={fund.id}>
                <label className="block text-sm font-medium text-gray-700">
                  {fund.name}
                  <span className="text-sm text-gray-500 ml-2">
                    (Current: {formatCurrency(investments.balances
                      .filter(b => b.fundId === fund.id)
                      .reduce((sum, b) => sum + b.balance, 0))})
                  </span>
                </label>
                <div className="mt-1 flex items-center">
                  <input
                    type="number"
                    className="block w-full rounded-md border border-gray-300 p-2"
                    value={allocations[fund.id]}
                    onChange={(e) => updateAllocation(fund.id, e.target.value)}
                    min="0"
                    max="100"
                    placeholder="0"
                  />
                  <span className="ml-2">%</span>
                </div>
              </div>
            ))}
            <div className="text-sm text-gray-500">
              Total Allocation: {totalAllocation}%
              {totalAllocation !== 100 && (
                <span className="text-red-500 ml-2">
                  (Must equal 100%)
                </span>
              )}
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={totalAllocation !== 100}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md disabled:bg-gray-300"
              >
                Preview Reallocation
              </button>
            </div>
          </form>
        )}

        {mode === 'preview-reallocate' && (
          <div className="space-y-4">
            <PreviewMatrix 
              currentBalances={investments.balances}
              projectedBalances={previewBalances}
              contributionTypes={investments.contributionTypes}
              funds={investments.funds}
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setMode('reallocate')}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Back
              </button>
              <button
                onClick={() => {
                  reallocateFunds(allocations);
                  onClose();
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
              >
                Confirm Reallocation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoveMoneyModal;
