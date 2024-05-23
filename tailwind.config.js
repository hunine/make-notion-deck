/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            borderColor: {
                primary: '#818cf8',
            },
            boxShadow: {
                'inner-b-6': 'inset 0 -6px 0 #818cf8',
                'b-1': '0 1px 0px 0px #818cf8',
                'b-2': '0 2px 0px 0px #818cf8',
            },
        },
    },
    plugins: [],
};
