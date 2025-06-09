import type { Plugin } from 'vite';
export interface GridOverlayOptions {
    /** Color of the grid lines */
    gridColor?: string;
    /** Size of the grid cells in pixels */
    gridSize?: number;
    /** CSS z-index of the overlay */
    zIndex?: number;
    /** Display grid by default */
    displayByDefault?: boolean;
    /** Hotkey letter to toggle grid using Alt+<key> */
    hotkey?: string;
}
export default function gridOverlayPlugin(options?: GridOverlayOptions): Plugin;
