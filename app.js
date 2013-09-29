var supportVibrate = 'vibrate' in navigator;

if (supportVibrate) {
	// vibrate for one second
	navigator.vibrate(2000);

	// vibrate for 2 secs, wait for 5 secs, then again vibrate for 2 secs
	navigator.vibrate([2000, 5000, 2000]);

	// Either of these stop vibration
	navigator.vibrate(0);
	navigator.vibrate([]);

	// Continued vibration with setInterval and clearInterval
	var vibrateInterval;

	// starts vibration 
	function startVibration(duration){
			navigator.vibrate(duration);
	}

	// stop vibration
	function stopVibration () {
		// clear interval and stop persistent vibration
		if(vibrateInterval) clearInterval(vibrateInterval);
		navigator.vibrate(0);
	}

	// start persistent vibration at given duration and interval
	// Assumes a number value is given
	function startPersistentVibration(duration, interval){
		vibrateInterval = setInterval(function(){
			startVibration(duration);
		}, interval);
	}

	var startBtn = document.querySelector('#start');
	var stopBtn = document.querySelector('#stop');

	startBtn.addEventListener('click', function(){
		startPersistentVibration(2000, 3000);
	}, false);

	stopBtn.addEventListener('click', function(){
		stopVibration();
	}, false);

} else {
	alert('Vibration API is not supported');
}