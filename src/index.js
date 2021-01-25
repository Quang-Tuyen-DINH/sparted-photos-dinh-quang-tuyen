import m from "mithril";
import { PhotosList } from "./views/PhotosList";
import "../styles.css";
import imagesLoaded from "imagesloaded";

const photosBoard = document.querySelector(".mithril-infinite__page");

const loadPhotos = () => {
  imagesLoaded(photosBoard);
};

const App = () => {
  return {
    view: () =>
      m(PhotosList, {
        oncreate: loadPhotos()
      })
  };
};

m.mount(document.getElementById("app"), App);
