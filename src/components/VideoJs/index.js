import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'videojs-vtt-thumbnails';

import './App.scss';

require('@silvermine/videojs-chromecast')(videojs);
require('@silvermine/videojs-airplay')(videojs);

export default function VideoPlayer() {
	const videoRef = useRef(null);
	const playerRef = useRef(null);
	const src = 'https://stream.mux.com/XAUyVQNQUpHCFH2qXYgi3JOcmGs4xovhczrhHQsgqJ4.m3u8';
	const poster = 'https://image.mux.com/XAUyVQNQUpHCFH2qXYgi3JOcmGs4xovhczrhHQsgqJ4/thumbnail.png';
	const vtt = '/storyboard.vtt';

	useEffect(() => {
		if (videoRef.current) {
			const video = videoRef.current;

			playerRef.current = videojs(video, {
				autoplay: false,
				controls: true,
				preload: 'auto',
				playbackRates: [0.5, 1, 1.5, 2, 2.5],
				userActions: {
					hotkeys: true,
				},
				controlBar: {
					pictureInPictureToggle: false,
				},
				poster,
				sources: [{ src }],
				techOrder: ['chromecast', 'html5'],
			});

			playerRef.current.chromecast();
			playerRef.current.airPlay();

			// playerRef.current.vttThumbnails({ src: vtt });

			playerRef.current.on('play', () => {
				playerRef.current.bigPlayButton.hide();
			});

			playerRef.current.on('pause', () => {
				playerRef.current.bigPlayButton.show();
			});
		}

		return () => {
			if (playerRef.current) {
				playerRef.current.dispose();
			}
		};
	}, [videoRef]);

	return (
		<video ref={videoRef} className='video video-js'>
			<track kind='chapters' src={vtt} />
		</video>
	);
}
