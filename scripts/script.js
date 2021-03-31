let user    = document.querySelector('.user');
let conf    = document.querySelector('.conf');
let header  = document.querySelector('header');
let portada = document.querySelector('.portada');
let body    = document.querySelector('body');
let form    = document.querySelector('.form');
let input   = document.querySelector('.input');
let btn     = document.querySelector('.btn');
let nav     = document.querySelector('.nav');
let close_form = document.querySelector('.close-conf');
let darktext   = document.querySelector('#darktext');
let lightext   = document.querySelector('#lightext');
let option_1   = document.querySelector('.option-1');
let option_2   = document.querySelector('.option-2');
let option_3   = document.querySelector('.option-3');
let light = document.querySelector('#light');
let dark  = document.querySelector('#dark');

let audio = document.querySelector('.audio');
let cambiarM = document.querySelector('.cambiarM');

let section = document.querySelector('.sec-1');
let settings = document.querySelector('.settings');
let root  = document.documentElement.style;

// Abrir menu en mobile
let menu = document.querySelector('.menu');
let navMenu = document.querySelector('.navMenu');

menu.addEventListener('click', ()=>{
	navMenu.classList.toggle("navMenuOpen");
	formMobile.classList.toggle("formMobileOpen");
	audio.classList.toggle("MenuActive");
	cambiarM.classList.toggle("MenuActive");
});

// Abrir Settings Movil y PC
user.addEventListener("click", ()=> {
	conf.classList.toggle("move");
	close_form.style.display = 'block';
	darktext.innerHTML = "Dark Mode";
	lightext.innerHTML = "Light Mode";
	body.style.overflow = 'hidden';
	audio.classList.add("SettingsActive");
	cambiarM.classList.add("SettingsActive");
	audio.classList.remove("MenuActive");
	cambiarM.classList.remove("MenuActive");

	navMenu.classList.remove("navMenuOpen");
	formMobile.classList.remove("formMobileOpen");
	audio.classList.remove("MenuActive");
	cambiarM.classList.remove("MenuActive");
});
settings.addEventListener("click", ()=> {
	conf.classList.toggle("move");
	close_form.style.display = 'block';
	darktext.innerHTML = "Dark Mode";
	lightext.innerHTML = "Light Mode";
	body.style.overflow = 'hidden';
	audio.classList.add("SettingsActive");
	cambiarM.classList.add("SettingsActive");
	audio.classList.remove("MenuActive");
	cambiarM.classList.remove("MenuActive");

	navMenu.classList.remove("navMenuOpen");
	formMobile.classList.remove("formMobileOpen");
	audio.classList.remove("MenuActive");
	cambiarM.classList.remove("MenuActive");
});

	// Dark Mode
option_1.addEventListener('click', ()=>{
	option_1.style.display = 'none';
	option_2.style.display = 'flex';
	root.setProperty('--white', "#101010");
	root.setProperty('--white2', "#202020");
	root.setProperty('--white3', "#191919");
	root.setProperty('--color', "#ffffff");
	root.setProperty('--child', "#303030");
	root.setProperty('--aAnimation', "#ffffff");
	root.setProperty('--bg', "#151515");
	root.setProperty('--bg-temp', "#151515");
	root.setProperty('--input', "#252525");
	root.setProperty('--input2', "#191919");
	root.setProperty('--img', "url(../img/bg/bg2.png)");
	localStorage.setItem("dark-mode", "true");
});
	// Light Mode
option_2.addEventListener('click', ()=>{
	option_1.style.display = 'flex';
	option_2.style.display = 'none';
	root.setProperty('--white', "#ffffff");
	root.setProperty('--white2', "#ffffff");
	root.setProperty('--white3', "#ffffff");
	root.setProperty('--color', "#000000");
	root.setProperty('--child', "#ededed");
	root.setProperty('--aAnimation', "#000000");
	root.setProperty('--bg', "#ffffff");
	root.setProperty('--bg-temp', "#0006");
	root.setProperty('--input', "#F4F4F4");
	root.setProperty('--input2', "#ededed");
	root.setProperty('--img', "url(../img/bg/bg1.png)");
	localStorage.setItem("dark-mode", "false");
});

// Music
option_3.addEventListener("click", ()=>{

	audio.innerHTML = `<audio src="audio/main.mp3" autoplay loop>
	</audio>`;
	audio.style.opacity = "1";
	cambiarM.style.opacity = '1';
	// Cerrar musica
	audio.addEventListener('click', ()=>{
		audio.innerHTML = "";
		audio.style.opacity = '0'
		cambiarM.style.opacity = '0';
	})

	// Nueva musica
	cambiarM.addEventListener('click', ()=>{
		audio.innerHTML = `<audio src="audio/a2.mp3" autoplay loop>
	</audio>`;
		cambiarM.addEventListener('click', ()=>{
		audio.innerHTML = `<audio src="audio/a3.mp3" autoplay loop>
		</audio>`;

			cambiarM.addEventListener('click', ()=>{
			audio.innerHTML = `<audio src="audio/a4.mp3" autoplay loop>
			</audio>`;

				cambiarM.addEventListener('click', ()=>{
				audio.innerHTML = `<audio src="audio/a5.mp3" autoplay loop>
				</audio>`;
			});
			});
		});
	});
});


/* Obtener datos del local storage */
	if (localStorage.getItem('dark-mode') === 'true') {
	option_1.style.display = 'none';
	option_2.style.display = 'flex';
	root.setProperty('--white', "#101010");
	root.setProperty('--white2', "#202020");
	root.setProperty('--white3', "#191919");
	root.setProperty('--color', "#ffffff");
	root.setProperty('--child', "#303030");
	root.setProperty('--aAnimation', "#ffffff");
	root.setProperty('--bg', "#151515");
	root.setProperty('--bg-temp', "#151515");
	root.setProperty('--input', "#252525");
	root.setProperty('--input2', "#191919");
	root.setProperty('--img', "url(../img/bg/bg2.png)");
} else {
	option_1.style.display = 'flex';
	option_2.style.display = 'none';
	root.setProperty('--white', "#ffffff");
	root.setProperty('--white2', "#ffffff");
	root.setProperty('--white3', "#ffffff");
	root.setProperty('--color', "#000000");
	root.setProperty('--child', "#ededed");
	root.setProperty('--aAnimation', "#000000");
	root.setProperty('--bg', "#ffffff");
	root.setProperty('--bg-temp', "#0006");
	root.setProperty('--input', "#F4F4F4");
	root.setProperty('--input2', "#ededed");
	root.setProperty('--img', "url(../img/bg/bg1.png)");
}


// Envio del formulario PC
form.addEventListener("submit", function(e){
	const valor = input.value;
	e.preventDefault()
	btn.style.background = '#009CFF';
	btn.style.opacity = '1';
	alert(valor);
})
let formMobile = document.querySelector('.formMobile');
let inputMobile = document.querySelector('.inputMobile');
let btnMobile     = document.querySelector('.btnMobile');
// Envio del formulario Mobile
formMobile.addEventListener("submit", function(e){
	const valorMobile = inputMobile.value;
	e.preventDefault()
	btnMobile.style.background = '#009CFF';
	btnMobile.style.opacity = '1';
	alert(valorMobile);
})


// Cerrar menu de configuracion
close_form.addEventListener("click", ()=> {
	conf.classList.remove("move");
	close_form.style.display = 'none';
	body.style.overflow = 'initial';
	audio.classList.remove("SettingsActive");
	cambiarM.classList.remove("SettingsActive");
})

// Cambiar color del boton del searcher
window.addEventListener('click', ()=>{
	btn.style.background = '#A9A9A9';
	btn.style.opacity = '0.7';
	btnMobile.style.background = '#A9A9A9';
	btnMobile.style.opacity = '0.7';
})

// ---- Cambio de nombre en pestaña PC ----
let title  = document.querySelector('.title');

let home = document.querySelector('.Home');
home.addEventListener('click', (e)=> {
	title.innerHTML = `<title>GameX | Home</title>`
})
let services = document.querySelector('.Services');
services.addEventListener('click', (e)=> {
	title.innerHTML = `<title>GameX | Services</title>`
})
let about = document.querySelector('.About');
about.addEventListener('click', (e)=> {
	title.innerHTML = `<title>GameX | About Us</title>`
});

// Lo mismo de arriba (Cambio de info de pestaña) Mobile!
let homeMobile = document.querySelector('.HomeMobile');
homeMobile.addEventListener('click', (e)=> {
	title.innerHTML = `<title>GameX | Home</title>`
})
let servicesMobile = document.querySelector('.ServicesMobile');
servicesMobile.addEventListener('click', (e)=> {
	title.innerHTML = `<title>GameX | Services</title>`
})
let aboutMobile = document.querySelector('.AboutMobile');
aboutMobile.addEventListener('click', (e)=> {
	title.innerHTML = `<title>GameX | About Us</title>`
});