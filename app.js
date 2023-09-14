import loadData from "./services/Menu.js";
import Router from "./services/Router.js";
import Store from "./services/Store.js";

//import web components
import MenuPage from "./components/MenuPage.js";
import OrderPage from "./components/OrderPage.js";
import DetailsPage from "./components/DetailsPage.js";
window.app = {};

app.store = Store;
app.route = Router;

// It's better to wait for the event for manipulation
window.addEventListener("DOMContentLoaded", async () => {
  app.route.init();
  loadData();
});

navigator.serviceWorker.register("/serviceworker.js");

window.addEventListener("cartChange", (event) => {
  const badge = document.getElementById("badge");
  const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
  badge.textContent = qty;
  badge.hidden = qty == 0;
});
