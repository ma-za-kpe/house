import React, { useState } from 'react';
import { FaSearch, FaLock, FaUnlock } from 'react-icons/fa';

const transactionsData = [
  {
    id: 1,
    description: 'Transaction 1',
    amount: 100.0,
    locked: true,
  },
  {
    id: 2,
    description: 'Transaction 2',
    amount: 50.0,
    locked: false,
  },
  {
    id: 3,
    description: 'Transaction 3',
    amount: 75.0,
    locked: true,
  },
  // Add more transaction data
];

const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="container mx-auto p-4 pt-24">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-4">Transactions</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search transactions"
            className="w-full py-2 pl-8 pr-3 rounded-full border focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute left-3 top-2">
            <FaSearch className="text-gray-500" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {transactionsData
          .filter((transaction) => transaction.description.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((transaction) => (
            <div key={transaction.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h2 className="text-xl font-semibold mb-2">{transaction.description}</h2>
              <p className="text-gray-600">Amount: ${transaction.amount}</p>
              <button
                className={`mt-4 w-full bg-${transaction.locked ? 'blue' : 'blue'}-500 hover:bg-${transaction.locked ? 'blue' : ''}-700 text-white py-2 rounded-full transition duration-300 flex justify-center items-center`}
                disabled={!transaction.locked}
              >
                {transaction.locked ? <FaLock className="mr-2" /> : <FaUnlock className="mr-2" /> }
                {transaction.locked ? 'Unlock' : 'Completed'}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Transactions;
