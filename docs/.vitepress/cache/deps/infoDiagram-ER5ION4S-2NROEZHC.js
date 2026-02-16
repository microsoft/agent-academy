import {
  parse
} from "./chunk-6IV7T7OK.js";
import "./chunk-USZL5WAP.js";
import "./chunk-RDFYBFU2.js";
import "./chunk-JEK5575K.js";
import "./chunk-BFTWPUDE.js";
import "./chunk-FI25W6JI.js";
import "./chunk-SHEFMAJB.js";
import "./chunk-YW5EJKP6.js";
import "./chunk-DFPXKSZ7.js";
import {
  package_default
} from "./chunk-AJFG4426.js";
import {
  selectSvgElement
} from "./chunk-RFJYZ36Z.js";
import "./chunk-JMU36AFR.js";
import "./chunk-6FL3FPMZ.js";
import {
  configureSvgSize
} from "./chunk-FPJXLXFF.js";
import "./chunk-QQQ3YQTL.js";
import {
  __name,
  log
} from "./chunk-2NHTVVAW.js";
import "./chunk-IKZWERSR.js";

// node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-ER5ION4S.mjs
var parser = {
  parse: __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};
var DEFAULT_INFO_DB = {
  version: package_default.version + (true ? "" : "-tiny")
};
var getVersion = __name(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};
var draw = __name((text, id, version) => {
  log.debug("rendering info diagram\n" + text);
  const svg = selectSvgElement(id);
  configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };
var diagram = {
  parser,
  db,
  renderer
};
export {
  diagram
};
//# sourceMappingURL=infoDiagram-ER5ION4S-2NROEZHC.js.map
