"use strict";

import { animate, timeline } from "https://cdn.skypack.dev/motion";

// const animationMove = animate(".ball", { x: 400, rotate: 200 }, { duration: 2, easing: "ease-in", direction: "alternate" });

// animationMove.finished.then(() => {
//   animate(".ball", { scale: 0 }, { duration: 1, delay: stagger(0.2), direction: "alternate" });
// });

// TIMELINE VERSION

const sequence = [
  [".ball", { x: 400, rotate: 200 }, { duration: 1, easing: "ease-in", direction: "alternate" }],
  [".ball", { scale: 0, x: 1000, y: -1000 }, { duration: 0.8 }],
];

timeline(sequence);
