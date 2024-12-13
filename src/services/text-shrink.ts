export const textShrink = (text: string | undefined) => {
  if (!text) return "";
  return text.substring(0, 300) + "...";
};
