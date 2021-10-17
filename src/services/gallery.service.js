import axios from "axios";
import { GALLERY_IMAGES_DATA_URL } from "../utils/APIs";

export const galleryImages = async () => {
  try {
    const { data } = await axios.get(GALLERY_IMAGES_DATA_URL);
    return data;
  } catch (err) {
    throw err;
  }
};
