import axios from 'axios';

const BACKEND_API_BASE_URL = 'https://deploy-backend-music-production.up.railway.app/api';

export const predictGenre = async (age: number, gender: string) => {
  try {
    const response = await axios.post(`${BACKEND_API_BASE_URL}/predict/`, {
        gender,
        age,
    });
    // console.log(response.data.predicted_genre);
    return response.data.predicted_genre;

  } catch (error) {
    console.error('Error predicting genre:', error);
    throw error;
  }
};
