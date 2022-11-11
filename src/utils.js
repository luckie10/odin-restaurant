function createElement(tagName, attributes) {
  const element = document.createElement(tagName);

  if (attributes) {
    Object.entries(attributes).map(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  return element;
}

export { createElement };
