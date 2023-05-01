import React from "../_snowpack/pkg/react.js";
const LEVEL_ADMIN = 100;
const LEVEL_MODERATOR = 50;
export function Levels({levels, setLevels}) {
  function addLevel() {
    setLevels((arr) => [...arr, ["", LEVEL_MODERATOR]]);
  }
  function removeLevel(index) {
    setLevels((arr) => [...arr].splice(index, 1));
  }
  function updateLevelId(index, id) {
    const validId = id.replace(/[^0-9]/g, "");
    setLevels((arr) => {
      arr[index][0] = validId;
      return [...arr];
    });
  }
  function updateLevelLevel(index, level) {
    setLevels((arr) => {
      arr[index][1] = parseInt(level, 10);
      return [...arr];
    });
  }
  return /* @__PURE__ */ React.createElement("div", null, levels.map(([id, level], index) => /* @__PURE__ */ React.createElement("div", {
    key: index
  }, /* @__PURE__ */ React.createElement("input", {
    value: id,
    onChange: (e) => updateLevelId(index, e.target.value)
  }), /* @__PURE__ */ React.createElement("select", {
    value: level,
    onChange: (e) => updateLevelLevel(index, e.target.value)
  }, /* @__PURE__ */ React.createElement("option", {
    value: LEVEL_ADMIN
  }, "Administrador"), /* @__PURE__ */ React.createElement("option", {
    value: LEVEL_MODERATOR
  }, "Moderador")))), /* @__PURE__ */ React.createElement("button", {
    onClick: addLevel
  }, "A\xF1adir"));
}
