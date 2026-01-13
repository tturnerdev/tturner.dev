// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'tturner.dev',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/tturnerdev/tturner.dev' }],
			sidebar: [
				{
					label: 'Home', slug: 'index'
				},
				{
					label: 'Update', slug: 'update'
				},
				{
					label: 'Note',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Recent', slug: 'note/recent' },
						{ label: 'Topics', slug: 'note/topics' },
					],
				},
				{
					label: 'Build',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'README', slug: 'build' },
					],
				},
				{
					label: 'Use',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'README', slug: 'use' },
						// GitHub: https://github.com/CorentinTh/it-tools
						{ label: 'IT Tools (tools)', link: 'https://it-tools.tech', attrs: { target: '_blank' } },
						// GitHub: https://github.com/gchq/CyberChef
						{ label: 'CyberChef (tools)', link: 'https://gchq.github.io/CyberChef/', attrs: { target: '_blank' } },
					],
				},
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
