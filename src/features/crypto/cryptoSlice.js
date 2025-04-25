import { createSlice } from '@reduxjs/toolkit';
import { sampleCryptoData } from './sampleData'; 

const initialState = {
  assets: sampleCryptoData, 
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateAsset(state, action) {
      const { id, changes } = action.payload;
      const index = state.assets.findIndex(asset => asset.id === id);
      if (index !== -1) {
        state.assets[index] = { ...state.assets[index], ...changes };
      }
    },
  },
});

export const { updateAsset } = cryptoSlice.actions;
export default cryptoSlice.reducer;
