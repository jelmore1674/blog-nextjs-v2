import { writeFileSync } from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';

async function generate() {
	const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
	const pages = await globby([
		'pages/*.tsx',
		'pages/*.mdx',
		'content/**/*.md',
		'!content/*.md',
		'!pages/_*.tsx',
		'!pages/api',
		'!pages/404.tsx',
	]);

	const site = 'https://blog.justinelmore.dev';

	console.log('Generating sitemap.xml...');

	const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
			.map((page) => {
				const path = page
					.replace('pages', '')
					.replace('data', '')
					.replace('.tsx', '')
					.replace('content', '')
					.replace('.md', '')
					.replace('.mdx', '');
				const route = path === '/index' ? '' : path;
				const sitemappedUrl = site + route;

				console.log(sitemappedUrl);

				return `
              <url>
                  <loc>${sitemappedUrl}</loc>
              </url>
            `;
			})
			.join('')}
    </urlset>
    `;

	const formatted = prettier.format(sitemap, {
		...prettierConfig,
		parser: 'html',
	});

	// eslint-disable-next-line no-sync
	writeFileSync('public/sitemap.xml', formatted);
}

generate();
