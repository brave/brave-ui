"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const helpers_1 = require("../../../helpers");
const batLogo = require('./assets/bat.png');
class GrantCaptcha extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onCaptchaDrop = (event) => {
            event.preventDefault();
            if (!this.captchaBox) {
                return;
            }
            const target = this.captchaBox.getBoundingClientRect();
            let x = event.clientX - target.left - this.dndStartPosition.x + (this.dndStartPosition.height / 2);
            let y = event.clientY - target.top - this.dndStartPosition.y + (this.dndStartPosition.width / 2);
            if (this.props.isWindows) {
                const dpr = window.devicePixelRatio;
                const factor = (dpr <= 1) ? 0 : (this.offset * dpr);
                x = Math.round(x + factor);
                y = Math.round(y + factor);
            }
            console.log({ x, y });
            this.props.onSolution(x, y);
        };
        this.onCaptchaDrag = (event) => {
            if (!event || !event.target) {
                return;
            }
            const target = event.target.getBoundingClientRect();
            this.dndStartPosition = {
                x: event.clientX - target.left,
                y: event.clientY - target.top,
                width: target.width,
                height: target.height
            };
        };
        this.refSet = (node) => {
            this.captchaBox = node;
        };
        this.captchaBox = null;
        this.offset = 5;
        this.dndStartPosition = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
    }
    preventDefault(event) {
        event.preventDefault();
    }
    render() {
        const { id, dropBgImage } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id, innerRef: this.refSet },
            React.createElement(style_1.StyledDrag, null,
                React.createElement(style_1.StyledImageWrap, { onDragStart: this.onCaptchaDrag, draggable: 'true' },
                    React.createElement(style_1.StyledImage, { src: batLogo })),
                React.createElement(style_1.StyledText, null, helpers_1.getLocale('dndCaptcha'))),
            React.createElement(style_1.StyledDropArea, { src: dropBgImage, draggable: 'false', onDrop: this.onCaptchaDrop, onDragOver: this.preventDefault })));
    }
}
exports.default = GrantCaptcha;
//# sourceMappingURL=index.js.map