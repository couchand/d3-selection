import constant from "./constant";

function empty() {
  return [];
}

export default function(selector) {
  if (selector == null) return empty;
  if (typeof selector === "function") return selector;
  if (typeof selector !== "string") return constant(selector);
  return function() {
    return this.querySelectorAll(selector);
  };
}
