# Prime Domination — Official Website

A one-page, static Astro website designed for GitHub Pages. It includes responsive styling, cinematic CSS artwork, scroll reveals, SEO metadata, JSON-LD structured data, a sitemap integration, `robots.txt`, and an `llms.txt` information file.

## 1. Requirements

- Node.js 20.19+ or 22.12+
- npm
- A GitHub repository

## 2. Run locally

```bash
npm install
npm run dev
```

Open the local URL Astro prints (usually http://localhost:4321).

## 3. Add your real game media

The website expects these screenshot files for the complete visual experience. Add them after downloading the project; the exact folder and image mapping are documented below.

- `public/videos/prime-domination-trailer.mp4` — your gameplay trailer (MP4/H.264 recommended).
- `public/images/hero-poster.svg` — compressed hero poster image.
- `public/images/trailer-poster.svg` — trailer thumbnail.
- `public/images/prime-domination-social-card.jpg` — a 1200×630 social preview card is included; replace it with your final branded artwork when ready.
- Add 14 gameplay screenshots to `public/images/game/` named exactly `image1.png` through `image14.png`. The website already places them throughout the hero, gameplay features, faction cards, multiplayer section, arsenal showcase, and screenshot gallery. See `public/images/game/README.txt` for the suggested image assigned to each filename.

Do not use screenshots or artwork you do not have rights to use.

## 4. Set your domain

Open `astro.config.mjs`, `src/layouts/BaseLayout.astro`, `public/robots.txt`, and `public/llms.txt`.

Replace every `https://YOUR-DOMAIN.com` with your actual canonical domain, including the correct `https://` prefix. If you do not have a custom domain yet, use your actual GitHub Pages URL instead.

For a GitHub Pages project URL such as `https://USERNAME.github.io/REPOSITORY/`, you must also configure Astro's `base` option to `"/REPOSITORY"` and adjust absolute asset paths/URLs accordingly. The easiest setup is a custom domain or a GitHub Pages user site repository named `USERNAME.github.io`.

## 5. Partner application

The partner section is included. Once your Google Sheets application URL is ready, add it to `partnerApplicationUrl` near the top of `src/pages/index.astro`. The Apply button will then open the form in a new tab.

## 6. Discord community

The official Discord invite is already connected: https://discord.gg/GpGEm9ErR8. Discord links open in a new browser tab.

## 7. Deploy to GitHub Pages

1. Create a GitHub repository and push this project to the `main` branch.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Push a commit to `main`. The workflow in `.github/workflows/deploy.yml` will build and deploy the `dist` folder.
5. If using a custom domain, configure it in GitHub Pages and add the required DNS records at your domain registrar.

## 8. SEO launch checklist

- Replace all placeholder domains in `astro.config.mjs`, `src/layouts/BaseLayout.astro`, `public/robots.txt`, and `public/llms.txt`.
- Add your real logo, social card, gameplay trailer, and screenshots.
- Confirm the Steam link and Discord invite.
- Verify the site in Google Search Console and submit the generated sitemap.
- Test the homepage in Google's Rich Results Test and PageSpeed Insights.
- Check that `robots.txt` and the sitemap are reachable on the live domain.
- Keep game details accurate and update them when features, release plans, or system requirements change.

## SEO note

No framework, metadata, schema, or keyword can guarantee first place in Google or inclusion in AI-generated recommendations. This site establishes a strong technical foundation. Rankings depend on the usefulness and originality of the content, reputation, relevant mentions/links, competition, and ongoing updates.

The page intentionally describes Prime Domination as a modern military RTS and uses relevant genre language naturally, including real-time strategy, military strategy, base building, combined-arms combat, online multiplayer, tanks, aircraft, and helicopters. It does not claim affiliation with other games or developers. The site cannot guarantee rankings for broad searches such as “RTS games”; those searches are competitive and depend on reputation, useful original content, external mentions, and ongoing updates. The brand-specific query “Prime Domination” is more directly targeted by the page title, official Steam link, consistent brand naming, and structured data.
