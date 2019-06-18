webpackJsonp([6],{

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

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Created by wangbailin on 2017/4/27.
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PaySuccess = undefined;
	
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
	
	__webpack_require__(558);
	
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
	
	var _nZepto = __webpack_require__(401);
	
	var _nZepto2 = _interopRequireDefault(_nZepto);
	
	var _Constant = __webpack_require__(389);
	
	var _Constant2 = _interopRequireDefault(_Constant);
	
	var _BaseComponent = __webpack_require__(381);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var messages = {};
	messages['en'] = _en2.default;
	messages['zh-CN'] = _zh2.default;
	messages['zh-cn'] = _zh2.default;
	
	var Phone = function (_Component) {
	    (0, _inherits3.default)(Phone, _Component);
	
	    function Phone(props) {
	        (0, _classCallCheck3.default)(this, Phone);
	        return (0, _possibleConstructorReturn3.default)(this, (Phone.__proto__ || (0, _getPrototypeOf2.default)(Phone)).call(this, props));
	    }
	
	    (0, _createClass3.default)(Phone, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { style: { backgroundColor: "#fff" } },
	                _react2.default.createElement(_Header2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    { style: { margin: "20px auto", textAlign: "center", minHeight: "680px", fontSize: "20px" } },
	                    _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'pay_success' })
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
	        return (0, _possibleConstructorReturn3.default)(this, (PC.__proto__ || (0, _getPrototypeOf2.default)(PC)).call(this, props));
	    }
	
	    (0, _createClass3.default)(PC, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { style: { backgroundColor: "#fff" } },
	                _react2.default.createElement(_Header2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    { style: { margin: "200px auto", width: "500px", lineHeight: "40px", fontWeight: "600", textAlign: "center", minHeight: "680px", fontSize: "24px" } },
	                    _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'pay_success' })
	                ),
	                _react2.default.createElement(_Footer2.default, null)
	            );
	        }
	    }]);
	    return PC;
	}(_react.Component);
	
	var PaySuccess = exports.PaySuccess = function (_Component3) {
	    (0, _inherits3.default)(PaySuccess, _Component3);
	
	    function PaySuccess(props) {
	        (0, _classCallCheck3.default)(this, PaySuccess);
	        return (0, _possibleConstructorReturn3.default)(this, (PaySuccess.__proto__ || (0, _getPrototypeOf2.default)(PaySuccess)).call(this, props));
	    }
	
	    (0, _createClass3.default)(PaySuccess, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            setTimeout(function () {
	                location.href = _Constant2.default.router_preffix + '/my_tickets';
	            }, 5000);
	        }
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
	    return PaySuccess;
	}(_react.Component);
	
	exports.default = PaySuccess;

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(559);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(379)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(559, function() {
				var newContent = __webpack_require__(559);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(378)();
	// imports
	
	
	// module
	exports.push([module.id, ".container{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.container-fluid{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{margin-right:-15px;margin-left:-15px}.go-button:hover{box-shadow:inset 1px 1px 15px #fff}", "", {"version":3,"sources":["/Users/baidu/Desktop/project/ai-web-2019/src/routes/PaySuccess/components/src/routes/PaySuccess/components/PaySuccess.scss"],"names":[],"mappings":"AAAA,WACE,mBAAmB,kBACD,kBACA,gBACD,CAClB,yBAEC,WACE,WAAY,CACb,CAAA,yBAGD,WACE,WAAY,CACb,CAAA,0BAGD,WACE,YAAa,CACd,CAAA,iBAGD,mBAAmB,kBACD,kBACA,gBACD,CAClB,KAEC,mBAAmB,iBACD,CACnB,iBAGG,kCAAmC,CACpC","file":"PaySuccess.scss","sourcesContent":[".container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n.container-fluid {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.row {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.go-button {\n  &:hover {\n    box-shadow: 1px 1px 15px inset #fff;\n  }\n}"],"sourceRoot":""}]);
	
	// exports


/***/ })

});
//# sourceMappingURL=6.b141b7c6b0192765aadb.js.map