# Documentation

A Nuxt 3 module to seamlessly integrate [DecapCMS](https://decapcms.org/) with built-in configuration validation, route handling, and prerender support.

## 📦 Installation

```bash
npm install --save-dev nuxt-decap-cms
# or
yarn add --dev nuxt-decap-cms
```

## 🚀 Quick Start

Add the module to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-decap-cms'],

  decapCms: {
    backend: {
      name: 'git-gateway',
      repo: 'your-user/your-repo',
      branch: 'main',
    },
    collections: [
      {
        name: 'blog',
        label: 'Blog',
        label_singular: 'Post',
        folder: 'content/blog',
        format: 'frontmatter',
        create: true,
        editor: {
          preview: false,
        },
        fields: [
          { label: 'Title', name: 'title', widget: 'string' },
          { label: 'Body', name: 'body', widget: 'markdown' },
        ]
      }
    ]
  }
})
```

Once installed, the CMS will be accessible at /decap (or your custom route).

## ⚙️ Module Options

| Key             | Type                    | Default      | Description                                                           |
| --------------- | ----------------------- | ------------ | --------------------------------------------------------------------- |
| `route`         | `string`                | `/decap`     | Base route for the CMS UI and config.                                 |
| `backend`       | `object` **(required)** | —            | DecapCMS backend configuration (e.g., `git-gateway`, `github`, etc.). |
| `media_folder`  | `string`                | `static/img` | Path to media upload folder.                                          |
| `public_folder` | `string`                | `/img`       | Public URL for uploaded media.                                        |
| `collections`   | `Collection[]`          | `[]`         | Content collections configuration.                                    |

## 🔧 Backend Example

```json
backend: {
  name: 'github',
  repo: 'org-name/repo-name',
  branch: 'main'
}
```

```json
{
  name: 'pages',
  label: 'Pages',
  label_singular: 'Page',
  folder: 'content/pages',
  format: 'frontmatter',
  create: true,
  editor: {
    preview: true
  },
  fields: [
    { label: 'Title', name: 'title', widget: 'string' },
    { label: 'Content', name: 'body', widget: 'markdown' }
  ],
  meta: {
    path: {
      widget: 'string',
      label: 'URL',
      index_file: 'index'
    }
  }
}
```

## 🧠 How It Works

During setup, the module:

- Validates options using Zod

- Adds server handlers:

  - `GET /decap` → serves the CMS UI

  - `GET /decap/config.yml` → dynamically generates the CMS config

- Adds both routes to Nuxt’s prerendering pipeline

### Server Handlers

| Route               | Description                         |
| ------------------- | ----------------------------------- |
| `/decap`            | Serves the DecapCMS admin interface |
| `/decap/config.yml` | Serves the YAML configuration       |

These routes are also automatically included in prerendering (`addPrerenderRoutes`).`

## 🔐 Runtime Configuration

The resolved options are available in `nuxt.options.runtimeConfig.decapCms`.

You can access them in runtime code:

```ts
const config = useRuntimeConfig().decapCms
```

## 🧪 TypeScript Support

The following types are exported:

```ts
import type { ModuleOptions, RequiredModuleOptions } from 'nuxt-decap-cms'
```

- `ModuleOptions`: The shape of user-provided options
- `RequiredModuleOptions`: The fully resolved and defaulted schema

## 📁 File Structure

This module adds:

```
/runtime/index.get.ts      → Serves the DecapCMS UI
/runtime/config.get.ts     → Generates the DecapCMS config.yml dynamically
```

## 📝 Future Improvements

- Static generation of `config.yml`

- Custom admin UI injection

- i18n support in collections

## 💬 License

MIT

## 🙌 Credits

Built with ❤️ for Nuxt developers using DecapCMS.