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

var SwitchButton = function (_PureComponent) {
  _inherits(SwitchButton, _PureComponent);

  function SwitchButton(props) {
    _classCallCheck(this, SwitchButton);

    var _this = _possibleConstructorReturn(this, (SwitchButton.__proto__ || Object.getPrototypeOf(SwitchButton)).call(this, props));

    _this.state = { checked: props.checked };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(SwitchButton, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('checked' in nextProps) {
        this.setState({ checked: nextProps.checked });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var props = this.props;

      if (props.disabled) {
        return;
      }
      if (!('checked' in props)) {
        this.setState({ checked: e.target.checked });
      }
      props.onChange({ target: { checked: e.target.checked } });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          readOnly = _props.readOnly,
          disabled = _props.disabled,
          autoFocus = _props.autoFocus,
          leftText = _props.leftText,
          rightText = _props.rightText;
      var checked = this.state.checked;


      return _react2.default.createElement(
        'div',
        { className: (0, _noImportant.css)(styles.switchButton_wrapper, disabled && styles.switchButton_wrapper__disabled) },
        !!leftText && _react2.default.createElement(
          'label',
          {
            className: (0, _noImportant.css)(styles.switchButton_label__left),
            htmlFor: id },
          leftText
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('input', {
            type: 'checkbox',
            id: id,
            readOnly: readOnly,
            disabled: disabled,
            className: (0, _noImportant.css)(styles.checkbox),
            checked: !!checked,
            onChange: this.handleChange,
            autoFocus: autoFocus
          }),
          _react2.default.createElement(
            'label',
            {
              htmlFor: id,
              className: (0, _noImportant.css)(styles.switchButton, !!checked && styles.switchButton__checked),
              style: this.componentStyles
            },
            _react2.default.createElement('i', {
              style: this.componentStyles,
              className: (0, _noImportant.css)(styles.switchButton_knob, !!checked && styles.switchButton_knob__checked)
            })
          )
        ),
        !!rightText && _react2.default.createElement(
          'label',
          {
            className: (0, _noImportant.css)(styles.switchButton_label__right),
            htmlFor: id },
          rightText
        )
      );
    }
  }, {
    key: 'componentStyles',
    get: function get() {
      var customStyle = {};

      if (this.props.small != null) {
        customStyle['--width'] = '40px';
        customStyle['--height'] = '14px';
      }

      return customStyle;
    }
  }]);

  return SwitchButton;
}(_react.PureComponent);

exports.default = SwitchButton;


var checkboxWidth = 'var(--width, 48px)';
var checkboxHeight = 'var(--height, 16px)';
var knobSize = 'calc(' + checkboxHeight + ' - 4px)';

var styles = _noImportant.StyleSheet.create({
  checkbox: {
    display: 'none'
  },

  switchButton_wrapper: {
    display: 'flex',
    alignItems: 'center'
  },

  switchButton_wrapper__disabled: {
    opacity: 0.3,
    userSelect: 'none'
  },

  switchButton: {
    boxSizing: 'border-box',
    padding: '0 2px',
    display: 'flex',
    alignItems: 'center',
    width: checkboxWidth,
    height: checkboxHeight,
    borderRadius: checkboxHeight,
    boxShadow: 'inset 0 1px 1px 1px #bbb',
    background: _theme2.default.switchButton.uncheckedBg,
    transition: 'all 0.4s',

    ':active': {
      boxShadow: 'inset 0 0 0 ' + checkboxHeight + ' #bbb'
    },

    ':active > i': {
      width: checkboxHeight
    }
  },

  switchButton__checked: {
    boxShadow: 'inset 0 0 0 ' + checkboxHeight + ' ' + _theme2.default.switchButton.checkedBg,
    border: 'none',

    ':active > i': {
      marginLeft: 'calc(90% - ' + knobSize + ')'
    }
  },

  switchButton_knob: {
    boxSizing: 'border-box',
    height: knobSize,
    width: knobSize,
    borderRadius: checkboxHeight,
    background: _theme2.default.switchButton.knob,
    transition: 'all 0.3s',
    WebkitTransition: 'all 0.3s',
    boxShadow: '0 2px 2px rgba(0,0,0,0.25)',
    pointerEvents: 'none'
  },

  switchButton_knob__checked: {
    marginLeft: 'calc(100% - ' + knobSize + ')',
    boxShadow: '0 2px 2px rgba(0,0,0,0.25)'
  },

  switchButton_label__left: {
    marginRight: '10px'
  },

  switchButton_label__right: {
    marginLeft: '10px'
  }
});