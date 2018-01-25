import React, { Component } from 'react';
import Youtube from 'react-youtube';
import './youtube.css';

class YoutubeController extends Component {
	constructor () {
		super();
		this.state = {
			selectedVideo: '3M_5oYU-IsU',
			videoListArray: [
				{url: 'jsUvcjk8J5c', name: 'Irish farmer'},
				{url: 'aXnkFd373T4', name: 'Oil? what oil?'},
				{url: '3M_5oYU-IsU', name: 'Mans not hot!'},
				{url: 'C_TwWsebq0M', name: 'Purple way of life'},
				{url: 'xvFKT36uKEk', name: 'Babymac attack'},
			],
		}
	};

	setNewVideo = (url) => {
		this.setState({
			selectedVideo: url
		});
	}

	addNewVideo = (e) => {
		e.preventDefault();
		const {
			url: { value: url },
			name: { value: name },
		} = e.target;

		this.setState({
			videoListArray: [
				...this.state.videoListArray,
				{url: url, name: name},
			]
		});
	}

	render() {
		const {
			selectedVideo,
			videoListArray,
		} = this.state;

		const list = videoListArray.map((video, i) => {
			const videoChanger = () => this.setNewVideo(video.url);
			return (
				<li key={i} value={video.url}>
					<a onClick={ () => videoChanger(video.url)}>
						{video.name}
					</a>
				</li>
			);
		})

		return (
			<div>
				<br/>
				<div className="leftDiv">
					<Youtube
						videoId={selectedVideo}
					/>
				</div>
				<div className="rightDiv">
					<div className="list-type1">
						<ol>
							{list}
						</ol>
					</div>
					<code>https://www.youtube.com/watch?v=</code> This part -> <code>TyCl-NvIugA</code>
					<form onSubmit={this.addNewVideo}>
						<input className="input" type="text" placeholder="video url id" name="url" />
						<input className="input" type="text" placeholder="video name" name="name" />
						<br/>
						<button className="button" type="submit">Add video</button>
					</form>
					<br/>
				</div>
			</div>
		);
	}
}

export default YoutubeController;