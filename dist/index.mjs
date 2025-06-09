function generateStripes(columns, totalWidth, columnWidth, color = "rgba(146,175,215,0.5)") {
  if (columns < 1) {
    throw new Error("columns must be \u2265 1");
  }
  if (totalWidth <= 0) {
    throw new Error("totalWidth must be > 0");
  }
  if (columnWidth <= 0) {
    throw new Error("columnWidth must be > 0");
  }
  let gutterWidth;
  if (columns === 1) {
    if (columnWidth !== totalWidth) {
      throw new Error("For a single column, columnWidth must equal totalWidth");
    }
    gutterWidth = 0;
  } else {
    gutterWidth = (totalWidth - columns * columnWidth) / (columns - 1);
    if (gutterWidth < 1) {
      throw new Error(
        `Calculated gutter width is ${gutterWidth.toFixed(2)}px (< 1px). Make columnWidth smaller or totalWidth larger.`
      );
    }
  }
  const patternWidth = columnWidth + gutterWidth;
  return [
    "repeating-linear-gradient(to right,",
    `${color} 0px,`,
    `${color} ${columnWidth}px,`,
    `transparent ${columnWidth}px,`,
    `transparent ${patternWidth}px)`
  ].join(" ");
}

function gridOverlayPlugin({
  columns = 12,
  columnWidth = 80,
  totalWidth = 1200,
  gridColor = "rgba(0,0,0,0.2)",
  zIndex = 9999
}) {
  const stripesGradient = generateStripes(
    columns,
    totalWidth,
    columnWidth,
    gridColor
  );
  return {
    name: "vite-plugin-grid-overlay",
    apply: "serve",
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
  display: var(--grid-display);
  z-index: var(--grid-z-index);
  gap: 0;
  z-index: ${zIndex};
  background-image: ${stripesGradient};
}
`;
      const script = `(function(){
  const overlay = document.createElement('div');
  overlay.id = 'vite-grid-overlay';
  document.body.appendChild(overlay);
  window.addEventListener('keydown', e => {
    if (e.altKey && e.code === "KeyG") {
      overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
    }
  });
})();`;
      return [
        { tag: "style", children: style, injectTo: "head" },
        { tag: "script", children: script, injectTo: "body" }
      ];
    }
  };
}

export { gridOverlayPlugin as default };
