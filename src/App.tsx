import PlugConnect from '@psychedelic/plug-connect';
import { useEffect, useState } from 'react';
import { backend } from './declarations/backend';
import Layout from './components/Layout';

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
    <div className="">
      <Layout>
  
      </Layout>
    </div>
  );
}

export default App;
