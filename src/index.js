import m from "mithril";
import { PhotosList } from "./views/PhotosList";

const App = () => {
  return {
    view: () => m(PhotosList)
  };
};

// m.mount(document.getElementById("app"), App);
m.mount(document.body, PhotosList)