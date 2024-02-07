import PlugConnect from '@psychedelic/plug-connect';
import { useState } from 'react';

const whitelist = process.env.CANISTER_ID_FRONTEND || '';

const host = 'http://127.0.0.1:4943';

const Navbar = () => {
  const handleConnectWallet = async () => {
    console.log('Connecting to the Connect Wallet');
    const result = await window.ic.plug.requestBalance();
    console.log({ result });
  };

  return (
    <div className="bg-gray-800 flex justify-between px-8 text-white py-3 items-center">
      <h2 className="text-xl font-semibold">
        Difi-<span className="text-blue-600">lending</span>
      </h2>
      <div>
        <ul className="flex gap-6 items-center">
          <li>Home</li>
          <li>Dashboard</li>
          <li>Market</li>
        </ul>
      </div>
      <div>
        <div className="bg-slate-00">
          <PlugConnect
            dark
            title="Connect"
            onConnectCallback={handleConnectWallet}
            host={host}
            whitelist={[whitelist]}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
