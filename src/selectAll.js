import {Selection, root} from "./selection/index";
import selectorAll from "./selectorAll";

export default function(select) {
  var parents = typeof select === "string" || typeof select === "function" ? [document.documentElement] : root;

  if (typeof select !== "function") select = selectorAll(select);

  return new Selection([select.call(document)], parents);
}
