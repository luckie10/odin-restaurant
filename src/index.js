import { createElement } from "./utils.js";
import "Styles/style.scss";

import header from "./components/header.js";
import footer from "./components/footer.js";
import mainWrapper from "./pages/home.js";

const content = createElement("div", { id: "content" });

content.append(header, mainWrapper, footer);
document.body.appendChild(content);
