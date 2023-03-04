// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: Ubuntu, Arial, Helvetica, sans-serif;\n}\n\nbody {\n  background-color: #0B0E14;\n  color: #59C2FF;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}