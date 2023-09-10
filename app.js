import loadData from "./services/Menu.js";
import Router from "./services/Router.js";
import Store from "./services/Store.js";

window.app = {};
app.store = Store;
app.route = Router;

// It's better to wait for the event for manipulation

window.addEventListener("DOMContentLoaded", async () => {
  loadData();
  app.route.init();
});
