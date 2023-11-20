/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                blue: "#1C85E8",
                grey: "#C9C9C9"
            },
            padding: {
                'medium-wrapper': '8rem',
                'medium-wrapper-mobile': '2rem',
            },
            margin: {
                'medium-wrapper': '8rem',
                'medium-wrapper-mobile': '2rem',
            },
            borderRadius: {
                'btn': '11px',
                'photo': '10px',
            },
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.5rem',
            '2xl': '1.75rem',
            '3xl': '2.5rem',
            '5xl': '3rem',
            '5xl-mobile': '2rem',
        }
    },
    plugins: [],
}

