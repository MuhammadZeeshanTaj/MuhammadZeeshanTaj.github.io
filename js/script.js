
// now here goea the menu overlay content:
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const portrait = document.querySelector('.potrait-one');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelector('.nav-items');


var shown = false;
menuBtn.addEventListener('click', function(){
    if(!shown){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuBranding.classList.add('show');
        portrait.classList.add('show');
        menuNav.classList.add('show');
        navItems.classList.add('show');
        shown = true;
        
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        portrait.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.classList.remove('show');
        shown = false;
    }
})