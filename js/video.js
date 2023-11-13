
//opening 
window.addEventListener("load", function() {
	console.log("Good job opening the window")

});
let video = document.querySelector("#player1"); 

//load vid
document.addEventListener("DOMContentLoaded", function() {
    video.autoplay = false; // Turn off autoplay
	console.log("Auto Play is set to false")

    video.loop = false; // Turn off looping
	console.log("loop is set to false")

});

//play button
let playButton=document.querySelector('#play')
playButton.addEventListener('click',function(){
	console.log("Play Video");
	video.play(); 
	//do i need to put volumn here?
})

//pause button
let pauseButton=document.querySelector("#pause")
pauseButton.addEventListener('click',function(){
	console.log("Pause Video");
	video.pause();
})

//slow down
let decreaseSpeed = document.querySelector('#slower');

decreaseSpeed.addEventListener('click', function() {
    video.playbackRate = video.playbackRate * 0.9;
    console.log("Speed is " + video.playbackRate);
});

	

//speed up
let increaseSpeed = document.querySelector('#faster');
increaseSpeed.addEventListener('click', function() {
    video.playbackRate = video.playbackRate * 1.115;
	console.log("Speed is " + video.playbackRate);
});

//skip ahead function
let skipAhead=document.querySelector('#skip')
skipAhead.addEventListener("click",function() {
	// skip 10 seconds
	video.currentTime = video.currentTime + 10;
	if (video.ended) {
		// reset playback
		video.load();
		video.play();
		// reset speed
		playbackRate = 1;
	}
	console.log("Current location is " + video.currentTime);
} );
//mute function

let muteButton=document.querySelector('#mute')
muteButton.addEventListener('click',function() { 
	if (video.muted) {
		video.muted = false;
		muteButton.textContent = "Mute";
		console.log("Unmuted");
	}
	else {
		video.muted = true;
		muteButton.textContent = "Unmute";
		console.log("Muted");
	}
});

//volumn slider
let volumeSlider = document.querySelector('#slider');
let volumeDisplay = document.querySelector('#volume');

    volumeSlider.addEventListener('change', function() {
        let sliderValue = volumeSlider.value;
        video.volume = sliderValue / 100;
        volumeDisplay.innerHTML = sliderValue + '%';
        console.log("The current value is " + video.volume);
    });


//styled vintage
let vintageButton = document.getElementById('vintage');
let origButton = document.getElementById('orig');
vintageButton.addEventListener('click',function() { 
	video.classList.add("oldSchool");
	console.log("oldSchool");
});
//original remove oldschool class from video
origButton.addEventListener('click', function() {
	video.classList.remove('oldSchool');
	console.log("remove oldSchool");
  });



