// export const BASE_URL = "https://uthaan.herokuapp.com/api/";
// export const BASE_URL = "http://localhost:4000/api/";
export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const EVENTS_DATA_URL = BASE_URL + "events";
export const SHOWS_DATA_URL = BASE_URL + "shows";
export const ARTICLES_DATA_URL = BASE_URL + "articles";
export const INTERVIEWS_DATA_URL = BASE_URL + "interviews";
export const GALLERY_IMAGES_DATA_URL = BASE_URL + "images";
export const TEAM_DATA_URL = BASE_URL + "teams";
export const CONTACT_US_MESSAGING_URL = BASE_URL + "messages";

export const YOUTUBE_PLAYLIST_API = (playlistID) => {
  return `https://www.googleapis.com/youtube/v3/playlistItems?key=${GOOGLE_API_KEY}&playlistId=${playlistID}&part=snippet&maxResults=50`;
};

export const YOUTUBE_VIDEO_API = (videoID) => {
  return `https://www.youtube.com/watch?v=${videoID}`;
};
