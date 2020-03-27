"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const headerStyles = {
  color: '#a7a7a7'
};
const styles = {
  backgroundColor: '#00BFFF'
};

const ViewLayer = props => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", {
  style: headerStyles
}, "Hello"), /*#__PURE__*/_react.default.createElement("h2", {
  style: headerStyles
}, props.name, " !"));

const ParentLayer = () => /*#__PURE__*/_react.default.createElement("div", {
  style: styles
}, /*#__PURE__*/_react.default.createElement(ViewLayer, null));

var _default = ParentLayer;
exports.default = _default;