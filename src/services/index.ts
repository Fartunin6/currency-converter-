import axios from 'axios';
import ENDPOINTS from '../constants/endpoints';
import { ConvertData } from '../pages/MainPage';

export const fetchSymbolsRequest = async (): Promise<object> => {
  return await axios.get(ENDPOINTS.GET_SUPPORTED_SYMBOLS);
};

export const fetchRateRequest = async (convertData: ConvertData): Promise<object> => {
  return await axios.get(ENDPOINTS.GET_RATE(convertData));
};

export const fetchRatesRequest = async (): Promise<object> => {
  return await axios.get(ENDPOINTS.GET_EXCHANGE_RATE);
};
