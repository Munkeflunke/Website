// Vælg alle nødvendige elementer
const modeToggleButton = document.querySelector('.darkModeButton'); // Dark mode toggle-knappen
const bodyElement = document.body; // Body-elementet
const htmlElement = document.documentElement; // HTML-elementet
const headerElement = document.querySelector('.header'); // Header-elementet
const headings = document.querySelectorAll('.h1, .h2'); // Alle h1 og h2 elementer
const sectionBackgrounds = document.querySelectorAll('.section1, .section2, .section3, .section4'); // Sektioner for at ændre baggrund
const linkTextElements = document.querySelectorAll('.linktxt1, .linktxt2, .linktxt3, .link1,.link2,.link3, a'); // Alle linktekst elementer, inklusiv <a> tags

// Funktion til at ændre baggrundsfarven for body og html
function changeBodyAndHtmlBackgroundColor(color) {
    bodyElement.style.backgroundColor = color;
    htmlElement.style.backgroundColor = color;
}

// Funktion til at ændre farven på tekst i overskrifter (h1, h2)
function changeHeadingColors(color) {
    headings.forEach(function (heading) {
        heading.style.color = color;
    });
}

// Funktion til at ændre farven på linktekster (inklusive alle <a> elementer)
function changeLinkTextColors(color) {
    linkTextElements.forEach(function (link) {
        link.style.color = color;
    });
}

// Funktion til at ændre baggrundsfarverne i sektionerne
function changeSectionBackgrounds(color) {
    sectionBackgrounds.forEach(function (section) {
        section.style.backgroundColor = color;
    });
}

// Funktion til at ændre baggrundsfarven for headeren
function changeHeaderBackgroundColor(color) {
    headerElement.style.backgroundColor = color;
}

// Aktiver Dark Mode
function enableDarkMode() {
    changeBodyAndHtmlBackgroundColor("#000"); // Sæt baggrund til sort
    changeHeaderBackgroundColor("#000"); // Sæt header baggrund til sort
    changeHeadingColors("purple"); // Sæt overskriftfarven til lilla
    changeLinkTextColors("purple"); // Sæt farve for alle links til lilla
    changeSectionBackgrounds("#000"); // Sæt sektionernes baggrund til sort

    modeToggleButton.textContent = "Light Mode"; // Ændr knapteksten til "Light Mode"
}

// Deaktiver Dark Mode (Tilbage til standardstile)
function disableDarkMode() {
    changeBodyAndHtmlBackgroundColor(""); // Gendan standard baggrund for body og html
    changeHeaderBackgroundColor(""); // Gendan standard header baggrund
    changeHeadingColors(""); // Gendan standard farver for overskrifter
    changeLinkTextColors(""); // Gendan standard farver for links
    changeSectionBackgrounds(""); // Gendan standard farver for sektioner

    modeToggleButton.textContent = "Dark Mode"; // Ændr knapteksten tilbage til "Dark Mode"
}

// Skift mellem Dark Mode og Light Mode, når knappen klikkes
modeToggleButton.addEventListener('click', function () {
    if (modeToggleButton.textContent === "Dark Mode") {
        enableDarkMode(); // Aktiver Dark Mode
        applyLightModeButtonStyles(); // Anvend stilarter for Light Mode-knappen
    } else {
        disableDarkMode(); // Deaktiver Dark Mode
        applyDarkModeButtonStyles(); // Anvend stilarter for Dark Mode-knappen
    }
});

// Funktion til at anvende Dark Mode-knap stilarter dynamisk
function applyDarkModeButtonStyles() {
    modeToggleButton.style.backgroundColor = "black"; // Sæt knapbaggrund til sort
    modeToggleButton.style.color = "purple"; // Sæt knaptekst til lilla
    modeToggleButton.style.border = "2px solid black"; // Sæt knaprammen til sort
}

// Funktion til at gendanne Light Mode-knap stilarter dynamisk
function applyLightModeButtonStyles() {
    modeToggleButton.style.backgroundColor = "purple"; // Gendan knapbaggrund til lilla
    modeToggleButton.style.color = "orange"; // Gendan knaptekst til orange
    modeToggleButton.style.border = "2px solid white"; // Gendan knapramme til hvid
}
