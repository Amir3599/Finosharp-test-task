const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
    theme: {
        extend: {
            colors: {
                "dark-main-color": "#161A1E",
                "light-main-color": "#1E2026",
                "selected-item-color": "#F0B90B",
                "app-yellow": "#FCD535",
                "app-red": "#F6465D",
                "app-green": "#0ECB81",
                "app-purple": "#EA3DF7",
                "app-white": "#EAECEF",
                "app-regular-texts": "#848E9C",
                "app-regular-numbers": "#B7BDC6",
                "app-bg": "#F5F5F5",
            },
        },
    },
    plugins: [
        // ...
        flowbite.plugin(),
    ],
};