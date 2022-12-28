import { createElement } from "./utils.js";
import "Styles/style.scss";

import header from "./components/header.js";
import footer from "./components/footer.js";
import home from "./pages/home.js";

const content = createElement("div", { id: "content" });
const main = createElement("div", { class: "main" });

main.appendChild(home);

content.append(header, main, footer);
document.body.appendChild(content);
