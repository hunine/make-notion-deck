/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            borderColor: {
                primary: '#818cf8',
            },
            boxShadow: {
                'b-1': '0 2px 0px 0px #818cf8',
            },
        },
    },
    plugins: [],
};
