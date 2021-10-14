import axios from "axios";
import { ARTICLES_DATA_URL } from "../utils/APIs";

export const articles = async () => {
  try {
    const { data } = await axios.get(ARTICLES_DATA_URL);
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
};
