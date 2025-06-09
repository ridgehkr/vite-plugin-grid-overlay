# vite-plugin-grid-overlay

A simple Vite plugin that injects a design grid overlay during development. Useful for aligning elements to a consistent grid when building layouts.

## 🚀 Getting Started

```bash
# with pnpm
pnpm add -D vite-plugin-grid-overlay

# OR with npm
npm install --save-dev vite-plugin-grid-overlay
```

Add the plugin to your `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import gridOverlay from 'vite-plugin-grid-overlay'

export default defineConfig({
  plugins: [
    gridOverlay({
      gridColor: 'rgba(255,0,0,0.2)',
      gridSize: 20,
      zIndex: 9999,
    }),
  ],
})
```

Press **`Alt + g`** during development to toggle the grid on and off.

## 🔨 Development

This project uses [unbuild](https://github.com/unjs/unbuild) to compile the
TypeScript source. Use the provided npm scripts during development:

```bash
# compile in watch mode
pnpm dev

# generate the final dist files
pnpm build
```

### Local linking

If you want to try the plugin from a local checkout, use Node.js 20 or link it
with `pnpm`. The `npm link` command from Node.js 24 sometimes fails with a
`TypeError: Cannot read properties of null (reading 'matches')` error. As a
workaround run:

```bash
pnpm link --global
pnpm link --global ../vite-plugin-grid-overlay
```

Alternatively you can install directly from the file system:

```bash
npm install ../vite-plugin-grid-overlay
```

## ⚙️ Options

- `gridColor` – CSS color of the grid lines. Default `rgba(0,0,0,0.2)`.
- `gridSize` – Size of each grid square in pixels. Default `20`.
- `zIndex` – z-index of the overlay element. Default `9999`.
- `displayByDefault` – Whether the grid is visible initially. Default `true`.
- `hotkey` – Key used with `Alt` to toggle the overlay. Default `'g'`.

## ✨ Contributing

Contributions are welcome! To get started, please follow these guidelines:

### Reporting Issues

If you encounter a bug or have a feature request, please [open an issue](https://github.com/ridgehkr/vite-plugin-grid-overlay/issues). Provide as much detail as possible, including steps to reproduce the issue or a clear description of the feature you'd like to see.

### Submitting Pull Requests

1. **Fork the Repository**: Create a fork of the repository to work on your changes.
2. **Create a Branch**: Use a descriptive branch name (e.g., `fix-bug-123` or `add-new-feature`).
3. **Follow Coding Standards**: Ensure your changes adhere to the [Coding Standards](CODING_STANDARDS.md).
4. **Write Tests**: Add or update the unit tests (`/test`) to cover your changes, if applicable.
5. **Run Tests**: Ensure all tests (new and existing) pass locally before submitting your pull request.
6. **Submit a Pull Request**: Open a [pull request](https://github.com/ridgehkr/vite-plugin-grid-overlay/pulls), providing a clear description of your changes and referencing any related issues.

## 🔗 Related

- [Vite config](https://vite.dev/config/)

## 🪪 License

© [Caleb Pierce](https://calebpierce.dev). MIT License applies.
