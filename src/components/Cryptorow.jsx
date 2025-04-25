import { useState, useEffect } from 'react';
import PercentageChange from './PercentageChange';
import CryptoChart from './CryptoChart';
import { Heart } from 'lucide-react';

const CryptoRow = ({ coin }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFav(storedFavs.includes(coin.id));
  }, [coin.id]);

  const toggleFavorite = () => {
    const storedFavs = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavs = isFav
      ? storedFavs.filter(id => id !== coin.id)
      : [...storedFavs, coin.id];

    localStorage.setItem('favorites', JSON.stringify(updatedFavs));
    setIsFav(!isFav);
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100 transition duration-200">
      <td className="flex items-center gap-3 px-6 py-4">
        <button onClick={toggleFavorite} title="Toggle Favorite">
          <Heart
            className={`h-5 w-5 transition ${
              isFav ? 'text-red-500 fill-red-500' : 'text-gray-400 hover:text-red-400'
            }`}
          />
        </button>
        <img src={coin.logo} alt={coin.name} className="h-7 w-7" />
        <div>
          <div className="font-semibold text-sm text-gray-800">{coin.name}</div>
          <div className="text-xs text-gray-500">{coin.symbol}</div>
        </div>
      </td>
      <td className="px-6 py-4 font-medium text-gray-900">${coin.price.toLocaleString()}</td>
      <td className="px-6 py-4"><PercentageChange value={coin.change1h} /></td>
      <td className="px-6 py-4"><PercentageChange value={coin.change24h} /></td>
      <td className="px-6 py-4"><PercentageChange value={coin.change7d} /></td>
      <td className="px-6 py-4 text-gray-700">${coin.marketCap.toLocaleString()}</td>
      <td className="px-6 py-4 text-gray-700">${coin.volume24h.toLocaleString()}</td>
      <td className="px-6 py-4 text-gray-700">{coin.circulatingSupply}</td>
      <td className="px-6 py-4"><img src={coin.chartImage} alt="7d chart" className="w-20" /></td>
    </tr>
  );
};

export default CryptoRow;
