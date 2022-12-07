import { createElement } from "../utils.js";
import "./header.scss";

import navBar from "./navigation.js";

const header = createElement("header");
const hero = createElement("div", { class: "hero" });
const title = createElement("h1", { class: "title" });
const mission = createElement("p", { class: "mission" });

title.textContent = "Lorem ipsum dolor sit amet";
mission.textContent =
  "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.";

hero.append(title, mission);
header.append(navBar, hero);

export default header;
