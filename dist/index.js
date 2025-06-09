export default function gridOverlayPlugin(options = {}) {
    const { gridColor = 'rgba(0,0,0,0.2)', gridSize = 20, zIndex = 9999, displayByDefault = true, hotkey = 'g' } = options;
    return {
        name: 'vite-plugin-grid-overlay',
        apply: 'serve',
        transformIndexHtml() {
            const style = `:root {\n  --grid-color: ${gridColor};\n  --grid-size: ${gridSize}px;\n  --grid-display: ${displayByDefault ? 'block' : 'none'};\n  --grid-z-index: ${zIndex};\n}\n#vite-grid-overlay {\n  position: fixed;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image: repeating-linear-gradient(0deg,var(--grid-color) 0,var(--grid-color) 1px,transparent 1px,transparent var(--grid-size)),repeating-linear-gradient(90deg,var(--grid-color) 0,var(--grid-color) 1px,transparent 1px,transparent var(--grid-size));\n  z-index: var(--grid-z-index);\n  display: var(--grid-display);\n}`;
            const script = `(function(){const overlay=document.createElement('div');overlay.id='vite-grid-overlay';document.body.appendChild(overlay);window.addEventListener('keydown',e=>{if(e.key.toLowerCase()==='${hotkey}'&&e.altKey){overlay.style.display=overlay.style.display==='none'?'block':'none';}});})();`;
            return [
                { tag: 'style', children: style, injectTo: 'head' },
                { tag: 'script', children: script, injectTo: 'body' }
            ];
        }
    };
}
