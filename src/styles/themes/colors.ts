export type Colors = typeof colors;
export type ColorKeys = keyof typeof colors;

export const colors = {
  white: "#FFFFFF",
  black: "#222222",
  gray: "#666666",
  lightGray: "#F6F6F6",
  mediumGray: "#d9d9d9",
} as const;
