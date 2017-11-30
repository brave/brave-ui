'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = exports.Grid = exports.gridTemplate = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* This Source Code Form is subject to the terms of the Mozilla Public
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License, v. 2.0. If a copy of the MPL was not distributed with this file,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Create a 12-based column grid system
var gridTemplate = exports.gridTemplate = 12;

var Grid = exports.Grid = function (_PureComponent) {
  _inherits(Grid, _PureComponent);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
  }

  _createClass(Grid, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          disabled = _props.disabled,
          children = _props.children,
          style = _props.style;

      return _react2.default.createElement(
        'div',
        {
          id: id || 'grid',
          className: (0, _noImportant.css)(styles.grid, disabled && styles.grid__disabled),
          style: Object.assign(this.componentStyles, style) },
        children
      );
    }
  }, {
    key: 'componentStyles',
    get: function get() {
      var props = this.props;

      var customStyle = {};

      if ('padding' in props) {
        customStyle['--gridPadding'] = props.padding;
      }

      if ('gap' in props) {
        customStyle['--gridGap'] = props.gap;
      }

      if ('width' in props) {
        customStyle['--gridWidth'] = props.width;
      }

      if ('height' in props) {
        customStyle['--gridHeight'] = props.height;
      }

      if ('textColor' in props) {
        customStyle['--gridTextColor'] = props.textColor;
      }

      if ('background' in props) {
        customStyle['--gridBackground'] = props.background;
      }

      return customStyle;
    }
  }]);

  return Grid;
}(_react.PureComponent);

var gridWrapper = {
  grid: {
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: 'repeat(' + gridTemplate + ', 1fr)',
    gridGap: 'var(--gridGap, 15px)',
    padding: 'var(--gridPadding, 0)',
    maxWidth: 'var(--gridWidth)',
    height: 'var(--gridHeight)',
    color: 'var(--gridTextColor)',
    backgroundColor: 'var(--gridBackground)'
  },

  grid__disabled: {
    opacity: 0.3,
    userSelect: 'none'
  }
};

var Column = exports.Column = function (_PureComponent2) {
  _inherits(Column, _PureComponent2);

  function Column() {
    _classCallCheck(this, Column);

    return _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
  }

  _createClass(Column, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          _props2$size = _props2.size,
          size = _props2$size === undefined ? 12 : _props2$size,
          children = _props2.children;

      return _react2.default.createElement(
        'div',
        {
          'data-test-id': id || 'column',
          className: (0, _noImportant.css)(styles['column' + size]),
          style: this.componentStyles },
        children
      );
    }
  }, {
    key: 'componentStyles',
    get: function get() {
      var customStyle = {};
      var props = this.props;

      var needsFlex = 'align' in props || 'verticalAlign' in props;

      if (needsFlex) {
        customStyle['--columnDisplay'] = 'flex';
      }

      if ('align' in props) {
        customStyle['--columnAlign'] = props.align;
      }

      if ('verticalAlign' in props) {
        customStyle['--columnVerticalAlign'] = props.verticalAlign;
      }

      if ('background' in props) {
        customStyle['--columnBackground'] = props.background;
      }

      return customStyle;
    }
  }]);

  return Column;
}(_react.PureComponent);

// Iterate over gridTemplate and add a `columnN` classname
// i.e. {column1, ..., columnN}. Being N the max gridTemplate number


var columnSystem = {};
Array.from({ length: gridTemplate }, function (v, i) {
  return i + 1;
}).forEach(function (size) {
  Object.assign(columnSystem, _defineProperty({}, 'column' + size, {
    boxSizing: 'border-box',
    position: 'relative',
    gridColumn: 'span ' + size,
    display: 'var(--columnDisplay, inherit)',
    justifyContent: 'var(--columnAlign)',
    alignItems: 'var(--columnVerticalAlign)',
    backgroundColor: 'var(--columnBackground)'
  }));
});

// merge both grid and column styles obj to be used in Aphrodite
var gridSystem = Object.assign(gridWrapper, columnSystem);
var styles = _noImportant.StyleSheet.create(gridSystem);