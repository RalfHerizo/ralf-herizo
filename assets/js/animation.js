var x = document.getElementById("collapsibleNavbar");
var big_content = document.getElementById('big-content');

toggle = ()=>{

    if (x.style.height === "230px") {
        x.style.height = "0px";
        x.style.overflow = "hidden";
        document.getElementById('navbar-close-icon').style.display = "none";
        document.getElementById('navbar-open-icon').style.display = "block";
    } else {
        document.getElementById('navbar-close-icon').style.display = "block";
        document.getElementById('navbar-open-icon').style.display = "none";
        x.style.height = "230px";
    }
}

big_content.addEventListener('click',()=>{
    x.style.height = "0px";
    x.style.overflow = "hidden";
    document.getElementById('navbar-close-icon').style.display = "none";
    document.getElementById('navbar-open-icon').style.display = "block";
}); 