module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                'wall': "url('\wall.png'  )"
            },
            keyframes: {
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0px)'
                    },
                },
                'fade-out-down': {
                    'from': {
                        opacity: '1',
                        transform: 'translateY(0px)'
                    },
                    'to': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                },
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0px)'
                    },
                },
                'fade-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(30px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0px)'
                    },
                },
                'fade-out': {
                    '0%': {
                        opacity: '1',
                        transform: 'translateX(0px)'
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateX(30px)'
                    },
                },
                'fade-out-up': {
                    'from': {
                        opacity: '1',
                        transform: 'translateY(0px)'
                    },
                    'to': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                }
            },
            animation: {
                'fade-in-down': 'fade-in-down 1s ease-out forwards',
                'fade-out-down': 'fade-out-down 1s ease-out forwards',
                'fade-in-up': 'fade-in-up 1s ease-out forwards',
                'fade-in': 'fade-in 1s ease-out backwards',
                'fade-out': 'fade-out 1s ease-out forwards',
                'fade-out-up': 'fade-out-up 1s ease-out forwards'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
