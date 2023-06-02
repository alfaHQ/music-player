class Body {

	constructor() {

		this.switch_wrapper = document.querySelector('.switch-wrapper');
		this.switch = document.querySelector('.switch');
		this.i = document.getElementsByTagName('i');
		this.header = document.querySelectorAll('header ul li a');
		this.nama_kelompok = document.querySelector('.nama-kelompok');
	}

	darkModeToggle() {

		this.switch.classList.toggle("fa-toggle-off");
		this.switch.classList.toggle("fa-toggle-on");
	
		if( this.switch.classList.contains("fa-toggle-off") ) {
			document.body.style.backgroundColor = "#E5EAED";
			mp3.music_menu.style.backgroundColor = "#E5EAED";
			menu.music_list_wrapper.style.backgroundColor = "#E5EAED";

			mp3.music_menu.style.boxShadow = "2px 2px 4px #D1D9E6, -2px -2px 4px #FFF";
			menu.music_list_wrapper.style.boxShadow = "2px 2px 4px #D1D9E6, -2px -2px 4px #FFF";
			mp3.cover_wrapper.style.backgroundColor = "#E5EAED";
			mp3.cover_wrapper.style.boxShadow = "7px 7px 15px #D1D9E6 inset, -7px -7px 15px #FFF inset";

			menu.music_list_wrapper.style.color = "#000";
			menu.music_name.style.color = "#000";
			menu.play_buttons = "#000";
			
			mp3.music_name.style.color = "#000";
			this.switch_wrapper.title = "Dark Mode";
			this.switch.style.color = "#000";
			this.header[0].style.color = "royalblue";
			this.header[1].style.color = "royalblue";
			mp3.current.style.color = "#000";
			mp3.duration.style.color = "#000";
			mp3.play_button.style.color = "#000";
			mp3.artist_name.style.color = "#000";
			mp3.prev_button.style.color = "#000";
			mp3.next_button.style.color = "#000";
			mp3.repeat_button.style.filter = "invert(0)";

			this.nama_kelompok.style.color = "#000";

		} else if( this.switch.classList.contains("fa-toggle-on") ) {
			document.body.style.backgroundColor = "#131419";
			mp3.music_menu.style.backgroundColor = "#131419";
			menu.music_list_wrapper.style.backgroundColor = "#131419";

			mp3.music_menu.style.boxShadow = "5px 5px 20px rgba(0, 0, 0, .5), -5px -5px 20px rgba(255, 255, 255, 0.05)";
			menu.music_list_wrapper.style.boxShadow = "10px 10px 20px rgba(0, 0, 0, .5), -10px -10px 20px rgba(255, 255, 255, 0.05)";
			mp3.cover_wrapper.style.backgroundColor = "#131419";
			mp3.cover_wrapper.style.boxShadow = "7px 7px 15px rgba(0, 0, 0, .5) inset, -7px -7px 15px rgba(255, 255, 255, 0.05) inset";
			
			menu.music_list_wrapper.style.color = "#FFF";
			menu.music_name.style.color = "#fff";
			menu.play_buttons = "#FFF";

			this.switch.style.color = "#FFF";
			this.header[0].style.color = "#fff";
			this.header[1].style.color = "#fff";
			this.switch_wrapper.title = "Light Mode";
			mp3.music_name.style.color = "#FFF";
			mp3.current.style.color = "#FFF";
			mp3.duration.style.color = "#FFF";
			mp3.play_button.style.color = "#FFF";
			mp3.artist_name.style.color = "#FFF";
			mp3.prev_button.style.color = "#FFF";
			mp3.next_button.style.color = "#FFF";
			mp3.repeat_button.style.filter = "invert(1)";
			this.nama_kelompok.style.color = "#fff";
		}
	}
}

class Mp3 {
	
	constructor() {
		this.isPlaying = false;
		this.music_index = 0;
		this.currentTime = 0;
		this.durationTime = 0;
		this.rotate_value = 0;
		this.cover = document.querySelector('.cover img');
		this.cover_wrapper = document.querySelector('.cover');
		this.play_buttons = document.querySelectorAll('.fa-play');
		this.play_button = document.querySelector('.fa-play');
		this.slider = document.querySelector('.slider');
		this.duration = document.querySelector('.duration');
		this.current = document.querySelector('.current');
		this.prev_button = document.querySelector('.fa-backward-step');
		this.next_button = document.querySelector('.fa-forward-step');
		this.repeat_button = document.querySelector('.repeat');
		this.heart = document.querySelector('.fourth-group .fa-heart');
		this.back_button = document.querySelector('.fa-arrow-left');
		this.music_name = document.querySelector('.navigation-group span h3');
		this.artist_name = document.querySelector('.navigation-group span p');
		this.music_menu = document.querySelector('.music-menu');
		this.music_list = [

			{
				img : '',
				name : 'Anugerah Terindah',
				artist : 'Sheila On 7',
				path : 'assets/mp3/anugerahTerindh.mp3'
			},

			{
				img : '',
				name : 'Why We Lose',
				artist : 'NCS',
				path : 'assets/mp3/whyWeLose.mp3'
			},

			{
				img : '',
				name : 'Never Be Alone',
				artist : 'Fat Rat',
				path : 'assets/mp3/neverBeAlone.mp3'
			},

			{
				img : '',
				name : 'ROTTENGRAFITY 7CM',
				artist : '',
				path : 'assets/mp3/rottengrafity.mp3'
			},

		
			{
				img : '',
				name : 'Puisi Hujan',
				artist : '',
				path : 'assets/mp3/puisiHujanOri.mp3'
			},
			
			{
				img : '',
				name : 'The Promise',
				artist : 'Gustavo Santaolala',
				path : 'assets/mp3/promise.mp3'
			},

			{
				img : '',
				name : 'Sunshine',
				artist : 'The Panturas',
				path : 'assets/mp3/shunshine.mp3'
			}
		];
	}

	getDuration() {

		mp3.duration.innerHTML = "0" + parseInt((Song.duration / 60) % 60 ) + ":" + parseInt(Song.duration % 60);
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

			mp3.current.innerHTML = m + ":" + s;
		}, 1000);
	}

	setDuration() {

		mp3.durationTime = Song.duration;
		mp3.slider.max = mp3.durationTime;

		mp3.slider.addEventListener('click', function(){
			Song.currentTime = mp3.slider.value;
		})

		Song.addEventListener('timeupdate', function(){
			mp3.slider.value = Song.currentTime;
		})
	}

	getArtistName() {

		if( mp3.music_list[mp3.music_index].artist === "" ) {
			mp3.artist_name.innerHTML = "Artis tidak diketahui";
		} else {
			mp3.artist_name.innerHTML = mp3.music_list[mp3.music_index].artist;
		}
	}

	play() {
		mp3.isPlaying = true;
		mp3.play_button.classList.replace('fa-play', 'fa-pause');
		menu.play_button.classList.replace('fa-play', 'fa-pause');
		mp3.getDuration()
	}

	pause() {
		mp3.isPlaying = false;
		mp3.play_button.classList.replace('fa-pause', 'fa-play');
		menu.play_button.classList.replace('fa-pause', 'fa-play');
	}

	getCurrentRotation(el){
		var st = window.getComputedStyle(el, null);
		var tm = st.getPropertyValue("-webkit-transform") ||
					st.getPropertyValue("-moz-transform") ||
					st.getPropertyValue("-ms-transform") ||
					st.getPropertyValue("-o-transform") ||
					st.getPropertyValue("transform") ||
					"none";
		if (tm != "none") {
			var values = tm.split('(')[1].split(')')[0].split(',');
			/*
			a = values[0];
			b = values[1];
			angle = Math.round(Math.atan2(b,a) * (180/Math.PI));
			*/
			//return Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI)); //this would return negative values the OP doesn't wants so it got commented and the next lines of code added
			var angle = Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI));
			return (angle < 0 ? angle + 360 : angle); //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
		}
		return 0;
	}
	

}

class Menu extends Mp3 {
	
	constructor() {
		super();
		this.music_list_wrapper = document.querySelector('.music-list');
		this.music_list_content = document.querySelector('.music-list ul');
		// this.music_list_contents =document.querySelectorAll('.music-list ul');
		this.mini_play = document.querySelector('.played-music');
		this.play_button = document.querySelector('.played');
		this.music_name = document.querySelector('.played-music div span');
	}
}

const body = new Body();
const menu = new Menu();
const mp3 = new Mp3();

let Song = new Audio();
window.onload = playsong()

menu.music_name.innerHTML = mp3.music_list[mp3.music_index].name;
mp3.music_name.innerHTML = mp3.music_list[mp3.music_index].name;
mp3.artist_name.innerHTML = "Artis tidak diketahui";

let bodyStyle = getComputedStyle(document.body);
let rotate_var = bodyStyle.getPropertyValue('--rotate-value');

body.switch.addEventListener('click', function(){
	body.darkModeToggle()
})

function playsong() {

	Song.src = mp3.music_list[mp3.music_index].path;

	// Play Pause Duration Ended

	for( let i = 0; i < mp3.play_buttons.length; i++ ) {

		mp3.play_buttons[i].addEventListener('click', function(){

			if( !mp3.isPlaying ) {
	
				mp3.play()
				Song.play();

				mp3.rotate_value = mp3.getCurrentRotation(mp3.cover);
				rotate_var = mp3.rotate_value + "deg";

				mp3.cover.classList.add('rotate');
			} else {
				
				mp3.pause()
				Song.pause();
				rotate_var = mp3.rotate_value + "deg";
				mp3.cover.classList.remove('rotate');
			}

			mp3.setDuration();
	
			Song.addEventListener('ended', function(){
				
				if( !mp3.repeat_button.classList.contains("on") ) {
					mp3.pause()
					mp3.slider.value = 0;
					Song.currentTime = 0;
					Song.pause();
				} else {
					mp3.play()
					mp3.slider.value = 0;
					Song.currentTime = 0;
					Song.play();
				}
			})
		})
	}

	// Prev Next Back Repeat Heart

	mp3.prev_button.addEventListener('click', function(){

		if( mp3.music_index > 0 ) {
			mp3.music_index--;
		} else if( mp3.music_index == 0 ) {
			mp3.music_index = mp3.music_list.length - 1;
		}

		mp3.play()
		mp3.slider.value = 0;
		Song.currentTime = 0;

		Song.src = mp3.music_list[mp3.music_index].path;
		mp3.music_name.innerHTML = mp3.music_list[mp3.music_index].name;
		menu.music_name.innerHTML = mp3.music_list[mp3.music_index].name;

		mp3.getArtistName()

		setTimeout(function () {      
			Song.play();
			mp3.getDuration()
			mp3.setDuration()
		}, 150);

	})

	mp3.next_button.addEventListener('click', function(){

		if( mp3.music_index < mp3.music_list.length - 1) {
			mp3.music_index++;
		} else if( mp3.music_index == mp3.music_list.length - 1 ) {
			mp3.music_index = 0;
		}

		mp3.play()
		mp3.slider.value = 0;
		Song.currentTime = 0;
		
		Song.src = mp3.music_list[mp3.music_index].path;
		mp3.music_name.innerHTML = mp3.music_list[mp3.music_index].name;
		menu.music_name.innerHTML = mp3.music_list[mp3.music_index].name;

		// cek nama artist

		mp3.getArtistName()
		
		setTimeout(function () {      
			Song.play();
			mp3.getDuration()
		 	mp3.setDuration()
		 }, 150);

	})

	mp3.back_button.addEventListener('click', function(){
		menu.music_list_wrapper.style.display = "block";
	})
	
	mp3.repeat_button.addEventListener('click', function(){
					
		if( !mp3.repeat_button.classList.contains("on") ) {
			mp3.repeat_button.classList.add('on');
			mp3.repeat_button.src = "assets/img/repeat-once.png";
		} else {
			mp3.repeat_button.classList.remove('on');
			mp3.repeat_button.src = "assets/img/repeat.png";
		}
	})
	
	mp3.heart.addEventListener('click', function() {
		
		if( mp3.heart.classList.contains("fa-regular") ) {
			mp3.heart.classList.replace('fa-regular', 'fas');
			mp3.heart.style.color = 'red';
		} else {
			mp3.heart.classList.replace('fas', 'fa-regular');
			mp3.heart.style.color = 'royalblue';
		}
	})
}

// Event for What

// Event for Menu

for( let i = 0; i < mp3.music_list.length; i++ ) {
	let ml_li = document.createElement('li');
	let ml_li_content = document.createTextNode(mp3.music_list[i].name);
	ml_li.appendChild(ml_li_content);
	menu.music_list_content.appendChild(ml_li);
	ml_li.classList.add(i);

	ml_li.addEventListener('click', function(e){
		
		if( mp3.music_index == ml_li.className ) {
			menu.music_list_wrapper.style.display = "none";
			mp3.music_name.innerHTML = mp3.music_list[mp3.music_index].name;
		} else {
			mp3.music_index = ml_li.className;
			Song.src = mp3.music_list[mp3.music_index].path;
		}

		mp3.play();

		menu.music_name.innerHTML = mp3.music_list[mp3.music_index].name;
		mp3.music_name.innerHTML = mp3.music_list[mp3.music_index].name;

		mp3.getArtistName()
		mp3.getDuration()
		Song.play();
		mp3.setDuration()
	})
}

menu.mini_play.addEventListener('click', function(e){

	if(e.target !== menu.play_button ) {
		menu.music_list_wrapper.style.display = "none";
	}

	mp3.getDuration()
	mp3.setDuration()

	mp3.getArtistName()
})

// out of context