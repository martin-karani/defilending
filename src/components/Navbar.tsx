import PlugConnect from '@psychedelic/plug-connect'
import React, { useState } from 'react'

const Navbar = () => {
    const handleConnectWallet = async () => {
        console.log('Connecting to the Connect Wallet');
        const result = await window.ic.plug.requestBalance();
        console.log({ result });
      }

      const [currentPage, setCurrentPage] = useState('home')
      
  return (
    <div className='bg-black flex justify-between px-8 text-white py-3 items-center'>
        <h2 className='text-xl font-semibold'>Difi-<span className='text-blue-600'>lending</span></h2>
        <div>
            <ul className='flex gap-6 items-center'>
                <li 
                >Home</li>
                <li>Dashboard</li>
                <li>Market</li>
            </ul>
        </div>
        <div>
        <PlugConnect
          title="Connect Wallet"
          onConnectCallback={handleConnectWallet}
          host="http://127.0.0.1:4943"
          whitelist={['bd3sg-teaaa-aaaaa-qaaba-cai']}
        />
        </div>
    </div>
  )
}

export default Navbar