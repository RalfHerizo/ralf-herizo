let navbar = document.getElementById('navbar');

window.addEventListener('scroll',()=>{
    if(scrollY > 1){
        navbar.classList.add('navbar-moov');
    }
    else
    {
        navbar.classList.remove('navbar-moov');
    }
});