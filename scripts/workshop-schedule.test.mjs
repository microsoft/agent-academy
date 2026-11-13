import assert from "node:assert/strict";
import test from "node:test";
import { groupWorkshops, workshops } from "../docs/.vitepress/theme/components/workshopSchedule.ts";

test("shows Ignite as upcoming and archives the four earlier workshops", () => {
  const { upcoming, past } = groupWorkshops(workshops, "2026-11-12");
  assert.deepEqual(upcoming.map((event) => event.name), ["Microsoft Ignite pre-day lab"]);
  assert.equal(upcoming[0].soldOut, true);
  assert.deepEqual(past.map((event) => event.date), [
    "2026-10-30", "2026-10-02", "2026-06-29", "2026-04-15",
  ]);
});

test("keeps a workshop upcoming on its date and archives it the following day", () => {
  assert.equal(groupWorkshops(workshops, "2026-11-16").upcoming.length, 1);
  const { upcoming, past } = groupWorkshops(workshops, "2026-11-17");
  assert.equal(upcoming.length, 0);
  assert.equal(past[0].name, "Microsoft Ignite pre-day lab");
});

test("sorts upcoming workshops chronologically without mutating the source", () => {
  const reversed = [...workshops].reverse();
  const original = [...reversed];
  const { upcoming, past } = groupWorkshops(reversed, "2026-01-01");
  assert.deepEqual(upcoming.map((event) => event.date), [
    "2026-04-15", "2026-06-29", "2026-10-02", "2026-10-30", "2026-11-16",
  ]);
  assert.deepEqual(past, []);
  assert.deepEqual(reversed, original);
});
