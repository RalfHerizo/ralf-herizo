toggle = () =>{
    let x = document.getElementById("collapsibleNavbar");
    let navbar_close_icon = document.getElementById('navbar-close-icon');
    let navbar_open_icon = document.getElementById('navbar-open-icon');

  if (x.style.height === "230px") {
    x.style.height = "0px";
    x.style.overflow = "hidden";
    navbar_close_icon.style.display = "none";
    navbar_open_icon.style.display = "block";
  } else {
    x.style.height = "230px";
    navbar_close_icon.style.display = "block";
    navbar_open_icon.style.display = "none";
  }
}

let big_content = document.getElementById('big-content');

big_content.addEventListener('click',()=>{
    let x = document.getElementById("collapsibleNavbar");
    let navbar_close_icon = document.getElementById('navbar-close-icon');
    let navbar_open_icon = document.getElementById('navbar-open-icon');
    
    x.style.height = "0px";
    x.style.overflow = "hidden";
    navbar_close_icon.style.display = "none";
    navbar_open_icon.style.display = "block";
});