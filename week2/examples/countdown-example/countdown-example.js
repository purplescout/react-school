import React, { Component } from 'react';
import './countdown-example.css';

class countdownExample extends Component {
	constructor (props) {
		super(props);
		this.state = {
			elapsed: 0,
			startValue: this.props.start
		};
		this.tick = this.tick.bind(this);
		this.resetCountdown = this.resetCountdown.bind(this);
	};

	componentDidMount () {
		this.timer = setInterval(this.tick, 50);	
	}

	componentWillUnmount () {
		clearInterval(this.timer);
	}

	tick () {
		this.setState({
			elapsed: new Date() - this.state.startValue
		});
	}

	resetCountdown () {
		this.setState({
			startValue: new Date()
		});
	}

	render() {
		let elapsed = Math.round(this.state.elapsed / 100);
		let seconds = ( elapsed / 10 ).toFixed(1);
		return (
			<div>
				<p className="countdowntag">This component was started {seconds} ago.</p>
				<button className="button" onClick={this.resetCountdown}>Reset counter</button>
			</div>
		);
	}
}

export default countdownExample;