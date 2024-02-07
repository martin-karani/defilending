import React, { useState } from 'react';
import LiquidityBorrow from '../components/LiquidityBorrow';
import LiquidityDeposit from '../components/LiquidityDeposit';

function Market() {
  const [activeTab, setActiveTab] = useState('liquidityRequests'); // Initialize with "liquidityRequests" tab active

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="mx-auto max-w-7xl mt-5">
      <div className="text-sm font-medium text-center mb-5 text-gray-400 border-gray-700">
        <ul className="flex flex-wrap -mb-px gap-3">
          <li
            className="me-1"
            onClick={() => handleTabClick('liquidityDeposits')}
          >
            <a
              href="#"
              className={`inline-block uppercase px-0 py-2 border-b-2 ${
                activeTab === 'liquidityDeposits'
                  ? 'border-[#28ebdd]'
                  : 'border-transparent'
              } rounded-t-lg hover:border-gray-300 hover:text-gray-300 ${
                activeTab === 'liquidityDeposits' ? 'text-white' : ''
              }`}
            >
              Liquidity Deposits
            </a>
          </li>
          <li
            className="me-1"
            onClick={() => handleTabClick('liquidityRequests')}
          >
            <a
              href="#"
              className={`inline-block uppercase px-0 py-2 border-b-2 ${
                activeTab === 'liquidityRequests'
                  ? 'border-[#28ebdd]'
                  : 'border-transparent'
              } rounded-t-lg hover:border-gray-300 hover:text-gray-300 ${
                activeTab === 'liquidityRequests' ? 'text-white' : ''
              }`}
              aria-current="page"
            >
              LIQUIDITY REQUESTS
            </a>
          </li>
        </ul>
      </div>
      {activeTab === 'liquidityDeposits' && <LiquidityDeposit />}
      {activeTab === 'liquidityRequests' && <LiquidityBorrow />}
    </div>
  );
}

export default Market;
