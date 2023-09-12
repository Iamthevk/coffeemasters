const Store = {
  menu: null,
  cart: [],
};

const proxiedStore = new Proxy(Store, {
  set(target, property, value) {
    target[property] = value;
    if (property === "menu") {
      window.dispatchEvent(new Event("menuChange"));
    }
    if (property === "cart") {
      window.dispatchEvent(new Event("cartChange"));
    }
    return true;
  },
});
export default proxiedStore;
