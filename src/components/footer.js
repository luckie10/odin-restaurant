import { createElement } from "../utils.js";
import { icons } from "Assets/assets.js";
import "./footer.scss";

const footer = createElement("footer");
const footerContainer = createElement("div", { class: "footer-container" });
const socials = createElement("ul", { class: "socials" });
const copyright = createElement("div", {
  class: "copyright",
  textContent: "© 2022, Boban K.",
});

function generateSocials(name) {
  const li = createElement("li");
  const icon = createElement("img", { src: icons[name] });
  const span = createElement("span", { textContent: name });

  li.append(icon, span);
  return { li };
}

const socialNames = ["facebook", "instagram", "twitter"];
for (let social of socialNames) {
  socials.appendChild(generateSocials(social).li);
}

footerContainer.append(socials, copyright);
footer.append(footerContainer);

export default footer;
