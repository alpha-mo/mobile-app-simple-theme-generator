// index.js

import { exportThemes } from "./ColorClass.js";
import { setColors } from "./ui-elements.js";

setColors()

const exportBtn = document.getElementById('exportTheme')

exportBtn.addEventListener('click', () => {
    exportThemes()
})