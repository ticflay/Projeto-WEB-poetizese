const inflection = require("inflection");

const Case = {
  camel: (s) => inflection.camelize(s.replace(/\s+/g, "_"), true),
  pascal: (s) => inflection.camelize(s.replace(/\s+/g, "_")),
  snake: inflection.underscore,
  kebab: inflection.dasherize,
  capital: inflection.capitalize,
};

function isObject(obj) {
  return obj && obj.constructor && obj.constructor === Object;
}

module.exports = function normalizeObject(object, caseType = "camel") {
  let ret = object;
  const method = Case[caseType];
  if (Array.isArray(object)) {
    ret = [];
    let i = 0;
    while (i < object.length) {
      ret.push(normalizeObject(object[i], caseType));
      ++i;
    }
  } else if (isObject(object)) {
    ret = {};
    for (let k in object) {
      if (Object.prototype.hasOwnProperty.call(object, k)) {
        ret[method(k)] = normalizeObject(object[k], caseType);
      }
    }
  }
  return ret;
};
