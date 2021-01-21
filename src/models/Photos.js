let m = require("mithril")

const photos = {
  list: [],
  loadList: function () {
    return m.request({
      method: "GET",
      url: "https://picsum.photos/v2/list?page=2&limit=100",
      withCredentials: false,
    })
      .then(function (result) {
        photos.list = result
      })
  },
}

module.exports = photos
