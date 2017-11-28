'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _separator = require('./separator');

var _separator2 = _interopRequireDefault(_separator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* This Source Code Form is subject to the terms of the Mozilla Public
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License, v. 2.0. If a copy of the MPL was not distributed with this file,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You can obtain one at http://mozilla.org/MPL/2.0/. */

var ContentToggle = function (_PureComponent) {
  _inherits(ContentToggle, _PureComponent);

  function ContentToggle(props) {
    _classCallCheck(this, ContentToggle);

    var _this = _possibleConstructorReturn(this, (ContentToggle.__proto__ || Object.getPrototypeOf(ContentToggle)).call(this, props));

    var open = 'open' in props ? props.open : props.defaultOpen;
    _this.state = { open: open };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(ContentToggle, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('open' in nextProps) {
        this.setState({ open: nextProps.open });
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var props = this.props;

      if (!('open' in props)) {
        this.setState({ open: e.target.open });
      }
      props.onClick({ target: { open: e.target.open } });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          testId = _props.testId,
          summary = _props.summary,
          defaultOpen = _props.defaultOpen,
          withSeparator = _props.withSeparator,
          children = _props.children;
      var open = this.state.open;

      var maybeOpen = 'defaultOpen' in this.props ? defaultOpen && open : !!open;
      return _react2.default.createElement(
        'details',
        {
          'data-test-id': testId,
          open: maybeOpen },
        _react2.default.createElement(
          'summary',
          {
            onClick: this.handleClick,
            className: (0, _noImportant.css)(styles.summary, maybeOpen && styles.summary__open)
          },
          summary,
          withSeparator && _react2.default.createElement(_separator2.default, null)
        ),
        _react2.default.createElement(
          'div',
          null,
          children
        ),
        withSeparator && _react2.default.createElement(_separator2.default, null)
      );
    }
  }]);

  return ContentToggle;
}(_react.PureComponent);

exports.default = ContentToggle;


var styles = _noImportant.StyleSheet.create({
  summary: {
    display: 'block',

    // webkit does handle the caret by default
    // but if we want to style it in the future
    // it's better to have our own defined
    '::-webkit-details-marker': {
      display: 'none'
    },

    '::before': {
      content: '"▶"',
      paddingRight: '0.5em'
    }
  },

  summary__open: {
    '::before': {
      content: '"▼"'
    }
  }
});