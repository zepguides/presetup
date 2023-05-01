// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".LogChannels .log-channel {\r\n  margin: 16px 0;\r\n}\r\n\r\n.LogChannels .log-types {\r\n  height: 200px;\r\n  overflow-y: scroll;\r\n  border: 1px solid #aaa;\r\n  border-radius: 3px;\r\n  padding: 4px;\r\n  margin-top: 8px;\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}