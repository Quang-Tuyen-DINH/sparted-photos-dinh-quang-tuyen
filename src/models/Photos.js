import m from "mithril";

const Photos = {
  list: [],
  loadList: function () {
    return m.request({
      method: "GET",
      url: "https://picsum.photos/v2/list?page=2&limit=100",
      withCredentials: false
    })
      .then(function (result) {
        let photosLength = result.length;
        let preBuffer = new Array();
        for (let a = 0; a < photosLength; a++) {
          preBuffer.push(result[a]);
        }
        for (let i = photosLength - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [preBuffer[i], preBuffer[j]] = [preBuffer[j], preBuffer[i]];
        }
        Photos.list = preBuffer;
      });
  }
};

export default Photos;
