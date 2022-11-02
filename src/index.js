function content() {
  const element = document.createElement("div");

  element.id = "content";
  element.innerText = "Hello";

  return element;
}

document.body.appendChild(content());
