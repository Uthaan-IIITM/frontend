import axios from "axios";
import { EVENTS_DATA_URL } from "../utils/APIs";

export const events = async () => {
  try {
    const { data } = await axios.get(EVENTS_DATA_URL);
    return data;
  } catch (err) {
    throw err;
  }
};
