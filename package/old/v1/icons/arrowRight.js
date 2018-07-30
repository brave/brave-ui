"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const StyledSVG = styled_components_1.default.svg `
  stroke: inherit;
`;
class ArrowRight extends React.PureComponent {
    render() {
        return (React.createElement(StyledSVG, { id: 'arrow', width: '15', height: '14', xmlns: 'http://www.w3.org/2000/svg' },
            React.createElement("g", { strokeWidth: '1.5', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round' },
                React.createElement("path", { d: 'M.5 6.5h12' }),
                React.createElement("path", { strokeLinejoin: 'round', d: 'M10 1l4 5.625L10 12' }))));
    }
}
exports.default = ArrowRight;
//# sourceMappingURL=arrowRight.js.map