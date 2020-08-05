const ICON_PATHS = {
  cargo: '<path fill="white" opacity="0.5" d="M6,6H18V9.96L12,8L6,9.96M3.94,19H4C5.6,19 7,18.12 8,17C9,18.12 10.4,19 12,19C13.6,19 15,18.12 16,17C17,18.12 18.4,19 20,19H20.05L21.95,12.31C22.03,12.06 22,11.78 21.89,11.54C21.76,11.3 21.55,11.12 21.29,11.04L20,10.62V6C20,4.89 19.1,4 18,4H15V1H9V4H6A2,2 0 0,0 4,6V10.62L2.71,11.04C2.45,11.12 2.24,11.3 2.11,11.54C2,11.78 1.97,12.06 2.05,12.31M20,21C18.61,21 17.22,20.53 16,19.67C13.56,21.38 10.44,21.38 8,19.67C6.78,20.53 5.39,21 4,21H2V23H4C5.37,23 6.74,22.65 8,22C10.5,23.3 13.5,23.3 16,22C17.26,22.65 18.62,23 20,23H22V21H20Z" />',
  factory: '<path fill="white" opacity="0.5" d="M4,18V20H8V18H4M4,14V16H14V14H4M10,18V20H14V18H10M16,14V16H20V14H16M16,18V20H20V18H16M2,22V8L7,12V8L12,12V8L17,12L18,2H21L22,12V22H2Z" />',
  truck: '<path fill="white" opacity="0.5" d="M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5H17V12H21.46L19.5 9.5M6 18.5C6.83 18.5 7.5 17.83 7.5 17C7.5 16.17 6.83 15.5 6 15.5C5.17 15.5 4.5 16.17 4.5 17C4.5 17.83 5.17 18.5 6 18.5M20 8L23 12V17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H9C9 18.66 7.66 20 6 20C4.34 20 3 18.66 3 17H1V6C1 4.89 1.89 4 3 4H17V8H20M3 6V15H3.76C4.31 14.39 5.11 14 6 14C6.89 14 7.69 14.39 8.24 15H15V6H3Z" />'
}

const makeSvg = function(ele){
  const node = ele.data()
  const iconPath = ICON_PATHS[node.icon] || ICON_PATHS.factory

  const s = `
    <svg width="120" height="130" viewBox="0 0 120 130" version="1.1" xmlns="http://www.w3.org/2000/svg">

    <!-- <rect x="0" y="0" width="120" height="160" stroke-width="0" fill="#334255" stroke="#fff" opacity="1" /> -->

    <!-- main rectangle -->
      <rect x="10" y="10" width="100" height="100" rx="2" stroke-width="1.5" fill="#334255" stroke="#fff" />

      <!-- badge top/left/1 -->
      <g transform="translate(2, 20)">
        <rect width="30" height="15" rx="1" stroke="white" stroke-width="1" fill="#f7b45d"/>
        <text x="15" y="8" alignment-baseline="middle" font-size="10" font-family="Arial, Helvetica, sans-serif" stroke-width="0" fill="#ffffff" text-anchor="middle">
          71
        </text>
      </g>

      <!-- badge top/left/2 -->
      <g transform="translate(2, 40)">
        <rect width="30" height="15" rx="1" stroke="white" stroke-width="1" fill="#bc3e4a"/>
        <text x="15" y="8" alignment-baseline="middle" font-size="10" font-family="Arial, Helvetica, sans-serif" stroke-width="0" fill="#ffffff" text-anchor="middle">
          9
        </text>
      </g>

      <!-- badge top/right/1 -->
      <g transform="translate(89, 20)">
        <rect width="30" height="15" rx="1" stroke="white" stroke-width="1" fill="#f7b45d"/>
        <text x="15" y="8" alignment-baseline="middle" font-size="10" font-family="Arial, Helvetica, sans-serif" stroke-width="0" fill="#ffffff" text-anchor="middle">
          12
        </text>
      </g>

      <!-- badge top/right/2 -->
      <g transform="translate(89, 40)">
        <rect width="30" height="15" rx="1" stroke="white" stroke-width="1" fill="#bc3e4a"/>
        <text x="15" y="8" alignment-baseline="middle" font-size="10" font-family="Arial, Helvetica, sans-serif" stroke-width="0" fill="#ffffff" text-anchor="middle">
          1
        </text>
      </g>

      <!-- icon -->
      <g transform="translate(50, 42)">
        ${iconPath}
      </g>

      <!-- status squares -->
      <g transform="translate(49, 68)">
        <rect width="5" height="5" rx="1" ry="1" stroke="white" stroke-width="0.5" fill="#bc3e4a"></rect>
        <rect width="5" height="5" x="7" rx="1" ry="1" stroke="white" stroke-width="0.5" fill="#bc3e4a"></rect>
        <rect width="5" height="5" x="14" rx="1" ry="1" stroke="white" stroke-width="0.5" fill="#bc3e4a"></rect>
        <rect width="5" height="5" x="21" rx="1" ry="1" stroke="white" stroke-width="0.5" fill="#bc3e4a"></rect>
      </g>

      <!-- location label -->
      <g transform="translate(0, 116)">
        <text x="60" y="8" width="120" alignment-baseline="middle" font-size="10" font-family="Arial, Helvetica, sans-serif" stroke-width="0" fill="#ffffff" text-anchor="middle">
          ${node.label}
        </text>
    </g>
    </svg>`
  return { svg: 'data:image/svg+xml;utf8,' + encodeURIComponent(s), width: 120, height: 130 };
}

export default [
  {
    selector: 'node[label]',
    style: {
      'shape': 'rectangle',
      'background-image': function(ele){ return makeSvg(ele).svg; },
      'width': function(ele){ return makeSvg(ele).width; },
      'height': function(ele){ return makeSvg(ele).height; },
      'background-opacity': 0,
      // 'height': '50',
      // 'font-size': '18',
      // 'font-weight': 'bold',
      // 'content': `data(label)`,
      // 'text-valign': 'center',
      // 'text-wrap': 'wrap',
      // 'text-max-width': '140',
      // 'background-color': 'gold',
      // 'border-color': '#f7b45d',
      // 'border-width': '3',
      // 'color': '#bc3e4a'
    }
  },
  {
    selector: '$node node',
    style: {
      'background-color': '#1e3249',
      'background-opacity': 1,
      'border-width': 2,
      'padding': 30,
      'border-color': 'gray'
    }
  },
  // {
  //   selector: 'node:selected',
  //   style: {
  //     'background-color': '#bc3e4a',
  //     color: 'white',
  //     'border-color': '#bc3e4a',
  //     'line-color': '#0e76ba',
  //     'target-arrow-color': '#0e76ba'
  //   }
  // },
  {
    selector: 'edge',
    style: {
      // "curve-style": "unbundled-bezier",
      // "control-point-distances": [40, -40],
      // "control-point-weights": [0.250, 0.75],

      "curve-style": "taxi",
      "taxi-direction": "rightward",
      "taxi-turn": 50,
      "taxi-turn-min-distance": 0,
      "source-endpoint": "inside-to-node",
      "edge-distances": [0],


      // "curve-style": "segments",
      // "segment-distances": [ 40, -40 ],
      // "segment-weights": [0.250 , 0.75],

      // "curve-style": "unbundled-bezier",
      // "control-point-distances": 120,
      // "control-point-weights": 0.1,

      // "curve-style": "bezier",
      // "control-point-step-size": 40,

      'color': 'white',
      'text-background-color': '#ffffff',
      'text-background-opacity': '1',
      'text-background-padding': '3',
      'width': 'data(capacity)',
      // 'target-arrow-shape': 'triangle',
      'line-color': 'data(color)',
      'opacity': 0.6,
      'padding': '10',
      'target-arrow-color': 'white',
      'font-weight': 'bold'
    }
  },
  {
    selector: 'edge[label]',
    style: {
      'content': `data(label)`,
    }
  },
  {
    selector: 'edge.label',
    style: {
      'line-color': '#f7b45d',
      'target-arrow-color': '#f7b45d'
    }
  }
]