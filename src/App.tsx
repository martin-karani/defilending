import PlugConnect from '@psychedelic/plug-connect';
import { useEffect, useState } from 'react';
import './App.css';
import motokoLogo from './assets/motoko_moving.png';
import motokoShadowLogo from './assets/motoko_shadow.png';
import { backend } from './declarations/backend';

function App() {
  const [count, setCount] = useState<number | undefined>();
  const [loading, setLoading] = useState(false);

  // Get the current counter value
  const fetchCount = async () => {
    try {
      setLoading(true);
      const count = await backend.get();
      setCount(+count.toString()); // Convert BigInt to number
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  // const ConnectWallet = async () => {
  //   try {
  //     const publicKey = await window.ic.plug.requestConnect();
  //     console.log(`The connected user's public key is:`, publicKey);
  //     const result = await window.ic.plug.requestBalance();
  //     console.log(result);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const increment = async () => {
    if (loading) return; // Cancel if waiting for a new count
    try {
      setLoading(true);
      await backend.inc(); // Increment the count by 1
      await fetchCount(); // Fetch the new count
    } finally {
      setLoading(false);
    }
  };

  const handleConnectWallet = async () => {
    console.log('Connecting to the Connect Wallet');
    const result = await window.ic.plug.requestBalance();
    console.log({ result });
  };
  // Fetch the count on page load
  useEffect(() => {
    fetchCount();
  }, []);

  return (
    <div className="App">
      <div>
        {/* <button
          onClick={() => ConnectWallet()}
          style={{ opacity: loading ? 0.5 : 1 }}
        >
          Connect Wallet
        </button> */}

        <a
          href="https://internetcomputer.org/docs/current/developer-docs/build/cdks/motoko-dfinity/motoko/"
          target="_blank"
        >
          <span className="logo-stack">
            <img
              src={motokoShadowLogo}
              className="logo motoko-shadow"
              alt="Motoko logo"
            />
            <img src={motokoLogo} className="logo motoko" alt="Motoko logo" />
          </span>
        </a>
      </div>
      <h1>Vite + React + Motoko</h1>
      <div className="card">
        <PlugConnect
          dark
          title="Connect Wallet"
          onConnectCallback={handleConnectWallet}
          host="http://127.0.0.1:4943"
          whitelist={['bd3sg-teaaa-aaaaa-qaaba-cai']}
        />
      </div>
    </div>
  );
}

export default App;
