# vite-plugin-grid-overlay

A simple Vite plugin that injects a design grid overlay during development. Useful for aligning elements to a consistent grid when building layouts.

## Installation

```bash
# with pnpm
pnpm add -D vite-plugin-grid-overlay
```

## Usage

Add the plugin to your `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import gridOverlay from 'vite-plugin-grid-overlay';

export default defineConfig({
  plugins: [
    gridOverlay({
      gridColor: 'rgba(255,0,0,0.2)',
      gridSize: 20,
      zIndex: 9999
    })
  ]
});
```

Press **Alt+g** during development to toggle the grid on and off.

## Development

This project uses [unbuild](https://github.com/unjs/unbuild) to compile the
TypeScript source. Use the provided npm scripts during development:

```bash
# compile in watch mode
pnpm dev

# generate the final dist files
pnpm build
```

## Options

- `gridColor` – CSS color of the grid lines. Default `rgba(0,0,0,0.2)`.
- `gridSize` – Size of each grid square in pixels. Default `20`.
- `zIndex` – z-index of the overlay element. Default `9999`.
- `displayByDefault` – Whether the grid is visible initially. Default `true`.
- `hotkey` – Key used with `Alt` to toggle the overlay. Default `'g'`.

## License

MIT
