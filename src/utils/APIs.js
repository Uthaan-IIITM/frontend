export const BASE_URL = "http://localhost:4000/api/";
export const GOOGLE_API_KEY = "AIzaSyASThvZn06zDncboBQXsf7tEFpyBsC9-L8";

export const EVENTS_DATA_URL = BASE_URL + "events";
export const SHOWS_DATA_URL = BASE_URL + "shows";
export const ARTICLES_DATA_URL = BASE_URL + "articles";
export const INTERVIEWS_DATA_URL = BASE_URL + "interviews";
export const CONTACT_US_MESSAGING_URL = BASE_URL + "messages";
export const GALLERY_IMAGES_DATA_URL = BASE_URL + "images";

export const YOUTUBE_PLAYLIST_API = (playlistID) => {
  return `https://www.googleapis.com/youtube/v3/playlistItems?key=${GOOGLE_API_KEY}&playlistId=${playlistID}&part=snippet&maxResults=50`;
};

export const YOUTUBE_VIDEO_API = (videoID) => {
  return `https://www.youtube.com/watch?v=${videoID}`;
};
