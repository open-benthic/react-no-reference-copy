"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const headerStyles = {
  color: 'white'
};
const styles = {
  backgroundColor: 'red'
};

const ViewLayer = props => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
  style: headerStyles
}, "Hello"), /*#__PURE__*/React.createElement("h2", {
  style: headerStyles
}, props.name, " !"));

const ParentLayer = () => /*#__PURE__*/React.createElement("div", {
  style: styles
}, /*#__PURE__*/React.createElement(ViewLayer, null));

var _default = ParentLayer;
exports.default = _default;