import axios from 'axios';

const apiUrl = process.env.API_URL;

export const postRandevu = async (randevuData) => {
    try {
      const response = await axios.post(apiUrl + '/randevus', randevuData);
      return response.data;
    } catch (error) {
      console.log('postRandevu api hatası', error);
      return [];
    }
  };