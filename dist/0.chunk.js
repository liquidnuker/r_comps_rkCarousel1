webpackJsonp([0],{

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _store = __webpack_require__(50);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // use export default for async wrap


var RkCarousel1 = function (_React$Component) {
  _inherits(RkCarousel1, _React$Component);

  function RkCarousel1(props) {
    _classCallCheck(this, RkCarousel1);

    var _this = _possibleConstructorReturn(this, (RkCarousel1.__proto__ || Object.getPrototypeOf(RkCarousel1)).call(this, props));

    _this.state = {
      items: _store.store.items,
      cIndex: 0
    };

    // binders
    return _this;
  }

  // lifecycle hooks

  // methods

  _createClass(RkCarousel1, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.items[this.state.cIndex].itemName
      );
    }
  }]);

  return RkCarousel1;
}(React.Component);

exports.default = RkCarousel1;

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var store = {
  items: [{
    itemName: "item1",
    description: "",
    imgSrc: ""
  }, {
    itemName: "item2",
    description: "",
    imgSrc: ""
  }, {
    itemName: "item3",
    description: "",
    imgSrc: ""
  }]
};

exports.store = store;

/***/ })

});