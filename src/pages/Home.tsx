import PlugConnect from '@psychedelic/plug-connect';

const whitelist = process.env.CANISTER_ID_FRONTEND || '';

const host = 'http://127.0.0.1:4943';

function Home() {
  const handleConnectWallet = async () => {
    console.log('Connecting to the Connect Wallet');
    const result = await window.ic.plug.requestBalance();
    console.log({ result });
  };

  return (
    <div>
      <h1 className="bg-black text-red-500">Vite + React + Motoko</h1>
      <div className="bg-slate-00">
        <PlugConnect
          title="Connect Wallet"
          onConnectCallback={handleConnectWallet}
          host={host}
          whitelist={[whitelist]}
        />
      </div>
    </div>
  );
}

export default Home;
