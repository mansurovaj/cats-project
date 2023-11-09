const video = document.querySelector('#myVideo')
const btnPlay = document.querySelector('#play')

function play(){
	if (video.paused === true) {
		console.log('1')
		video.play()
		btnPlay.textContent = 'Pause'
	}else{
		video.pause()
		btnPlay.textContent = 'Play'
	}
}