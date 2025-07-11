import type { Plugin } from 'vite'
import type { GridOverlayOptions } from './types'
import { generateStripes } from './utils'

/**
 * Vite plugin to overlay a grid on the page for design alignment purposes.
 * Grid visibility can be toggled on and off with a hotkey (default: 'g').
 *
 * @param {GridOverlayOptions} options - Configuration options for the grid overlay.
 * @returns {Plugin} Vite plugin instance.
 */
export default function gridOverlayPlugin(
  options: GridOverlayOptions = {}
): Plugin {
  const {
    columns = 12,
    columnWidth = 80,
    totalWidth = 1200,
    gridColor = 'rgba(0,0,0,0.2)',
    zIndex = 9999,
  } = options

  // Add validation
  if (columns <= 0 || columnWidth <= 0 || totalWidth <= 0) {
    throw new Error('Grid overlay options must have positive values')
  }

  const stripesGradient = generateStripes(
    columns,
    totalWidth,
    columnWidth,
    gridColor
  )

  return {
    name: 'vite-plugin-grid-overlay',
    apply: 'serve',
    transformIndexHtml() {
      const style = `
#vite-grid-overlay {
  position: fixed;
  pointer-events: none;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: ${totalWidth}px;
  height: 100vh;
  display: block;
  z-index: ${zIndex};
  background-image: ${stripesGradient};
}
#vite-grid-overlay.hidden {
  display: none;
}
`

      const script = `(function(){
  const overlay = document.createElement('div');
  overlay.id = 'vite-grid-overlay';
  document.body.appendChild(overlay);
  
  window.addEventListener('keydown', e => {
    if (e.altKey && e.code === "KeyG") {
      overlay.classList.toggle('hidden');
    }
  });
})();`

      return [
        { tag: 'style', children: style, injectTo: 'head' },
        { tag: 'script', children: script, injectTo: 'body' },
      ]
    },
  }
}
