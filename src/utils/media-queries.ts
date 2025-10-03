import { breakpoints } from "@/constants/enums";

type Breakpoint = keyof typeof breakpoints;
type Type = "max" | "min";

export const mq = (bp: Breakpoint, type: Type = "max") =>
  `@media (${type}-width: ${breakpoints[bp]}px)`;
