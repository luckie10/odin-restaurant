import { createElement } from "../utils.js";

import { images } from "../assets/assets.js";

import "./contact.scss";

const contact = createElement("div", { class: "contact-wrapper" });
const contactHeader = createElement("h1", {
  class: "contact-header",
  textContent: "Contact Us",
});
const contactContent = createElement("div", { class: "contact-content" });
const contactPhoneWrapper = createElement("div", {
  class: "contact-phone-wrapper",
});
const contactName = createElement("h3", {
  class: "contact-name",
  textContent: "Luka",
});
const contactPhone = createElement("p", {
  class: "contact-phone",
  textContent: "###-###-####",
});
const contactMapWrapper = createElement("div", {
  class: "contact-map-wrapper",
});
const contactAddress = createElement("p", {
  class: "contact-address",
  textContent: `123 Fake Drive, City, State, Country ###-###`,
});
const contactMap = createElement("img", {
  class: "contact-map",
  src: images.map,
});

contactPhoneWrapper.append(contactName, contactPhone);
contactMapWrapper.append(contactMap, contactAddress);
contactContent.append(contactPhoneWrapper, contactMapWrapper);
contact.append(contactHeader, contactContent);

export default contact;
