/* show and hide */
let toggleNav = document.querySelector("header nav div ul li a")

toggleNav.addEventListener("click", function() {
    let getSidebar = document.querySelector(".nav-sidebar")

    getSidebar.classList.toggle("show")
})