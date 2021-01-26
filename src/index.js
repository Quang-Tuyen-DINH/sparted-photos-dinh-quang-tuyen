import m from "mithril";
import { PhotosList } from "./views/PhotosList";
import "../styles.css";

const App = () => {
  return {
    view: () =>
      m(PhotosList, {
      })
  };
};

m.mount(document.getElementById("app"), App);
