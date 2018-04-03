import constant from "./constant";

function none() {}

export default function(selector) {
  if (selector == null) return none;
  if (typeof selector === "function") return selector;
  if (typeof selector !== "string") return constant(selector);
  return function() {
    return this.querySelector(selector);
  };
}
