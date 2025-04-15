# UCLA Blog Frontend

The frontend implementation of the UCLA Blog POC, built with Astro. This project demonstrates how to create a performant, SEO-friendly blog using Astro as a static site generator with Strapi as the headless CMS.

## Overview

This frontend application showcases:

- Static site generation with Astro
- Integration with Strapi headless CMS
- Markdown content rendering
- Responsive design with Tailwind CSS
- Optimized image handling with MinIO

## Features

- **Static Site Generation**: Astro generates static HTML at build time for optimal performance
- **Markdown Support**: Rich text content rendering with custom styling
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimization**: Built-in SEO features and meta tags
- **Performance**: Zero JavaScript by default, with partial hydration when needed

## Project Structure

```
src/
├── components/     # Reusable UI components
├── layouts/        # Page layout components
├── pages/          # Astro pages and routes
├── services/       # API service integrations
└── styles/         # Global styles and Tailwind config
```

## Key Components

- `MarkdownRenderer.astro`: Custom component for rendering markdown content
- `Layout.astro`: Base layout component with navigation and footer
- `Pagination.astro`: Pagination component for blog posts
- `postService.ts`: Service for fetching content from Strapi

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm

### Installation

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Set up environment variables:

   - Copy `.env.example` to `.env`
   - Update the variables as needed

3. Start the development server:
   ```bash
   pnpm dev
   ```

## Development

The development server runs at `http://localhost:4321`

### Building for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## Integration with Strapi

This frontend is designed to work with the Strapi backend, fetching content through the Strapi API. Key integration points:

- Content fetching through REST API
- Image handling with MinIO
- Markdown content processing
- Static site generation based on Strapi content

## Performance Considerations

- Static site generation for optimal performance
- Zero JavaScript by default
- Optimized image loading
- Efficient markdown rendering
- Tailwind CSS for minimal CSS footprint

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

```sh
pnpm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
