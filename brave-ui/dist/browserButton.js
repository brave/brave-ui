"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const no_important_1 = require("aphrodite/no-important");
const theme_1 = require("./theme");
class BrowserButton extends React.PureComponent {
    get componentStyles() {
        const { size, fontSize } = this.props;
        return {
            '--bg': theme_1.default.browserButton.default.bg,
            '--color': theme_1.default.browserButton.default.color,
            '--hoverColor': theme_1.default.browserButton.default.hoverColor,
            '--primary-bg': theme_1.default.browserButton.primary.bg,
            '--primary-gradient1': theme_1.default.browserButton.primary.gradient1,
            '--primary-gradient2': theme_1.default.browserButton.primary.gradient2,
            '--primary-color': theme_1.default.browserButton.primary.color,
            '--primary-hoverColor': theme_1.default.browserButton.primary.hoverColor,
            '--primary-borderHoverColor': theme_1.default.browserButton.primary.borderHoverColor,
            '--secondary-bg': theme_1.default.browserButton.secondary.bg,
            '--secondary-color': theme_1.default.browserButton.secondary.color,
            '--secondary-hoverColor': theme_1.default.browserButton.secondary.hoverColor,
            '--secondary-borderHoverColor': theme_1.default.browserButton.secondary.borderHoverColor,
            '--size': size,
            '--fontSize': fontSize
        };
    }
    render() {
        const { id, theme, onClick, disabled, children } = this.props;
        return (React.createElement("button", { id: id, style: this.componentStyles, onClick: onClick, disabled: disabled, className: no_important_1.css(styles.browserButton, theme === 'primary' && styles.browserButton_primaryColor, theme === 'secondary' && styles.browserButton_secondaryColor, disabled && styles.browserButton_disabled) }, children));
    }
}
const styles = no_important_1.StyleSheet.create({
    browserButton: {
        position: 'relative',
        display: 'inline-block',
        textAlign: 'center',
        fontSize: `var(--fontSize, 13px)`,
        color: `var(--color)`,
        boxShadow: '0px 1px 5px -1px rgba(0, 0, 0, 0.5)',
        boxSizing: 'border-box',
        outline: 'none',
        border: 'none',
        borderRadius: '2px',
        backgroundSize: '16px',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'none',
        backgroundColor: `var(--bg)`,
        lineHeight: 1.25,
        width: 'auto',
        minWidth: `calc(var(--fontSize, 13px) * 6)`,
        minHeight: `var(--size, 32px)`,
        whiteSpace: 'nowrap',
        paddingTop: '5px',
        paddingBottom: '5px',
        paddingRight: '16px',
        paddingLeft: '16px',
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        WebkitAppRegion: 'no-drag',
        cursor: 'pointer',
        userSelect: 'none',
        transition: '.1s opacity, .1s background',
        ':hover': {
            color: `var(--hoverColor)`
        },
        ':active': {
            bottom: '-1px'
        }
    },
    browserButton_disabled: {
        pointerEvents: 'none',
        animation: 'none',
        opacity: 0.25
    },
    browserButton_primaryColor: {
        background: `var(--primary-bg)`,
        borderLeft: '2px solid transparent',
        borderRight: '2px solid transparent',
        borderTop: `2px solid var(--primary-gradient1)`,
        borderBottom: `2px solid var(--primary-gradient2)`,
        color: `var(--primary-color)`,
        ':hover': {
            border: `2px solid var(--primary-borderHoverColor)`,
            color: `var(--primary-hoverColor)`
        }
    },
    browserButton_secondaryColor: {
        background: `var(--secondary-bg)`,
        border: '1px solid white',
        color: `var(--secondary-color)`,
        ':hover': {
            border: `1px solid var(--secondary-borderHoverColor)`,
            color: `var(--secondary-hoverColor)`
        }
    }
});
exports.default = BrowserButton;
//# sourceMappingURL=browserButton.js.map