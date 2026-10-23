export interface CreditsRange {
  min: number;
  max: number;
}

/**
 * Parses a mission's `credits` frontmatter value into a range.
 *
 * Accepts a single non-negative number (rendered as an exact figure) or a
 * two-entry `[min, max]` array where `min` is not greater than `max`. Anything
 * else, including a reversed range, is rejected outright rather than coerced,
 * so malformed frontmatter surfaces as a missing estimate instead of a
 * plausible-looking but wrong one.
 */
export function parseCredits(value: unknown): CreditsRange | null {
  if (value === null || value === undefined || value === "") return null;

  const raw = Array.isArray(value) ? value : [value, value];
  if (raw.length !== 2) return null;

  const nums = raw.map((entry) => {
    if (typeof entry === "number") return entry;
    if (typeof entry === "string" && entry.trim() !== "") return Number(entry);
    return Number.NaN;
  });

  if (nums.some((n) => !Number.isFinite(n) || n < 0)) return null;

  const [min, max] = nums;
  if (min > max) return null;

  return { min, max };
}
