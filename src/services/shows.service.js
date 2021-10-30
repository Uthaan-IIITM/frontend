import axios from "axios";
import { SHOWS_DATA_URL, YOUTUBE_PLAYLIST_API } from "./../utils/APIs";

export const shows = async () => {
  try {
    const { data } = await axios.get(SHOWS_DATA_URL);
    return data;
  } catch (err) {
    throw err;
  }
};

export const showData = async (playlistID) => {
  try {
    const { data } = await axios.get(YOUTUBE_PLAYLIST_API(playlistID));
    return data.items;
  } catch (err) {
    throw err;
  }
};
