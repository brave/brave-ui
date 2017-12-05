'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* This Source Code Form is subject to the terms of the Mozilla Public
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License, v. 2.0. If a copy of the MPL was not distributed with this file,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Implementator notes:
 * This file is the home of default, primary and secondary icons
 * There are other several buttons that may benefit
 * from it, which is still an early draft.
 *
 * Plan is to make the component easy to change, so if your
 * addition requires a lot of changes, consider creating another
 * component using this as a boilerlate
 */

var BrowserText = function (_PureComponent) {
  _inherits(BrowserText, _PureComponent);

  function BrowserText() {
    _classCallCheck(this, BrowserText);

    return _possibleConstructorReturn(this, (BrowserText.__proto__ || Object.getPrototypeOf(BrowserText)).apply(this, arguments));
  }

  _createClass(BrowserText, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          theme = _props.theme,
          onClick = _props.onClick,
          disabled = _props.disabled,
          children = _props.children;

      return _react2.default.createElement(
        'button',
        {
          id: id,
          'data-test-theme': theme || 'default',
          style: this.componentStyles,
          onClick: onClick,
          disabled: disabled,
          className: (0, _noImportant.css)(styles.browserButton, theme === 'primary' && styles.browserButton_primaryColor, theme === 'secondary' && styles.browserButton_secondaryColor, disabled && styles.browserButton_disabled) },
        children
      );
    }
  }, {
    key: 'componentStyles',
    get: function get() {
      var theming = {};

      // Default button theme
      // TODO: do we really need a default button?
      theming['--bg'] = _theme2.default.browserButton.default.bg;
      theming['--color'] = _theme2.default.browserButton.default.color;
      theming['--hoverColor'] = _theme2.default.browserButton.default.hoverColor;

      // Primary button theme
      theming['--primary-bg'] = _theme2.default.browserButton.primary.bg;
      theming['--primary-gradient1'] = _theme2.default.browserButton.primary.gradient1;
      theming['--primary-gradient2'] = _theme2.default.browserButton.primary.gradient2;
      theming['--primary-color'] = _theme2.default.browserButton.primary.color;
      theming['--primary-hoverColor'] = _theme2.default.browserButton.primary.hoverColor;
      theming['--primary-borderHoverColor'] = _theme2.default.browserButton.primary.borderHoverColor;

      // Secondary button theme
      theming['--secondary-bg'] = _theme2.default.browserButton.secondary.bg;
      theming['--secondary-color'] = _theme2.default.browserButton.secondary.color;
      theming['--secondary-hoverColor'] = _theme2.default.browserButton.secondary.hoverColor;
      theming['--secondary-borderHoverColor'] = _theme2.default.browserButton.secondary.borderHoverColor;

      var customStyle = {};
      var _props2 = this.props,
          size = _props2.size,
          fontSize = _props2.fontSize;

      if (size != null) {
        customStyle['--size'] = size;
      }

      if (fontSize != null) {
        customStyle['--fontSize'] = fontSize;
      }
      return Object.assign(theming, customStyle);
    }
  }]);

  return BrowserText;
}(_react.PureComponent);

exports.default = BrowserText;


var styles = _noImportant.StyleSheet.create({
  browserButton: {
    // Positioning properties
    position: 'relative',
    display: 'inline-block',
    textAlign: 'center',

    // Font properties
    fontSize: 'var(--fontSize, 13px)',
    color: 'var(--color)',

    // Box/Border properties
    boxShadow: '0px 1px 5px -1px rgba(0, 0, 0, 0.5)',
    boxSizing: 'border-box',
    outline: 'none',
    border: 'none',
    borderRadius: '2px',

    // Background properties
    backgroundSize: '16px',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'none',
    backgroundColor: 'var(--bg)',

    // Sizing properties
    lineHeight: 1.25, // TODO: this should be calculated instead of hard coded
    width: 'auto',
    minWidth: 'calc(var(--fontSize, 13px) * 6)',
    minHeight: 'var(--size, 32px)',
    whiteSpace: 'nowrap',

    // Spacing properties
    paddingTop: '5px',
    paddingBottom: '5px',
    paddingRight: '16px',
    paddingLeft: '16px',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,

    // Mouse properties
    WebkitAppRegion: 'no-drag',
    cursor: 'pointer',
    userSelect: 'none',

    // Transition properties
    transition: '.1s opacity, .1s background',

    ':hover': {
      color: 'var(--hoverColor)'
    },

    ':active': {
      // push the button down when active
      bottom: '-1px'
    }
  },

  browserButton_disabled: {
    pointerEvents: 'none',
    animation: 'none',
    opacity: 0.25
  },

  browserButton_primaryColor: {
    background: 'var(--primary-bg)',
    borderLeft: '2px solid transparent',
    borderRight: '2px solid transparent',
    borderTop: '2px solid var(--primary-gradient1)',
    borderBottom: '2px solid var(--primary-gradient2)',
    color: 'var(--primary-color)',

    ':hover': {
      border: '2px solid var(--primary-borderHoverColor)',
      color: 'var(--primary-hoverColor)'
    }
  },

  browserButton_secondaryColor: {
    background: 'var(--secondary-bg)',
    border: '1px solid white',
    color: 'var(--secondary-color)',

    ':hover': {
      border: '1px solid var(--secondary-borderHoverColor)',
      color: 'var(--secondary-hoverColor)'
    }
  }
});