webpackJsonp([8],{

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

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Created by wangbailin on 2017/4/27.
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TicketTypes = undefined;
	
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
	
	__webpack_require__(566);
	
	var _reactRouter = __webpack_require__(224);
	
	var _IsPcOrNot = __webpack_require__(385);
	
	var _IsPcOrNot2 = _interopRequireDefault(_IsPcOrNot);
	
	var _Constant = __webpack_require__(389);
	
	var _Constant2 = _interopRequireDefault(_Constant);
	
	var _QueryParams = __webpack_require__(519);
	
	var _QueryParams2 = _interopRequireDefault(_QueryParams);
	
	var _en = __webpack_require__(386);
	
	var _en2 = _interopRequireDefault(_en);
	
	var _zh = __webpack_require__(387);
	
	var _zh2 = _interopRequireDefault(_zh);
	
	var _Header = __webpack_require__(375);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _BaseComponent = __webpack_require__(381);
	
	var _nZepto = __webpack_require__(401);
	
	var _nZepto2 = _interopRequireDefault(_nZepto);
	
	var _Footer = __webpack_require__(406);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var messages = {};
	messages['en'] = _en2.default;
	messages['zh-CN'] = _zh2.default;
	messages['zh-cn'] = _zh2.default;
	
	var WapTicket = function (_Component) {
	    (0, _inherits3.default)(WapTicket, _Component);
	
	    function WapTicket(props) {
	        (0, _classCallCheck3.default)(this, WapTicket);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (WapTicket.__proto__ || (0, _getPrototypeOf2.default)(WapTicket)).call(this, props));
	
	        _this.choose_ticket = function () {
	            _nZepto2.default.get(_Constant2.default.url + 'hasLoginBaidu.do', function (data) {
	                if (data.error_no !== '0') {
	                    if (_IsPcOrNot2.default.get()) {
	                        window.instance.show();
	                    } else {
	                        (0, _nZepto2.default)('#login-wrap').css("display", "block");
	                        (0, _nZepto2.default)('#login').css("display", "block");
	                    }
	                } else {
	                    if (_this.props.link === '/student_apply') {
	                        _nZepto2.default.get(_Constant2.default.url + "isHaveStudentsTickets.do", function (data) {
	                            if (data.error_no === '0') {
	                                if (data.data === '0') {
	                                    //TODO jump student_apply
	
	                                    _reactRouter.browserHistory.push(_Constant2.default.router_preffix + _this.props.link);
	                                } else {
	                                    //TODO jump myticket
	                                    _reactRouter.browserHistory.push(_Constant2.default.router_preffix + '/my_tickets');
	                                }
	                            }
	                        });
	                    } else {
	                        _nZepto2.default.get(_Constant2.default.url + 'queryUnfinishedTickets.do', function (data) {
	                            //没有未支付的票
	                            if (data.data.number == '0') {
	                                _reactRouter.browserHistory.push(_Constant2.default.router_preffix + 'get_ticket?type=' + _this.props.type);
	                            } else {
	                                _reactRouter.browserHistory.push(_Constant2.default.router_preffix + _this.props.link + '?type=' + _this.props.type);
	                            }
	                        });
	                    }
	                }
	            });
	        };
	
	        return _this;
	    }
	
	    (0, _createClass3.default)(WapTicket, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { style: {
	                        width: "100%",
	                        height: _IsPcOrNot2.default.get() ? '' : '2.25rem',
	                        marginBottom: _IsPcOrNot2.default.get() ? '' : '.5rem',
	                        padding: _IsPcOrNot2.default.get() ? '' : '.25rem .25rem',
	                        borderRadius: "4px",
	                        position: 'relative',
	                        overflow: "hidden",
	                        backgroundColor: this.props.backgroundColor
	                    } },
	                _react2.default.createElement(
	                    'div',
	                    { style: {
	                            width: '45%',
	                            height: "100%",
	                            float: 'left',
	                            borderRight: '1px dashed #fff',
	                            display: 'flex',
	                            flexDirection: 'column',
	                            justifyContent: 'space-between',
	                            padding: '.2rem 0'
	                        } },
	                    _react2.default.createElement(
	                        'div',
	                        { style: {
	                                fontSize: localStorage['language'] == 'en' ? '.35rem' : '.4rem',
	                                color: '#fff'
	                            } },
	                        _react2.default.createElement(_BaseComponent.FormattedMessage, { id: this.props.title })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { style: {
	                                fontSize: '.5rem',
	                                color: '#c8ff00'
	                            } },
	                        this.props.price,
	                        _react2.default.createElement(
	                            'span',
	                            { style: {
	                                    fontSize: '12px',
	                                    fontWeight: 'normal',
	                                    color: "#fff",
	                                    paddingLeft: '.1rem',
	                                    textDecoration: 'underline'
	                                } },
	                            this.props.need_check ? _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'need_check' }) : null
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { style: {
	                            float: 'left',
	                            width: '55%',
	                            height: '100%',
	                            display: 'flex',
	                            flexWrap: 'nowrap',
	                            flexDirection: 'column',
	                            justifyContent: 'space-between',
	                            padding: '.2rem 0 0 0'
	                        } },
	                    _react2.default.createElement(
	                        'p',
	                        { style: {
	                                color: '#fff',
	                                margin: '0',
	                                width: '100%',
	                                fontSize: '13px',
	                                padding: '0 .15rem'
	                            } },
	                        _react2.default.createElement(_BaseComponent.FormattedMessage, { id: this.props.text })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { onClick: this.choose_ticket, style: {
	                                color: '#fff',
	                                width: '2.55rem',
	                                height: '.6rem',
	                                backgroundColor: '#ef5864',
	                                lineHeight: '.6rem',
	                                textAlign: 'center',
	                                margin: '0 auto',
	                                marginLeft: '.5rem'
	                            } },
	                        _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'toByTicket' })
	                    )
	                ),
	                _react2.default.createElement('div', { style: {
	                        width: '.26rem',
	                        height: '.26rem',
	                        borderRadius: "50%",
	                        position: 'absolute',
	                        top: "0",
	                        bottom: '0',
	                        marginTop: 'auto',
	                        marginBottom: 'auto',
	                        right: '-.13rem',
	                        background: '#fff'
	                    } }),
	                _react2.default.createElement('div', { style: {
	                        width: '.26rem',
	                        height: '.26rem',
	                        borderRadius: "50%",
	                        position: 'absolute',
	                        top: "0",
	                        bottom: '0',
	                        marginTop: 'auto',
	                        marginBottom: 'auto',
	                        left: '-.13rem',
	                        background: '#fff'
	                    } })
	            );
	        }
	    }]);
	    return WapTicket;
	}(_react.Component);
	
	var WapTicketsArea = function (_Component2) {
	    (0, _inherits3.default)(WapTicketsArea, _Component2);
	
	    function WapTicketsArea(props) {
	        (0, _classCallCheck3.default)(this, WapTicketsArea);
	        return (0, _possibleConstructorReturn3.default)(this, (WapTicketsArea.__proto__ || (0, _getPrototypeOf2.default)(WapTicketsArea)).call(this, props));
	    }
	
	    (0, _createClass3.default)(WapTicketsArea, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { style: { textAlign: "center", backgroundColor: "#fff" } },
	                _react2.default.createElement(WapTicket, { title: 'developer_ticket_19', text: 'developer_ticket_text_19', price: '\xA52388',
	                    backgroundColor: '#01007a', link: '/order', type: '0' }),
	                _react2.default.createElement(WapTicket, { title: 'sumForums_ticket_19', text: 'sumForums_ticket_text_19', price: '\xA5388',
	                    backgroundColor: '#4abfc6', link: '/order', type: '3' }),
	                _react2.default.createElement(WapTicket, { title: 'student_ticket_19', text: 'student_ticket_text_19', price: '\xA5600', backgroundColor: '#008fff',
	                    need_check: true, link: '/student_apply' })
	            );
	        }
	    }]);
	    return WapTicketsArea;
	}(_react.Component);
	
	var Phone = function (_Component3) {
	    (0, _inherits3.default)(Phone, _Component3);
	
	    function Phone(props) {
	        (0, _classCallCheck3.default)(this, Phone);
	
	        var _this3 = (0, _possibleConstructorReturn3.default)(this, (Phone.__proto__ || (0, _getPrototypeOf2.default)(Phone)).call(this, props));
	
	        _this3.ticketRules = [];
	        for (var i = 1; i <= 8; i++) {
	            _this3.ticketRules.push({
	                text: 'buy_tickets_end' + i
	            });
	        }
	        return _this3;
	    }
	
	    (0, _createClass3.default)(Phone, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { style: { width: '100%' } },
	                _react2.default.createElement(_Header2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    { style: { padding: "0 .15rem .4rem .15rem", backgroundColor: "#fff" } },
	                    _react2.default.createElement(
	                        'div',
	                        { style: {
	                                height: '1.94rem',
	                                width: '100%',
	                                padding: '.75rem 0',
	                                textAlign: 'center',
	                                fontWeight: '600',
	                                fontSize: "20px"
	                            } },
	                        _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'please_select_your_ticket' })
	                    ),
	                    _react2.default.createElement(WapTicketsArea, null),
	                    _react2.default.createElement(
	                        'div',
	                        { style: { textAlign: "center", margin: "20px 0 20px 20px", fontSize: "20px", color: '#01007a' } },
	                        _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'buy_tickets_note' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { style: { padding: "0 15px", fontSize: '14px' } },
	                        this.ticketRules.map(function (item, key) {
	                            return _react2.default.createElement(
	                                'div',
	                                { key: key, style: { textAlign: "left", padding: "5px 10px", display: 'flex' } },
	                                key != 7 ? _react2.default.createElement(
	                                    'span',
	                                    { style: { color: "#0086ff", paddingRight: '.1rem' } },
	                                    '*'
	                                ) : _react2.default.createElement(
	                                    'span',
	                                    { style: { paddingRight: '.1rem' } },
	                                    ' '
	                                ),
	                                _react2.default.createElement(_BaseComponent.FormattedMessage, { id: item.text })
	                            );
	                        }),
	                        _react2.default.createElement(
	                            'div',
	                            { style: { textAlign: "left", padding: "5px 10px", display: "flex" } },
	                            _react2.default.createElement(
	                                'span',
	                                { style: { color: "red", paddingRight: '.1rem' } },
	                                '*'
	                            ),
	                            _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'buy_tickets_end' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { style: { textAlign: "left", padding: "5px 10px", display: "flex" } },
	                            _react2.default.createElement(
	                                'span',
	                                { style: { color: "red", paddingRight: '.1rem' } },
	                                '*'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                null,
	                                _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'after_refund_info' }),
	                                _react2.default.createElement(
	                                    'a',
	                                    { href: 'mailto:create_help@baidu.com' },
	                                    _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'customer_service_mailbox' })
	                                )
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(_Footer2.default, null)
	            );
	        }
	    }]);
	    return Phone;
	}(_react.Component);
	
	//Pc Start
	
	
	var PCTitle = function (_Component4) {
	    (0, _inherits3.default)(PCTitle, _Component4);
	
	    function PCTitle(props) {
	        (0, _classCallCheck3.default)(this, PCTitle);
	        return (0, _possibleConstructorReturn3.default)(this, (PCTitle.__proto__ || (0, _getPrototypeOf2.default)(PCTitle)).call(this, props));
	    }
	
	    (0, _createClass3.default)(PCTitle, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { style: {
	                        position: "relative",
	                        padding: "10px 0",
	                        textAlign: "center",
	                        marginTop: "60px",
	                        marginBottom: "30px"
	                    } },
	                _react2.default.createElement(
	                    'div',
	                    { style: {
	                            position: "relative",
	                            color: "#444444",
	                            zIndex: "2",
	                            display: "inline-block",
	                            backgroundColor: "#fff",
	                            textAlign: "center",
	                            fontSize: "24px",
	                            padding: "0 20px"
	                        } },
	                    this.props.children
	                ),
	                _react2.default.createElement('div', { style: {
	                        fontWeight: "300",
	                        position: "absolute",
	                        zIndex: "1",
	                        border: "1px solid #dadada",
	                        width: "100%",
	                        top: "0",
	                        marginTop: "22px"
	                    } })
	            );
	        }
	    }]);
	    return PCTitle;
	}(_react.Component);
	
	var PCTicket = function (_Component5) {
	    (0, _inherits3.default)(PCTicket, _Component5);
	
	    function PCTicket(props) {
	        (0, _classCallCheck3.default)(this, PCTicket);
	
	        var _this5 = (0, _possibleConstructorReturn3.default)(this, (PCTicket.__proto__ || (0, _getPrototypeOf2.default)(PCTicket)).call(this, props));
	
	        _this5.choose_ticket = function () {
	            _nZepto2.default.get(_Constant2.default.url + 'hasLoginBaidu.do', function (data) {
	                if (data.error_no != '0') {
	                    if (_IsPcOrNot2.default.get()) {
	                        window.instance.show();
	                    } else {
	                        (0, _nZepto2.default)('#login-wrap').css("display", "block");
	                        (0, _nZepto2.default)('#login').css("display", "block");
	                    }
	                } else {
	                    if (_this5.props.link == '/student_apply') {
	                        _nZepto2.default.get(_Constant2.default.url + "isHaveStudentsTickets.do", function (data) {
	                            if (data.error_no == '0') {
	                                if (data.data == '0') {
	                                    //TODO jump student_apply
	
	                                    _reactRouter.browserHistory.push(_Constant2.default.router_preffix + _this5.props.link);
	                                } else {
	                                    //TODO jump myticket
	                                    _reactRouter.browserHistory.push(_Constant2.default.router_preffix + '/my_tickets');
	                                }
	                            }
	                        });
	                    } else {
	                        _nZepto2.default.get(_Constant2.default.url + 'queryUnfinishedTickets.do', function (data) {
	                            //没有未支付的票
	                            if (data.data.number == '0') {
	                                _reactRouter.browserHistory.push(_Constant2.default.router_preffix + '/get_ticket?type=' + _this5.props.type);
	                            } else {
	                                _reactRouter.browserHistory.push(_Constant2.default.router_preffix + _this5.props.link + '?type=' + _this5.props.type);
	                            }
	                        });
	                    }
	                }
	            });
	        };
	
	        return _this5;
	    }
	
	    (0, _createClass3.default)(PCTicket, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'pc-ticket',
	                    style: {
	                        display: "inline-block",
	                        width: "32%",
	                        padding: "30px 0",
	                        height: '224px',
	                        textAlign: "center",
	                        border: '0',
	                        position: 'relative',
	                        overflow: 'hidden',
	                        backgroundColor: this.props.backgroundColor
	                    } },
	                _react2.default.createElement(
	                    'div',
	                    { style: {
	                            color: "#fff",
	                            marginBottom: "10px",
	                            fontSize: "20px"
	                        } },
	                    _react2.default.createElement(_BaseComponent.FormattedMessage, { id: this.props.title })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { style: { marginTop: "15px" } },
	                    _react2.default.createElement(
	                        'span',
	                        { style: { fontSize: "28px", color: "#c8ff00", verticalAlign: "bottom" } },
	                        this.props.price
	                    )
	                ),
	                _react2.default.createElement(
	                    'p',
	                    { style: {
	                            color: '#fff',
	                            margin: '0',
	                            width: '100%',
	                            fontSize: '14px',
	                            fontWeight: '600',
	                            marginTop: '10px'
	                        } },
	                    _react2.default.createElement(_BaseComponent.FormattedMessage, { id: this.props.text })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    {
	                        style: {
	                            marginTop: "7px",
	                            color: "#fff",
	                            fontSize: "12px",
	                            fontWeight: "200",
	                            textDecoration: "underline"
	                        } },
	                    this.props.need_check == true ? _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'need_check' }) : _react2.default.createElement('div', { style: { height: "10px" } })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { style: { marginTop: "15px" } },
	                    _react2.default.createElement(
	                        'button',
	                        { style: {
	                                backgroundColor: '#ef5864'
	                            }, onClick: this.choose_ticket,
	                            className: 'base_type_btn' },
	                        _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'toByTicket' })
	                    )
	                )
	            );
	        }
	    }]);
	    return PCTicket;
	}(_react.Component);
	
	var PCTicketsArea = function (_Component6) {
	    (0, _inherits3.default)(PCTicketsArea, _Component6);
	
	    function PCTicketsArea(props) {
	        (0, _classCallCheck3.default)(this, PCTicketsArea);
	        return (0, _possibleConstructorReturn3.default)(this, (PCTicketsArea.__proto__ || (0, _getPrototypeOf2.default)(PCTicketsArea)).call(this, props));
	    }
	
	    (0, _createClass3.default)(PCTicketsArea, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { style: {
	                        textAlign: "center",
	                        backgroundColor: "#ffffff",
	                        display: 'flex',
	                        justifyContent: "space-between",
	                        alignItems: "center"
	                    } },
	                _react2.default.createElement(PCTicket, { title: 'developer_ticket_19', text: 'developer_ticket_text_19', price: '\xA52388',
	                    backgroundColor: '#01007a', link: '/order', type: '0' }),
	                _react2.default.createElement(PCTicket, { title: 'sumForums_ticket_19', text: 'sumForums_ticket_text_19', price: '\xA5388',
	                    backgroundColor: '#4abfc6', link: '/order', type: '3' }),
	                _react2.default.createElement(PCTicket, { title: 'student_ticket_19', text: 'student_ticket_text_19', price: '\xA5600', backgroundColor: '#008fff',
	                    need_check: true, link: '/student_apply' })
	            );
	        }
	    }]);
	    return PCTicketsArea;
	}(_react.Component);
	
	var PCBody = function (_Component7) {
	    (0, _inherits3.default)(PCBody, _Component7);
	
	    function PCBody(props) {
	        (0, _classCallCheck3.default)(this, PCBody);
	
	        var _this7 = (0, _possibleConstructorReturn3.default)(this, (PCBody.__proto__ || (0, _getPrototypeOf2.default)(PCBody)).call(this, props));
	
	        _this7.ticketRules = [];
	        for (var i = 1; i <= 8; i++) {
	            _this7.ticketRules.push({
	                text: 'buy_tickets_end' + i
	            });
	        }
	        return _this7;
	    }
	
	    (0, _createClass3.default)(PCBody, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { style: {
	                        margin: "0 auto",
	                        display: "block",
	                        position: "relative",
	                        width: "1200px",
	                        minHeight: "800px",
	                        background: '#fff',
	                        overflow: 'hidden'
	
	                    } },
	                _react2.default.createElement(
	                    PCTitle,
	                    null,
	                    _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'please_select_your_ticket' })
	                ),
	                _react2.default.createElement(PCTicketsArea, null),
	                _react2.default.createElement(
	                    'div',
	                    { style: { textAlign: "center", margin: "40px 0", fontSize: "25px", color: ' rgb(11, 146, 254)' } },
	                    _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'buy_tickets_note' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    this.ticketRules.map(function (item, key) {
	                        return _react2.default.createElement(
	                            'div',
	                            { key: key, style: { textAlign: "left", margin: "20px 0" } },
	                            key != 7 ? _react2.default.createElement(
	                                'span',
	                                { style: { color: "#0086ff", marginRight: "10px" } },
	                                '*'
	                            ) : _react2.default.createElement(
	                                'span',
	                                { style: { marginRight: '10px' } },
	                                ' '
	                            ),
	                            _react2.default.createElement(_BaseComponent.FormattedMessage, { id: item.text })
	                        );
	                    })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { style: { textAlign: "left", margin: "20px 0px" } },
	                    _react2.default.createElement(
	                        'span',
	                        { style: { color: "red", marginRight: "10px" } },
	                        '*'
	                    ),
	                    _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'buy_tickets_end' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { style: { textAlign: "left", margin: "20px 0px" } },
	                    _react2.default.createElement(
	                        'span',
	                        { style: { color: "red", marginRight: "10px" } },
	                        '*'
	                    ),
	                    _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'after_refund_info' }),
	                    _react2.default.createElement(
	                        'a',
	                        { href: 'mailto:create_help@baidu.com' },
	                        _react2.default.createElement(_BaseComponent.FormattedMessage, { id: 'customer_service_mailbox' })
	                    )
	                ),
	                _react2.default.createElement(_BaseComponent.Menu, { ref: 'Menu', text: 'sure' })
	            );
	        }
	    }]);
	    return PCBody;
	}(_react.Component);
	
	var PC = function (_Component8) {
	    (0, _inherits3.default)(PC, _Component8);
	
	    function PC() {
	        (0, _classCallCheck3.default)(this, PC);
	        return (0, _possibleConstructorReturn3.default)(this, (PC.__proto__ || (0, _getPrototypeOf2.default)(PC)).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(PC, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Header2.default, null),
	                _react2.default.createElement(PCBody, null),
	                _react2.default.createElement(_Footer2.default, null)
	            );
	        }
	    }]);
	    return PC;
	}(_react.Component);
	
	var TicketTypes = exports.TicketTypes = function (_Component9) {
	    (0, _inherits3.default)(TicketTypes, _Component9);
	
	    function TicketTypes(props) {
	        (0, _classCallCheck3.default)(this, TicketTypes);
	
	        var _this9 = (0, _possibleConstructorReturn3.default)(this, (TicketTypes.__proto__ || (0, _getPrototypeOf2.default)(TicketTypes)).call(this, props));
	
	        _this9.changeLanguage = function () {
	            if (localStorage['language'] == 'en') {
	                localStorage['language'] = 'zh-CN';
	            } else {
	                localStorage['language'] = 'en';
	            }
	            location.href = location.href;
	        };
	
	        _this9.getLoginStatus = function () {
	            var logined = false;
	            _nZepto2.default.get(_Constant2.default.url + 'hasLoginBaidu.do', function (data) {
	                if (data.error_no == '0') {
	                    logined = false;
	                } else {
	                    logined = true;
	                }
	            });
	        };
	
	        _this9.login = function () {
	            _IsPcOrNot2.default.get() ? window.instance.show() : window.instance.render((0, _nZepto2.default)("#login")[0]);
	        };
	
	        return _this9;
	    }
	
	    (0, _createClass3.default)(TicketTypes, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.getLoginStatus();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { style: { backgroundColor: '#ffffff' } },
	                _IsPcOrNot2.default.get() ? _react2.default.createElement(PC, null) : _react2.default.createElement(Phone, null)
	            );
	        }
	    }]);
	    return TicketTypes;
	}(_react.Component);
	
	exports.default = TicketTypes;

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(567);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(379)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(567, function() {
				var newContent = __webpack_require__(567);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(378)();
	// imports
	
	
	// module
	exports.push([module.id, ".pc-ticket{border-right:1px solid #dadada}.pc-ticket:last-child{border:0}.pc-program-table{width:100%;margin:40px 0;color:#777;border-collapse:collapse}.pc-program-table tr td{padding:15px 0;text-align:center;width:27%}.pc-program-table tr td:first-child{width:19%}.pc-program-table tr td:nth-child(odd){background-color:#e8e8ea}.pc-program-table tr td:nth-child(2n){background-color:#ececee}.wap-program-table{width:94%;margin:3%;color:#fff;border-collapse:collapse}.wap-program-table tr td{padding:15px 0;text-align:center;width:27%}.wap-program-table tr td:first-child{width:19%}.wap-program-table tr td:nth-child(odd){background-color:#212034}.wap-program-table tr td:nth-child(2n){background-color:#413e62}", "", {"version":3,"sources":["/Users/baidu/Desktop/project/ai-web-2019/src/routes/TicketTypes/components/src/routes/TicketTypes/components/TicketTypes.scss"],"names":[],"mappings":"AACA,WACE,8BAA8B,CADhC,sBAGI,QAAQ,CACT,kBAGD,WAAU,cACG,WACH,wBACe,CAJ3B,wBAOM,eAAc,kBACG,SACR,CATf,oCAYQ,SAAS,CAZjB,uCAeQ,wBAAwB,CAfhC,sCAkBQ,wBAAwB,CACzB,mBAKL,UAAS,UACA,WACC,wBAEe,CAL3B,yBAQM,eAAc,kBACG,SACR,CAVf,qCAaQ,SAAS,CAbjB,wCAgBQ,wBAA8B,CAhBtC,uCAmBQ,wBAA8B,CAC/B","file":"TicketTypes.scss","sourcesContent":["\n.pc-ticket {\n  border-right:1px solid #dadada;\n  &:last-child {\n    border:0;\n  }\n}\n.pc-program-table {\n  width:100%;\n  margin:40px 0;\n  color:#777;\n  border-collapse: collapse;\n  tr {\n    td {\n      padding:15px 0;\n      text-align:center;\n      width:27%;\n\n      &:first-child {\n        width:19%;\n      }\n      &:nth-child(odd) {\n        background-color:#e8e8ea;\n      }\n      &:nth-child(even) {\n        background-color:#ececee;\n      }\n    }\n  }\n}\n.wap-program-table {\n  width:94%;\n  margin:3%;\n  color:#fff;\n\n  border-collapse: collapse;\n  tr {\n    td {\n      padding:15px 0;\n      text-align:center;\n      width:27%;\n\n      &:first-child {\n        width:19%;\n      }\n      &:nth-child(odd) {\n        background-color:rgb(33,32,52);\n      }\n      &:nth-child(even) {\n        background-color:rgb(65,62,98);\n      }\n    }\n  }\n}"],"sourceRoot":""}]);
	
	// exports


/***/ })

});
//# sourceMappingURL=8.ab461fbaf6f49cbc0898.js.map