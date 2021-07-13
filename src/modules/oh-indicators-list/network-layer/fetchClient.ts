import axios from 'axios';

import { IOpenhabItem } from '../types/openHab';

export const fetchAllItems = async () => {
  const response = await axios.get<IOpenhabItem[]>(`${process.env.REACT_APP_BASE}/rest/items`, {});
  return response.data;
};
