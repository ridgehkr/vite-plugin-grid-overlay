/**
 * Generate a CSS repeating-linear-gradient of vertical stripes:
 * – exactly `columns` opaque stripes (rgba(146,175,215,0.5))
 * – each stripe is `columnWidth`px wide
 * – transparent gutters in between
 * – throws if gutter < 1px
 *
 * @param columns     Number of stripes (≥1)
 * @param totalWidth  Total container width in px (>0)
 * @param columnWidth Width of each stripe in px (>0)
 * @returns           A CSS gradient string that can be plugged into `background-image`
 */
export function generateStripes(
  columns: number,
  totalWidth: number,
  columnWidth: number,
  color: string = 'rgba(146,175,215,0.5)'
): string {
  if (columns < 1) {
    throw new Error('columns must be ≥ 1')
  }
  if (totalWidth <= 0) {
    throw new Error('totalWidth must be > 0')
  }
  if (columnWidth <= 0) {
    throw new Error('columnWidth must be > 0')
  }

  // Special‐case single stripe
  let gutterWidth: number
  if (columns === 1) {
    if (columnWidth !== totalWidth) {
      throw new Error('For a single column, columnWidth must equal totalWidth')
    }
    gutterWidth = 0
  } else {
    gutterWidth = (totalWidth - columns * columnWidth) / (columns - 1)
    if (gutterWidth < 1) {
      throw new Error(
        `Calculated gutter width is ${gutterWidth.toFixed(2)}px (< 1px). ` +
          `Make columnWidth smaller or totalWidth larger.`
      )
    }
  }

  const patternWidth = columnWidth + gutterWidth

  // A repeating stripe + gap pattern
  return [
    'repeating-linear-gradient(to right,',
    `${color} 0px,`,
    `${color} ${columnWidth}px,`,
    `transparent ${columnWidth}px,`,
    `transparent ${patternWidth}px)`,
  ].join(' ')
}
