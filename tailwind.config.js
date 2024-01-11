/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: 'class',
    content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                ibm: ["'IBM Plex Sans'", 'sans-serif'],
                mplus: ["'M PLUS Rounded 1c'", 'sans-serif'],
                code: ["'Source Code Pro', 'monospace'"],
            },
            screens: {
                xs: '540px',
                minxs: '430px',
                music: '880px',
                xss: '400px',
                about:'570px',
                smallsize: '510px',
                playbuttton: '450px',
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
}
