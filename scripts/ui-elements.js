// ui-elements.js
import { getColorStore } from "./ColorClass.js";

export const lightElements = {
    main: document.getElementById("light-main"),
    h2: document.getElementById("light-h2"),
    card: document.getElementById("light-card"),
    cardContent: document.getElementById("light-card-content"),
    input: document.getElementById("light-input"),
    boldText: document.getElementById("light-bold-text"),
    regularText: document.getElementById("light-regular-text"),
    highlight: document.getElementById("light-highlight"),
    btn: document.getElementById("light-btn"),
    btnDis: document.getElementById("light-btn-dis"),
    invert: document.getElementById("light-invert"),
    err: document.getElementById("light-err")
};

export const darkElements = {
    main: document.getElementById("dark-main"),
    h2: document.getElementById("dark-h2"),
    card: document.getElementById("dark-card"),
    cardContent: document.getElementById("dark-card-content"),
    input: document.getElementById("dark-input"),
    boldText: document.getElementById("dark-bold-text"),
    regularText: document.getElementById("dark-regular-text"),
    highlight: document.getElementById("dark-highlight"),
    btn: document.getElementById("dark-btn"),
    btnDis: document.getElementById("dark-btn-dis"),
    invert: document.getElementById("dark-invert"),
    err: document.getElementById("dark-err")
};

function applyThemeColors(elements, colors) {
    elements.main.style.backgroundColor = colors.BACKGROUND;
    elements.h2.style.color = colors.TEXT_PRIMARY;
    elements.card.style.backgroundColor = colors.SURFACE;
    elements.card.style.borderColor = colors.BORDER_DARK;
    elements.cardContent.style.color = colors.TEXT_PRIMARY;
    elements.input.style.backgroundColor = colors.SURFACE;
    elements.input.style.color = colors.TEXT_PRIMARY;
    elements.input.style.borderColor = colors.BORDER_LIGHT;
    elements.boldText.style.color = colors.TEXT_PRIMARY;
    elements.regularText.style.color = colors.TEXT_SECONDARY;
    elements.highlight.style.backgroundColor = colors.TEXT_SECONDARY;
    elements.btn.style.backgroundColor = colors.ACCENT;
    elements.btn.style.color = elements == lightElements ? colors.TEXT_INVERT : colors.TEXT_PRIMARY;
    elements.btnDis.style.backgroundColor = colors.DISABLED;
    elements.btnDis.style.color = colors.TEXT_SECONDARY;
    elements.err.style.color = colors.ERROR;
    elements.invert.style.color = colors.TEXT_INVERT;
}

const darkTheme = getColorStore('dark')
const lightTheme = getColorStore('light')

export function setColors() {
    applyThemeColors(lightElements, lightTheme.getAllColors());
    applyThemeColors(darkElements, darkTheme.getAllColors());
}