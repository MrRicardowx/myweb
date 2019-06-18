webpackJsonp([13],{

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Footer = function (_Component) {
	    (0, _inherits3.default)(Footer, _Component);
	
	    function Footer() {
	        (0, _classCallCheck3.default)(this, Footer);
	        return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(Footer, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { style: { backgroundColor: "#000", fontSize: "12px", color: "#fff", padding: "25px 0", textAlign: "center" } },
	                _react2.default.createElement(
	                    "span",
	                    { "data-v-ba5e338c": "" },
	                    localStorage['language'] == 'en' ? 'customer service' : '客服邮箱',
	                    ":",
	                    _react2.default.createElement(
	                        "a",
	                        { href: "mailto:create_help@baidu.com", style: { color: '#fff' } },
	                        "create_help@baidu.com"
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { style: { marginTop: "8px" } },
	                    "Copyright \xA92019 Baidu, Inc. All Rights Reserved."
	                )
	            );
	        }
	    }]);
	    return Footer;
	}(_react.Component);
	
	exports.default = Footer;

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var getQueryParams = exports.getQueryParams = function getQueryParams(name, url) {
	    if (!url) url = location.href;
	    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	    var regexS = "[\\?&]" + name + "=([^&#]*)";
	    var regex = new RegExp(regexS);
	    var results = regex.exec(url);
	    return results == null ? null : results[1];
	};
	
	exports.default = getQueryParams;

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Created by wangbailin on 2017/4/27.
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Qrcode = undefined;
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _IsPcOrNot = __webpack_require__(385);
	
	var _IsPcOrNot2 = _interopRequireDefault(_IsPcOrNot);
	
	var _en = __webpack_require__(386);
	
	var _en2 = _interopRequireDefault(_en);
	
	var _zh = __webpack_require__(387);
	
	var _zh2 = _interopRequireDefault(_zh);
	
	var _Header = __webpack_require__(375);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__(406);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _Constant = __webpack_require__(389);
	
	var _Constant2 = _interopRequireDefault(_Constant);
	
	var _nZepto = __webpack_require__(401);
	
	var _nZepto2 = _interopRequireDefault(_nZepto);
	
	var _QueryParams = __webpack_require__(519);
	
	var _QueryParams2 = _interopRequireDefault(_QueryParams);
	
	var _BaseComponent = __webpack_require__(381);
	
	var _pc_bg = __webpack_require__(605);
	
	var _pc_bg2 = _interopRequireDefault(_pc_bg);
	
	var _phone_bg = __webpack_require__(606);
	
	var _phone_bg2 = _interopRequireDefault(_phone_bg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var messages = {};
	messages['en'] = _en2.default;
	messages['zh-CN'] = _zh2.default;
	messages['zh-cn'] = _zh2.default;
	
	var Phone = function (_Component) {
	    (0, _inherits3.default)(Phone, _Component);
	
	    function Phone(props) {
	        (0, _classCallCheck3.default)(this, Phone);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (Phone.__proto__ || (0, _getPrototypeOf2.default)(Phone)).call(this, props));
	
	        _this.qrcode = {
	            url: ''
	        };
	
	        return _this;
	    }
	
	    (0, _createClass3.default)(Phone, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            _nZepto2.default.get(_Constant2.default.url + "qrcode.do?c=" + (0, _QueryParams2.default)('c'), function (data) {
	                _this2.qrcode.url = data.data;
	                _this2.setState(_this2.qrcode);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { style: { backgroundColor: "#fff" } },
	                _react2.default.createElement(
	                    'div',
	                    { style: { display: "none" } },
	                    _react2.default.createElement(_Header2.default, null)
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { style: {
	                            backgroundImage: "url(" + _phone_bg2.default + ")",
	                            backgroundPosition: "top left",
	                            backgroundSize: "100% auto",
	                            backgroundRepeat: "no-repeat",
	                            height: "12.5rem"
	
	                        } },
	                    _react2.default.createElement('img', { style: {
	                            width: "3.6rem",
	                            height: "3.6rem",
	                            position: "absolute",
	                            left: "50%",
	                            marginLeft: "-1.8rem",
	                            top: "6.08rem"
	                        }, src: "data:image/png;base64," + this.qrcode.url })
	                ),
	                _react2.default.createElement(_Footer2.default, null)
	            );
	        }
	    }]);
	    return Phone;
	}(_react.Component);
	
	var PC = function (_Component2) {
	    (0, _inherits3.default)(PC, _Component2);
	
	    function PC(props) {
	        (0, _classCallCheck3.default)(this, PC);
	
	        var _this3 = (0, _possibleConstructorReturn3.default)(this, (PC.__proto__ || (0, _getPrototypeOf2.default)(PC)).call(this, props));
	
	        _this3.qrcode = {
	            url: ''
	        };
	
	        return _this3;
	    }
	
	    (0, _createClass3.default)(PC, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this4 = this;
	
	            _nZepto2.default.get(_Constant2.default.url + "qrcode.do?c=" + (0, _QueryParams2.default)('c'), function (data) {
	                _this4.qrcode.url = data.data;
	                _this4.setState(_this4.qrcode);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { style: { minHeight: "100%", backgroundColor: "#fff" } },
	                _react2.default.createElement(
	                    'div',
	                    { style: { display: "none" } },
	                    _react2.default.createElement(_Header2.default, null)
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { style: {
	                            backgroundImage: "url(" + _pc_bg2.default + ")",
	                            backgroundPosition: "top left",
	                            backgroundSize: "100% auto",
	                            backgroundRepeat: "no-repeat",
	                            height: (0, _nZepto2.default)(document).height()
	
	                        } },
	                    _react2.default.createElement('img', { style: {
	                            width: "19%",
	                            height: "30%",
	                            position: "absolute",
	                            right: "14%",
	                            top: "24%"
	                        }, src: "data:image/png;base64," + this.qrcode.url })
	                )
	            );
	        }
	    }]);
	    return PC;
	}(_react.Component);
	
	var Qrcode = exports.Qrcode = function (_Component3) {
	    (0, _inherits3.default)(Qrcode, _Component3);
	
	    function Qrcode(props) {
	        (0, _classCallCheck3.default)(this, Qrcode);
	        return (0, _possibleConstructorReturn3.default)(this, (Qrcode.__proto__ || (0, _getPrototypeOf2.default)(Qrcode)).call(this, props));
	    }
	
	    (0, _createClass3.default)(Qrcode, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _IsPcOrNot2.default.get() ? _react2.default.createElement(PC, null) : _react2.default.createElement(Phone, null)
	            );
	        }
	    }]);
	    return Qrcode;
	}(_react.Component);
	
	exports.default = Qrcode;

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "012b2fafa1f91e2e85893a8de6a49ffa.png";

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "cb6a154b4d43a2bf2344f3f879a425ad.png";

/***/ })

});
//# sourceMappingURL=13.2fa88a9026e86be89867.js.map