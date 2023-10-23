//Telling page to load content
document.addEventListener("DOMContentLoaded", function(){
    const menus = document.querySelector(".side-menu");
    M.Sidenav.init(menus, {edge: "right"});
//Add Tasks
const forms = document.querySelector(".side-form");
M.Sidenav.init(forms, {edge: "left"});
});