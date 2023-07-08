# carles.pro

Personal blog

## TODO

### Infra

- [ ] Setup CI/CD pipelines and infra
- [x] Design system (Tailwind CSS probably) and use flowbite
- [ ] Buy domain and configure DNS
- [ ] Localization - i18n
- [ ] Image optimization pipeline
- [ ] Serverless lambdas infra
- [ ] Database
- [ ] CRON - Automate retrieve articles from notion (For temporally editing from there)
- [ ] Setup backend monorepo

### Features

- Top banner
- Footer
- Main page
  - [ ] Contact info
  - [ ] Basic description
  - [ ] Social media
  - [ ] Blogs
  - [ ] Projects
  - [ ] Form for having the email store
- Blog section and templates
- Projects section and main page show case
- Search
- Dark mode and light mode (Manual and system auto selection)
  - [ ] Selector animation and styling
  - [ ] Theme configuration
- Linktree page (Custom)
- URL shortener and redirection

### Articles

- [ ] Dotfiles automation using deno
- [ ] Typescript books (Review and recommendations, top best tips and tricks, etc)
- [ ] Keyboard and dotfiles explained (Macos and Windows)
- [ ] Typescript challenges - Best tips and trick and best top challenges, etc.
- [ ] Minimalist node backend framework (Type safety, documentation open api, and drizzle for SQL)
- SQL tips and tricks

## Design and user experience

- Colorful
- Fun and playful
- With transitions
- With page transitions

## References

The idea is to have UI(theme/layout) similar of Josh Blog and for the reading, content, searching experience as SST and starlight.

- [Josh blog](https://github.com/joshmedeski/joshmedeski.com)
- [Star link template](https://github.com/withastro/starlight/tree/main/examples/basics)
- [SST Docs](https://docs.sst.dev/start/standalone)
- [Anthony Fo Blog](https://antfu.me/)

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or (recommended)
pnpm install
```

### 3. Start development Server

```bash
npm run dev
# or
yarn dev
# or (recommended)
pnpm dev
```

### Preview & Build

```bash
npm run preview
npm run build
# or
yarn preview
yarn build
# or (recommended)
pnpm preview
pnpm build
```

We recommend using [pnpm](https://pnpm.io/) to save disk space on your computer.

### Other Commands

```bash
pnpm astro ...
pnpm astro add
pnpm astro --help
```

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   └── pages/
│       └── ...
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## TailwindCSS

TailwindCSS is already configured in this repo, so you can start using it without any installation.

## Credits

[Hero Illustration](https://www.figma.com/community/file/1108400791662599811) by [Streamline](https://www.streamlinehq.com/)

## 👀 Want to learn more?

Feel free to check out [Astro Docs](https://docs.astro.build) or jump into our [Discord Chat](https://web3templates.com/discord).

[![Built with Astro](https://astro.badg.es/v1/built-with-astro.svg)](https://astro.build)
