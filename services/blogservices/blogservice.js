import axios from 'axios';

const apiUrl = process.env.API_URL;

export const getBlog = async () => {
  try {
    const response = await axios.get(apiUrl+ `/blogs/getall`);
    return response.data;
  } catch (error) {
    console.log('getBlog api hatası', error);
    return [];
  }
}

export const getBlogilId = async (dil) => {
  try {
    const url = `${apiUrl}/blogs/getall?dil=${dil}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('getBlogilId api hatası', error);
    return [];
  }
}

export const getBlogById = async (blogId) => {
  try {
    const response = await axios.get(`${apiUrl}/blogDetails/getlist`, {
      params: {
        BlogId: blogId
      }
    });
    return response.data;
  } catch (error) {
    console.log('getBlogById api hatası', error);
    return null;
  }
}


export const getBlogDetailDilId = async (blogId, dil) => {
  try {
    const url = `${apiUrl}/blogDetails/getlist?blogId=${blogId}&dil=${dil}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('getBlogDetailDilId api hatası', error);
    return [];
  }
};