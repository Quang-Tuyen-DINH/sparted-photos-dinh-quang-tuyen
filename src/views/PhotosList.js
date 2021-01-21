let m = require("mithril")
let photos = require("../models/Photos")

const photosBoard = {
  oninit: photos.loadList,
  view: function () {
    let photosLength = photos.list.length;
    let preBuffer = new Array();
    for(let a = 0; a < photosLength; a++) {
      preBuffer.push(photos.list[a]);
    }
    for (let i = photosLength - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [preBuffer[i], preBuffer[j]] = [preBuffer[j], preBuffer[i]];
    }

    // function onlyUnique(value, index, self) {
    //   return self.indexOf(value) === index;
    // }
    // let unique = preBuffer.filter(onlyUnique);
    // console.log(unique);

    return m(".container", preBuffer.map(function (photo) {
      let imgSrc = photo.download_url;
      let author = photo.author;
      return m('figure',
        m('img',{src:imgSrc}),
        m('figcaption',
          m('a', author))
      );
    }))
  }
}

module.exports = photosBoard;