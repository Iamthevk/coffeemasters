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
      Router.go(e.state.route, false);
    });

    //check the initial url
    Router.go(location.pathname);
  },
  go(path, addToHistory = true) {
    // console.log(`Going to ${path}`);
    if (addToHistory) {
      history.pushState({ path }, "", path);
    }
    let pageElement = null;
    switch (path) {
      case "/":
        pageElement = document.createElement("menu-page");
        break;
      case "/order":
        pageElement = document.createElement("order-page");
        break;
      default:
        if (path.startsWith("/product-")) {
          pageElement = document.createElement("details-page");
          pageElement.dataset.productId = path.substring(
            path.lastIndexOf("-") + 1
          );
        }
        break;
    }
    if (pageElement) {
      let currentPage = document.querySelector("main").firstElementChild;
      if (currentPage) {
        let fadeOut = currentPage.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 200,
        });
        fadeOut.addEventListener("finish", () => {
          currentPage.remove();
          document.querySelector("main").appendChild(pageElement);
          let fadeIn = pageElement.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 200,
          });
        });
      } else {
        document.querySelector("main").appendChild(pageElement);
      }
    }
    window.scrollX = 0;
  },
};
export default Router;
