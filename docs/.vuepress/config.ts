import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { nav, side } from './layout'

export default defineUserConfig<DefaultThemeOptions>({

	head: [
		['meta', { name: 'application-name', content: 'Frappé Documentation'}],
		['link', { rel: 'icon', href: '/assets/favicon.ico' }],
		['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
		['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com'}],
		['link', { href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap', rel: 'stylesheet' }]
	],


    locales: {
		'/': {
			lang: 'en-US',
			title: 'Tovy Documentation',
			description: 'Documentation for Tovy, the open source staff management system!',
		}
	},

    themeConfig: {
        logo: '/assets/icon.png',
        repo: 'ItsWHOOOP/tovy',

        locales: {
            '/': {
                navbar: nav.en,
                sidebar: side.en,
            }
        }
    }
})
