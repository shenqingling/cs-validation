"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _TextareaBase = require("./TextareaBase");

var _TextareaBase2 = _interopRequireDefault(_TextareaBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextareaF = function (_React$Component) {
	_inherits(TextareaF, _React$Component);

	function TextareaF() {
		_classCallCheck(this, TextareaF);

		return _possibleConstructorReturn(this, (TextareaF.__proto__ || Object.getPrototypeOf(TextareaF)).apply(this, arguments));
	}

	_createClass(TextareaF, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var label = _props.label;
			var labelHide = _props.labelHide;
			var formGroup = _props.formGroup;

			var others = _objectWithoutProperties(_props, ["label", "labelHide", "formGroup"]);

			if (formGroup) {
				return _react2.default.createElement(
					"div",
					{ className: "form-group" },
					_react2.default.createElement(
						"label",
						{ className: labelHide ? 'sr-only' : null },
						label
					),
					_react2.default.createElement(_TextareaBase2.default, others)
				);
			} else {
				return _react2.default.createElement(_TextareaBase2.default, others);
			}
		}
	}]);

	return TextareaF;
}(_react2.default.Component);

exports.default = TextareaF;