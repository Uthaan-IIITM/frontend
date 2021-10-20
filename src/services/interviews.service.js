import axios from "axios";
import { INTERVIEWS_DATA_URL } from "../utils/APIs";

export const interviews = async () => {
  try {
    const { data } = await axios.get(INTERVIEWS_DATA_URL);
    return data;
  } catch (err) {
    throw err;
  }
};
