# Assault Specialist (Commando/Trooper) — Rotation Reference

Built from two StarParse detail logs against a 10,000,000 HP Operations Training Dummy.
Parse 2 (reference): 245 activations, 299.451 s, 33,394 DPS, 7.02% alacrity (GCD 1.4015 s).
Parse 1: 220 on-GCD activations, 321.81 s, assumed to share parse 2's gear/alacrity.

## Core thesis

An 11-GCD opener, then a **10-GCD cycle anchored on Incendiary Round**, repeated until the
target dies. Seven of the ten cycle slots are locked to a fixed ability; three are yours to
fill by priority. The whole cycle length is just alacrity-scaled base-15-second mechanics —
it is structural, not a property of any particular gear level.

## Macro-cycle structure

- **Anchor:** Incendiary Round (a DoT). Cycle length = Incendiary Round's debuff duration =
  Assault Plastique's cooldown = 10 GCDs, always, at any alacrity.
- **Median cycle length (parse 2):** 14.21 s (10 GCDs × 1.4015 s GCD = 14.015 s theoretical).
- **Fixed slots (7 of 10):** Incendiary Round, Charged Bolts, Serrated Bolt, Assault
  Plastique, Mag Bolt, Charged Bolts, Mag Bolt — in that order.
- **Flexible slots (3 of 10, "F1/F2/F3"):** filled by priority, described below.

### The Ionic Accelerator chain

Every cycle's two fixed Charged Bolts casts each arm Ionic Accelerator, which makes the very
next Mag Bolt free (and Mag Bolt refunds energy via Scorching Bolts on top of that). This is
why Mag Bolt always immediately follows a Charged Bolts in the fixed skeleton — it's not
coincidence, it's the resource engine of the whole spec.

- 42 of 43 Mag Bolts in the reference parse were made free this way. The "Ionic Accelerator
  dead zone" (letting the buff fall off before using it) was entered **zero times** in either
  parse.

### Supercharge accounting (the real ceiling)

Every cycle needs to reach **10 stacks of Supercharge** to trigger Supercharged Cell
(off-GCD). The locked slots alone contribute exactly 5 (Assault Plastique = 3, plus 1 from
each of the two fixed Charged Bolts casts). The three flexible slots must supply the other 5.

**Only "two Explosive Rounds plus anything" reaches exactly 10.** The math:
- 3× Explosive Round → 11 stacks against a cap of 10 → **1 stack wasted**, and you paid the
  most expensive filler's energy for a stack that did nothing.
- 2× Explosive Round + Hammer Shot → exactly 10.
- 2× Explosive Round + Charged Bolts → exactly 10.
- 1× Explosive Round + anything → only 9. Short.

**Rule of thumb: never take a third Explosive Round in the same cycle.** Declining it costs
nothing — the proc is one-at-a-time (see below), so a held proc just delays the next one
rather than discarding anything.

## Flexible-slot filler priority

| # | Filler | Supercharge | Condition |
|---|---|---|---|
| 1 | Explosive Round | +2 | Whenever Hyper Assault Rounds (its proc) is up. **Max two per cycle.** |
| 2 | Charged Bolts | +1 | The remaining slot, whenever energy funds it. |
| 3 | Hammer Shot | +1 | The energy breather — free, keeps you out of the low-regen tier. |
| — | Electro Net | 0 | On cooldown only (~84.55 s). Takes the Hammer Shot slot, **never** an Explosive Round. |
| — | Full Auto | 0 | Opener only. Costs 2 GCDs for zero Supercharge — never use it mid-fight. |

Filler mix across 20 clean cycles in the reference parse: Explosive Round 26 (43%), Hammer
Shot 24 (40%), Charged Bolts 6 (10%), Electro Net 3, Full Auto 1 (opener). Every one of the
eight cycles that hit 10 stacks carried two Explosive Rounds.

## Correction: the proc is one-at-a-time, not a 15s-cooldown item

The ability reference documentation for Hyper Assault Rounds (Explosive Round's proc) states
a 15-second internal cooldown and a below-30%-health condition. **Neither survived contact
with the log:**

- Apply/remove events **strictly alternate across 26 transitions, zero overlaps** — you can
  only ever hold one proc; it cannot bank up.
- 23 of 26 measured intervals between procs fall *under* the documented 15s floor (fastest:
  2.7 s). A real 15s cooldown would make several of these intervals physically impossible.
- The first proc landed at 5.8 s against a full-health target, so the sub-30% condition isn't
  gating it either — at least not for the initial proc.
- **All 27 Explosive Rounds in the reference parse fired with the proc already up. Zero procs
  expired unused.** An earlier draft of this analysis, based on the ability doc rather than
  the log, wrongly concluded ~half of all Explosive Rounds were "unprocced." They were not.
- Only 2 of 24 Hammer Shots happened while a proc was actually active and available — both
  immediately followed by the Explosive Round on the very next GCD (proc had landed 0.10–0.33s
  earlier — a committed keystroke, not a missed opportunity). **22 of 24 Hammer Shots had no
  proc to use instead at all.**
- Proc supply accelerates as a fight goes on: mean re-proc gap 10.4 s in the first third of
  the parse, 3.7 s in the last third — Hammer Shot usage correspondingly drops from 9 uses to
  5 across those same thirds. The filler mix already tracks the supply curve without needing
  to think about it explicitly.
- Median hold time from proc landing to Explosive Round consuming it: **2.0 GCDs**, longest
  5.9 GCDs (waiting out the uninterruptible locked block of the cycle — structural, not a
  mistake). Because holding a proc suppresses the next one from generating, roughly 30% of
  total parse time is spent "sitting on" an available, unused proc — this is normal and not a
  loss by itself, only the eventual conversion rate (27/27 here) matters.

## GCD / alacrity behavior

Flat GCD, no proc-driven states (unlike some other specs). Five independent base-15-second
(and one base-90-second) mechanics all scale by the identical factor, confirming alacrity
compresses everything uniformly:

| Mechanic | Base | Measured | Scale | Implied GCD |
|---|---|---|---|---|
| Incendiary Round debuff duration | 15 s | 14.032 | 0.9355 | 1.4032 |
| Serrated Bolt debuff duration | 15 s | 14.019 | 0.9346 | 1.4019 |
| Assault Plastique cooldown | 15 s | 14.031 | 0.9354 | 1.4031 |
| Blazing Celerity internal cooldown | 15 s | 13.980 | 0.9320 | 1.3980 |
| Electro Net cooldown | 90 s | 84.551 | 0.9395 | 1.4092 |

Pinned GCD: **1.4015 s** (mean of the above, 7.02% alacrity). Individual activation gaps as
low as 1.177 s are ±0.12 s timestamp jitter, not a faster real GCD — a genuinely faster GCD
would make the mechanic-scaling table above impossible. Jitter cancels out over many
activations; trust net drift over the whole parse, not any single transition.

## The opener (11 GCDs)

Pre-cast Serrated Bolt (lands as combat starts) → Incendiary Round → Mag Bolt (the *only*
Mag Bolt in the whole parse that costs energy — no Ionic Accelerator buff exists yet) → Full
Auto across 2 GCDs (this is the **one correct use of Full Auto in the entire fight** — it
procs Ionic Accelerator during the one window where Charged Bolts would otherwise be a full
cast, since Blazing Celerity needs a Mag Bolt to have already landed) → Electro Net → off-GCD
Supercharged Cell → Assault Plastique → Explosive Round → Mag Bolt → Charged Bolts → Mag Bolt
→ first steady cycle begins.

## Where the drift sits

Serrated Bolt's handoff accounts for the majority of measured "drift" against ideal pacing:
median 1.503 s against a 1.370 s floor already demonstrated elsewhere in the same parse —
about 2.7 s total, roughly 52% of all net drift in the parse. It's the moment you have to read
Supercharge count, proc state, and energy simultaneously and decide the next two filler slots.
**Decide fillers 2 and 3 before casting Serrated Bolt, not after** — that's the actual drill
this ability is testing.

## Execution checklist for your own parse

- [ ] Cycle should map onto the same 10-GCD spine every time: Incendiary Round, F1, Charged
      Bolts, Serrated Bolt, F2, F3, Assault Plastique, Mag Bolt, Charged Bolts, Mag Bolt.
- [ ] Never use a 3rd Explosive Round in one cycle — check whether any cycle shows this.
- [ ] Target ≥2 Explosive Rounds per cycle whenever the proc supply allows it; verify no
      Hammer Shot was used while a fresh, unconsumed proc was sitting available.
- [ ] All 5 DoTs (Incendiary Round, Serrated Bolt, plus whatever else your build tracks)
      should sit at ~100% uptime with zero gaps.
- [ ] Every Charged Bolts should be immediately followed by a free (Ionic-Accelerator-buffed)
      Mag Bolt — flag any Mag Bolt that shows an energy spend.
- [ ] Electro Net should only ever take the Hammer Shot slot, never displace an Explosive
      Round, and should land close to its true ~84.55s (alacrity-scaled) cooldown.
- [ ] Full Auto should appear once, in the opener, and nowhere else.
- [ ] Check your Serrated Bolt handoff timing — the gap from the previous GCD to Serrated
      Bolt's cast is the single biggest lever on overall drift for this spec.
- [ ] Confirm your own alacrity/GCD by cross-checking Incendiary Round duration, Serrated Bolt
      duration, and Assault Plastique cooldown against each other — they should all imply the
      same GCD to within ~0.005s.

## Open questions (not fully confirmed)

- Recharge Cells' true cooldown is inferred from a single observed interval in the reference
  parse and hasn't been independently confirmed — worth checking directly in-game.
- Energy amounts never appear in either log (only Spend/Restore *events*, no quantities), so
  no energy-economy simulation was possible — the Charged-Bolts-vs-Hammer-Shot filler choice
  is inferred from the DPS/Supercharge story, not directly verified against an energy budget.
- One stretch of the reference parse (cycles 9–14) sags to Supercharge totals of 10, 9, 10, 7,
  9, 9 — plausibly tied to Recharge Cells timing, but not conclusively proven.
