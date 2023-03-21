const themeDir = __dirname + '/../../';

module.exports = {
    plugins: [
        require('postcss-import')({
            path: [themeDir],
        }),
        require('tailwindcss')(themeDir + 'assets/css/tailwind.config.js'),
          require('autoprefixer')({
            path: [themeDir],
        }),
        ...process.env.HUGO_ENV === 'production'
            ? [require("@fullhuman/postcss-purgecss")({
                content: ['**/*.{md,html}', './hugo_stats.json',
                './layouts/**/*.html',],
                defaultExtractor: content => {
                    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
                    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
                    return broadMatches.concat(innerMatches)
                }
            })]
            : [],
        require("cssnano")({ preset: 'default' }),
    ]
};
