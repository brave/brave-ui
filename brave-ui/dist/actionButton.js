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

/**
 * Implementor notes:
 * This button is almost unopinonated in styles
 * and should be used only when BrowserButton can't
 * such as actions in buttons that have no UI (link-like buttons).
 * This has limited usage on purpose.
 * Consider either using browserButton or creating a new component as needed
 * as this file shouldn't be changed much.
**/

var ActionButton = function (_PureComponent) {
  _inherits(ActionButton, _PureComponent);

  function ActionButton() {
    _classCallCheck(this, ActionButton);

    return _possibleConstructorReturn(this, (ActionButton.__proto__ || Object.getPrototypeOf(ActionButton)).apply(this, arguments));
  }

  _createClass(ActionButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          onClick = _props.onClick,
          text = _props.text;

      return _react2.default.createElement(
        'button',
        {
          id: id,
          className: (0, _noImportant.css)(styles.actionButton),
          onClick: onClick,
          style: this.componentStyles },
        text
      );
    }
  }, {
    key: 'componentStyles',
    get: function get() {
      var customStyle = {};
      var props = this.props;


      if ('height' in props) {
        customStyle['--height'] = props.height;
      }

      if ('fontSize' in props) {
        customStyle['--fontSize'] = props.fontSize;
      }

      if ('color' in props) {
        customStyle['--color'] = props.color;
      }

      if ('padding' in props) {
        customStyle['--padding'] = props.padding;
      }

      return customStyle;
    }
  }]);

  return ActionButton;
}(_react.PureComponent);

exports.default = ActionButton;


var styles = _noImportant.StyleSheet.create({
  actionButton: {
    display: 'block',
    padding: 'var(--padding, 0)',
    height: 'var(--height)',
    fontSize: 'var(--fontSize, inherit)',
    lineHeight: 1,
    background: 'none',
    color: 'var(--color, inherit)',
    border: 'none',
    cursor: 'pointer',
    outline: 'inherit'
  }
});