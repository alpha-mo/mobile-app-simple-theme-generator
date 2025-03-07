// picker.js
import { getColorStore } from "./ColorClass.js"
import { setColors } from "./ui-elements.js"

const darkTheme = getColorStore('dark')
const lightTheme = getColorStore('light')
/**
 * @param {string} picjId
 * @param {string} initColor
 * @param {string} key
 * @param {'dark' | 'light'} theme 
 */
export function createPicker(picjId, initColor, key, theme) {
    const picker = new iro.ColorPicker(picjId, {
        width: 150,
        padding: 2,
        handleRadius: 5,
        margin: 4,
        layout: [
            { component: iro.ui.Box },
            { component: iro.ui.Slider, options: { sliderType: 'alpha', layoutDirection: 'horizontal' } },
            { component: iro.ui.Slider, options: { sliderType: 'hue', layoutDirection: 'horizontal', } },
        ],
        color: initColor,
        display: "flex",
    })
    attachElementToEventListener(picker, key, theme)
    return picker
}

const colorKeys = {
    accentPicker: "ACCENT",
    backgroundPicker: "BACKGROUND",
    borderDarkPicker: "BORDER_DARK",
    borderLightPicker: "BORDER_LIGHT",
    disabledPicker: "DISABLED",
    errorPicker: "ERROR",
    surfacePicker: "SURFACE",
    textInvertPicker: "TEXT_INVERT",
    textPrimaryPicker: "TEXT_PRIMARY",
    textSecondaryPicker: "TEXT_SECONDARY",
}

/**
 * @param {iro.ColorPicker} picker 
 * @param {string} key 
 * @param {'dark' | 'light'} theme 
*/
function attachElementToEventListener(picker, key, theme) {
    picker.on("color:change", function (color) {
        if (colorKeys[key]) {
            (theme === "light" ? lightTheme : darkTheme).updateColor(colorKeys[key], color.rgbaString);
            setColors();
        }
    })
}

