const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.documentElement.setAttribute(
        "data-theme",
        savedTheme
    );
}

themeToggle.addEventListener("click", () => {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    const newTheme =
        currentTheme === "dark"
            ? "light"
            : "dark";

    document.documentElement.setAttribute(
        "data-theme",
        newTheme
    );

    localStorage.setItem(
        "theme",
        newTheme
    );

});
const favoriteImages = document.querySelectorAll(".favorite-image");

let favoriteIndex = 0;

setInterval(() => {

    favoriteImages[favoriteIndex].classList.remove("active");

    favoriteIndex++;

    if (favoriteIndex >= favoriteImages.length) {
        favoriteIndex = 0;
    }

    favoriteImages[favoriteIndex].classList.add("active");

}, 3000);