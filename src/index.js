import { createElement } from "./utils.js";
import "Styles/style.scss";

import header from "./components/header.js";
import footer from "./components/footer.js";

const content = createElement("div", { id: "content" });
const main = createElement("div", { class: "main" });

content.append(header, main, footer);
document.body.appendChild(content);

function clearContents(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function loadPageContents(pageName = "home") {
  import(`./pages/${pageName}.js`)
    .then((page) => {
      clearContents(main);
      main.appendChild(page.default);
    })
    .catch((err) => (main.textContent = err.message));
}

loadPageContents();

const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    const pageName = link.textContent;

    loadPageContents(pageName);
  });
});
