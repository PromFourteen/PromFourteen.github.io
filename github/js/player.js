window.onload = function() {
    var myVideo = document.getElementById('videoPlayer');
    var button_start = document.getElementById('button_view');
    var overlay = document.getElementById('ent_overlay');
    var isPlaying = false;
    myVideo.paused = true;

    button_start.addEventListener("click", function(){
    	if(!isPlaying)
    	{
    		overlay.classList += " hidden";
    		myVideo.muted = false;
    		isPlaying = true;
    		myVideo.play();
    	}
    	setTimeout(function(){
    		overlay.style.display = "none";
    	}, 500);
   	});
    
    /*var evt = document.createEvent('HTMLEvents');
	evt.initEvent("click", true, true);
	myVideo.dispatchEvent(evt);
	myVideo.dispatchEvent(evt);*/
};