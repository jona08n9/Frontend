"use strict";

import { animate, stagger, timeline } from "https://cdn.skypack.dev/motion";

animate(".ball", { y: -400 }, { duration: 1.3, delay: stagger(0.2), easing: "ease-out", direction: "alternate", repeat: "infinite" });
animate(".ball", { rotate: 360 }, { duration: 2.6, delay: stagger(0.2), easing: "linear", repeat: "infinite" });
