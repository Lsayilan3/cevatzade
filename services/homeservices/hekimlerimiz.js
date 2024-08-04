import axios from 'axios';

const apiUrl = process.env.API_URL;

export const getHekim = async () => {
  try {
    const response = await axios.get(apiUrl+ `/hekims/getall`);
    return response.data;
  } catch (error) {
    console.log('getHekim api hatası', error);
    return [];
  }
}

export const getHekimDilId = async (dil) => {
  try {
    const url = `${apiUrl}/hekims/getall?dil=${dil}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('getHekimDilId api hatası', error);
    return [];
  }
}

export const getHekimById = async (hekimId) => {
  try {
    const response = await axios.get(`${apiUrl}/hekimDetails/getlist`, {
      params: {
        HekimId: hekimId
      }
    });
    return response.data;
  } catch (error) {
    console.log('getHekimById api hatası', error);
    return null;
  }
}


export const getHekimDetailDilId = async (hekimId, dil) => {
  try {
    const url = `${apiUrl}/hekimDetails/getlist?hekimId=${hekimId}&dil=${dil}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('getHekimDetailDilId api hatası', error);
    return [];
  }
};