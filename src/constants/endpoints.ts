import { ConvertData } from '../pages/MainPage';

const API_KEY = '83000ea831d18cdb836ac73c7e23186d';
const API_KEY_CONVERT = 'c6bc52890c77d064e968';

const ENDPOINTS = {
  GET_SUPPORTED_SYMBOLS: `http://data.fixer.io/api/symbols?access_key=${API_KEY}`,
  GET_RATE: ({ from, to }: ConvertData) =>
    `https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=${API_KEY_CONVERT}`,
};

export default ENDPOINTS;
