"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _RadioBase = require("./RadioBase");

var _RadioBase2 = _interopRequireDefault(_RadioBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioF = function (_React$Component) {
	_inherits(RadioF, _React$Component);

	function RadioF() {
		_classCallCheck(this, RadioF);

		return _possibleConstructorReturn(this, (RadioF.__proto__ || Object.getPrototypeOf(RadioF)).apply(this, arguments));
	}

	_createClass(RadioF, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var label = _props.label;
			var rule = _props.rule;
			var datas = _props.datas;
			var labelHide = _props.labelHide;
			var formGroup = _props.formGroup;

			var others = _objectWithoutProperties(_props, ["label", "rule", "datas", "labelHide", "formGroup"]);

			if (formGroup) {
				return _react2.default.createElement(
					"div",
					{ className: "form-group radio-group" },
					_react2.default.createElement(
						"label",
						{ className: labelHide ? 'sr-only' : null },
						label
					),
					datas.map(function (radio, i) {
						return _react2.default.createElement(_RadioBase2.default, _extends({ name: rule, datas: radio }, others, { key: i }));
					})
				);
			} else {
				return _react2.default.createElement(_RadioBase2.default, _extends({ name: rule, datas: datas }, others));
			}
		}
	}]);

	return RadioF;
}(_react2.default.Component);

exports.default = RadioF;