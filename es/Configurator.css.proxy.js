// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Configurator {\r\n}\r\n\r\n.Configurator .options {\r\n  display: grid;\r\n  grid-auto-columns: min-content auto;\r\n  grid-gap: 1px;\r\n\r\n  overflow: hidden;\r\n  border: 1px solid #444;\r\n  border-radius: 4px;\r\n  background-color: #1d1f21;\r\n}\r\n\r\n.Configurator .options > h2 {\r\n  grid-column: 1;\r\n\r\n  margin: 0;\r\n  padding: 8px 24px 8px 8px;\r\n\r\n  white-space: nowrap;\r\n  text-align: right;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n\r\n  box-shadow: 0 0 0 1px #444;\r\n}\r\n\r\n.Configurator .options > .control {\r\n  grid-column: 2;\r\n\r\n  padding: 8px;\r\n  box-shadow: 0 0 0 1px #444;\r\n}\r\n\r\n.Configurator label {\r\n  display: block;\r\n  padding: 0 0 8px;\r\n}\r\n\r\n.Configurator .result {\r\n  margin-top: 16px;\r\n  width: 100%;\r\n  background-color: #1d1f21;\r\n  padding: 8px;\r\n  color: #ee8585;\r\n  border: 1px solid #444;\r\n  border-radius: 4px;\r\n  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);\r\n  cursor: copy;\r\n}\r\n\r\n.copyText { \r\n  margin-top: 2px;\r\n  text-align: center;\r\n  font-weight: 600;\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}