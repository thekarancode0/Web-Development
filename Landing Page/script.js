document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navList = document.getElementById("navlist");

    menuIcon.addEventListener("click", () => {
        navList.classList.toggle("active");
    });
});
