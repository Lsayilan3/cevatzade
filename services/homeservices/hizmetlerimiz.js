import axios from 'axios';

const apiUrl = process.env.API_URL;

export const getHizmet = async () => {
  try {
    const response = await axios.get(apiUrl+ `/hizmets/getall`);
    return response.data;
  } catch (error) {
    console.log('getHizmet api hatası', error);
    return [];
  }
}

export const getHizmetDilId = async (dil) => {
  try {
    const url = `${apiUrl}/hizmets/getall?dil=${dil}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('getHizmetDilId api hatası', error);
    return [];
  }
}

export const getHizmetById = async (HizmetId) => {
  try {
    const response = await axios.get(`${apiUrl}/hizmetDetails/getlist`, {
      params: {
        HizmetId: HizmetId
      }
    });
    return response.data;
  } catch (error) {
    console.log('getHizmetById api hatası', error);
    return null;
  }
}


export const getHizmetDilIdDil = async (hizmetId, dil) => {
  try {
    const url = `${apiUrl}/hizmetDetails/getlist?hizmetId=${hizmetId}&dil=${dil}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('getHizmetDilId api hatası', error);
    return [];
  }
};
