import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { startCryptoUpdater } from './utils/cryptoUpdater';
import CryptoTable from './components/Cryptotable';

const App = () => {
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    startCryptoUpdater(dispatch, store.getState);
  }, [dispatch, store]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📈 Real-Time Crypto Tracker</h1>
      <CryptoTable />
      <footer className="text-center text-sm text-gray-500 mt-10 mb-4">
  Made  <span className="text-red-500"></span> by <a href="https://github.com/udaynatthani" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Uday Natthani❤️</a>
</footer>

    </div>
  );
};

export default App;
