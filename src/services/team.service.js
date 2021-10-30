import axios from "axios";
import { TEAM_DATA_URL } from "../utils/APIs";

export const team = async () => {
  try {
    const { data } = await axios.get(TEAM_DATA_URL);
    return data;
  } catch (err) {
    throw err;
  }
};
