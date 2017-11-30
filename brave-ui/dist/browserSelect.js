'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* This Source Code Form is subject to the terms of the Mozilla Public
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License, v. 2.0. If a copy of the MPL was not distributed with this file,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You can obtain one at http://mozilla.org/MPL/2.0/. */

var BrowserSelect = function (_PureComponent) {
  _inherits(BrowserSelect, _PureComponent);

  function BrowserSelect() {
    _classCallCheck(this, BrowserSelect);

    return _possibleConstructorReturn(this, (BrowserSelect.__proto__ || Object.getPrototypeOf(BrowserSelect)).apply(this, arguments));
  }

  _createClass(BrowserSelect, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          titleName = _props.titleName,
          id = _props.id,
          autoFocus = _props.autoFocus,
          disabled = _props.disabled,
          value = _props.value,
          onChange = _props.onChange,
          children = _props.children;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          { className: (0, _noImportant.css)(styles.browserSelect_title) },
          titleName
        ),
        _react2.default.createElement(
          'div',
          { className: (0, _noImportant.css)(styles.browserSelectWrapper, disabled && styles.browserSelectWrapper__disabled) },
          _react2.default.createElement(
            'select',
            {
              id: id,
              autoFocus: autoFocus,
              disabled: disabled,
              value: value,
              onChange: onChange,
              className: (0, _noImportant.css)(styles.browserSelect)
            },
            children
          )
        )
      );
    }
  }]);

  return BrowserSelect;
}(_react.PureComponent);

exports.default = BrowserSelect;


var styles = _noImportant.StyleSheet.create({
  browserSelect: {
    boxSizing: 'border-box',
    position: 'relative',
    borderRadius: '4px',
    boxShadow: '0px 2px 8px -5px rgba(0, 0, 0, 1)',
    display: 'block',
    color: 'rgb(68, 68, 68)',
    fontSize: '13px',
    border: 'solid 1px rgba(0, 0, 0, 0.2)',
    outline: 'none',
    padding: '0.4em 1.5em 0.4em 0.4em',
    width: '100%',
    backgroundColor: '#fbfbfb',
    backgroundSize: '12px 12px',
    WebkitAppearance: 'none',
    height: '2rem',
    marginBottom: '.75rem'
  },

  browserSelect_title: {
    margin: '0 0 .25rem .25rem'
  },

  browserSelectWrapper: {
    position: 'relative',

    '::after': {
      content: '"▼"',
      position: 'absolute',
      top: 0,
      right: 0,
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      padding: '10px',
      fontSize: '13px'
    }
  },

  browserSelectWrapper__disabled: {
    opacity: 0.3,
    userSelect: 'none'
  }
});