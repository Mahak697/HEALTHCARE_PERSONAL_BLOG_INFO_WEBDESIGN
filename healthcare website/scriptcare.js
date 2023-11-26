let menu = document.querySelectorAll('#menu-btn');
let navbar = document.querySelectorAll('#menu-btn');

menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

window.onscroll = () =>{

    menu.classList.remove('fa-times');

}