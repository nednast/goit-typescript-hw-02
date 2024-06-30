import axios from "axios";

const API_KEY = "uPIkFLZeMlEVjBd8NOe0AABOz4wUt7ooM_C-5y50hH0";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const apiSearch = async <T>(query: string, page: number): Promise<T> => {
  const { data } = await axios.get<T>("search/photos", {
    params: {
      query,
      page,
      client_id: API_KEY,
      per_page: 10,
    },
  });
  return data;
};

export default apiSearch;
