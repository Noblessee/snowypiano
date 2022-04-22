import * as React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../../store'

const BassCleff = () => {
  const theme = useSelector((state: State) => state.root.theme)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width="112px"
      height="132px"
      style={{
        shapeRendering: 'geometricPrecision',
        textRendering: 'geometricPrecision',
        stroke: theme.secondaryText,
        fill: theme.secondaryText,
        //   imageRendering: 'optimizeQuality',
        fillRule: 'evenodd',
      }}
      viewBox="0 0 8268 11692"
      id="svg2"
    >
      <defs id="defs4">
        <style type="text/css" id="style6">
          {'.str0{stroke:inherit;stroke-width:42}.fil0{fill:none}'}
        </style>
      </defs>
      <g id="Layer 1" transform="matrix(4.58848 0 0 4.57504 -4898.431 -28736.72)">
        <path
          className="fil0 str0"
          d="M984 7559h1969"
          id="path9"
          style={{
            fill: 'none',
            stroke: 'inherit',
            strokeWidth: 42,
          }}
        />
        <path
          className="fil0 str0"
          d="M984 8740h1969"
          id="path11"
          style={{
            fill: 'none',
            stroke: 'inherit',
            strokeWidth: 42,
          }}
        />
        <path
          className="fil0 str0"
          d="M984 8149h1969"
          id="path13"
          style={{
            fill: 'none',
            stroke: 'inherit',
            strokeWidth: 42,
          }}
        />
        <path
          className="fil0 str0"
          d="M984 6968h1969"
          id="path15"
          style={{
            fill: 'none',
            stroke: 'inherit',
            strokeWidth: 42,
          }}
        />
        <path
          className="fil0 str0"
          d="M984 6378h1969"
          id="path17"
          style={{
            fill: 'none',
            stroke: 'inherit',
            strokeWidth: 42,
          }}
        />
        <path
          d="M1239 8245c158-107 276-188 352-244 76-55 156-124 238-206s151-175 207-278c44-76 82-164 113-264 31-99 47-195 50-286 0-85-11-166-34-242-22-77-60-140-114-191-54-50-124-75-211-75-84 0-163 17-237 50-73 34-125 88-154 164 0 7-4 16-10 29 2 16 10 28 25 37s28 13 40 13c6 0 23-3 49-9 27-6 49-10 67-10 53 0 100 19 143 56 42 37 63 82 63 135 0 38-11 74-32 107s-50 60-87 79c-37 20-78 29-122 29-80 0-148-24-204-73-55-50-83-113-83-192 0-101 31-188 92-262 62-74 140-129 236-166 95-38 191-56 289-56 107 0 209 27 304 82 96 54 171 129 227 222 56 94 85 194 85 302 0 192-64 370-192 535s-286 308-475 430c-126 83-330 195-611 336l-14-52zm1389-1547c0-36 13-66 39-90 25-25 56-37 93-37 32 0 62 14 89 41 27 26 40 57 40 91 0 36-14 67-40 92-28 24-59 36-94 36-37 0-67-12-91-39-24-26-36-57-36-94zm0 524c0-36 13-67 37-91 25-25 56-37 95-37 32 0 61 13 89 40 26 27 40 56 40 88 0 39-13 70-38 95-26 25-56 38-91 38-39 0-70-13-95-37-24-24-37-56-37-96z"
          id="path19"
          style={{
            fill: 'inherit',
            stroke: 'inherit',
            strokeWidth: 3,
          }}
        />
      </g>
    </svg>
  )
}
export default BassCleff
