import axios from 'axios';

const apiUrl = process.env.API_URL;

export const getAbout = async () => {
  try {
    const response = await axios.get(apiUrl+ `/hakkimizdas/getall`);
    return response.data;
  } catch (error) {
    console.log('getAbout api hatası', error);
    return [];
  }
}