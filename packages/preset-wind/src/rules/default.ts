import { Rule } from '@unocss/core'
import {
  alignContents,
  alignItems,
  alignSelfs,
  appearance,
  appearances,
  aspectRatio,
  bgColors,
  borders,
  boxShadows,
  boxSizing,
  breaks,
  contents,
  cursors,
  displays,
  fillColors,
  flex,
  floats,
  fontSizes,
  fontSmoothings,
  fontStyles,
  fontWeights,
  fontsFamilies,
  gaps,
  grids,
  insets,
  justifies,
  justifyItems,
  justifySelfs,
  leadings,
  margins,
  opacity,
  orders,
  outline,
  overflows,
  paddings,
  placeContents,
  placeItems,
  placeSelfs,
  placeholder,
  pointerEvents,
  positions,
  questionMark,
  resizes,
  rings,
  sizes,
  tabSizes,
  textAligns,
  textColors,
  textDecorations,
  textDecorationColors,
  textIndents,
  textOverflows,
  textShadows,
  textStrokeColors,
  textStrokeWidths,
  trackings,
  transforms,
  transitions,
  userSelects,
  verticalAligns,
  whitespaces,
  wordSpacings,
  zIndexes,
} from '@unocss/preset-mini/rules'
import { container } from './container'
import { bgAttachments, bgBlendModes, bgClips, bgGradients, bgImages, bgOrigins, bgPositions, bgSizes, bgRepeats } from './background'
import { filters } from './filters'
import { mixBlendModes } from './shadow'
import { spaces } from './spacing'
import { screenReadersAccess, textTransforms, hyphens, writingModes, writingOrientations, isolations, objectPositions } from './static'
import { tables } from './table'
import { listStyle, caretColors, boxDecorationBreaks, caretOpacity, imageRenderings, overscrolls } from './behaviors'
import { animations } from './animation'
import { cssVariables } from './variables'
import { divides } from './divide'
import { lineClamps } from './line-clamp'
import { fontVariantNumeric } from './typography'

export const rules: Rule[] = [
  screenReadersAccess,
  cssVariables,
  paddings,
  margins,
  spaces,
  lineClamps,
  isolations,
  container,
  displays,
  opacity,
  bgAttachments,
  bgBlendModes,
  bgClips,
  bgColors,
  bgGradients,
  bgImages,
  bgOrigins,
  bgPositions,
  bgRepeats,
  bgSizes,
  fillColors,
  borders,
  divides,
  contents,
  fontsFamilies,
  fontSizes,
  fontWeights,
  tabSizes,
  textIndents,
  textOverflows,
  textDecorations,
  textDecorationColors,
  textStrokeWidths,
  textStrokeColors,
  textShadows,
  textTransforms,
  textAligns,
  textColors,
  fontVariantNumeric,
  fontStyles,
  fontSmoothings,
  hyphens,
  writingModes,
  writingOrientations,
  mixBlendModes,
  boxShadows,
  rings,
  flex,
  grids,
  gaps,
  sizes,
  aspectRatio,
  cursors,
  appearances,
  pointerEvents,
  resizes,
  verticalAligns,
  userSelects,
  whitespaces,
  listStyle,
  caretColors,
  boxDecorationBreaks,
  caretOpacity,
  imageRenderings,
  breaks,
  trackings,
  wordSpacings,
  leadings,
  overflows,
  outline,
  appearance,
  placeholder,
  overscrolls,
  positions,
  orders,
  justifies,
  justifyItems,
  justifySelfs,
  alignContents,
  alignItems,
  alignSelfs,
  placeContents,
  placeItems,
  placeSelfs,
  animations,
  insets,
  floats,
  zIndexes,
  objectPositions,
  boxSizing,
  transitions,
  filters,
  tables,
  transforms,

  // should be the last
  questionMark,
].flat(1)