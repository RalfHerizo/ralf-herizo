// toggle = () =>{
//     var x = document.getElementById("collapsibleNavbar");
//     let navbar_close_icon = document.getElementById('navbar-close-icon');
//     let navbar_open_icon = document.getElementById('navbar-open-icon');

//     x.style.height = "230px";
//     if (x.style.height === "230px") {
//         x.style.height = "0px";
//         x.style.overflow = "hidden";
//         navbar_close_icon.style.display = "none";
//         navbar_open_icon.style.display = "block";
//     } else {
        
//         navbar_close_icon.style.display = "block";
//         navbar_open_icon.style.display = "none";
//     }
// }

// let big_content = document.getElementById('big-content');

// big_content.addEventListener('click',()=>{
//     let x = document.getElementById("collapsibleNavbar");
//     let navbar_close_icon = document.getElementById('navbar-close-icon');
//     let navbar_open_icon = document.getElementById('navbar-open-icon');
    
//     x.style.height = "0px";
//     x.style.overflow = "hidden";
//     navbar_close_icon.style.display = "none";
//     navbar_open_icon.style.display = "block";
// });


toggle = ()=>{
    // document.getElementById('navbar-open-icon').style.display = "none";
    // document.getElementById('navbar-close-icon').style.display = "block";

    var x = document.getElementById("collapsibleNavbar");

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