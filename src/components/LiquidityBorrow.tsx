import { useState } from 'react';

interface Loan {
  loan: string;
  collateralValue: {
    cryptocurrency: string;
    defaultValue: string;
  };
  interest: string;
  apr: string;
  minimumCollateral: string;
  term: string;
  healthFactor: string;
  status: string;
  requestTX: string;
}

function LiquidityBorrow() {
  const [loanData, setLoanData] = useState<Loan[]>([
    {
      loan: '10,000 ADA',
      collateralValue: {
        cryptocurrency: '10,000 LQ',
        defaultValue: '(~48,837.4 ADA)',
      },
      interest: '4%',
      apr: '4.056%',
      minimumCollateral: '400 ADA',
      term: '360 days',
      healthFactor: '2.36',
      status: 'HEALTHY',
      requestTX:
        'c2b925056193aed3b450660c66447212731dfc43c921673ecfccbc562cc4e667',
    },
    {
      loan: '44,000 ADA',
      collateralValue: {
        cryptocurrency: '22,800 LENFI',
        defaultValue: '(~140,707.96 ADA)',
      },
      interest: '1.9%',
      apr: '8.159%',
      minimumCollateral: '836 ADA',
      term: '85 days',
      healthFactor: '1.57',
      status: 'HEALTHY',
      requestTX:
        'b7c02582ce0d13ff249bd91053673e34b9550526495b030d30ecd8ef635792e5',
    },
    {
      loan: '44,000 ADA',
      collateralValue: {
        cryptocurrency: '22,800 LENFI',
        defaultValue: '(~140,707.96 ADA)',
      },
      interest: '1.9%',
      apr: '8.159%',
      minimumCollateral: '836 ADA',
      term: '85 days',
      healthFactor: '1.57',
      status: 'HEALTHY',
      requestTX:
        'b7c02582ce0d13ff249bd91053673e34b9550526495b030d30ecd8ef635792e5',
    },
    {
      loan: '44,000 ADA',
      collateralValue: {
        cryptocurrency: '22,800 LENFI',
        defaultValue: '(~140,707.96 ADA)',
      },
      interest: '1.9%',
      apr: '8.159%',
      minimumCollateral: '836 ADA',
      term: '85 days',
      healthFactor: '1.57',
      status: 'HEALTHY',
      requestTX:
        'b7c02582ce0d13ff249bd91053673e34b9550526495b030d30ecd8ef635792e5',
    },
    {
      loan: '44,000 ADA',
      collateralValue: {
        cryptocurrency: '22,800 LENFI',
        defaultValue: '(~140,707.96 ADA)',
      },
      interest: '1.9%',
      apr: '8.159%',
      minimumCollateral: '836 ADA',
      term: '85 days',
      healthFactor: '1.57',
      status: 'HEALTHY',
      requestTX:
        'b7c02582ce0d13ff249bd91053673e34b9550526495b030d30ecd8ef635792e5',
    },
    {
      loan: '44,000 ADA',
      collateralValue: {
        cryptocurrency: '22,800 LENFI',
        defaultValue: '(~140,707.96 ADA)',
      },
      interest: '1.9%',
      apr: '8.159%',
      minimumCollateral: '836 ADA',
      term: '85 days',
      healthFactor: '1.57',
      status: 'HEALTHY',
      requestTX:
        'b7c02582ce0d13ff249bd91053673e34b9550526495b030d30ecd8ef635792e5',
    },
  ]);

  return (
    <div>
      <div className="relative overflow-x-auto rounded-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400">
          <thead className="text-xs  uppercase  bg-gray-700 text-gray-400">
            <tr className="py-6">
              <th scope="col" className="px-6 py-3">
                Loan
              </th>
              <th scope="col" className="px-6 py-3">
                Minimum collateral
              </th>
              <th scope="col" className="px-6 py-3">
                Interest
              </th>
              <th scope="col" className="px-6 py-3">
                Term
              </th>
              <th scope="col" className="px-6 py-3">
                Health factor
              </th>
              <th scope="col" className="px-6 py-3">
                Filters
              </th>
            </tr>
          </thead>
          <tbody>
            {loanData.map((loan, index) => (
              <tr key={index} className=" border-b bg-gray-800 border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-white"
                >
                  {loan.loan}
                </th>
                <td className="px-6 py-4">
                  <p className="text-white">
                    {loan.collateralValue.cryptocurrency}
                  </p>
                  <p>{loan.collateralValue.defaultValue}</p>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <span className="mr-2 text-white">{loan.interest}</span>
                    <span className="bg-black rounded text-[0.6rem] px-2 py-1">
                      APR {loan.apr}
                    </span>
                  </div>
                  <p>{loan.minimumCollateral}</p>
                </td>
                <td className="px-6 py-4 text-white">{loan.term}</td>
                <td className="px-6 py-4">
                  <p className="text-white text-lg">{loan.healthFactor}</p>
                  <p className="text-[0.7rem] border border-[#28eb5f] bg-[rgba(40,235,95,.2)] rounded-md w-fit px-2 ">
                    {loan.status}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <button className="border border-[#28ebdd] rounded-md px-3 py-2 font-medium">
                    DEPOSIT
                  </button>
                  <p className="text-xs mt-1">
                    Request TX: {loan.requestTX.slice(0, 5)}...
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LiquidityBorrow;
