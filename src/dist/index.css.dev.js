"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _styledNormalize = require("styled-normalize");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n", "\n  ul{\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    li + li {\n      margin-left: ", "px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _styledComponents.createGlobalStyle)(_templateObject(), _styledNormalize.normalize, function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.xs;
});

exports["default"] = _default;