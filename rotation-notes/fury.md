# Fury (Sith Marauder) — Rotation Reference

Built from two independent StarParse detail logs (two different players), each against a
10,000,000 HP Operations Training Dummy.
Parse 2 (reference): 2,575 lines, EnterCombat 0 to a real Death event at 297.50 s, 33,725 DPS,
GCD 1.3973 s (7.35% alacrity), 94.13% GCD efficiency.
Parse 1: 2,567 lines, EnterCombat 0 to ExitCombat 301.90 s (no Death event), 27,879 DPS, GCD
1.2717 s (17.95% alacrity — different gear, not different technique), 84.39% GCD efficiency.

## Core thesis

A five-to-six-GCD half-cycle that **alternates Berserk and Force Crush as the source of
Destruction**, every other half feeding an off-GCD Raging Burst. Two independent players ran
the identical structure — the only real difference between them was gear (alacrity) and one
stylistic ordering choice within Half B.

## Macro-cycle structure

One full macro-cycle = Half A + Half B = **11 on-GCD slots, median 16.9 s** (parse 2; parse 1
measured 17.1 s on slower gear, same structure).

**Half A — the Berserk half** (~8.4 s, 5 on-GCD slots): Ravage → Force Scream → Vicious Slash
→ Furious Strike → Obliterate, capped by an **off-GCD** Berserk (grants Destruction) which
immediately feeds an **off-GCD** Raging Burst (autocrit, free) closing the half.

**Half B — the Force Crush half** (~8.4 s, 6 on-GCD slots since Force Crush weighs 2): Battering
Assault → Vicious Slash → Force Crush (2 GCDs) → Furious Strike → Obliterate, capped the same
way by Force Crush granting Destruction into another off-GCD Raging Burst.

The only genuine style difference found between the two players: parse 2 ran Half B as
"Battering Assault then Vicious Slash"; parse 1 ran the same two abilities in the opposite
order. Neither changes slot count or timing — a real personal-preference difference, not a
correctness question.

## Correction: off-GCD attribution was wrong in the raw log

An automated pass over the log credited Destruction, Furious Rage, and Fury (the resource
stack) to whichever **on-GCD** ability happened to sit nearest the effect's removal — Force
Crush, Vicious Slash, Vicious Throw. **All three are actually consumed by the off-GCD Raging
Burst or Berserk**, confirmed in parse 1 by checking removal timestamps directly against those
off-GCD activations (gap under 0.2 s), with the same relationship holding in parse 2. Battle
Cry's attribution to Force Scream was correct in both logs, because Force Scream is itself
on-GCD so the naive method could actually see it.

**If you're parsing your own log and your tool attributes a buff/proc consumption to a nearby
on-GCD ability, double check against off-GCD activations first** — this is a systematic
failure mode of naive "nearest neighbor" log analysis, not specific to this one parse.

## Correction: Raging Burst and Berserk cost no GCD at all

Neither a casual reading of the ability guide nor "Raging Burst and Smash are your two
rotational burst attacks" flags this — but both logs are unambiguous. 35 Raging Bursts and 19
Berserks per parse, every one weaved between on-GCD casts with **no measurable delay added**,
regardless of how many other off-GCD actions share the same window. Neighbor-gap measurements
(the on-GCD ability before vs. after a Raging Burst/Berserk weave) show identical spacing
whether 3 or 4 off-GCD actions are packed into the same window.

## Where the alacrity comes from

Fourteen independent mechanics — cooldown floors and re-proc floors — agree on the same
scaling factor to within a few thousandths, in each parse independently:

| Mechanic | Base | Parse 2 measured | Parse 2 scale |
|---|---|---|---|
| Berserker's Call re-proc floor | 18 s | 16.702 | 0.9279 |
| Force Crush cooldown | 18 s | 16.792 | 0.9329 |
| Ravage cooldown | 18 s | 16.798 | 0.9332 |
| Battering Assault cooldown | 18 s | 16.793 | 0.9329 |
| Raging Burst re-proc floor | 9 s | 8.345 | 0.9272 |
| Furious Defense re-proc floor | 9 s | 8.386 | 0.9318 |
| Furious Rage re-proc floor | 9 s | 8.386 | 0.9318 |
| Raging Burst cooldown | 9 s | 8.395 | 0.9328 |
| Furious Strike cooldown | 9 s | 8.386 | 0.9318 |
| Obliterate cooldown | 9 s | 8.378 | 0.9309 |

Mean scale 0.9315 ⇒ GCD 1.3973 s ⇒ 7.35% alacrity. Parse 1 measured a different scale (17.95%
alacrity) from the identical set of mechanics — different gear, same technique; that's *why*
parse 2's macro-cycle (16.9 s) sits close to parse 1's (17.1 s) despite visibly different gear.
"Blood Fury" (a gear/tactical proc, not a class mechanic) coincidentally floors at almost the
same value and is excluded from the model but listed for completeness.

**If pinning your own alacrity/GCD, use several independent base-18s and base-9s cooldown
floors from your own log and confirm they agree with each other before trusting the number.**

## Execution scorecard (parse 2; parse 1 close on every discipline metric except raw efficiency)

- Destruction procs, zero overlaps (one-at-a-time): **36 / 36**
- Battle Cry consumed by Force Scream, every time: **18 / 18**
- Bloody Slashes uptime (Ravage's own DoT): **100%**
- Bleeding (gear-sourced DoT, present both parses): **100%**
- Raging Burst weaved off-GCD, no drift added: **35 / 35**
- Furious Rage held before consumption: median **5.1 GCDs**, i.e. **85.2%** of theoretical max
  hold efficiency
- Force Crush uptime on target: **17.1%** — periodic and low *by design*, not a miss
- **GCD efficiency (ideal slots ÷ actual span): 94.13%** (parse 1: 84.39% — the real gap
  between the two parses is almost entirely here, see drift below)

## Where the drift actually sits

Net drift across parse 2 is 17.4 s (12.5 GCDs) against a 279.5 s ideal span. **Vicious Slash
alone accounts for slightly *more* than the entire net total (+17.63 s, ~101%)** — every other
ability nets out at or ahead of ideal pace (Force Scream +2.91 s, everything else under half a
second). Average hesitation per Vicious Slash cast: 0.61 s (29 uses) in parse 2, 0.75 s in
parse 1. **If you want to improve your own efficiency number on this spec, Vicious Slash's
cast-to-cast gap is almost certainly where to look first** — it was the whole story in both
independently-played parses.

## Reference grid takeaways (17 macro-cycles, both parses)

- **Obliterate generates 8 Fury, not the ability guide's baseline 4** — confirmed 17/17 in
  parse 1 and 17/17 in parse 2. Two independent logs, same number, every time.
- The guide describes moving Force Scream out of the Berserk half and using **Vicious Throw**
  in its place once the target is sub-30%. **Both parses disagree**: Force Scream stays in
  Half A in every cycle; Vicious Throw instead simply replaces Half A's **Vicious Slash** —
  nine sub-30% cycles total across two independent players, zero matching the guide's
  description. Vicious Throw's exact position relative to Force Scream (before or after)
  varies even within one player's own execution — not mechanically constrained either way.

## The opener

Force Charge → Force Crush, then a paced ~2.8 s window (generates 3 Rage) packing several
off-GCD actions — Bloodthirst (fired once per parse, assumed off-GCD from general game
knowledge since one activation per log is too few to verify algorithmically), Frenzy/Force
Camouflage, an Adrenal, Raging Burst, Berserk — before Furious Strike opens the first steady
half-cycle. Both parses show the identical 2.80 s gap width regardless of how many off-GCD
actions get packed into it (3 in one parse, 4 in the other) — consistent with the "off-GCD
costs nothing" finding above. The two players made genuinely different choices about *when*
to spend Bloodthirst (immediately in the opener vs. a single mid-fight use around the
two-thirds mark) — a raid-buff-timing decision, not a correctness issue.

## Gear/tactical procs excluded from the model

Cascading Domination, Gravity Vortex, Mastery Surge, Dark Synergy, Power Surge, Blood Fury,
Fearless Victor, Thirst for Rage, Sprint, Satiated — each character's specific loadout, not
core Fury mechanics. "Bleeding (Cauterized Coronary)" is one such gear DoT present in both
logs, included in the uptime scorecard only because it happened to run at 100% in both.

## Execution checklist for your own parse

- [ ] Macro-cycle should map onto Half A (Ravage, Force Scream, Vicious Slash, Furious
      Strike, Obliterate, off-GCD Berserk, off-GCD Raging Burst) then Half B (Battering
      Assault, Vicious Slash, Force Crush [2 GCD], Furious Strike, Obliterate, off-GCD Raging
      Burst) — 11 on-GCD slots total.
- [ ] Confirm Raging Burst and Berserk never show up costing a GCD slot in your own timing —
      if your analysis tool shows delay around them, check whether it's mis-attributing.
- [ ] Destruction should show zero overlaps — it is always one source (Berserk or Force
      Crush) at a time, always consumed by the very next off-GCD Raging Burst.
- [ ] Obliterate should grant 8 Fury per use, not 4 — check your own stack-count deltas.
- [ ] Below 30%, expect Vicious Throw to replace Half A's Vicious Slash — not Force Scream.
- [ ] Bloody Slashes and any gear DoTs should sit at 100% uptime.
- [ ] Pin your GCD from several independent 18s/9s cooldown floors (see table above) and
      cross-check they agree to within ~0.5%.
- [ ] Your single biggest efficiency lever is almost certainly Vicious Slash's cast-to-cast
      gap — check its average hesitation against the ~0.6–0.75 s range measured here.
- [ ] Force Crush uptime on target will legitimately be low (~17%) — this is by design
      (it's a periodic effect only refreshed once per Half B), not something to "fix."

## Open questions (not fully confirmed)

- Bloodthirst's off-GCD status is assumed from general game knowledge, not directly measured
  — only one activation per parse, too few data points to verify algorithmically.
- Half B's internal ordering (Battering Assault vs. Vicious Slash first) looks like genuine
  personal style with no measurable cost either way, but this is based on only two data points
  (two players) — a third parse would help confirm it's truly inconsequential.
