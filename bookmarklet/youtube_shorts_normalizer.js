javascript: (function() {
	if (document.location.host.includes('youtube.com')) {
		let ytPlayer = document.getElementById('shorts-player')
		let currentTimeSec = ytPlayer.getCurrentTime().toFixed(0)

		let tempURL = document.location.href.replace('shorts/', 'watch?v=')

		document.location.href = `${tempURL}&t=${currentTimeSec}s`
	}
})()
