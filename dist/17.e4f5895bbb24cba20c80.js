webpackJsonp([17],{

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

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Invitation = undefined;
	
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
	
	var _Constant = __webpack_require__(389);
	
	var _Constant2 = _interopRequireDefault(_Constant);
	
	var _reactRouter = __webpack_require__(224);
	
	var _en = __webpack_require__(386);
	
	var _en2 = _interopRequireDefault(_en);
	
	var _zh = __webpack_require__(387);
	
	var _zh2 = _interopRequireDefault(_zh);
	
	var _nZepto = __webpack_require__(401);
	
	var _nZepto2 = _interopRequireDefault(_nZepto);
	
	var _Header = __webpack_require__(375);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__(406);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _QueryParams = __webpack_require__(519);
	
	var _QueryParams2 = _interopRequireDefault(_QueryParams);
	
	var _BaseComponent = __webpack_require__(381);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Page = function (_Component) {
	    (0, _inherits3.default)(Page, _Component);
	
	    function Page() {
	        (0, _classCallCheck3.default)(this, Page);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).call(this));
	
	        _this.url = '';
	        _this.invoiceInfo = {};
	        _this.sinvoiceInfo = {};
	        return _this;
	    }
	
	    (0, _createClass3.default)(Page, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            //let search = location.href.split('?')[1].split('=')[1]
	            //this.url = search;
	            //this.setState({
	            //    url:this.url
	            //})
	            _nZepto2.default.get(_Constant2.default.url + 'queryInvoiceInfo.do', function (data) {
	                if (data.error_no == 0 && data.data !== undefined) {
	
	                    if (data.data.invoiceType == 0) {
	                        _this2.invoiceInfo = data.data;
	                        _this2.setState(_this2.invoiceInfo);
	                    } else if (data.data.invoiceType == 1) {
	                        _this2.sinvoiceInfo = data.data;
	                        _this2.setState(_this2.sinvoiceInfo);
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'goSinvoice',
	        value: function goSinvoice(type) {
	            if (type == 'invoice') {
	                _reactRouter.browserHistory.push(_Constant2.default.router_preffix + '/invoice');
	            }
	            if (type == 'sinvoice') {
	                _reactRouter.browserHistory.push(_Constant2.default.router_preffix + '/special_invoice');
	            }
	            return;
	        }
	    }, {
	        key: 'goMytickets',
	        value: function goMytickets() {
	            _reactRouter.browserHistory.push(_Constant2.default.router_preffix + '/my_tickets');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _IsPcOrNot2.default.get() ? this.invoiceInfo.invoiceType == 0 ? _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { style: { width: '1200px', margin: '0 auto' } },
	                        _react2.default.createElement(
	                            'div',
	                            { style: { width: '1200px', height: 'auto', margin: '0 auto', fontSize: '14px', color: "#201b18" } },
	                            _react2.default.createElement(
	                                'div',
	                                { style: { position: 'relative', width: '100%', textAlign: 'left', fontSize: "24px", fontWeight: "600", margin: "60px 0 20px 0" } },
	                                '\u666E\u7968\u4FE1\u606F'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { padding: "60px 0 0 0", display: 'flex', alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { style: { marginRight: '122px', width: '165px' } },
	                                    '\u53D1\u7968\u62AC\u5934\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.invoiceInfo.info1 === '01' ? '企业' : this.invoiceInfo.info1 === '02' ? '机关单位' : this.invoiceInfo.info1 === '03' ? '个人' : this.invoiceInfo.info1 === '04' ? '其他' : null
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { padding: "60px 0 0 0", display: 'flex', alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { style: { marginRight: '122px', width: '165px' } },
	                                    '\u53D1\u7968\u62AC\u5934\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.invoiceInfo.invoiceTitle
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '15px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { style: { marginRight: '122px', width: '165px' } },
	                                    '\u7A0E\u53F7/\u4E2A\u4EBA\u8EAB\u4EFD\u8BC1\u53F7\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.invoiceInfo.taxNumber
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '15px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { style: { marginRight: '122px', width: '165px' } },
	                                    '\u5F00\u7968\u91D1\u989D\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.invoiceInfo.invoiceAmount
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { paddingBottom: '60px', marginTop: '15px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', borderBottom: "1px solid #fff" } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { style: { marginRight: '122px', width: '165px' } },
	                                    '\u5F00\u7968\u5185\u5BB9\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u4F1A\u8BAE\u8D39'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '15px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { style: { marginRight: '122px', width: '165px' } },
	                                    '\u7535\u8BDD\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.invoiceInfo.phone
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '15px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', borderBottom: "1px solid #fff" } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { style: { marginRight: '122px', width: '165px' } },
	                                    '\u90AE\u7BB1\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.invoiceInfo.email
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { paddingTop: '50px', display: 'flex' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { onClick: this.goSinvoice.bind(this, 'invoice'), style: { height: "40px", width: '165px', textAlign: 'center', lineHeight: '40px', color: '#fff',
	                                            background: '#0086ff', fontSize: '20px',
	                                            borderRadius: "5px",
	                                            marginRight: "35px",
	                                            cursor: 'pointer'
	                                        } },
	                                    '\u4FEE\u6539'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { onClick: this.goMytickets, style: { height: "40px", width: '165px', textAlign: 'center', lineHeight: '40px', color: '#80878c',
	                                            fontSize: '20px',
	                                            borderRadius: "5px",
	                                            border: '1px solid #80878c',
	                                            boxSizing: 'border-box',
	                                            cursor: 'pointer'
	                                        } },
	                                    '\u8FD4\u56DE'
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { style: { padding: "50px 0 100px 0", width: '1200px', fontSize: '14px', color: ' rgb(102, 102, 102)', margin: _IsPcOrNot2.default.get() ? "0 auto" : '0 auto' } },
	                        _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'pcinvoice_tip' }),
	                        _react2.default.createElement(
	                            'span',
	                            { style: { color: 'red' } },
	                            _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'cinvoice_tip2' })
	                        ),
	                        _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'pcinvoice_tip2' })
	                    )
	                ) : this.sinvoiceInfo.invoiceType == 1 ? _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { style: { width: '1200px', margin: '0 auto' } },
	                        _react2.default.createElement(
	                            'div',
	                            { style: { width: '1200px', height: 'auto', margin: '0 auto', fontSize: '14px', color: "#201b18" } },
	                            _react2.default.createElement(
	                                'div',
	                                { style: { position: 'relative', width: '100%', textAlign: 'left', fontSize: "24px", fontWeight: "600", margin: "60px 0 20px 0" } },
	                                '\u4E13\u7968\u4FE1\u606F'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { padding: "60px 0 0 0", display: 'flex', alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { style: { marginRight: '122px', width: '165px' } },
	                                    '\u53D1\u7968\u62AC\u5934\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.invoiceTitle
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '15px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { style: { marginRight: '122px', width: '165px' } },
	                                    '\u7A0E\u53F7\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.taxNumber
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '15px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { style: { marginRight: '122px', width: '165px' } },
	                                    '\u516C\u53F8\u7535\u8BDD\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.companyTelephone
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '15px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { style: { marginRight: '122px', width: '165px' } },
	                                    '\u516C\u53F8\u5730\u5740\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.companyAddress
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '15px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { style: { marginRight: '122px', width: '165px' } },
	                                    '\u5F00\u6237\u884C\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.bank
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '15px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { style: { marginRight: '122px', width: '165px' } },
	                                    '\u5F00\u6237\u884C\u8D26\u6237\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.bankAccount
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '15px', display: 'flex', flexWrap: 'wrap', paddingBottom: '60px' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { style: { marginRight: '122px', width: '165px' } },
	                                    '\u52A0\u76D6\u516C\u7AE0\u5BF9\u4EE5\u4E0A\u516D\u8981\u7D20\u626B\u63CF\u4EF6\uFF1A'
	                                ),
	                                _react2.default.createElement('div', { style: {
	                                        width: '266px',
	                                        height: "150px",
	                                        backgroundImage: "url('" + this.sinvoiceInfo.scanningImgUrl + "')",
	                                        backgroundRepeat: 'no-repeat',
	                                        backgroundSize: 'contain'
	                                    } })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '15px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { style: { marginRight: '122px', width: '165px' } },
	                                    '\u5F00\u7968\u540D\u79F0\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.invoiceName
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '15px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { style: { marginRight: '122px', width: '165px' } },
	                                    '\u5F00\u7968\u91D1\u989D\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.invoiceAmount
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { paddingBottom: '60px', marginTop: '15px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', borderBottom: "1px solid #fff" } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { style: { marginRight: '122px', width: '165px' } },
	                                    '\u5F00\u7968\u5185\u5BB9\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u4F1A\u8BAE\u8D39'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { display: 'flex', alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { style: { marginRight: '122px', width: '165px' } },
	                                    '\u6536\u4EF6\u4EBA\u59D3\u540D\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.realName
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '15px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { style: { marginRight: '122px', width: '165px' } },
	                                    '\u7535\u8BDD\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.phone
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '15px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { style: { marginRight: '122px', width: '165px' } },
	                                    '\u5730\u5740\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.address
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '15px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', borderBottom: "1px solid #fff" } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { style: { marginRight: '122px', width: '165px' } },
	                                    '\u90AE\u7F16\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.postCode
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { paddingTop: '50px', display: 'flex' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { onClick: this.goSinvoice.bind(this, 'sinvoice'), style: { height: "40px", width: '165px', textAlign: 'center', lineHeight: '40px', color: '#fff',
	                                            background: '#0086ff', fontSize: '20px',
	                                            borderRadius: "5px",
	                                            marginRight: "35px",
	                                            cursor: 'pointer'
	                                        } },
	                                    '\u4FEE\u6539'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { onClick: this.goMytickets, style: { height: "40px", width: '165px', textAlign: 'center', lineHeight: '40px', color: '#80878c',
	                                            fontSize: '20px',
	                                            borderRadius: "5px",
	                                            border: '1px solid #80878c',
	                                            boxSizing: 'border-box',
	                                            cursor: 'pointer'
	                                        } },
	                                    '\u8FD4\u56DE'
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { style: { padding: "50px 0 100px 0", width: '1200px', fontSize: '14px', color: ' rgb(102, 102, 102)', margin: _IsPcOrNot2.default.get() ? "0 auto" : '0 auto' } },
	                        _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'pcinvoice_tip' }),
	                        _react2.default.createElement(
	                            'span',
	                            { style: { color: 'red' } },
	                            _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'cinvoice_tip2' })
	                        ),
	                        _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'pcinvoice_tip2' })
	                    )
	                ) : '' : this.invoiceInfo.invoiceType == 0 ? _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { style: { width: '7.00rem', margin: '0 auto', padding: '0rem 0.27rem 6.00rem 0.04rem', background: '#e5e5e5', marginTop: "0.27rem" } },
	                        _react2.default.createElement(
	                            'div',
	                            { style: { width: '6.4rem', height: 'auto', margin: '0 auto', background: "#e5e5e5", fontSize: '16px', color: "#585858" } },
	                            _react2.default.createElement(
	                                'div',
	                                { style: { position: 'relative', height: '0.18rem', width: '100%', textAlign: 'center', lineHeight: '1.35rem', fontSize: "0.325rem", borderBottom: '1px solid #fff' } },
	                                '\u666E\u7968\u4FE1\u606F',
	                                _react2.default.createElement('div', { style: { width: '.37rem', height: '.37rem', background: '#fff', borderRadius: "50%", position: "absolute", bottom: '-.025rem', left: '-.065rem' } }),
	                                _react2.default.createElement('div', { style: { width: '.37rem', height: '.37rem', background: '#fff', borderRadius: "50%", position: "absolute", bottom: '-.025rem', right: '-.065rem' } })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { padding: "0.87rem 0 0 0", display: 'flex', justifyContent: "space-between", alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u4F01\u4E1A\u7C7B\u578B\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.invoiceInfo.info1 === '01' ? '企业' : this.invoiceInfo.info1 === '02' ? '机关单位' : this.invoiceInfo.info1 === '03' ? '个人' : this.invoiceInfo.info1 === '04' ? '其他' : null
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '0.09rem', display: 'flex', justifyContent: "space-between", alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u53D1\u7968\u62AC\u5934\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.invoiceInfo.invoiceTitle
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '0.09rem', display: 'flex', justifyContent: "space-between", alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u7A0E\u53F7/\u4E2A\u4EBA\u8EAB\u4EFD\u8BC1\u53F7\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.invoiceInfo.taxNumber
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { padding: "0.37rem 0 0 0", display: 'flex', justifyContent: "space-between", alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u5F00\u7968\u540D\u79F0\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.invoiceInfo.invoiceName
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '0.09rem', display: 'flex', justifyContent: "space-between", alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u5F00\u7968\u91D1\u989D\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.invoiceInfo.invoiceAmount
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { paddingBottom: '0.37rem', marginTop: '0.09rem', display: 'flex', justifyContent: "space-between", alignItems: 'center', flexWrap: 'wrap', borderBottom: "1px solid #fff" } },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u5F00\u7968\u5185\u5BB9\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u4F1A\u8BAE\u8D39'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '0.09rem', display: 'flex', justifyContent: "space-between", alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u7535\u8BDD\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.invoiceInfo.phone
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { paddingBottom: '0.37rem', marginTop: '0.09rem', display: 'flex', justifyContent: "space-between", alignItems: 'center', flexWrap: 'wrap', borderBottom: "1px solid #fff" } },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u90AE\u7F16\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.invoiceInfo.email
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { paddingTop: '1.44rem' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { onClick: this.goSinvoice.bind(this, 'invoice'), style: { height: "0.6rem", width: '100%', textAlign: 'center', lineHeight: '0.6rem', color: '#fff',
	                                            background: '#0086ff', fontSize: '0.44rem',
	                                            borderRadius: "5px",
	                                            cursor: 'pointer'
	                                        } },
	                                    '\u4FEE\u6539'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { onClick: this.goMytickets, style: { marginTop: "20px", height: "0.6rem", width: '100%', textAlign: 'center', lineHeight: '0.6rem', color: '#80878c',
	                                            fontSize: '0.44rem',
	                                            borderRadius: "5px",
	                                            border: '1px solid #80878c',
	                                            boxSizing: 'border-box',
	                                            cursor: 'pointer'
	                                        } },
	                                    '\u8FD4\u56DE'
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { style: { padding: "0.08rem 0", width: '5.75rem', fontSize: '14px', color: ' rgb(102, 102, 102)', margin: _IsPcOrNot2.default.get() ? "" : '0 auto' } },
	                        _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'pcinvoice_tip' }),
	                        _react2.default.createElement(
	                            'span',
	                            { style: { color: 'red' } },
	                            _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'cinvoice_tip2' })
	                        ),
	                        _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'pcinvoice_tip2' })
	                    )
	                ) : this.sinvoiceInfo.invoiceType == 1 ? _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { style: { width: '7.00rem', margin: '0 auto', padding: '0rem 0.27rem 6.00rem 0.04rem', background: '#e5e5e5', marginTop: "0.7rem" } },
	                        _react2.default.createElement(
	                            'div',
	                            { style: { width: '5.4rem', height: 'auto', margin: '0 auto', background: "#e5e5e5", fontSize: '14px', color: "#585858" } },
	                            _react2.default.createElement(
	                                'div',
	                                { style: { position: 'relative', height: '0.18rem', width: '100%', textAlign: 'center', lineHeight: '1.35rem', fontSize: "0.425rem", borderBottom: '1px solid #fff' } },
	                                '\u4E13\u7968\u4FE1\u606F',
	                                _react2.default.createElement('div', { style: { width: '.37rem', height: '.37rem', background: '#fff', borderRadius: "50%", position: "absolute", bottom: '-.025rem', left: '-.065rem' } }),
	                                _react2.default.createElement('div', { style: { width: '.37rem', height: '.37rem', background: '#fff', borderRadius: "50%", position: "absolute", bottom: '-.025rem', right: '-.065rem' } })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { padding: "0.825rem 0 0 0", display: 'flex', justifyContent: "space-between", alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u53D1\u7968\u62AC\u5934\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.invoiceTitle
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '0.09rem', display: 'flex', justifyContent: "space-between", alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u7A0E\u53F7\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.taxNumber
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '0.09rem', display: 'flex', justifyContent: "space-between", alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u516C\u53F8\u7535\u8BDD\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.companyTelephone
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '0.09rem', display: 'flex', justifyContent: "space-between", alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u516C\u53F8\u5730\u5740\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.companyAddress
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '0.09rem', display: 'flex', justifyContent: "space-between", alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u5F00\u6237\u884C\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.bank
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '0.09rem', display: 'flex', justifyContent: "space-between", alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u5F00\u6237\u884C\u8D26\u6237\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.bankAccount
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '0.09rem', display: 'flex', justifyContent: "space-between", alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u52A0\u76D6\u516C\u7AE0\u516D\u8981\u7D20\u626B\u63CF\u4EF6\uFF1A'
	                                ),
	                                _react2.default.createElement('div', { style: {
	                                        width: '3.46rem',
	                                        height: "3.26rem",
	                                        backgroundImage: "url('" + this.sinvoiceInfo.scanningImgUrl + "')",
	                                        backgroundRepeat: 'no-repeat',
	                                        backgroundSize: 'contain',
	                                        margin: '0 auto',
	                                        marginTop: '0.325rem',
	                                        marginBottom: '0.325rem'
	                                    } })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '0.09rem', display: 'flex', justifyContent: "space-between", alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u5F00\u7968\u540D\u79F0\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u4F1A\u8BAE\u8D39'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '0.09rem', display: 'flex', justifyContent: "space-between", alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u5F00\u7968\u91D1\u989D\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.invoiceAmount
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { paddingBottom: '0.325rem', marginTop: '0.09rem', display: 'flex', justifyContent: "space-between", alignItems: 'center', flexWrap: 'wrap', borderBottom: "1px solid #fff" } },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u5F00\u7968\u5185\u5BB9\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.invoiceContent
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { padding: "0.325rem 0 0 0", display: 'flex', justifyContent: "space-between", alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u6536\u4EF6\u4EBA\u59D3\u540D\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.realName
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '0.09rem', display: 'flex', justifyContent: "space-between", alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u7535\u8BDD\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.phone
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { marginTop: '0.09rem', display: 'flex', justifyContent: "space-between", alignItems: 'center', flexWrap: 'wrap' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u5730\u5740\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.address
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { paddingBottom: '0.325rem', marginTop: '0.09rem', display: 'flex', justifyContent: "space-between", alignItems: 'center', flexWrap: 'wrap', borderBottom: "1px solid #fff" } },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    '\u90AE\u7F16\uFF1A'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    this.sinvoiceInfo.postCode
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { style: { paddingTop: '0.44rem' } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { onClick: this.goSinvoice.bind(this, 'invoice'), style: { height: "0.6rem", width: '100%', textAlign: 'center', lineHeight: '0.6rem', color: '#fff',
	                                            background: '#0086ff', fontSize: '0.44rem',
	                                            borderRadius: "5px",
	                                            cursor: 'pointer'
	                                        } },
	                                    '\u4FEE\u6539'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { onClick: this.goMytickets, style: { marginTop: "20px", height: "0.6rem", width: '100%', textAlign: 'center', lineHeight: '0.6rem', color: '#80878c',
	                                            fontSize: '0.44rem',
	                                            borderRadius: "5px",
	                                            border: '1px solid #80878c',
	                                            boxSizing: 'border-box',
	                                            cursor: 'pointer'
	                                        } },
	                                    '\u8FD4\u56DE'
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { style: { padding: "0.08rem 0", width: '5.75rem', fontSize: '14px', color: ' rgb(102, 102, 102)', margin: _IsPcOrNot2.default.get() ? "" : '0 auto' } },
	                        _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'pcinvoice_tip' }),
	                        _react2.default.createElement(
	                            'span',
	                            { style: { color: 'red' } },
	                            _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'cinvoice_tip2' })
	                        ),
	                        _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'pcinvoice_tip2' })
	                    )
	                ) : ''
	            );
	        }
	    }]);
	    return Page;
	}(_react.Component);
	
	var Phone = function (_Component2) {
	    (0, _inherits3.default)(Phone, _Component2);
	
	    function Phone() {
	        (0, _classCallCheck3.default)(this, Phone);
	        return (0, _possibleConstructorReturn3.default)(this, (Phone.__proto__ || (0, _getPrototypeOf2.default)(Phone)).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(Phone, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { style: { backgroundColor: "#ffffff" } },
	                _react2.default.createElement(_Header2.default, null),
	                _react2.default.createElement(Page, null),
	                _react2.default.createElement(_Footer2.default, null)
	            );
	        }
	    }]);
	    return Phone;
	}(_react.Component);
	
	var PC = function (_Component3) {
	    (0, _inherits3.default)(PC, _Component3);
	
	    function PC() {
	        (0, _classCallCheck3.default)(this, PC);
	        return (0, _possibleConstructorReturn3.default)(this, (PC.__proto__ || (0, _getPrototypeOf2.default)(PC)).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(PC, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { style: { backgroundColor: "#ffffff" } },
	                _react2.default.createElement(_Header2.default, null),
	                _react2.default.createElement(Page, null),
	                _react2.default.createElement(_Footer2.default, null)
	            );
	        }
	    }]);
	    return PC;
	}(_react.Component);
	
	var Invitation = exports.Invitation = function (_Component4) {
	    (0, _inherits3.default)(Invitation, _Component4);
	
	    function Invitation(props) {
	        (0, _classCallCheck3.default)(this, Invitation);
	
	        var _this5 = (0, _possibleConstructorReturn3.default)(this, (Invitation.__proto__ || (0, _getPrototypeOf2.default)(Invitation)).call(this, props));
	
	        _this5.changeLanguage = function () {
	            if (localStorage['language'] == 'en') {
	                localStorage['language'] = 'zh-CN';
	            } else {
	                localStorage['language'] = 'en';
	            }
	            location.href = location.href;
	        };
	
	        return _this5;
	    }
	
	    (0, _createClass3.default)(Invitation, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _IsPcOrNot2.default.get() ? _react2.default.createElement(PC, null) : _react2.default.createElement(Phone, null)
	            );
	        }
	    }]);
	    return Invitation;
	}(_react.Component);
	
	exports.default = Invitation;

/***/ })

});
//# sourceMappingURL=17.e4f5895bbb24cba20c80.js.map