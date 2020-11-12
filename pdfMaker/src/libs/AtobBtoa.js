import { globalObject } from "./globalObject.js";

var atob, btoa;

(function() {
  atob = globalObject.atob;
  btoa = globalObject.btoa;
  return;

})();

export { atob, btoa };
