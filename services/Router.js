const Router = {
  init: () => {
    document.querySelectorAll(".navlink").forEach((link) =>
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const url = e.target.getAttribute("href");
        Router.go(url);
      })
    );

    //event handler for url changes
    window.addEventListener("popstate", (e) => {
      // console.log(e);
      Router.go(e.state.path, false);
    });

    //check the initial url
    Router.go(location.pathname);
  },
  go(path, addToHistory = true) {
    console.log(`Going to ${path}`);

    if (addToHistory) {
      history.pushState({ path }, "", path);
    }
    let pageElement;
    switch (path) {
      case "/":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Menu !!!";
        break;
      case "/order":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Order !!!";
        break;
    }
    if (pageElement) {
      const main = document.querySelector("main");
      main.innerHTML = "";
      main.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};
export default Router;
