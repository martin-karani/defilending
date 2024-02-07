import LiquidityDeposit from '../components/LiquidityDeposit';

function Market() {
  return (
    <div className="mx-auto max-w-7xl mt-5 ">
      <div className="text-sm font-medium text-center mb-5   text-gray-400 border-gray-700">
        <ul className="flex flex-wrap -mb-px gap-3">
          <li className="me-1">
            <a
              href="#"
              className="inline-block uppercase  px-0 py-2 border-b-2 border-transparent rounded-t-lg  hover:border-gray-300 hover:text-gray-300"
            >
              Liquidity Deposits
            </a>
          </li>
          <li className="me-1">
            <a
              href="#"
              className="inline-block uppercase px-0 py-2 text-white border-b-2  rounded-t-lg active  border-[#28ebdd]"
              aria-current="page"
            >
              LIQUIDITY REQUESTS
            </a>
          </li>
        </ul>
      </div>
      <LiquidityDeposit />
    </div>
  );
}

export default Market;
