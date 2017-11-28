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

var Anchor = function (_PureComponent) {
  _inherits(Anchor, _PureComponent);

  function Anchor() {
    _classCallCheck(this, Anchor);

    return _possibleConstructorReturn(this, (Anchor.__proto__ || Object.getPrototypeOf(Anchor)).apply(this, arguments));
  }

  _createClass(Anchor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          href = _props.href,
          noStyle = _props.noStyle,
          target = _props.target,
          text = _props.text;

      return _react2.default.createElement(
        'a',
        {
          className: (0, _noImportant.css)(styles.anchor, noStyle && styles.anchor__noStyle),
          href: href,
          target: target,
          rel: 'noreferrer noopener'
        },
        text
      );
    }
  }]);

  return Anchor;
}(_react.PureComponent);

exports.default = Anchor;


var styles = _noImportant.StyleSheet.create({
  anchor: {
    color: 'inherit',
    fontSize: 'inherit'
  },
  anchor__noStyle: {
    textDecoration: 'none'
  }
});