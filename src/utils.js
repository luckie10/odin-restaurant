/**
 * Create an HTML element with any attribute
 *
 * @param {string} tagName - Name of HTML tag
 * @param {{name: string, value: string}} attributes - Object of attributes to be appened to HTML element
 * @returns {Element}
 */
function createElement(tagName, attributes) {
  const element = document.createElement(tagName);

  if (attributes) {
    Object.entries(attributes).map(([name, value]) => {
      element.setAttribute(name, value);
    });
  }

  return element;
}

export { createElement };
