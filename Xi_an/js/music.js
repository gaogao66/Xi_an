$(document).ready(function(){
	var time = localStorage.getItem('curTime');
    // console.log('s',time);
    just_play(time);
});
function play_music(){
	if ($('#mc_play').hasClass('on')){
        $('#mc_play audio').get(0).pause();
		$('#mc_play').attr('class','stop');
	}else{
		$('#mc_play audio').get(0).play();
		$('#mc_play').attr('class','on');
	}
	$('#music_play_filter').hide();
	event.stopPropagation(); //阻止冒泡
}
function just_play(time){
	var audio = $('#mc_play audio');
	if(time) audio.get(0).currentTime = time;
	audio.get(0).play();
	$('#mc_play').attr('class','on');
	 // event.stopPropagation(); //阻止冒泡
}
window.onunload=function(){
	var curTime = document.querySelector('#mc_play audio').currentTime;
	console.log('e',curTime);

    localStorage.setItem('curTime',curTime);
};
