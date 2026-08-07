# Marksmanship (Sniper) — Rotation Reference

Built from two independent StarParse detail logs (two different players), each against a
10,000,000 HP Operations Training Dummy.
Parse 2 (reference): 2,834 lines, EnterCombat 0 to a real Death event at 292.825 s, 34,166 DPS.
Parse 1: 2,119 lines, EnterCombat 0 to a real Death event at 294.648 s, 33,962 DPS.

## Core thesis

A seven-GCD macro-cycle anchored on **Penetrating Blasts**, closing three separate
Followthrough windows every lap — one shared with the channel itself, one off a Snipe pair,
one off Ambush. Sniper Volley buys a second channel every fourth cycle or so, at the cost of
exactly one of those three Followthrough windows, not a free fourth one.

## Macro-cycle structure

**Standard lap (7 on-GCD slots):** Penetrating Blasts (channel, 6 ticks) → Followthrough (off
the channel) → Snipe → Snipe → Followthrough (off the Snipe pair) → Ambush → Followthrough
(off Ambush) → next Penetrating Blasts.

Median lap length: 11.20 s (parse 2), 10.71 s (parse 1). Both parses run this exact seven-slot
shape with zero substitutions above 30% health and before any Sniper Volley reset.

### Sniper Volley — the one real exception to the fixed shape

Sniper Volley is off-GCD and finishes Penetrating Blasts' cooldown on activation, so a second
channel starts almost immediately instead of ~11 s later. Measured across both parses (13
total uses): **every single one lands the second Penetrating Blasts within 0.3 s** (fastest
0.101 s, slowest 0.302 s) — confirming the reset is instant regardless of gear.

The actual cost: the Followthrough that the first channel would have opened on its own gets
skipped, folded into the Followthrough after the *second* channel. So an SV lap runs 8 slots
(PB, PB, FT, Snipe, Snipe, FT, Ambush, FT) instead of 7 — one extra Penetrating Blasts channel,
but still only three total Followthrough windows, not four.

Sniper Volley's own timing looks fixed to its own cooldown, not tied to target health — it
gets used the instant it's available in both parses, including within the first 5 seconds of
the opener.

## Correction: Corrosive Dart / Vital Shot needed reapplying zero times

The ability guide's default framing assumes this DoT needs periodic reapplication. **Neither
log ever reapplies it.** One cast each, at the very start of the fight, then continuous damage
ticks all the way to the target's death ~293 seconds later — confirmed independently in both
parses. This matches the guide's note that a tactical (Agitating Energies) routes a large
share of total damage through this ability, evidently including whatever mechanism keeps the
debuff itself from expiring without a second cast.

**If your own parse shows Corrosive Dart/Vital Shot being recast partway through a fight,
that's either a genuinely different build (no such tactical), or a real gap worth
investigating — it should not need recasting at all under this tactical.**

## The GCD: two states normally, a third with the right build

The guide states Sniper Volley takes the GCD from 1.4 s down to 1.3 s. Both parses confirm
exactly these two floors from Snipe-to-Snipe measurements:

| Snipe → Snipe gap | Parse 1 | Parse 2 | Cause |
|---|---|---|---|
| 1.09 – 1.10 s | 0 | 6 | Crouch → Snap Shot consumed by that Snipe — **parse 2 only** |
| 1.29 – 1.33 s | 13 | 12 | Sniper Volley window, or a Power/Mastery Surge gear proc |
| 1.40 – 1.81 s | 12 | 6 | Baseline pacing, no proc active |

Parse 2 layers a **Crouch → Snap Shot** weave on top (37 uses, landing before 22 of 23 full
cycles' Snipe pairs) that speeds up the very next Snipe by a measured ~0.19 s. This is **not
in the ability guide at all**, and parse 1's player never uses it once despite parsing equally
cleanly — this is a build/utility choice, not a spec-wide mechanic. If you don't recognize this
from your own build, don't expect to see the 1.1 s state; if you do have it, it should show up
almost every cycle, not occasionally.

## Below 30% health: Takedown swaps in, cleanly

Both parses swap Takedown into the post-Penetrating-Blasts slot (replacing that slot's
Followthrough) the instant the target crosses 30%, and never move anything else. Finish the
Job (Ambush's own sub-30% proc) is consumed by the very next Takedown:

- Parse 1: crossed 30% via an **Ambush** hit → Finish the Job already available → **8 of 8**
  Takedowns landed buffed.
- Parse 2: crossed 30% via a **Penetrating Blasts** tick instead → the first Takedown fired
  before the next Ambush could grant the proc → **7 of 8** buffed, with the one shortfall
  fully explained by timing, not a missed proc or an execution error.

**When self-analyzing, check which ability made your own 30% crossing** — it changes whether
you should expect 100% or slightly-under-100% Finish-the-Job coverage, and that's not a flaw
either way.

The guide separately allows an alternative: use the Followthrough that Takedown itself procs,
rather than skipping it. **Neither parse ever does this** — both players consistently took the
simpler skip-it approach the guide also endorses. Both are legal; don't read "0 for 8" as an
error if you see the same pattern.

## Execution scorecard (parse 2; parse 1 matches on every shared metric)

- Penetrating Blasts channels completing all 6 ticks: **32 / 32** (parse 1: 33/33) — zero
  short channels in either log.
- Sniper Volley uses resetting Penetrating Blasts within 0.3 s: **7 / 7** (parse 1: 6/6).
- Corrosive Dart/Vital Shot uptime from a single cast: **100%**, both parses.
- Finish the Job procs consumed by the very next Takedown: **7 / 8** (parse 1: 8/8 — see
  above for why).
- Crouch weaves landing a Snap Shot before the next Snipe: **37 / 37** (parse 1: 0 — mechanic
  unused).
- Ambush cast times cluster in bands consistent with 0–2 stacks of Zeroing Shots (the Snipe
  proc that shortens Ambush's cast) in both logs — no cast ever runs at the full un-reduced
  length once the fight is underway.

## Execution checklist for your own parse

- [ ] Lap should map onto: Penetrating Blasts, Followthrough, Snipe, Snipe, Followthrough,
      Ambush, Followthrough — 7 slots, repeating.
- [ ] Penetrating Blasts should tick exactly 6 times every single cast — flag any short
      channel (interrupted, moved, or clipped).
- [ ] Corrosive Dart/Vital Shot should need exactly one cast for the whole fight. A recast
      partway through means either a different build or a real gap to investigate.
- [ ] Every Sniper Volley use should land the next Penetrating Blasts within ~0.3 s — if not,
      something delayed the follow-up GCD.
- [ ] Below 30%, Takedown should occupy the post-Penetrating-Blasts slot every lap; check
      which ability made your own 30% crossing before judging Finish-the-Job coverage.
- [ ] If your build uses a Crouch-equivalent re-stealth/reposition mechanic, check whether it
      reliably lands before your Snipe pairs — if it's supposed to and doesn't, that's lost
      value; if you don't have such a build choice, don't expect the extra GCD-floor state.
- [ ] Measure your own Snipe-to-Snipe gaps and bucket them — you should see a clean 1.3s/1.4s
      split (plus a third ~1.1s band only if your build has a Crouch-Snap-Shot-style mechanic).

## Open questions (not fully confirmed)

- Whatever Crouch/Snap Shot actually is mechanically (exact proc chance, exact speed bonus)
  is inferred from timing alone — the ability guide doesn't document it, so the ~0.19 s
  speedup is a measured effect, not a tooltip-confirmed one.
- Sniper Volley's cooldown value itself isn't independently confirmed against an official
  source — only its *effect* (instant Penetrating Blasts reset) is directly measured.
