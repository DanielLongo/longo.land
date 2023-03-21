// module.exports = {
//     content: ["content/**/*.md", "layouts/**/*.html"],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }
  


//const colorBrand = 'var(--color-pretty)';

module.exports = {
	important: true, // See https://tailwindcss.com/docs/configuration#important
	purge: {
		enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: [
      './hugo_stats.json',
      './layouts/**/*.html',
      "content/**/*.md", "layouts/**/*.html"
		],
		extractors: [
    ],
		mode: 'all',
		
	},
	plugins: [ ]
};