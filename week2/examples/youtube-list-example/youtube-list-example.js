import React, { Component } from 'react';
import Youtube from 'react-youtube'
import './youtube-list-example.css';

class YoutubeController extends Component {
	constructor () {
		super();
		this.state = {
			url: 'jsUvcjk8J5c',
		}
		this.videoChanger = this.videoChanger.bind(this);
	};

	videoChanger () {
		this.state.url === 'jsUvcjk8J5c' ? this.setState({url: 'aXnkFd373T4'}) : this.setState({url:'jsUvcjk8J5c'});
	};

	render() {
		return (
			<div className="youtubeCentered">
				<Youtube
					videoId={this.state.url}
				/>
				<button onClick={this.videoChanger}>Change video</button>
			</div>
		);
	}
}

export default YoutubeController;