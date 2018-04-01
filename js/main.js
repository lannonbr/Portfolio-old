function toggleNav() {
    let nav = document.getElementsByTagName('nav')[1];

    if(nav.className == "nav-mobile") {
        nav.className = "nav-mobile--open";
    } else {
        nav.className = "nav-mobile--closed";
        setTimeout(function() {
            nav.className = "nav-mobile";
        }, 300);
    }
}

window.onload = function() {
	// Loading toast.css
	let gridStyle = document.createElement('link');
	gridStyle.rel = 'stylesheet';
	gridStyle.href = 'css/toast.css';
	let prevLink = document.getElementsByTagName('link')[0];
	prevLink.parentNode.insertBefore(gridStyle, prevLink);

	// Feature test for WebP images
	let hero = document.getElementById('hero');
	if(canUseWebP())
		hero.classList = 'webp';
	else
		hero.classList = 'no-webp';

	navigator.serviceWorker.getRegistrations().then(function(registrations) {
		for(let registration of registrations) {
			  registration.unregister()

		} 
	})
}

