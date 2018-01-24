import React, { Component } from 'react';
import './countdown-example.css';

class CountdownExample extends Component {
	constructor (props) {
		super(props);
		this.state = {
			elapsed: 0,
			startValue: this.props.start
		};
	};

	componentDidMount () {
		this.timer = setInterval(this.tick, 50);
	}

	componentWillUnmount () {
		clearInterval(this.timer);
	}

	tick = () => {
		this.setState({
			elapsed: new Date() - this.state.startValue
		});
	}

	resetCountdown = () => {
		this.setState({
			startValue: new Date()
		});
	}

	render() {
		const elapsed = Math.round(this.state.elapsed / 100);
		const seconds = ( elapsed / 10 ).toFixed(1);
		return (
			<div>
				<p className="countdowntag">This component was started {seconds} ago.</p>
				<button className="button" onClick={this.resetCountdown}>Reset counter</button>
			</div>
		);
	}
}

export default CountdownExample;
