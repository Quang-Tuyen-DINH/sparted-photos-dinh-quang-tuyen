import m from "mithril";
import infinite from "mithril-infinite";
import imagesLoaded from "imagesloaded";
import photos from "../models/Photos";

// const randomData = () => {
//   let photosLength = photos.list.length;
//   let preBuffer = new Array();
//   for (let a = 0; a < photosLength; a++) {
//     preBuffer.push(photos.list[a]);
//   }
//   for (let i = photosLength - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [preBuffer[i], preBuffer[j]] = [preBuffer[j], preBuffer[i]];
//   }

//   return preBuffer;
//   //     //For testing randomly display photos
//   //     // function onlyUnique(value, index, self) {
//   //     //   return self.indexOf(value) === index;
//   //     // }
//   //     // let unique = preBuffer.filter(onlyUnique);
//   //     // console.log(unique);
// };

const item = (data) => {
  return m(
    "figure.photo",
    m("img", { src: `${data.download_url}` }),
    m("figcaption", m("a", `${data.author}`))
  );
};

export const PhotosList = () => {
  const pageLengthData = {};
  return {
    oninit: photos.loadList,
    view: () => {
      return m(infinite, {
        pageData: (num) => {
          const data = photos.list;
          if (pageLengthData[num] === undefined) {
            pageLengthData[num] = Math.round(Math.random() * (data.length - 1));
          }
          return data.slice(0, pageLengthData[num]);
        },
        item
      });
    }
  };
};
