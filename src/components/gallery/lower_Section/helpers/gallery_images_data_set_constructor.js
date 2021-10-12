function GalleryImagesDataSetObject(primaryLink, thumbnailLink) {
  // this.src = primaryLink;
  // if (thumbnailLink) {
  //   this.thumbnail = thumbnailLink;
  // }
  return {
    src: primaryLink,
    thumbnail: thumbnailLink,
  };
}

export default GalleryImagesDataSetObject;
