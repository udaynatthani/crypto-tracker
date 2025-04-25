import { updateAsset } from '../features/crypto/cryptoSlice';
// this is the cryptoupdater function
export const startCryptoUpdater = (dispatch, getState) => {
  
  const last7dUpdateMap = {};

  setInterval(() => {
    const state = getState();
    const assets = state.crypto.assets;

    if (!assets || assets.length === 0) return;

    const now = Date.now();
    const randomIndex = Math.floor(Math.random() * assets.length);
    const asset = assets[randomIndex];
    const assetId = asset.id;

    
    if (!last7dUpdateMap[assetId]) {
      last7dUpdateMap[assetId] = now;
    }

    const timeSinceLast7dUpdate = now - last7dUpdateMap[assetId];
    const shouldUpdate7d = timeSinceLast7dUpdate >= 5 * 60 * 1000; 

    const randomDelta = (range = 2) =>
      parseFloat((Math.random() * range * 2 - range).toFixed(2)); 
    const randomVolume = () =>
      parseFloat((asset.volume24h * (1 + randomDelta(0.2) / 100)).toFixed(2)); 

    const priceChange = randomDelta();
    const price = parseFloat(
      (asset.price * (1 + priceChange / 100)).toFixed(2)
    );

    const changes = {
      price,
      change1h: randomDelta(2),
      change24h: randomDelta(4),
      volume24h: randomVolume(),
    };

    if (shouldUpdate7d) {
      changes.change7d = randomDelta(6);
      last7dUpdateMap[assetId] = now;
    }

    dispatch(updateAsset({ id: assetId, changes }));
  }, 1000); 
};
