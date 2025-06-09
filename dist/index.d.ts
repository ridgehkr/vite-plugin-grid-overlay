import { Plugin } from 'vite';

interface GridOverlayOptions {
  // Number of columns in the grid
  columns?: number

  // Width of each column in pixels
  columnWidth?: number

  // Total width of the grid in pixels
  totalWidth?: number

  // Color of the grid columns
  gridColor?: string

  // CSS z-index of the overlay
  zIndex?: number
}

/**
 * Vite plugin to overlay a grid on the page for design alignment purposes.
 * Grid visibility can be toggled on and off with a hotkey (default: 'g').
 *
 * @param {GridOverlayOptions} options - Configuration options for the grid overlay.
 * @returns {Plugin} Vite plugin instance.
 */
declare function gridOverlayPlugin({ columns, columnWidth, totalWidth, gridColor, zIndex, }: GridOverlayOptions): Plugin;

export { gridOverlayPlugin as default };
