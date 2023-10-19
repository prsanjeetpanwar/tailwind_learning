import axios from "axios";

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = 'c981b8c791f75ab5cdb1e91d4a4924d1';

const generurl = 'https://api.themoviedb.org/3/discover/movie';
const getTrandingVideos = async () => {
  try {
    const response = await axios.get(`${baseUrl}/trending/all/day?api_key=${apiKey}`);
    return response;
  } catch (error) {
    throw error;
  }
};

const getMovieGenerId = async (id) => {
  try {
    const response = await axios.get(`${generurl}?api_key=${apiKey}&with_genres=${id}`);
    return response;
  } catch (error) {
    throw error;
  }
}

export default {
  getTrandingVideos,
  getMovieGenerId
};
