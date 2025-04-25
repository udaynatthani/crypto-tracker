import { useSelector } from 'react-redux';
import { selectAllAssets } from '../features/crypto/cryptoSelectors';
import CryptoRow from './Cryptorow';
// import ThemeToggle from './ThemeToggle';

const CryptoTable = () => {
  const assets = useSelector(selectAllAssets);

  return (
    <div className="overflow-x-auto mt-8 px-4">
      <div className="flex justify-end mb-4"></div>
      <table className="min-w-full table-auto text-sm text-left border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-50 text-gray-700 uppercase text-xs tracking-wider">
          <tr>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Price</th>
            <th className="px-6 py-4">1h %</th>
            <th className="px-6 py-4">24h %</th>
            <th className="px-6 py-4">7d %</th>
            <th className="px-6 py-4">Market Cap</th>
            <th className="px-6 py-4">Volume (24h)</th>
            <th className="px-6 py-4">Circulating Supply</th>
            <th className="px-6 py-4">Last 7 Days</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {assets.map((asset) => (
            <CryptoRow key={asset.id} coin={asset} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
