import axios from "axios";
import { CONTACT_US_MESSAGING_URL } from "../utils/APIs";

export const message = async (name, email, contact, message) => {
  try {
    const { data } = await axios.post(CONTACT_US_MESSAGING_URL, {
      name,
      email,
      contact,
      message,
    });
    return data;
  } catch (err) {
    throw err;
  }
};
