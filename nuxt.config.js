export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'AMA — Design-led web development agency',
		htmlAttrs: {
			lang: 'en',
			xmlns:"http://www.w3.org/1999/xhtml",
			"xml:lang": "en"
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },

			{ hid: 'description', name: 'description', content: 'Design-led web development agency, passionate about generating beautiful, clean, and bespoke websites with unique content.' },
			{ hid: 'keywords', name: 'keywords', content: 'Design, web, interactive, website, Barcelona, wordpress, shopify' },
			{ hid: 'author', name: 'author', content: 'AMA' },
	//OpenGraph
			{ property: 'og:url', content: 'https://ama.work' },
			{ property: 'og:type', content: 'website' },
			{ property: 'og:title', content: 'AMA — Design-led web development agency' },
			{ property: 'og:site_name', content: 'AMA — Design-led web development agency' },
			{ property: 'og:description', content: 'Design-led web development agency, passionate about generating beautiful, clean, and bespoke websites with unique content.' },
			{ property: 'og:image', content: '/facebook_share.jpg' },
			{ property: 'og:image:type', content: 'image/jpeg' },
			{ property: 'og:image:width', content: '1200' },
			{ property: 'og:image:height', content: '630' },
	//Twitter card
			{ name: 'twitter:card', content: 'summary' },
			{ name: 'twitter:description', content: 'Design-led web development agency, passionate about generating beautiful, clean, and bespoke websites with unique content.' },
			{ name: 'twitter:title', content: 'AMA — Design-led web development agency' },
			{ name: 'twitter:image', content: '/thumb.png' },

	//Schema graph
			{ itemprop: 'name', content: 'AMA — Design-led web development agency' },
			{ itemprop: 'url', content: 'https://ama.work' },
			{ itemprop: 'description', content: 'Design-led web development agency, passionate about generating beautiful, clean, and bespoke websites with unique content.' },
			{ itemprop: 'image', content: '/facebook_share.png' },
			{ itemprop: 'thumbnailUrl', content: '/thumb.png' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'apple-touch-icon-precomposed', href: '/thumb.png' },
			{ rel: 'image_src', href: '/facebook_share.jpg' }
		]
  	},

  // Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@/node_modules/normalize.css/normalize',
		'@/assets/css/style.scss'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/google-analytics'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	},

	//https://google-analytics.nuxtjs.org/setup
	googleAnalytics: {
		id: 'G-6RGQN8PQ03'
	}
}
