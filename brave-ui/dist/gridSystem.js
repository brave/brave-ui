'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = exports.Grid = exports.gridTemplate = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* This Source Code Form is subject to the terms of the Mozilla Public
                                                                                                                                                                                                                   * License, v. 2.0. If a copy of the MPL was not distributed with this file,
                                                                                                                                                                                                                   * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Create a 12-based column grid system
var gridTemplate = 12;

/**
 * Creates a css-grid based column wrapper (grid)
 * @param {testId} testId - the element's name for testing purposes
 * @param {String} padding - own grid padding
 * @param {String} gap - distance between each column children
 * @param {String} width - the max grid width
 * @param {node} children - any node you want to pass as the grid children
 */
var Grid = function Grid(_ref) {
  var testId = _ref.testId,
      padding = _ref.padding,
      gap = _ref.gap,
      width = _ref.width,
      background = _ref.background,
      children = _ref.children;

  var customStyle = {};

  if (padding != null) {
    customStyle['--gridPadding'] = padding;
  }

  if (gap != null) {
    customStyle['--gridGap'] = gap;
  }

  if (width != null) {
    customStyle['--gridWidth'] = width;
  }

  if (background != null) {
    customStyle['--gridBackground'] = background;
  }

  return _react2.default.createElement(
    'div',
    {
      'data-test-id': testId || 'grid',
      className: (0, _noImportant.css)(styles.grid),
      style: customStyle },
    children
  );
};

var gridWrapper = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(' + gridTemplate + ', 1fr)',
    gridGap: 'var(--gridGap, 15px)',
    padding: 'var(--gridPadding, 0)',
    maxWidth: 'var(--gridWidth)',
    backgroundColor: 'var(--gridBackground)'
  }

  /**
   *
   * @param {testId} testId - the element's name for testing purposes
   * @param {String|Number} size - the column size ranging between 1 and 12
   * @param {String} align - any flexbox accepted value for justify-content
   * @param {String} verticalAlign - any flexbox accepted value for alignItems
   * @param {String} background - any CSS compilant color for the background
   * @param {node} children - any node you want to pass as the grid children
   */
};var Column = function Column(_ref2) {
  var testId = _ref2.testId,
      _ref2$size = _ref2.size,
      size = _ref2$size === undefined ? 12 : _ref2$size,
      align = _ref2.align,
      verticalAlign = _ref2.verticalAlign,
      background = _ref2.background,
      children = _ref2.children;

  var customStyle = {};

  if (align != null) {
    customStyle['--columnAlign'] = align;
  }

  if (verticalAlign != null) {
    customStyle['--columnVerticalAlign'] = verticalAlign;
  }

  if (background != null) {
    customStyle['--columnBackground'] = background;
  }

  return _react2.default.createElement(
    'div',
    {
      'data-test-id': testId || 'column',
      className: (0, _noImportant.css)(styles['column' + size]),
      style: customStyle },
    children
  );
};

// Iterate over gridTemplate and add a `columnN` classname
// i.e. {column1, ..., columnN}. Being N the max gridTemplate number
var columnSystem = {};
Array.from({ length: gridTemplate }, function (v, i) {
  return i + 1;
}).forEach(function (size) {
  Object.assign(columnSystem, _defineProperty({}, 'column' + size, {
    gridColumn: 'span ' + size,
    display: 'flex',
    justifyContent: 'var(--columnAlign)',
    alignItems: 'var(--columnVerticalAlign)',
    backgroundColor: 'var(--columnBackground)'
  }));
});

// merge both grid and column styles obj to be used in Aphrodite
var gridSystem = Object.assign(gridWrapper, columnSystem);
var styles = _noImportant.StyleSheet.create(gridSystem);

exports.gridTemplate = gridTemplate;
exports.Grid = Grid;
exports.Column = Column;