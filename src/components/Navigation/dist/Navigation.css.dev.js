"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = exports.NavigationWrapper = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Wrapper = _interopRequireDefault(require("../Wrapper/Wrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  display: flex;\n  padding: ", "px 0;\n  justify-content: space-between;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.gray.light;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.sm;
});

exports.Container = Container;
var NavigationWrapper = (0, _styledComponents["default"])(_Wrapper["default"])(_templateObject2());
exports.NavigationWrapper = NavigationWrapper;

var List = _styledComponents["default"].ul(_templateObject3());

exports.List = List;