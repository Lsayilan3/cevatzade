import axios from 'axios';

const apiUrl = process.env.API_URL;

export const getDurums = async () => {
  try {
    const response = await axios.get(apiUrl+ `/durums/getall`);
    return response.data;
  } catch (error) {
    console.log('getAnasayfa api hatası', error);
    return [];
  }
}

export const getDurumsDilId = async (dil) => {
  try {
    const url = `${apiUrl}/durums/getall?dil=${dil}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('getDurumsDilId api hatası', error);
    return [];
  }
}