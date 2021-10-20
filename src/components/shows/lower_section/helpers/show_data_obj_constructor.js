import parseDate from "./../../../_general/helpers/dateConverter";
import { YOUTUBE_VIDEO_API } from "./../../../../utils/APIs";

function ShowDataObj(thumbnailURL, title, description, releaseDate, link) {
  this.thumbnailURL = thumbnailURL;
  this.title = title;
  this.description = description;
  this.releaseDate = releaseDate;
  this.link = link;
}

function parseShowData(data) {
  let dataToReturn = [];
  for (let i = 0; i < data.length; i++) {
    const snippet = data[i].snippet;
    const title = snippet.title;
    const description = snippet.description;
    const releaseDate = parseDate(snippet.publishedAt);
    const link = YOUTUBE_VIDEO_API(snippet.resourceId.videoId);
    const thumbnailURL = snippet.thumbnails.medium.url;
    dataToReturn.push(
      new ShowDataObj(thumbnailURL, title, description, releaseDate, link)
    );
  }
  return dataToReturn;
}

export default parseShowData;
