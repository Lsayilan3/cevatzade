import axios from 'axios';

const apiUrl = process.env.API_URL;

export const getAnasayfa = async () => {
  try {
    const response = await axios.get(apiUrl+ `/anasayfas/getall`);
    return response.data;
  } catch (error) {
    console.log('getAnasayfa api hatası', error);
    return [];
  }
}


export const getAnasayfaDilId = async (dil) => {
  try {
    const url = `${apiUrl}/anasayfas/getall?dil=${dil}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('getAnasayfaDilId api hatası', error);
    return [];
  }
};


export const getAnasayfaFotoUrl = async () => {
  try {
    const response = await axios.get(apiUrl+ `/anasayfaPhotoUrls/getall`);
    return response.data;
  } catch (error) {
    console.log('getAnasayfaFotoUrl api hatası', error);
    return [];
  }
}


export const getPhotoUrl = () => {
  return process.env.FOTO_URL;
};