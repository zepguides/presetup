// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".LogChannels .log-channel {\n  margin: 16px 0;\n}\n\n.LogChannels .log-types {\n  height: 200px;\n  overflow-y: scroll;\n  border: 1px solid #aaa;\n  border-radius: 3px;\n  padding: 4px;\n  margin-top: 8px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}