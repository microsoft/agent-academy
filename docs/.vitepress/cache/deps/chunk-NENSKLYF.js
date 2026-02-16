import {
  require_dist
} from "./chunk-GM7F5Z3D.js";
import {
  lineBreakRegex
} from "./chunk-FPJXLXFF.js";
import {
  __name
} from "./chunk-2NHTVVAW.js";
import {
  __toESM
} from "./chunk-IKZWERSR.js";

// node_modules/mermaid/dist/chunks/mermaid.core/chunk-TZMSLE5B.mjs
var import_sanitize_url = __toESM(require_dist(), 1);
var drawRect = __name((element, rectData) => {
  const rectElement = element.append("rect");
  rectElement.attr("x", rectData.x);
  rectElement.attr("y", rectData.y);
  rectElement.attr("fill", rectData.fill);
  rectElement.attr("stroke", rectData.stroke);
  rectElement.attr("width", rectData.width);
  rectElement.attr("height", rectData.height);
  if (rectData.name) {
    rectElement.attr("name", rectData.name);
  }
  if (rectData.rx) {
    rectElement.attr("rx", rectData.rx);
  }
  if (rectData.ry) {
    rectElement.attr("ry", rectData.ry);
  }
  if (rectData.attrs !== void 0) {
    for (const attrKey in rectData.attrs) {
      rectElement.attr(attrKey, rectData.attrs[attrKey]);
    }
  }
  if (rectData.class) {
    rectElement.attr("class", rectData.class);
  }
  return rectElement;
}, "drawRect");
var drawBackgroundRect = __name((element, bounds) => {
  const rectData = {
    x: bounds.startx,
    y: bounds.starty,
    width: bounds.stopx - bounds.startx,
    height: bounds.stopy - bounds.starty,
    fill: bounds.fill,
    stroke: bounds.stroke,
    class: "rect"
  };
  const rectElement = drawRect(element, rectData);
  rectElement.lower();
}, "drawBackgroundRect");
var drawText = __name((element, textData) => {
  const nText = textData.text.replace(lineBreakRegex, " ");
  const textElem = element.append("text");
  textElem.attr("x", textData.x);
  textElem.attr("y", textData.y);
  textElem.attr("class", "legend");
  textElem.style("text-anchor", textData.anchor);
  if (textData.class) {
    textElem.attr("class", textData.class);
  }
  const tspan = textElem.append("tspan");
  tspan.attr("x", textData.x + textData.textMargin * 2);
  tspan.text(nText);
  return textElem;
}, "drawText");
var drawImage = __name((elem, x, y, link) => {
  const imageElement = elem.append("image");
  imageElement.attr("x", x);
  imageElement.attr("y", y);
  const sanitizedLink = (0, import_sanitize_url.sanitizeUrl)(link);
  imageElement.attr("xlink:href", sanitizedLink);
}, "drawImage");
var drawEmbeddedImage = __name((element, x, y, link) => {
  const imageElement = element.append("use");
  imageElement.attr("x", x);
  imageElement.attr("y", y);
  const sanitizedLink = (0, import_sanitize_url.sanitizeUrl)(link);
  imageElement.attr("xlink:href", `#${sanitizedLink}`);
}, "drawEmbeddedImage");
var getNoteRect = __name(() => {
  const noteRectData = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    fill: "#EDF2AE",
    stroke: "#666",
    anchor: "start",
    rx: 0,
    ry: 0
  };
  return noteRectData;
}, "getNoteRect");
var getTextObj = __name(() => {
  const testObject = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    "text-anchor": "start",
    style: "#666",
    textMargin: 0,
    rx: 0,
    ry: 0,
    tspan: true
  };
  return testObject;
}, "getTextObj");

export {
  drawRect,
  drawBackgroundRect,
  drawText,
  drawImage,
  drawEmbeddedImage,
  getNoteRect,
  getTextObj
};
//# sourceMappingURL=chunk-NENSKLYF.js.map
