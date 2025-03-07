// picker-elements.js
import { createPicker } from "./picker.js";
import { getColorStore, ColorNames } from "./ColorClass.js";

export const controls = {
    dark:
    {
        openPickerBtnBackground: document.getElementById('dark-openPickerBtn-background'),
        popupBackground: document.getElementById('dark-popup-background'),
        backgroundPicker: document.getElementById('dark-background-picker'),
        closePickerBtnBackground: document.getElementById('dark-closePickerBtn-background'),

        openPickerBtnSurface: document.getElementById('dark-openPickerBtn-surface'),
        popupSurface: document.getElementById('dark-popup-surface'),
        surfacePicker: document.getElementById('dark-surface-picker'),
        closePickerBtnSurface: document.getElementById('dark-closePickerBtn-surface'),

        openPickerBtnTextPrimary: document.getElementById('dark-openPickerBtn-textPrimary'),
        popupTextPrimary: document.getElementById('dark-popup-textPrimary'),
        textPrimaryPicker: document.getElementById('dark-textPrimary-picker'),
        closePickerBtnTextPrimary: document.getElementById('dark-closePickerBtn-textPrimary'),

        openPickerBtnTextSecondary: document.getElementById('dark-openPickerBtn-textSecondary'),
        popupTextSecondary: document.getElementById('dark-popup-textSecondary'),
        textSecondaryPicker: document.getElementById('dark-textSecondary-picker'),
        closePickerBtnTextSecondary: document.getElementById('dark-closePickerBtn-textSecondary'),

        openPickerBtnTextInvert: document.getElementById('dark-openPickerBtn-textInvert'),
        popupTextInvert: document.getElementById('dark-popup-textInvert'),
        textInvertPicker: document.getElementById('dark-textInvert-picker'),
        closePickerBtnTextInvert: document.getElementById('dark-closePickerBtn-textInvert'),

        openPickerBtnBorderLight: document.getElementById('dark-openPickerBtn-borderLight'),
        popupBorderLight: document.getElementById('dark-popup-borderLight'),
        borderLightPicker: document.getElementById('dark-borderLight-picker'),
        closePickerBtnBorderLight: document.getElementById('dark-closePickerBtn-borderLight'),

        openPickerBtnBorderDark: document.getElementById('dark-openPickerBtn-borderDark'),
        popupBorderDark: document.getElementById('dark-popup-borderDark'),
        borderDarkPicker: document.getElementById('dark-borderDark-picker'),
        closePickerBtnBorderDark: document.getElementById('dark-closePickerBtn-borderDark'),

        openPickerBtnAccent: document.getElementById('dark-openPickerBtn-accent'),
        popupAccent: document.getElementById('dark-popup-accent'),
        accentPicker: document.getElementById('dark-accent-picker'),
        closePickerBtnAccent: document.getElementById('dark-closePickerBtn-accent'),

        openPickerBtnError: document.getElementById('dark-openPickerBtn-error'),
        popupError: document.getElementById('dark-popup-error'),
        errorPicker: document.getElementById('dark-error-picker'),
        closePickerBtnError: document.getElementById('dark-closePickerBtn-error'),

        openPickerBtnDisabled: document.getElementById('dark-openPickerBtn-disabled'),
        popupDisabled: document.getElementById('dark-popup-disabled'),
        disabledPicker: document.getElementById('dark-disabled-picker'),
        closePickerBtnDisabled: document.getElementById('dark-closePickerBtn-disabled')
    },
    light: {
        openPickerBtnBackground: document.getElementById('light-openPickerBtn-background'),
        popupBackground: document.getElementById('light-popup-background'),
        backgroundPicker: document.getElementById('light-background-picker'),
        closePickerBtnBackground: document.getElementById('light-closePickerBtn-background'),

        openPickerBtnSurface: document.getElementById('light-openPickerBtn-surface'),
        popupSurface: document.getElementById('light-popup-surface'),
        surfacePicker: document.getElementById('light-surface-picker'),
        closePickerBtnSurface: document.getElementById('light-closePickerBtn-surface'),

        openPickerBtnTextPrimary: document.getElementById('light-openPickerBtn-textPrimary'),
        popupTextPrimary: document.getElementById('light-popup-textPrimary'),
        textPrimaryPicker: document.getElementById('light-textPrimary-picker'),
        closePickerBtnTextPrimary: document.getElementById('light-closePickerBtn-textPrimary'),

        openPickerBtnTextSecondary: document.getElementById('light-openPickerBtn-textSecondary'),
        popupTextSecondary: document.getElementById('light-popup-textSecondary'),
        textSecondaryPicker: document.getElementById('light-textSecondary-picker'),
        closePickerBtnTextSecondary: document.getElementById('light-closePickerBtn-textSecondary'),

        openPickerBtnTextInvert: document.getElementById('light-openPickerBtn-textInvert'),
        popupTextInvert: document.getElementById('light-popup-textInvert'),
        textInvertPicker: document.getElementById('light-textInvert-picker'),
        closePickerBtnTextInvert: document.getElementById('light-closePickerBtn-textInvert'),

        openPickerBtnBorderLight: document.getElementById('light-openPickerBtn-borderLight'),
        popupBorderLight: document.getElementById('light-popup-borderLight'),
        borderLightPicker: document.getElementById('light-borderLight-picker'),
        closePickerBtnBorderLight: document.getElementById('light-closePickerBtn-borderLight'),

        openPickerBtnBorderDark: document.getElementById('light-openPickerBtn-borderDark'),
        popupBorderDark: document.getElementById('light-popup-borderDark'),
        borderDarkPicker: document.getElementById('light-borderDark-picker'),
        closePickerBtnBorderDark: document.getElementById('light-closePickerBtn-borderDark'),

        openPickerBtnAccent: document.getElementById('light-openPickerBtn-accent'),
        popupAccent: document.getElementById('light-popup-accent'),
        accentPicker: document.getElementById('light-accent-picker'),
        closePickerBtnAccent: document.getElementById('light-closePickerBtn-accent'),

        openPickerBtnError: document.getElementById('light-openPickerBtn-error'),
        popupError: document.getElementById('light-popup-error'),
        errorPicker: document.getElementById('light-error-picker'),
        closePickerBtnError: document.getElementById('light-closePickerBtn-error'),

        openPickerBtnDisabled: document.getElementById('light-openPickerBtn-disabled'),
        popupDisabled: document.getElementById('light-popup-disabled'),
        disabledPicker: document.getElementById('light-disabled-picker'),
        closePickerBtnDisabled: document.getElementById('light-closePickerBtn-disabled')
    }
};

function togglePopup(popup) {
    if (!popup) {
        console.log('No Picker popup found for this');
        return
    }
    popup.style.display = popup.style.display === 'flex' ? 'none' : 'flex'
}

const pickers = { dark: {}, light: {} };
const lightTheme = getColorStore('light')
const darkTheme = getColorStore('dark')

Object.keys(controls.dark).forEach((key) => {
    if (key.endsWith('Picker')) {

        let initColor;
        const pickerId = `#${controls.dark[key].id}`;

        switch (key) {
            case 'accentPicker':
                initColor = darkTheme.getColor('ACCENT')
                break;
            case 'backgroundPicker':
                initColor = darkTheme.getColor('BACKGROUND')
                break;
            case 'borderDarkPicker':
                initColor = darkTheme.getColor('BORDER_DARK')
                break;
            case 'borderLightPicker':
                initColor = darkTheme.getColor('BORDER_LIGHT')
                break;
            case 'disabledPicker':
                initColor = darkTheme.getColor('DISABLED')
                break;
            case 'errorPicker':
                initColor = darkTheme.getColor('ERROR')
                break;
            case 'surfacePicker':
                initColor = darkTheme.getColor('SURFACE')
                break;
            case 'textInvertPicker':
                initColor = darkTheme.getColor('TEXT_INVERT')
                break;
            case 'textPrimaryPicker':
                initColor = darkTheme.getColor('TEXT_PRIMARY')
                break;
            case 'textSecondaryPicker':
                initColor = darkTheme.getColor('TEXT_SECONDARY')
                break;

            default:
                initColor = "#ff0000";
                break;
        }
        // Create the color picker and store it in the pickers object
        pickers.dark[key] = createPicker(pickerId, initColor, key, 'dark');
    }
});

Object.keys(controls.dark).forEach((key) => {
    const element = controls.dark[key];

    if (key.includes("openPickerBtn")) {
        element.addEventListener("click", () => {
            const popupId = "dark-popup-" + element.id.slice("dark-openPickerBtn-".length)
            const popup = Object.values(controls.dark).find(ctrl => ctrl?.id === popupId)
            togglePopup(popup)
        });
    }
    else if (key.includes("closePickerBtn")) {
        element.addEventListener("click", () => {
            const popupId = "dark-popup-" + element.id.slice("dark-closePickerBtn-".length)
            const popup = Object.values(controls.dark).find(ctrl => ctrl?.id === popupId)
            togglePopup(popup)
        });
    }
});

Object.keys(controls.light).forEach((key) => {
    if (key.endsWith('Picker')) {

        let initColor;
        const pickerId = `#${controls.light[key].id}`

        switch (key) {
            case 'accentPicker':
                initColor = lightTheme.getColor('ACCENT')
                break;
            case 'backgroundPicker':
                initColor = lightTheme.getColor('BACKGROUND')
                break;
            case 'borderDarkPicker':
                initColor = lightTheme.getColor('BORDER_DARK')
                break;
            case 'borderLightPicker':
                initColor = lightTheme.getColor('BORDER_LIGHT')
                break;
            case 'disabledPicker':
                initColor = lightTheme.getColor('DISABLED')
                break;
            case 'errorPicker':
                initColor = lightTheme.getColor('ERROR')
                break;
            case 'surfacePicker':
                initColor = lightTheme.getColor('SURFACE')
                break;
            case 'textInvertPicker':
                initColor = lightTheme.getColor('TEXT_INVERT')
                break;
            case 'textPrimaryPicker':
                initColor = lightTheme.getColor('TEXT_PRIMARY')
                break;
            case 'textSecondaryPicker':
                initColor = lightTheme.getColor('TEXT_SECONDARY')
                break;

            default:
                initColor = "#ff0000";
                break;
        }
        pickers.light[key] = createPicker(pickerId, initColor, key, 'light');
    }
});

Object.keys(controls.light).forEach((key) => {
    const element = controls.light[key];

    if (key.includes("openPickerBtn")) {
        element.addEventListener("click", () => {
            const popupId = "light-popup-" + element.id.slice("light-openPickerBtn-".length);
            const popup = Object.values(controls.light).find(ctrl => ctrl?.id === popupId);
            togglePopup(popup)
        });
    }
    else if (key.includes("closePickerBtn")) {
        element.addEventListener("click", () => {
            const popupId = "light-popup-" + element.id.slice("light-closePickerBtn-".length);
            const popup = Object.values(controls.light).find(ctrl => ctrl?.id === popupId);
            togglePopup(popup)
        });
    }
});