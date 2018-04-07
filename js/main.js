window.onload = function() {
  // Feature test for WebP images
  let hero = document.getElementById("hero");
  if (canUseWebP()) hero.classList = "webp";
  else hero.classList = "no-webp";

  const menuButton = document.getElementById("menu-button");
  const nav = document.getElementsByTagName("nav")[0];

  menuButton.onclick = function() {
    if (nav.className == "") {
      nav.className = "nav-open";
      menuButton.className = "fa fa-times";
    } else {
      nav.className = "nav-close";
      menuButton.className = "fa fa-bars";
      setTimeout(function() {
        nav.className = "";
      }, 300);
    }
  };

  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
};
