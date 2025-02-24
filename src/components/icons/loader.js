// import React from 'react';

// const IconLoader = () => (
//   <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
//     <title>Loader Logo</title>
//     <g>
//       <path
//         d="M 60 30
//            A 20 20 0 1 0 60 70
//            L 60 55
//            L 45 55
//            L 45 45
//            L 70 45
//            L 70 70
//            A 30 30 0 1 1 60 20"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </g>
//   </svg>
// );

// export default IconLoader;

import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      {/* Outer hexagon */}
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
           L 11, 27
           L 11, 72
           L 50, 95
           L 89, 73
           L 89, 28 z"
        fill="none"
      />
      {/* Letter G */}
      <path
        d="M 55 45           
           L 75 45              
           A 25 25 0 1 1 60 25"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default IconLoader;
