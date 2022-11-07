function createElement(tagName, elementId, elementClasses) {
  const element = document.createElement(tagName);
  if (elementId) element.setAttribute("id", elementId);
  if (elementClasses) {
    for (className of elementClasses) {
      element.classList.add(className);
    }
  }

  return element;
}

export { createElement };
