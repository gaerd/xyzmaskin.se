# xyzmaskin-landing

Statisk landningssida för XYZ Maskin byggd med Eleventy (11ty) och Tailwind CSS. Sidan visar produktkategorier, kampanjbudskap och innehåller ett Netlify-formulär för servicebokningar.

## Kom igång
- Krav: Node.js 18+ och npm.
- Installera beroenden: `npm install`
- Starta utvecklingsmiljön: `npm run dev` (Eleventy dev-server + PostCSS i watch-läge)
- Bygg för produktion: `npm run build`
- Testa byggt innehåll lokalt: `npm run serve`

## Scriptöversikt
- `npm run dev:11ty` - startar enbart Eleventys utvecklingsserver.
- `npm run dev:css` - kör Tailwind via PostCSS i watch-läge.
- `npm run build:11ty` och `npm run build:css` - separata byggsteg som kombineras av `npm run build`.

## Projektstruktur
```
.
|- src/
|  |- index.njk                 # startsidan med kampanj och kategorikort
|  |- service-bokning.njk       # Netlify-formulär för servicebokningar
|  |- kopvillkor.md             # informationssida som använder layouts/page.njk
|  |- assets/                   # Tailwind-ingång (styles.css) och SVG-ikoner
|  |- _data/                    # JSON/JS-data (kampanj, kategorier, site-info)
|  |- _includes/                # layouts, komponenter och Nunjucks-makron
|- .eleventy.js                 # Eleventy-konfiguration och egen kategori-collection
|- netlify.toml                 # Netlify build/dev samt formulärkonfiguration
|- postcss.config.js            # PostCSS + Tailwind + Autoprefixer
|- tailwind.config.js           # Tailwind-tema med varumärkesfärger
```

## Viktiga komponenter
- `src/_includes/components/` innehåller visuella block som header, footer, hero, kampanjlistan och kategorikorten.
- `src/_includes/layouts/` definierar basstruktur, sida och formulärlayout.
- `src/_data/categories.json` laddas via en custom Eleventy-collection som filtrerar bort kategorier där `enabled` är `false`.
- `src/_data/campaign.json` styr kampanjremsan; sätt `active` till `false` för att dölja den.
- `src/_data/site.json` och `currentYear.js` levererar site-metadata, kontaktuppgifter samt årtal till templates.

## Formuläret för servicebokning
`service-bokning.njk` är förberett för Netlify Forms (`data-netlify="true"`) och har inbyggd honeypot samt reCAPTCHA-plats. Uppdatera fälthantering och tack-sida i Netlifys UI vid behov.

## Teckenkodning
Alla innehållsfiler är sparade i UTF-8 för att säkerställa korrekta svenska tecken i gränssnittet. Fortsätt använda UTF-8 utan BOM när du uppdaterar texter.

## Designprinciper
- Primärfärg: `#18589b` (`text-brand`, `bg-brand`) används för länkar och knappar.
- Accentfärg: `#FF6A00` (`text-brand-accent`, `bg-brand-accent`) lyfter kampanjer och call-to-actions.
- Ljusa ytor (`bg-slate-50`, `bg-white`) och mjuka skuggor ger ett luftigt formspråk.

## Deployment
Projektet är klart för Netlify:
- `netlify.toml` pekar build-steget till `npm run build` och publik katalog `_site`.
- Netlify dev-server kan använda `npm run dev` på port 8888.
- Plugin `@netlify/plugin-sitemap` genererar sitemap automatiskt vid bygg.

## Vidareutveckling
- Lägg till innehållssidor genom att skapa fler `.njk` eller `.md`-filer i `src/`.
- Uppdatera styling i `src/assets/styles.css`; kör `npm run dev` för live-kompilering.
- Skapa fler formulär genom att duplicera strukturen i `service-bokning.njk` och uppdatera Netlify-konfigurationen.
