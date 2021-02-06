import { ConvertData } from '../pages/MainPage';

const API_KEY = '83000ea831d18cdb836ac73c7e23186d';

const ENDPOINTS = {
  GET_SUPPORTED_SYMBOLS: `http://data.fixer.io/api/symbols?access_key=${API_KEY}`,
  GET_RATE: ({ amount, from, to }: ConvertData) =>
    `http://data.fixer.io/api/convert?access_key=${API_KEY}&from=${from}&to=${to}&amount=${amount}`,
};

export default ENDPOINTS;
