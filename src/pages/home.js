import { createElement } from "../utils.js";

const mainWrapper = createElement("div", { class: "main-wrapper" });

function generateCard(name) {
  const card = createElement("div", { class: "card" });
  const img = createElement("img", { class: "card-img" });
  const header = createElement("h3", { class: "card-name", textContent: name });
  const text = createElement("div", {
    class: "card-text",
    textContent:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  });

  card.append(img, header, text);
  return { card };
}

mainWrapper.append(generateCard("test").card);
export default mainWrapper;
