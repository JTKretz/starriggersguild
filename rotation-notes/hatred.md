# Hatred (Sith Assassin) — Rotation Reference

Built from two independent StarParse detail logs (two different players), each against a
10,000,000 HP Operations Training Dummy.
Parse 2 (reference): 2,348 lines, EnterCombat 0 to a real Death event at 263.162 s, 38,022 DPS.
Parse 1: 2,325 lines, EnterCombat 0 to a real Death event at 272.303 s, 36,814 DPS.

## Core thesis

Both parses share the identical **Eradicate 4/8/12 clock** and the same fixed Creeping Terror
+ Discharge open. The DPS gap between them isn't just variance: parse 2 opens from stealth and
re-enters it three more times to trigger **Shadowcraft**, landing four 6-second windows of
guaranteed critical hits that parse 1 never touches at all — a real, repeatable technique, not
favorable rolls.

## Macro-cycle structure

Twelve GCD slots per lap, anchored on Creeping Terror. **Six slots are fixed, identical every
single lap in both parses: Creeping Terror (1), Discharge (2), Eradicate (4), Eradicate (8),
Death Field (10 in parse 2 / 5 in parse 1 — see below), Eradicate (12).** The other six are
filled by a strict priority order (below), and most of the grid's ability-choice variance
comes from just one or two of those six flexible slots.

Median lap length: 17.09 s (parse 2, 14 clean laps), 17.25 s (parse 1, 15 laps).

### Eradicate runs on its own clock — not the 9-second Raze cap

The ability guide frames Eradicate's availability around Raze (melee damage against a
Discharge'd target grants Raze, which finishes Eradicate's cooldown and makes the next cast
free; capped at once every 9 seconds). The log shows something tighter and purely mechanical:

- Eradicate lands every **5.49–6.51 s** in parse 1, **4.54–6.10 s** in parse 2 — median 5.69 s
  / 5.63 s. This is *faster* than the stated Raze cap, and far too tight and regular to be
  proc-gated.
- **Eradicate lands on cycle slots 4, 8, and 12 of every single clean lap, in both parses, with
  zero exceptions** (15/15 parse 1, 14/14 parse 2) — even across two fights with completely
  different openers and one running four extra mid-fight burst windows layered on top.
- Raze's real job is Force economy, not availability: 31 of 48 casts were free in parse 1, 31
  of 46 in parse 2 (~65%). The other third pays full Force cost but still lands on the same
  fixed clock.
- A community-listed cooldown value of 24 s for Eradicate is directly contradicted by this —
  a tight ~5.6 s cadence sustained for an entire fight is not possible under a 24 s cooldown
  even with generous proc resets. Treat that number as unreliable; trust the direct
  measurement instead.

**If your own parse shows Eradicate drifting off slots 4/8/12, or landing on an inconsistent
cadence, that's a real execution gap worth chasing — this is one of the most rigid facts found
in either log.**

## Filler priority (the six flexible slots)

Verified against the character's own ability guide plus community-sourced tooltip data,
cross-checked against the log wherever the two disagreed:

| # | Filler | Cost / cooldown | Condition |
|---|---|---|---|
| 1 | Assassinate | 20 Force, 6 s CD | Bloodletting is up, or target is below 30% health. Take it the moment it's available — a proc left sitting is priority lost, not banked. |
| 2 | Leeching Strike | 13–25 Force (−4 per active DoT, min 13 with all three up), ~12 s CD | The default filler, used on cooldown. Its own ~12 s cooldown doesn't divide evenly into the ~17 s macro-cycle, which is why it isn't always up for both of a lap's usual two preferred slots. |
| 3 | Thrash | 20 Force, no CD | Fills in whenever Leeching Strike is still on cooldown and Force allows. |
| 4 | Saber Strike | Free, restores 3 Force total (3 hits × 1 each) | Force below roughly 45–50. The rebuild step, not a real filler choice. |

**Why the "Thrash instead of Leeching Strike" cases happen:** this was originally guessed to
be a Force-economy tradeoff. It is not. Leeching Strike has a genuine ~12-second base
cooldown (confirmed: parse 1's tightest recurring Leeching-Strike-to-Leeching-Strike gap
clusters at 11.1–11.6 s, matching a 12 s base reduced by modest alacrity almost exactly). That
cooldown doesn't divide evenly into the ~17 s macro-cycle, so on some laps it simply isn't
back up yet for the slot that would normally want it — Thrash fills the gap instead. **This is
a cooldown/period mismatch, the same category of effect as Assassinate's below.**

Parse 2 additionally shows several instances of Leeching Strike reused after only ~1.4 s (a
single GCD) — impossible under a flat 12 s cooldown. This is consistent with a
crit-triggers-cooldown-reset tactical that parse 1's character doesn't have; a real gear/build
difference between the two logs, similar in spirit to the Shadowcraft gap. It was not possible
to cleanly prove the exact proc rule from log timing alone (crit-to-next-gap correlation was
suggestive but not deterministic), so treat the *existence* of extra rapid-reuse instances as
confirmed, the *exact trigger condition* as inferred.

### Should Leeching Strike ever be delayed?

**Generally, no — use it on cooldown.** The ability guide is explicit that delaying it to
build a third DoT stack isn't worth it: the marginal damage gain is smaller than the cost of
holding a GCD, and during burst windows a held GCD can cost you a whole extra use later.

**One real exception: a Shadowcraft window.** Since Leeching Strike heals for as much as it
damages, landing it inside a guaranteed-crit window doubles *both* halves at once. Directly
confirmed in parse 2: all four Shadowcraft windows catch at least one Leeching Strike cast,
three of the four catch two.

## Correction: two mechanics missed on the first pass, confirmed in both parses

Re-checking the original single-parse build against a second log surfaced two real effects
that had been missed entirely — both present in near-identical form in parse 1 too, meaning
they were always part of the core kit, not something parse 2's player does differently.

- **Pervasive Death → Penetrating Death.** Every Death Field cast grants a stack lasting
  almost exactly 10.2 s, confirmed 16/16 in both parses. Because Death Field's own cadence is
  close to 17 s, this leaves a recurring ~6.7–7.4 s gap each cycle where the buff is *not*
  active — unlike Exploitive Strikes/Languishing Lashes below, this one does **not** maintain
  full uptime.
- **"Thrashing Terror."** A real, sizeable damage source that doesn't appear under any named
  rotational ability in the guide's ability list — 101 hits in parse 1, 98 in parse 2, each
  dealing 11,000–14,000 internal damage, roughly **10% of total damage in both parses**. If
  you're building your own damage breakdown and something is unaccounted for, check for a
  similarly-named "bonus tick" source before assuming it's an attribution bug.

## Correction: two "always up" procs needed exactly one trigger each

Exploitive Strikes and Languishing Lashes are both described as procs that "shouldn't ever
fall off" once melee damage is flowing. The log shows why that's not a simplification: each
one applies **exactly once**, right at the start of the fight, and is never removed or
reapplied again for the rest of a 260-plus-second fight. If your own parse shows either of
these being reapplied mid-fight, that likely means a real gap occurred (you stopped meleeing
long enough for it to fall off), not that the ability naturally cycles.

## The GCD is flat, always

Median GCD **1.403 s (parse 2) / 1.405 s (parse 1)** — no cooldown or proc in either parse
compresses it, including Shadowcraft (which buffs crit chance, not speed). If you measure a
tighter GCD floor on your own Hatred parse, look for a cause other than this spec's core kit;
nothing here produces a second GCD state the way some other specs' resource cooldowns do.

## The real DPS-gap mechanic: four guaranteed-crit windows

Parse 2 re-enters stealth four times mid-fight — Force Cloak to vanish, then Phantom Stride
back onto the target — specifically to trigger Shadowcraft ("+100% critical chance for 6
seconds" per the ability guide). Parse 1 never does this once.

| Window | Duration | Crit rate inside | Effective DPS |
|---|---|---|---|
| 7.14 – 13.22 s | 6.07 s | 100% | 55,245 |
| 19.12 – 25.12 s | 6.00 s | 100% | 55,472 |
| 121.76 – 127.85 s | 6.09 s | 100% | 61,337 |
| 224.42 – 230.52 s | 6.10 s | 100% | 66,333 |

**83 of 83 damage instances inside the four windows crit — 100%.** Outside the windows, the
baseline crit rate is a still-healthy 72.3% (561 of 776). The four windows total only 24.3 s
(9.2% of the fight) but run at 1.5–1.75× the fight's average DPS. Each window opens with the
same burst sequence: Phantom Stride → Assassinate immediately (Bloodletting is always already
up by the time the player re-engages) → Eradicate → Leeching Strike — a deliberately queued
sequence, not a coincidence of normal priority.

**If you want to add this technique to your own play, the checklist is: vanish, teleport back
in, and have Assassinate/Bloodletting, Eradicate, and Leeching Strike all ready to fire the
instant you land**, so nothing is wasted inside the short window.

## Below 30% health

Both parses show Assassinate's role change immediately and identically once the target
crosses 30%, despite completely different openers and burst techniques:

| Parse | Assassinate uses | Before 30% | After 30% |
|---|---|---|---|
| Parse 1 | 31 | 19 | 12 |
| Parse 2 | 30 | 19 | 11 |

**Why Assassinate shows up once some laps, twice others (above 30% only):** Assassinate's own
cooldown is short (median 5.6–5.7 s below 30%, same range as Eradicate's). Above 30% it can
only fire when Bloodletting is up, and Bloodletting runs on a *different* clock — a ~15 s
internal cooldown (measured 14.0–17.9 s between procs across both parses) plus a random delay
for its 30%-chance roll to land on a periodic tick after that cooldown clears. **A ~14–18 s
proc cycle doesn't divide evenly into a ~17 s macro-cycle** — some laps get exactly one window
where a proc is ready, others get none until late, then two clear close together. That
mismatch, not inconsistent play, is the entire reason the slot count swings between one and
two per lap above 30%. Below 30%, the mismatch disappears completely because Assassinate no
longer needs the proc at all.

The guide's alternative of using the Followthrough-style proc off Takedown-equivalent... (n/a
for this spec — see Marksmanship's note on the analogous Takedown/Followthrough choice, a
different spec's mechanic). For Hatred specifically: nothing analogous applies here beyond the
Assassinate/Bloodletting relationship above.

## Style difference: where Death Field sits in the lap

Parse 1 places Death Field right after the opening DoTs (slot 5). Parse 2 delays it all the
way to slot 10, right before the lap's third Eradicate. **Neither is more "correct"** — both
are internally 100% consistent within their own parse across every clean lap. One measurable
side effect: Recklessness (2 charges, used every lap in both parses, 16/16, fully consumed
with no waste in both) gets spent immediately in parse 1 (charge 1 → the very next GCD is
Death Field; charge 2 → the Eradicate three GCDs later), but sits unspent for 6–7 seconds in
parse 2 before Death Field's later slot consumes it. Both are safe — Recklessness's buff
duration comfortably covers the wait — but it's worth knowing this is a real scheduling choice,
not an error, if you see charges sitting for several seconds in your own parse.

## Execution checklist for your own parse

- [ ] Eradicate should land on lap slots 4, 8, and 12 every single time — check for drift
      here first; it's the most rigid fact in this whole kit.
- [ ] Creeping Terror and Discharge should be reapplied together at the start of every lap,
      with only small deliberate gaps (not clips) — check uptime is ~96%+ with brief,
      consistent gaps rather than early refreshes.
- [ ] Corrosive-Dart-style single-cast DoTs aside, check whether Exploitive Strikes /
      Languishing Lashes (or your build's equivalents) ever get reapplied mid-fight — if so,
      that indicates a real melee-uptime gap, not normal behavior.
- [ ] Leeching Strike should be used on cooldown essentially always, with the one deliberate
      exception of holding it a GCD to land inside a burst-crit window if your build has one.
- [ ] Below 30%, expect Assassinate roughly every ~5.6–5.7 s; above 30%, expect it gated by
      Bloodletting's own ~14–18 s proc cycle — don't expect a clean "twice per lap."
  If you have access to a stealth-reentry crit-window technique (Shadowcraft or equivalent),
      check that every window's opening sequence has your burst cooldowns ready to fire
      immediately — a wasted GCD inside a 6-second window is a real loss.
- [ ] Check for an unnamed "bonus tick" damage source worth ~10% of your total before assuming
      your own damage breakdown is fully attributed.

## Open questions (not fully confirmed)

- The exact trigger condition for Leeching Strike's parse-2-only rapid reuse (crit-based reset,
  presumably from a tactical) could not be cleanly proven from log timing alone.
- Death Field's and Creeping Terror's community-listed base cooldowns (15 s and 20 s
  respectively) are *not* contradicted by either log, unlike Eradicate's — but they also
  weren't independently re-derived from first principles here, only checked for consistency.
- Filler choice between Thrash and Saber Strike (when Leeching Strike isn't available) still
  can't be tied to an exact Force threshold, since neither log records Force amounts — only
  Spend/Restore *events* with no quantity.
