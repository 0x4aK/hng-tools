function getOffset(rotation, template) {
  const a = Math.round(Math.cos((rotation * -Math.PI) / 2));
  const b = Math.round(Math.sin((rotation * -Math.PI) / 2));

  const c = template.x * a - template.y * b;
  const d = template.y * a + template.x * b;

  return [c * 14, d * 14];
}

export function getFinalCoords(battlefield, template) {
  const [a, b] = getOffset(battlefield.r, template);

  const finalX = battlefield.x + a;
  const finalY = battlefield.y + b;

  return [finalY, finalX];
}
