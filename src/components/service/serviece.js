import axios from "axios";
const API_KEY = "xiHhDbJiJo6f6cGulULnY_7jTCrvrw3hqb_6jFmZseM";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const apiSearch = async (query, page) => {
  const { data } = await axios.get("search/photos", {
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
