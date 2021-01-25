import m from "mithril";
import infinite from "mithril-infinite";
// import imagesLoaded from "imagesloaded";
import randomPhotos from "../models/Photos";

const Photos = (pageNum) => {
  const photos = randomPhotos(pageNum);
  console.log(photos);
  return photos;
};

const item = (data) => {
  return m(
    "figure.photo",
    m("img", {
      src: `${data.download_url}`
    }),
    m("figcaption", m("a", `${data.author}`))
  );
};

export const PhotosList = () => {
  return {
    view: () => {
      return m(infinite, {
        pageData: Photos,
        item
      });
    }
  };
};
