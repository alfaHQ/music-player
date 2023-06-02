let body = document.querySelector('body');
let saklar = document.querySelector('.saklar');

let ps = document.querySelector('.fa-playstation');
let play = document.querySelector('.fa-play');
let slider = document.querySelector('.slider');

let duration = document.querySelector('.duration');
let current = document.querySelector('.current');

let isPlaying = false;
let currentTime = 0;
let durationTime = 0;
// music_name = "assets/mp3/puisiHujan.mp3";

let music_name = document.querySelector('.navigation-group span h3');
let prev_button = document.querySelector('.fa-backward-step');
let next_button = document.querySelector('.fa-forward-step');
let repeat_button = document.querySelector('.fa-repeat');
let music_index = 0;

let music_list_div = document.querySelector('div.music-list');
let music_list_ul = document.querySelector('div.music-list ul');

let back_button = document.querySelector('.fa-angle-down');

let played_button = document.querySelector('.played-music div i');

const music_list = [
	{
		img : '',
		name : 'Blizzard Broly',
		artist : '',
		path : 'assets/mp3/blizzardBroly.mp3'
	},

	{
		img : '',
		name : 'Fearless',
		artist : '',
		path : 'assets/mp3/fearless.mp3'
	},

	{
		img : '',
		name : 'Why We Lose',
		artist : '',
		path : 'assets/mp3/whyWeLose.mp3'
	}
];

music_name.innerHTML = music_list[music_index].name;

let Song = new Audio();
window.onload = playsong()

function playsong() {

	Song.src = music_list[music_index].path;

	play.addEventListener('click', function(){

		if( !isPlaying ) {

			Song.play();
			isPlaying = true;
			durationTime = Song.duration;
			slider.max = durationTime;
			play.classList.replace('fa-play', 'fa-pause');
			played_button.classList.replace('fa-play', 'fa-pause');
			duration.innerHTML = "0" + parseInt((Song.duration / 60) % 60 ) + ":" + parseInt(Song.duration % 60);

			setInterval(function(){

				let i = Math.floor(Song.currentTime);

				var s = parseInt(Song.currentTime % 60);
				var m = parseInt((Song.currentTime / 60) % 60);

				if( m < 10 ) {
					m = "0" + m;
				}

				if( s < 10 ) {
					s = "0" + s;
				}

				console.log(m + ":" + s);

				current.innerHTML = m + ":" + s;
			}, 1000);

		} else {
			
			Song.pause();
			isPlaying = false;
			play.classList.replace('fa-pause', 'fa-play');	
			played_button.classList.replace('fa-pause', 'fa-play');	
		}

		slider.addEventListener('click', function(){
			Song.currentTime = slider.value;
		})

		Song.addEventListener('timeupdate', function(){
			slider.value = Song.currentTime;
		})

		prev_button.addEventListener('click', function(){
			if( music_index > 0 ) {
				music_index--;
			} else if( music_index == 0 ) {
				music_index = music_list.length - 1;
			}

			play.classList.replace('fa-play', 'fa-pause');
				slider.value = 0;
				Song.currentTime = 0;
				isPlaying = true;
				Song.src = music_list[music_index].path;
				Song.play()
				music_name.innerHTML = music_list[music_index].name;
		})

		next_button.addEventListener('click', function(){
			if( music_index < music_list.length - 1) {
				music_index++;
			} else if( music_index == music_list.length - 1 ) {
				music_index = 0;
			}
			play.classList.replace('fa-play', 'fa-pause');
				slider.value = 0;
				Song.currentTime = 0;
				isPlaying = true;
				Song.src = music_list[music_index].path;
				music_name.innerHTML = music_list[music_index].name;
				Song.play()
		})

		repeat_button.addEventListener('click', function(){
			
			if( !repeat_button.classList.contains("repeat-on") ) {
				repeat_button.classList.add('repeat-on');
			} else {
				repeat_button.classList.toggle('repeat-on');
			}
		})

		Song.addEventListener('ended', function(){
			
			if( !repeat_button.classList.contains("repeat-on") ) {
				isPlaying = false;
				slider.value = 0;
				Song.currentTime = 0;
				Song.pause();
				play.classList.replace('fa-pause', 'fa-play');
			} else {
				isPlaying = true;
				slider.value = 0;
				Song.currentTime = 0;
				Song.play();
			}
		})
	})

	played_button.addEventListener('click', function(){
		if( !isPlaying ) {

			Song.play();
			isPlaying = true;
			durationTime = Song.duration;
			slider.max = durationTime;
			played_button.classList.replace('fa-play', 'fa-pause');
			play.classList.replace('fa-play', 'fa-pause');
			duration.innerHTML = "0" + parseInt((Song.duration / 60) % 60 ) + ":" + parseInt(Song.duration % 60);

			setInterval(function(){

				let i = Math.floor(Song.currentTime);

				var s = parseInt(Song.currentTime % 60);
				var m = parseInt((Song.currentTime / 60) % 60);

				if( m < 10 ) {
					m = "0" + m;
				}

				if( s < 10 ) {
					s = "0" + s;
				}

				console.log(m + ":" + s);

				current.innerHTML = m + ":" + s;
			}, 1000);

		} else {
			
			Song.pause();
			isPlaying = false;
			played_button.classList.replace('fa-pause', 'fa-play'); 
			play.classList.replace('fa-pause', 'fa-play'); 
		}
	})
}

// display music list

back_button.addEventListener('click', function(){
	music_list_div.style.display = "block";
})

for( let i = 0; i < music_list.length; i++ ) {
	let ml_li = document.createElement('li');
	let ml_li_content = document.createTextNode(music_list[i].name);
	ml_li.appendChild(ml_li_content);
	music_list_ul.appendChild(ml_li);
	ml_li.classList.add(i);

	console.log(ml_li);

	ml_li.addEventListener('click', function(){
		
		if( music_index == ml_li.className ) {
			music_list_div.style.display = "none";
			music_name.innerHTML = music_list[music_index].name;
			play.classList.replace('fa-play', 'fa-pause');
			played_button.classList.replace('fa-play', 'fa-pause');
			Song.play()
		} else {
			Song.src = music_list[music_index].path;
			music_index = ml_li.className;
			play.classList.replace('fa-play', 'fa-pause');
			played_button.classList.replace('fa-play', 'fa-pause');
			Song.play()
		}
	})
}

function setBodyBackground() {

	saklar.classList.toggle("on");

	if( saklar.classList.contains("on") ) {
		body.style.backgroundColor = "#ECF0F3";
		ps.style.color = "";
	} else {
		body.style.backgroundColor = "#183153";
		ps.style.color = "#fff";
	}
}

// out of context