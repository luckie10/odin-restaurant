import { createElement } from "../utils";
import "./navigation.scss";

const navContainer = createElement("div", { class: "nav-container" });
const siteName = createElement("div", {
  class: "site-name",
  textContent: "Luka's Bakery",
});
const navigation = createElement("ul", { class: "navigation" });

function generateNavLinks(name) {
  const li = createElement("li");
  const a = createElement("a", { textContent: name });

  li.appendChild(a);

  return { li };
}

const pages = ["home", "menu", "contact"];
for (let page of pages) {
  navigation.appendChild(generateNavLinks(page).li);
}

navContainer.append(siteName, navigation);

export default navContainer;
