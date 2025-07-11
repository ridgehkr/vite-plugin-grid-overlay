# vite-plugin-grid-overlay

A simple Vite plugin that injects a design grid overlay during development. Useful for aligning elements to a consistent grid when building layouts.

## 🚀 Getting Started

```bash
# with pnpm
pnpm add -D vite-plugin-grid-overlay

# or with npm
npm install -D vite-plugin-grid-overlay
```

Add the plugin to your `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import gridOverlay from 'vite-plugin-grid-overlay'

export default defineConfig({
  plugins: [
    gridOverlay({
      gridColor: 'rgba(255,0,0,0.2)',
      columns: 12,
      columnWidth: 80,
      totalWidth: 1280,
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

### Example

```ts
import { defineConfig } from 'vite'
import gridOverlay from 'vite-plugin-grid-overlay'

export default defineConfig({
  // … other Vite config options
  plugins: [
    gridOverlay({
      gridColor: 'rgba(255,0,0,0.2)',
      columns: 12,
      columnWidth: 80,
      totalWidth: 1200,
      zIndex: 9999,
    }),
  ],
})
```

## ⚙️ Options

| Option        | Type   | Default             | Description                               |
| ------------- | ------ | ------------------- | ----------------------------------------- |
| `columns`     | number | `12`                | The number of columns in the grid         |
| `columnWidth` | number | `80`                | The width of each grid column (in pixels) |
| `totalWidth`  | number | `1200`              | The total width of the grid (in pixels)   |
| `gridColor`   | string | `'rgba(0,0,0,0.2)'` | CSS color of the grid lines               |
| `zIndex`      | number | `9999`              | z-index of the overlay element            |

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

## 🚗 Roadmap

These are potential future features for `vite-plugin-grid-overlay`. If you'd like to contribute one, just fork the repo to get started!

- [ ] Add the ability to set overriding breakpoint settings
- [ ] Route-specific display overrides
- [ ] Display hotkey customization

## 🔗 Related

- [Vite config](https://vite.dev/config/)

## 🪪 License

© [Caleb Pierce](https://calebpierce.dev). MIT License applies.
