// Dynamically populate the current year
const yearElement = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Dynamically populate the last modified date
const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = 'Last Modification: ' + document.lastModified;

document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("active");
});

document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});