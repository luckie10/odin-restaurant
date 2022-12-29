import { createElement } from "../utils.js";

import "./menu.scss";

const menuHeadings = [
  "Toast",
  "Toasted Sandwiches",
  "Grab n' Go",
  "Bread",
  "Desert",
  "Drinks",
];

function generateMenuItems(name, price, desc) {
  const item = createElement("div", { class: "menu-item" });
  const itemName = createElement("h4", {
    class: "menu-item-name",
    textContent: name,
  });
  const itemPrice = createElement("div", {
    class: "menu-item-price",
    textContent: `$${price}`,
  });
  const itemDesc = createElement("div", {
    class: "menu-item-desc",
    textContent: desc,
  });

  item.append(itemName, itemPrice, itemDesc);

  return { item };
}

function generateMenuSection(name, amountOfItems) {
  const section = createElement("div", { class: "menu-section" });
  const header = createElement("h3", {
    class: "menu-section-header",
    textContent: name,
  });
  const content = createElement("div", { class: "menu-section-content" });

  for (let i = 1; i <= amountOfItems; i++) {
    const item = generateMenuItems(
      `${name} ${i}`,
      4 + i,
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
    ).item;

    content.appendChild(item);
  }

  section.append(header, content);

  return { section };
}

const menu = createElement("div", { class: "menu-wrapper" });

menuHeadings.map((heading, index) => {
  menu.appendChild(generateMenuSection(heading, 3 + index).section);
});

export default menu;
