// ColorClass.js

import { colors } from "./colors.js";

export const ColorNames = Object.freeze({
    BACKGROUND: "BACKGROUND",
    SURFACE: "SURFACE",
    TEXT_PRIMARY: "TEXT_PRIMARY",
    TEXT_SECONDARY: "TEXT_SECONDARY",
    TEXT_INVERT: "TEXT_INVERT",
    BORDER_LIGHT: "BORDER_LIGHT",
    BORDER_DARK: "BORDER_DARK",
    ACCENT: "ACCENT",
    ERROR: "ERROR",
    DISABLED: "DISABLED"
});

class Color {
    /**
     * @private
     * @type {'dark' | 'light'}
     */
    #themeType;
    #colors;

    /**
    * @param {'dark' | 'light'} themeType 
    */
    constructor(themeType) {
        if (typeof themeType !== 'string' || (themeType !== 'dark' && themeType !== 'light')) {
            throw new Error(`Invalid theme type. Please choose one of: 'dark' | 'light'.`);
        }

        // Assign the themeType to the private field
        this.#themeType = themeType;

        // Set the colors based on themeType
        this.#colors = themeType === 'dark' ? colors.darkTheme : colors.lightTheme;
    }

    // Method to get the current theme type (read-only)
    get themeType() {
        return this.#themeType;
    }

    /**
    * @param {keyof typeof ColorNames} colorName - A valid color name from ColorNames
    * @returns {string} The corresponding color value from the colors object
    * @throws {Error} If the color name is not valid
    */
    getColor(colorName) {
        const validColorNames = Object.values(ColorNames).join(', ');
        if (!Object.values(ColorNames).includes(colorName)) {
            throw new Error(`Invalid color name '${colorName}'. Available color names are: ${validColorNames}`);
        }
        return this.#colors[colorName];
    }

    /**
    * @param {keyof typeof ColorNames} colorName - A valid color name from ColorNames
    * @param {string} newColor - A valid color name from ColorNames
    * @returns {void} The corresponding color value from the colors object
    * @throws {Error} If the color name is not valid
    */
    updateColor(colorName, newColor) {
        const validColorNames = Object.values(ColorNames).join(', ');
        if (!Object.values(ColorNames).includes(colorName)) {
            throw new Error(`Invalid color name '${colorName}'. Available color names are: ${validColorNames}`);
        }
        this.#colors[colorName] = newColor;
    }

    // Method to get all colors
    getAllColors() {
        return this.#colors;
    }

    // Method to export the colors as a JS file
    exportColors() {
        const data = `const theme = ${JSON.stringify(this.#colors, null, 4)};`;
        const blob = new Blob([data], { type: 'application/javascript' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'theme.js';
        link.click();
    }
}

const instances = {
    light: null,
    dark: null,
}

/**
 * Returns a single instance of Color based on the theme type.
 * @param {'dark' | 'light'} themeType
 * @returns {Color} Singleton instance of Color
 */
export function getColorStore(themeType) {
    if (!instances[themeType]) {
        instances[themeType] = new Color(themeType);
    }
    return instances[themeType];
}

export function exportThemes() {
    const lightTheme = getColorStore("light").getAllColors();
    const darkTheme = getColorStore("dark").getAllColors();

    const data =
        `const themes = {
        light: ${JSON.stringify(lightTheme, null, 4)},
        dark: ${JSON.stringify(darkTheme, null, 4)}
        };\nexport default themes;`;

    const blob = new Blob([data], { type: "application/javascript" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "themes.js";
    link.click();
}