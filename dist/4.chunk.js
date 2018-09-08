(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(30);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(56);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(57);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(61);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(108);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// use export default for async wrap
// import {store} from "../js/store.js";

function PrevButton(props) {
  return React.createElement(
    "button",
    { className: "rkCarousel103_previous", onClick: props.pr_onClick },
    React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg" },
      React.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
    ),
    React.createElement(
      "span",
      null,
      "Previous"
    )
  );
}

function NextButton(props) {
  return React.createElement(
    "button",
    { className: "rkCarousel103_next", onClick: props.pr_onClick },
    React.createElement(
      "span",
      null,
      "Next"
    ),
    React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg" },
      React.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
    )
  );
}

var RkCarousel103 = function (_React$Component) {
  (0, _inherits3.default)(RkCarousel103, _React$Component);

  function RkCarousel103(props) {
    (0, _classCallCheck3.default)(this, RkCarousel103);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RkCarousel103.__proto__ || (0, _getPrototypeOf2.default)(RkCarousel103)).call(this, props));

    _this.state = {
      items: [{
        itemName: "item1",
        description: "desc1",
        imgSrc: "",
        isActive: true
      }, {
        itemName: "item2",
        description: "desc2",
        imgSrc: "",
        isActive: false
      }, {
        itemName: "item3",
        description: "desc3",
        imgSrc: "",
        isActive: false
      }],
      cIndex: 0,
      activePageButton: 0
    };

    // binders
    return _this;
  }

  // lifecycle hooks

  // methods


  (0, _createClass3.default)(RkCarousel103, [{
    key: "nextItem",
    value: function nextItem() {
      var state = this.state; // "this" remover
      state.cIndex = state.cIndex + 1;
      state.cIndex = state.cIndex % state.items.length; // go to first

      this.setActivePageButton(state.cIndex);
    }
  }, {
    key: "prevItem",
    value: function prevItem() {
      var state = this.state;
      if (state.cIndex === 0) {
        state.cIndex = state.items.length; // go to last
      }
      state.cIndex = state.cIndex - 1;

      this.setActivePageButton(state.cIndex);
    }
  }, {
    key: "customPage",
    value: function customPage(index) {
      this.state.cIndex = index;
      this.setActivePageButton(index);
    }
  }, {
    key: "setActivePageButton",
    value: function setActivePageButton(index) {
      var activeItem = index;
      var state = this.state;

      state.items[activeItem].isActive = true;

      if (state.activePageButton !== activeItem) {
        state.items[state.activePageButton].isActive = false;

        // set current activePageButton
        state.activePageButton = activeItem;
      }

      this.refresh();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var _this2 = this;

      this.setState(function (prevState) {
        return {
          cIndex: _this2.state.cIndex
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var items = this.state.items;
      var isActive = this.state.isActive;

      return React.createElement(
        "div",
        { className: "rkCarousel103" },
        React.createElement(
          "div",
          { className: "rkCarousel103_content" },
          items[this.state.cIndex].itemName,
          React.createElement("br", null),
          React.createElement(
            "span",
            { "class": "carousel1-03_description" },
            items[this.state.cIndex].description
          )
        ),
        React.createElement(
          "nav",
          { className: "rkCarousel103_pagination" },
          items.map(function (i, index) {
            return React.createElement("div", { className: items[index].isActive ? 'rkCarousel103_pagebuttons rkCarousel103_active' : 'rkCarousel103_pagebuttons',
              onClick: function onClick() {
                _this3.customPage(index);
              } });
          })
        ),
        React.createElement(
          "div",
          { className: "rkCarousel103_prevnext" },
          React.createElement(PrevButton, { pr_onClick: function pr_onClick() {
              _this3.prevItem();
            } }),
          React.createElement(NextButton, { pr_onClick: function pr_onClick() {
              _this3.nextItem();
            } })
        )
      );
    }
  }]);
  return RkCarousel103;
}(React.Component);

exports.default = RkCarousel103;

/***/ })

}]);