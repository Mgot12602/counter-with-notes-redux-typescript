export type Action = { type: string };

export const showText = (): Action => ({
  type: "SHOW_TEXT",
});
export const hideText = (): Action => ({
  type: "HIDE_TEXT",
});
