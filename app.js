// It's better to wait for the event for manipulation

/*
window.addEventListener("DOMContentLoaded", () => {
  let nav = $("nav");
  console.log(nav);
  nav.on("click", (e) => {
    e.preventDefault();
    console.log("Heleli");
  });
});

// shorthand methods manually created 
const $ = function (args) {
  return document.querySelector(args);
};
const $$ = function (args) {
  return document.querySelectorAll(args);
};

HTMLElement.prototype.on = function (a, b) {
  return this.addEventListener(a, b);
};
HTMLElement.prototype.off = function (a, b) {
  return this.removeEventListener(a, b);
};
HTMLElement.prototype.$ = function (s) {
  return this.querySelector(s);
};
HTMLElement.prototype.$$ = function (s) {
  return this.querySelectorAll(s);
};
*/
