module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        "postcss-prefix-selector": {
            prefix: '.tw',
            exclude: ['.tw'],
        },
        cssnano: {},
    }
}