import { Transition, Variants } from "framer-motion";

export const pageTransition = {
    duration: 1,
    type: "tween",
    ease: "backInOut",
} as Transition;
export const pageAnimation = {
    initial: { rotateY: 180},
    in: { rotateY: 0 },
    out: { rotateY: -180 },
} as Variants;
// export const pageAnimation = {
//     initial: { x: "-100vw" },
//     in: { x: 0 },
//     out: { x: "100vw" },
// };
