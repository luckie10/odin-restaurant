import { createElement } from "../utils.js";
import { images } from "../assets/assets.js";

import "./home.scss";

const home = createElement("div", { class: "home-wrapper" });

function generateCard(name) {
  const card = createElement("div", { class: "card" });
  const img = createElement("img", { class: "card-img", src: images[name] });
  const contentWrap = createElement("div", { class: "content-wrap" });
  const header = createElement("h2", { class: "card-name", textContent: name });
  const text = createElement("div", {
    class: "card-text",
    textContent:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  });

  contentWrap.append(header, text);
  card.append(img, contentWrap);
  return { card };
}

const cards = ["sandwich", "croissant", "avocado"];

for (let card of cards) {
  home.append(generateCard(card).card);
}

export default home;
