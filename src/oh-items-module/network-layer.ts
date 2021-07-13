import axios from "axios";
import { IOpenhabItem } from './openHab';

export const fetchAllItems = async () => {
  const response = await axios.get<IOpenhabItem>('http://192.168.88.150:8080/rest/items', {});
  return response.data;
};