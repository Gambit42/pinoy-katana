import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = dirname(__dirname)
const localEnv = await readEnvFile(join(projectRoot, '.env'))
const siteUrl = (process.env.VITE_SITE_URL || localEnv.VITE_SITE_URL || 'http://localhost:3000').replace(
  /\/+$/,
  '',
)
const routes = ['/', '/services', '/products', '/about', '/contact']
const lastmod = new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString().slice(0, 10)

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const loc = `${siteUrl}${route === '/' ? '/' : route}`

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
  })
  .join('\n')}
</urlset>
`

const sitemapPath = join(projectRoot, 'public', 'sitemap.xml')
const robotsPath = join(projectRoot, 'public', 'robots.txt')

await mkdir(dirname(sitemapPath), { recursive: true })
await writeFile(sitemapPath, xml, 'utf8')
await writeFile(robotsPath, `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`, 'utf8')

async function readEnvFile(path) {
  try {
    const file = await readFile(path, 'utf8')

    return Object.fromEntries(
      file
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith('#') && line.includes('='))
        .map((line) => {
          const separatorIndex = line.indexOf('=')
          const key = line.slice(0, separatorIndex).trim()
          const value = line
            .slice(separatorIndex + 1)
            .trim()
            .replace(/^['"]|['"]$/g, '')

          return [key, value]
        }),
    )
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
      return {}
    }

    throw error
  }
}
