function includeHTML() {
    var z, i, elmnt, file, xhttp;
    
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}
//NAV BAR CONDITION EN MENU
document.addEventListener("DOMContentLoaded", function() {
    includeHTML();

    const toggle = document.createElement('div');
    toggle.className = 'navbar-toggle';
    toggle.innerText = 'Menu';
    document.querySelector('.navbar').prepend(toggle);

    const navbar = document.querySelector('.navbar ul');
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    function handleMediaChange(e) {
        if (e.matches) {
            toggle.style.display = 'block';
            navbar.style.display = 'none';
        } else {
            toggle.style.display = 'none';
            navbar.style.display = 'flex';
        }
    }

    mediaQuery.addListener(handleMediaChange);
    handleMediaChange(mediaQuery);

    toggle.addEventListener('click', function() {
        if (navbar.style.display === 'none' || navbar.style.display === '') {
            navbar.style.display = 'flex';
        } else {
            navbar.style.display = 'none';
        }
    });
});
