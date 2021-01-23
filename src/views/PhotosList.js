let m = require("mithril")
import infinite from "mithril-infinite";
let imagesLoaded = require("imagesloaded");
let photos = require("../models/Photos")

// const photosBoard = {
//   oninit: photos.loadList,
//   view: function () {
//     //Photos' random positions
//     let photosLength = photos.list.length;
//     let preBuffer = new Array();
//     for(let a = 0; a < photosLength; a++) {
//       preBuffer.push(photos.list[a]);
//     }
//     for (let i = photosLength - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [preBuffer[i], preBuffer[j]] = [preBuffer[j], preBuffer[i]];
//     }
//     console.log(preBuffer)
//     return preBuffer

//     //For testing randomly display photos
//     // function onlyUnique(value, index, self) {
//     //   return self.indexOf(value) === index;
//     // }
//     // let unique = preBuffer.filter(onlyUnique);
//     // console.log(unique);


//     // return m('#container', preBuffer.map(function (photo) {
//     //   return m('figure.photo',
//     //     m('img',{src:`${photo.download_url}`}),
//     //     m('figcaption',
//     //       m('a', `${photo.author}`))
//     //   );
//     // }))
//   }
// }

const randomData = () => {
  let photosLength = photos.list.length;
  let preBuffer = new Array();
  for(let a = 0; a < photosLength; a++) {
    preBuffer.push(photos.list[a]);
  }
  for (let i = photosLength - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [preBuffer[i], preBuffer[j]] = [preBuffer[j], preBuffer[i]];
  }
  console.log(preBuffer)
  return preBuffer
}

const item = data => {
  console.log(data)
  return m('figure.photo',
    m('img',{src:`${data.download_url}`}),
    m('figcaption',
      m('a', `${data.author}`))
  );
}

export const photoList = () => {
  const pageLengthData = {};
  return {
    oninit: photos.loadList,
    view: () => {
      return m(infinite, {
        pageData: (num) => {
          let data = randomData();
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