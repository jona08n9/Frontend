import { animate, stagger } from "https://cdn.skypack.dev/motion";

animate(".box", { transform: "rotate(45deg)" }, { duration: 1, delay: stagger(0.8) });
