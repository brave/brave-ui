"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class TitleHeading extends React.PureComponent {
    render() {
        const { id, text, label } = this.props;
        return (React.createElement(style_1.StyledHeadingTitle, { id: id },
            text,
            label && React.createElement(style_1.StyledHeadingTitleLabel, null, label)));
    }
}
exports.TitleHeading = TitleHeading;
class SectionHeading extends React.PureComponent {
    render() {
        const { id, text } = this.props;
        return (React.createElement(style_1.StyledSectionHeading, { id: id }, text));
    }
}
exports.SectionHeading = SectionHeading;
class FeatureHeading extends React.PureComponent {
    render() {
        const { id, text } = this.props;
        return (React.createElement(style_1.StyledFeatureHeading, { id: id }, text));
    }
}
exports.FeatureHeading = FeatureHeading;
class Heading extends React.PureComponent {
    render() {
        const { id, level, theme, text } = this.props;
        switch (level) {
            case 1:
                return React.createElement(style_1.StyledH1, { id: id, theme: theme }, text);
            case 2:
                return React.createElement(style_1.StyledH2, { id: id, theme: theme }, text);
            case 3:
                return React.createElement(style_1.StyledH3, { id: id, theme: theme }, text);
            case 4:
                return React.createElement(style_1.StyledH4, { id: id, theme: theme }, text);
            case 5:
                return React.createElement(style_1.StyledH5, { id: id, theme: theme }, text);
            case 6:
                return React.createElement(style_1.StyledH6, { id: id, theme: theme }, text);
            default:
                return React.createElement(style_1.StyledH1, { id: id, theme: theme }, text);
        }
    }
}
exports.Heading = Heading;
//# sourceMappingURL=index.js.map