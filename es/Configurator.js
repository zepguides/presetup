import yaml from "../_snowpack/pkg/js-yaml.js";
import React, {useEffect, useState} from "../_snowpack/pkg/react.js";
import "./Configurator.css.proxy.js";
import {Levels} from "./Levels.js";
import {LogChannels} from "./LogChannels.js";
export function Configurator() {
  const [prefix, setPrefix] = useState("!");
  const [levels, setLevels] = useState([]);
  const [withModCommands, setWithModCommands] = useState(false);
  const [muteRoleId, setMuteRoleId] = useState("");
  const [caseChannelId, setCaseChannelId] = useState("");
  const [dmModActionReasons, setDmModActionReasons] = useState(false);
  const [withLogs, setWithLogs] = useState(false);
  const [logChannels, setLogChannels] = useState([]);
  const [result, setResult] = useState({});
  useEffect(() => {
    const resultObj = {
      prefix,
      levels: levels.reduce((obj, entry) => {
        obj[entry[0]] = entry[1];
        return obj;
      }, {}),
      plugins: {
        utility: {}
      }
    };
    if (withModCommands) {
      resultObj.plugins.cases = {
        config: {
          case_log_channel: caseChannelId
        }
      };
      resultObj.plugins.mod_actions = {};
      if (muteRoleId) {
        resultObj.plugins.mutes = {
          config: {
            mute_role: muteRoleId
          }
        };
        if (dmModActionReasons) {
          resultObj.plugins.mutes.config.dm_on_mute = true;
        }
      }
      if (dmModActionReasons) {
        resultObj.plugins.mod_actions = {
          config: {
            dm_on_warn: true,
            dm_on_kick: true,
            dm_on_ban: true
          }
        };
      }
    }
    if (withLogs) {
      resultObj.plugins.logs = {
        config: {
          channels: logChannels.reduce((obj, logChannel) => {
            if (logChannel.includeExclude === "include") {
              obj[logChannel.id] = {
                include: Array.from(logChannel.logTypes.values())
              };
            } else {
              obj[logChannel.id] = {
                exclude: Array.from(logChannel.logTypes.values())
              };
            }
            return obj;
          }, {})
        }
      };
    }
    setResult(resultObj);
  }, [prefix, levels, withModCommands, muteRoleId, caseChannelId, dmModActionReasons, withLogs, logChannels]);
  const [formattedResult, setFormattedResult] = useState("");
  useEffect(() => {
    let _formattedResult = yaml.dump(result);
    _formattedResult = _formattedResult.replace(/^ {0,2}[a-z_]+:/gm, "\n$&").trim();
    _formattedResult += "\n";
    _formattedResult = _formattedResult.replace(/exclude: \[]/, "$& # No excluir nada = incluirlo todo");
    setFormattedResult(_formattedResult);
  }, [result]);
  const resultRows = formattedResult.split("\n").length || 1;
  const [copied, setCopied] = useState(false);
  function copyResultText(textarea) {
    textarea.select();
    document.execCommand("copy");
    setCopied(true);
  }
  const [copyResetTimeout, setCopyResetTimeout] = useState(null);
  useEffect(() => {
    if (!copied) {
      return;
    }
    if (copyResetTimeout != null) {
      window.clearTimeout(copyResetTimeout);
    }
    const timeout = window.setTimeout(() => setCopied(false), 3e3);
    setCopyResetTimeout(timeout);
  }, [copied]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "Configurator"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "options"
  }, /* @__PURE__ */ React.createElement("h2", null, "Prefix"), /* @__PURE__ */ React.createElement("div", {
    className: "control"
  }, /* @__PURE__ */ React.createElement("label", null, "Prefix del bot", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
    value: prefix,
    onChange: (e) => setPrefix(e.target.value)
  }))), /* @__PURE__ */ React.createElement("h2", null, "Niveles"), /* @__PURE__ */ React.createElement("div", {
    className: "control"
  }, /* @__PURE__ */ React.createElement(Levels, {
    levels,
    setLevels
  })), /* @__PURE__ */ React.createElement("h2", null, "Mod Actions"), /* @__PURE__ */ React.createElement("div", {
    className: "control"
  }, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    checked: withModCommands,
    onChange: (e) => setWithModCommands(e.target.checked)
  }), "Iniciar con configuraci\xF3n b\xE1sica"), withModCommands && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "ID del rol Silenciado", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
    value: muteRoleId,
    onChange: (e) => setMuteRoleId(e.target.value)
  })), /* @__PURE__ */ React.createElement("label", null, "ID del canal de casos", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
    value: caseChannelId,
    onChange: (e) => setCaseChannelId(e.target.value)
  })), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    checked: dmModActionReasons,
    onChange: (e) => setDmModActionReasons(e.target.checked)
  }), "Razones al DM"))), /* @__PURE__ */ React.createElement("h2", null, "Logs"), /* @__PURE__ */ React.createElement("div", {
    className: "control"
  }, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    checked: withLogs,
    onChange: (e) => setWithLogs(e.target.checked)
  }), "Iniciar con configuraci\xF3n b\xE1sica"), withLogs && /* @__PURE__ */ React.createElement(LogChannels, {
    logChannels,
    setLogChannels
  }))), /* @__PURE__ */ React.createElement("textarea", {
    className: "result",
    rows: resultRows,
    readOnly: true,
    value: formattedResult,
    onClick: (e) => copyResultText(e.target)
  }), copied ? /* @__PURE__ */ React.createElement("em", null, "Copied!") : /* @__PURE__ */ React.createElement("em", null, "Toca en el espacio de la configuraci\xF3n para copiar"));
}
