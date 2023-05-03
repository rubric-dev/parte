# Parte Design System

- 📗 [@parte-ds/ui](https://www.npmjs.com/package/@parte-ds/ui) - Parte의 컴포넌트 라이브러리
- 📘 [@parte-ds/icons](https://www.npmjs.com/package/@parte-ds/icons) - Parte의 아이콘 라이브러리
- 📙 @parte-ds/utils - Parte 내부 유틸 모음

```bash
pnpm install
pnpm dev
```

**@parte-ds/ui**는 [Pretendard](https://github.com/orioncactus/pretendard) 폰트를 사용하고 있습니다. 사용하는 프로젝트의 html 파일에 아래 link 태그나 css에 @import 문으로 추가해주세요.

```html
<link
  rel="stylesheet"
  as="style"
  crossorigin
  href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css"
/>
```

### Useful Commands

- `pnpm build` - Build all packages, including the Storybook site
- `pnpm dev` - Run all packages locally and preview with Storybook
- `pnpm lint` - Lint all packages
- `pnpm changeset` - Generate a changeset
- `pnpm clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

This repository is powered by ...

- 🏎 [Turborepo](https://turbo.build/repo) — High-performance build system for Monorepos
- 🚀 [React](https://reactjs.org/) — JavaScript library for user interfaces
- 🛠 [Tsup](https://github.com/egoist/tsup) — TypeScript bundler powered by esbuild
- 📖 [Storybook](https://storybook.js.org/) — UI component environment powered by Vite

As well as a few others tools preconfigured:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Changesets](https://github.com/changesets/changesets) for managing versioning and changelogs
- [GitHub Actions](https://github.com/changesets/action) for fully automated package publishing

## This monorepo is based on this example

[Turborepo design system example](https://github.com/vercel/turbo/tree/main/examples/design-system):
