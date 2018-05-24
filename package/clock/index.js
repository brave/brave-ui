"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class Clock extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = this.getClockState(new Date());
    }
    get dateTimeFormat() {
        return new Intl.DateTimeFormat([], { hour: '2-digit', minute: '2-digit' });
    }
    get formattedTime() {
        return this.state.currentTime.map((component, i) => {
            if (component.type === 'literal') {
                if (component.value === ':') {
                    return React.createElement(style_1.StyledTimeSeparator, { key: i }, component.value);
                }
                else if (component.value.trim() === '') {
                    return null;
                }
            }
            else if (component.type === 'dayperiod') {
                return null;
            }
            return component.value;
        });
    }
    get formattedTimePeriod() {
        const time = this.state.currentTime;
        const period = time.find((component) => component.type === 'dayperiod');
        return period ? period.value : '';
    }
    getMinutes(date) {
        return Math.floor(date / 1000 / 60);
    }
    maybeUpdateClock() {
        const now = new Date();
        if (this.getMinutes(this.state.date) !== this.getMinutes(now)) {
            this.setState(this.getClockState(now));
        }
    }
    getClockState(now) {
        return {
            date: now,
            currentTime: this.dateTimeFormat.formatToParts(now)
        };
    }
    componentDidMount() {
        window.setInterval(this.maybeUpdateClock.bind(this), 2000);
    }
    render() {
        const { id, theme } = this.props;
        return (React.createElement(style_1.StyledClock, { id: id, theme: theme },
            React.createElement(style_1.StyledTime, null, this.formattedTime),
            React.createElement(style_1.StyledPeriod, null, this.formattedTimePeriod)));
    }
}
exports.default = Clock;
//# sourceMappingURL=index.js.map