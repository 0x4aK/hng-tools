export const distance = (x, y) => Math.hypot(x.x - y.x, x.y - y.y);

export const distToTime = (
  distance,
  speed,
  modifier = 1,
  multiplier = 1,
  hops = 0,
  constant = 0
) => {
  let duration = Math.round(((distance * modifier) / speed) * 0.5 * multiplier + hops * 3);

  duration -= constant;

  if (duration < 60) return `${duration}s`;

  const h = String(Math.floor(duration / 3600));
  const m = String(Math.floor((duration % 3600) / 60));
  const s = String(duration % 60);

  if (duration < 3600) return `${m}:${s.padStart(2, "0")}m`;

  return `${h}:${m.padStart(2, "0")}:${s.padStart(2, "0")}h`;
};

export const canReach = (from, to, reach) => {
  const dist = distance(from, to);
  return dist * 2 < reach ? dist : null;
};

export const countHops = (path) =>
  path.reduce((acc, node) => acc + (node.includes(":") ? 1 : 0), 0);
