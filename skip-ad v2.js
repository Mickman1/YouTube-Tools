javascript: (function() {
	skipAd();

	setInterval(() => {
		skipAd();
	}, 1000);

	function skipAd() {
		ad = [...document.querySelectorAll('.ad-showing')][0];

		if (ad !== null) {
			// Set ad time to the end (its duration)
			video = document.querySelector('video');
			video.currentTime = video.duration;

			// Click the skip button
			var $cross = document.getElementsByClassName('ytp-ad-player-overlay-skip-or-preview')[0];
			var $skip = document.getElementsByClassName('ytp-ad-skip-button-modern')[0];
			if ($cross != undefined) $cross.click();
			if ($skip != undefined) $skip.click();
		}
	}
})()