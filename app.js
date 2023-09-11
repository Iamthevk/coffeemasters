import loadData from "./services/Menu.js";
import Router from "./services/Router.js";
import Store from "./services/Store.js";

//import web components
import { MenuPage } from "./components/MenuPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { OrderPage } from "./components/OrderPage.js";

window.app = {};
app.store = Store;
app.route = Router;

// It's better to wait for the event for manipulation
window.addEventListener("DOMContentLoaded", async () => {
  loadData();
  app.route.init();
});
