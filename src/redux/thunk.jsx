import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadPlayers = createAsyncThunk('allplayers', async () => {
  const data = await fetch('http://localhost:1234/players');
  const json = await data.json();
  return json;
});
