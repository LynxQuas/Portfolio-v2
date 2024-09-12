/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                slideIn: {
                    "0%": {
                        transform: "translateX(-100%)",
                    },
                    "10%": {
                        transform: "translateX(0)",
                    },
                },
            },

            animation: {
                menuAnimation: "slideIn 3s",
            },
        },
    },
    plugins: [],
};
