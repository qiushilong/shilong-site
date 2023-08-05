export function getTextWidth(text: string, size: number, family?: string) {
  if (!document) {
    console.error("document no exist");
    return 0;
  }

  const textDiv = document.createElement("div");
  textDiv.innerText = text;
  textDiv.setAttribute(
    "style",
    `display:inline-block;position:absolute;top:-9999px;left:-9999px;white-space:no-wrap;font-size:${size}px;${
      family ? "font-family:" + family : ""
    }`
  );
  document.body.appendChild(textDiv);
  const textWidth = textDiv.offsetWidth;
  document.body.removeChild(textDiv);
  return textWidth;
}
