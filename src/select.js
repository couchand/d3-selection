import {Selection, root} from "./selection/index";
import selector from "./selector";

export default function(select) {
  var parents = typeof select === "string" || typeof select === "function" ? [document.documentElement] : root;

  if (typeof select !== "function") select = selector(select);

  return new Selection([[select.call(document)]], parents);
}
