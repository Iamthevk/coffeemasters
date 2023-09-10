import API from "./API.js";
const loadData = async () => {
  app.store.menu = await API.fetchMenu();
};

export default loadData;
