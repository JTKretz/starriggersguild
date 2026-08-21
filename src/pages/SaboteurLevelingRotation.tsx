/**
 * Saboteur — Leveling / Non-BiS Rotation
 * ---------------------------------------------------------------------------
 * Republic mirror of the Engineering Sniper leveling page — same guide
 * content and cross-references to the three-parse /saboteur findings,
 * ability names translated to their Gunslinger equivalents. This is NOT a
 * log-derived page like /saboteur. There is no combat log behind these
 * numbers — it's a priority-list rebuild of the same discipline for a
 * character with every ability unlocked but without the Energy Regulators
 * Legendary Implant that the /saboteur parses could quietly assume, since
 * none of those three parses ever ran short on Energy. Treat the specific
 * claims here as guide-sourced reference points to verify against your own
 * tooltips and play, not measured facts.
 * Ability icons reused from /public/icons/gunslinger.
 */

const CSS = `
.ar-root{
    --bg:#E9ECEF; --panel:#F8FAFB; --panel-2:#EFF3F5;
    --ink:#161B21; --ink-2:#495460; --ink-3:#79848F;
    --rule:#C7D0D7; --rule-2:#DCE3E8;
    --brass:#8E5C0C; --ap-f:#8A5A0E; --mb-f:#A2301B; --cb-f:#1C5A78;
    --dot-f:#673A8C; --er-f:#1C6850; --hs-f:#5A6570; --en-f:#2F3F8B;
    --good:#1C6850; --bad:#A2301B;
    --font-display:"Bahnschrift SemiCondensed","Bahnschrift","DIN Alternate","Oswald","Arial Narrow",sans-serif;
    --font-body:"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif;
    --font-data:"Cascadia Mono",Consolas,ui-monospace,monospace;
  }
  @media (prefers-color-scheme:dark){.ar-root{
    --bg:#0F141A; --panel:#161D24; --panel-2:#1C242C;
    --ink:#DFE6EC; --ink-2:#97A5B1; --ink-3:#69757F;
    --rule:#293238; --rule-2:#222A31;
    --brass:#E0A343; --ap-f:#E8B15A; --mb-f:#F0836A; --cb-f:#6FB6D6;
    --dot-f:#B892DE; --er-f:#5FC49C; --hs-f:#97A5B1; --en-f:#93A2E8;
    --good:#5FC49C; --bad:#F0836A;}}
  .ar-root[data-theme="dark"]{
    --bg:#0F141A; --panel:#161D24; --panel-2:#1C242C;
    --ink:#DFE6EC; --ink-2:#97A5B1; --ink-3:#69757F;
    --rule:#293238; --rule-2:#222A31;
    --brass:#E0A343; --ap-f:#E8B15A; --mb-f:#F0836A; --cb-f:#6FB6D6;
    --dot-f:#B892DE; --er-f:#5FC49C; --hs-f:#97A5B1; --en-f:#93A2E8;
    --good:#5FC49C; --bad:#F0836A;}
  .ar-root[data-theme="light"]{
    --bg:#E9ECEF; --panel:#F8FAFB; --panel-2:#EFF3F5;
    --ink:#161B21; --ink-2:#495460; --ink-3:#79848F;
    --rule:#C7D0D7; --rule-2:#DCE3E8;
    --brass:#8E5C0C; --ap-f:#8A5A0E; --mb-f:#A2301B; --cb-f:#1C5A78;
    --dot-f:#673A8C; --er-f:#1C6850; --hs-f:#5A6570; --en-f:#2F3F8B;
    --good:#1C6850; --bad:#A2301B;}

  .ar-root{background:var(--bg);color:var(--ink);min-height:100vh;box-sizing:border-box;font-family:var(--font-body);font-size:15.5px;
    line-height:1.6;margin:0;padding:0 20px 100px;-webkit-font-smoothing:antialiased}
  .wrap{max-width:1140px;margin:0 auto}

  /* ---------- icon chips + tooltip ---------- */
  .ic{position:relative;display:block;width:100%;max-width:32px;aspect-ratio:1;margin:0 auto;
      border-radius:5px;box-shadow:0 0 0 1px color-mix(in srgb,var(--ink) 22%,transparent)}
  .ic svg{display:block;width:100%;height:100%}
  .ic.nil{box-shadow:inset 0 0 0 1px var(--ink-3);opacity:.3}
  .ic[data-n]::after{content:attr(data-n);position:absolute;top:calc(100% + 7px);left:50%;
    transform:translateX(-50%);background:var(--ink);color:var(--bg);
    font-family:var(--font-display);font-size:10.5px;letter-spacing:.07em;text-transform:uppercase;
    padding:4px 9px;border-radius:2px;white-space:nowrap;opacity:0;pointer-events:none;
    transition:opacity .12s ease;z-index:60}
  .ic[data-n]:hover::after,.ic[data-n]:focus-visible::after{opacity:1}
  @media (prefers-reduced-motion:reduce){.ic[data-n]::after{transition:none}}

  /* ---------- masthead ---------- */
  .mast{padding:48px 0 24px;border-bottom:2px solid var(--ink)}
  .eyebrow{font-family:var(--font-display);text-transform:uppercase;letter-spacing:.16em;
    font-size:12.5px;color:var(--brass);margin:0 0 14px}
  h1{font-family:var(--font-display);font-weight:600;font-size:clamp(32px,5.6vw,54px);
    line-height:.98;margin:0 0 16px;text-wrap:balance;text-transform:uppercase}
  .standfirst{font-size:17.5px;color:var(--ink-2);max-width:62ch;margin:0;text-wrap:pretty}
  .standfirst strong{color:var(--ink);font-weight:600}
  .facts{display:flex;flex-wrap:wrap;gap:0;margin:26px 0 0;border-top:1px solid var(--rule)}
  .fact{flex:1 1 122px;padding:13px 18px 13px 0}
  .fact dt{font-family:var(--font-display);text-transform:uppercase;letter-spacing:.11em;
    font-size:11px;color:var(--ink-3);margin:0 0 3px}
  .fact dd{font-family:var(--font-data);font-size:19px;font-variant-numeric:tabular-nums;margin:0}
  .fact dd small{font-size:12px;color:var(--ink-3)}
  .fact dd .was{font-size:11.5px;color:var(--ink-3);display:block;line-height:1.5}

  section{margin:58px 0 0}
  h2{font-family:var(--font-display);text-transform:uppercase;letter-spacing:.07em;
    font-size:24px;font-weight:600;margin:0 0 8px;display:flex;align-items:baseline;gap:12px}
  h2 .num{font-family:var(--font-data);font-size:13px;color:var(--brass);letter-spacing:0}
  .lede{color:var(--ink-2);max-width:66ch;margin:0 0 24px}
  h3{font-family:var(--font-display);text-transform:uppercase;letter-spacing:.09em;
    font-size:14px;font-weight:600;color:var(--ink-2);margin:30px 0 12px}
  p{max-width:66ch}

  /* ---------- icon key ---------- */
  .keygrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(216px,1fr));gap:14px 22px;
    background:var(--panel);border:1px solid var(--rule);padding:20px 22px}
  .keyrow{display:flex;align-items:center;gap:12px}
  .keyrow .ic{max-width:36px;flex:0 0 36px;margin:0}
  .keyrow b{display:block;font-size:13.5px;font-weight:600;line-height:1.3}
  .keyrow span{display:block;font-size:11.5px;color:var(--ink-3);line-height:1.35}

  /* ---------- priority / sequence list ---------- */
  .plist{list-style:none;margin:0;padding:0;background:var(--panel);border:1px solid var(--rule)}
  .prow{display:grid;grid-template-columns:40px 44px 1fr;gap:16px;align-items:center;
    padding:14px 20px;border-bottom:1px solid var(--rule-2)}
  .prow:last-child{border-bottom:0}
  .prow .n{font-family:var(--font-data);font-size:15px;color:var(--brass);text-align:center}
  .prow .ic{max-width:40px}
  .prow b{display:block;font-size:14.5px;font-weight:600}
  .prow span{display:block;font-size:13px;color:var(--ink-2);line-height:1.4;margin-top:2px}

  /* ---------- chunk cards ---------- */
  .chunks{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px}
  .chunk{background:var(--panel);border:1px solid var(--rule);padding:18px 20px}
  .chunk h4{font-family:var(--font-display);text-transform:uppercase;letter-spacing:.09em;
    font-size:12.5px;margin:0 0 12px;color:var(--brass)}
  .chunk ol{list-style:none;margin:0;padding:0}
  .chunk li{display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid var(--rule-2)}
  .chunk li:last-child{border-bottom:0}
  .chunk .ic{max-width:32px;flex:0 0 32px}
  .chunk-connector{display:flex;align-items:center;justify-content:center;gap:10px;
    font-family:var(--font-display);text-transform:uppercase;letter-spacing:.09em;
    font-size:12px;color:var(--ink-3);margin:14px 0}
  .chunk-connector .ic{max-width:28px;flex:0 0 28px}

  /* ---------- loop-at-a-glance card ---------- */
  .loopcard{background:var(--panel);border:1px solid var(--rule);padding:20px 22px}
  .loop{display:flex;flex-wrap:wrap;align-items:center;gap:8px 6px}
  .loop .step{display:flex;flex-direction:column;align-items:center;gap:5px;width:46px}
  .loop .step .ic{max-width:40px}
  .loop .step small{font-family:var(--font-data);font-size:9px;letter-spacing:.03em;
    color:var(--ink-3);text-align:center;line-height:1.2;text-transform:uppercase}
  .loop .arrow{color:var(--ink-3);font-size:15px;flex:0 0 auto}
  .loop .stack{display:flex;flex-direction:column;gap:3px}
  .loop .stack .ic{max-width:30px;position:relative}
  .loop .stack .ic[data-p]::before{content:attr(data-p);position:absolute;top:-4px;left:-4px;
    background:var(--brass);color:var(--bg);font-family:var(--font-data);font-size:8px;
    line-height:1;padding:1.5px 3px;border-radius:6px;z-index:2}
  .loop .stack.fallback-stack{gap:4px}
  .loop .stack.fallback-stack .ic:first-child{max-width:38px}
  .loop .stack .ic.fallback{max-width:19px;opacity:.5}

  .call{border-left:3px solid var(--brass);background:var(--panel);padding:16px 20px;margin:24px 0}
  .call h4{font-family:var(--font-display);text-transform:uppercase;letter-spacing:.09em;
    font-size:12.5px;margin:0 0 7px;color:var(--brass)}
  .call p{margin:0 0 8px} .call p:last-child{margin-bottom:0}
  .call.flag{border-left-color:var(--bad)} .call.flag h4{color:var(--bad)}
  .call.fix{border-left-color:var(--good)} .call.fix h4{color:var(--good)}
  code,.mono{font-family:var(--font-data);font-size:.9em;background:var(--panel-2);padding:1px 5px;border-radius:2px}
  ul{max-width:66ch;padding-left:20px} li{margin-bottom:7px}
  .tw{overflow-x:auto}
  table{border-collapse:collapse;width:100%;min-width:500px;font-size:14px}
  th,td{text-align:left;padding:9px 12px 9px 0;border-bottom:1px solid var(--rule-2);vertical-align:middle}
  th{font-family:var(--font-display);text-transform:uppercase;letter-spacing:.09em;
    font-size:10.5px;color:var(--ink-3);border-bottom:1px solid var(--rule)}
  td.n,th.n{text-align:right;font-family:var(--font-data);font-variant-numeric:tabular-nums;padding-right:16px}
  tbody tr:last-child td{border-bottom:0}
  footer{margin-top:52px;padding-top:18px;border-top:1px solid var(--rule);font-size:12.5px;color:var(--ink-3)}
  footer p{max-width:78ch}
`;

export default function SaboteurLevelingRotation({ theme }: { theme?: 'dark' | 'light' }) {
  return (
    <div className="ar-root" data-theme={theme}>
      <style>{CSS}</style>
      <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute', overflow: 'hidden' }}><defs>
      <clipPath id="ico-clip7"><rect width="50" height="50" rx="7" ry="7"/></clipPath>
      <symbol id="m-sc" viewBox="0 0 50 50"><image href="/icons/gunslinger/shock-charge.webp" width="50" height="50" clipPath="url(#ico-clip7)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="m-ss" viewBox="0 0 50 50"><image href="/icons/gunslinger/speed-shot.webp" width="50" height="50" clipPath="url(#ico-clip7)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="m-ig" viewBox="0 0 50 50"><image href="/icons/gunslinger/incendiary-grenade.png" width="50" height="50" clipPath="url(#ico-clip7)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="m-ec" viewBox="0 0 50 50"><image href="/icons/gunslinger/explosive-charge.webp" width="50" height="50" clipPath="url(#ico-clip7)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="m-sb" viewBox="0 0 50 50"><image href="/icons/gunslinger/sabotage.webp" width="50" height="50" clipPath="url(#ico-clip7)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="m-vs" viewBox="0 0 50 50"><image href="/icons/gunslinger/vital-shot.webp" width="50" height="50" clipPath="url(#ico-clip7)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="m-cb" viewBox="0 0 50 50"><image href="/icons/gunslinger/charged-burst.png" width="50" height="50" clipPath="url(#ico-clip7)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="m-tg" viewBox="0 0 50 50"><image href="/icons/gunslinger/thermal-grenade.webp" width="50" height="50" clipPath="url(#ico-clip7)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="m-br" viewBox="0 0 50 50"><image href="/icons/gunslinger/bombing-run.webp" width="50" height="50" clipPath="url(#ico-clip7)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="m-th" viewBox="0 0 50 50"><image href="/icons/gunslinger/target-hack.webp" width="50" height="50" clipPath="url(#ico-clip7)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="m-adr" viewBox="0 0 50 50"><image href="/icons/gunslinger/adrenal.webp" width="50" height="50" clipPath="url(#ico-clip7)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="m-qd" viewBox="0 0 50 50"><image href="/icons/gunslinger/quickdraw.webp" width="50" height="50" clipPath="url(#ico-clip7)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="m-sg" viewBox="0 0 50 50"><image href="/icons/gunslinger/sweeping-gunfire.webp" width="50" height="50" clipPath="url(#ico-clip7)" preserveAspectRatio="xMidYMid slice"/></symbol>
      </defs></svg>

      <div className="wrap">

      <div className="mast">
        <p className="eyebrow">Gunslinger / Saboteur · leveling &amp; non-BiS · priority list, not a measured parse</p>
        <h1>One 18-second cycle, ten actions, no drift</h1>
        <p className="standfirst">The <code>/saboteur</code> page was built from three parses that all ran the same 7-fixed/3-flex, ten-slot cycle without exception — every flex slot got filled, every cycle, because none of those three players ever ran short on Energy. That's not a coincidence of skill; it's a specific piece of gear. Without the <strong>Energy Regulators Legendary Implant</strong> (which regenerates Energy while in cover), the normal rotation is not sustainable — you will run dry. This page is the guide-sourced fallback: a repeating 12-GCD cycle, built directly from your abilities' real cooldowns, that stays Energy-solvent using ability-tree picks instead of that implant.</p>
        <dl className="facts">
          <div className="fact"><dt>Energy Regulators</dt><dd>not equipped<small>yet</small><span className="was">the gear the /saboteur shape quietly assumes</span></dd></div>
          <div className="fact"><dt>Repeated Shocks</dt><dd>not equipped<small>yet</small><span className="was">the tactical that would auto-refresh Shock Charge</span></dd></div>
          <div className="fact"><dt>Structure</dt><dd>1 cycle<small>× 12 GCD</small><span className="was">18s at base GCD, repeats with no drift</span></dd></div>
          <div className="fact"><dt>Source</dt><dd>guide<small>+ your tooltips</small><span className="was">no combat log behind this page</span></dd></div>
        </dl>
      </div>

      {/* ===== LOOP AT A GLANCE ===== */}
      <section style={{ marginTop: '34px' }}>
        <h3 style={{ marginTop: '0' }}>One repeating cycle, at a glance</h3>
        <p className="lede" style={{ marginBottom: '18px' }}>Ten actions, 12 GCDs, 18 seconds at base GCD — and this is the guide's own sequence, not one derived from cooldowns alone. Reading forward from its opener until the pattern repeats gives exactly this order: Explosive Charge alone into Speed Shot, Sabotage paired with Vital Shot, a second Speed Shot, then one filler slot before the loop closes. That filler was Charged Burst in the guide's version, written for a character with the Repeated Shocks tactical, where Speed Shot keeps Shock Charge refreshed for free. Without that tactical, Shock Charge needs an explicit recast every loop — and this is exactly where it lands: applied at step 9, it's still up through the following loop's Sabotage at step 4, six GCDs later. The other filler slot (step 5) still defaults to Thermal Grenade, with Charged Burst as a real but Energy-risky fallback, and Bombing Run replacing either whenever it's up. Unlike the rest of this site, the timing below is extrapolated from ability cooldowns, not measured from a combat log.</p>
        <div className="loopcard">
          <div className="loop">
            <div className="step"><span className="ic" data-n="Explosive Charge" role="img" aria-label="Explosive Charge"><svg viewBox="0 0 50 50"><use href="#m-ec" /></svg></span><small>fixed</small></div>
            <span className="arrow">→</span>
            <div className="step"><span className="ic" data-n="Speed Shot — 2 GCD channel" role="img" aria-label="Speed Shot"><svg viewBox="0 0 50 50"><use href="#m-ss" /></svg></span><small>2 GCD</small></div>
            <span className="arrow">→</span>
            <div className="step"><span className="ic" data-n="Incendiary Grenade" role="img" aria-label="Incendiary Grenade"><svg viewBox="0 0 50 50"><use href="#m-ig" /></svg></span><small>fixed</small></div>
            <span className="arrow">→</span>
            <div className="step"><span className="ic" data-n="Sabotage" role="img" aria-label="Sabotage"><svg viewBox="0 0 50 50"><use href="#m-sb" /></svg></span><small>fixed</small></div>
            <span className="arrow">→</span>
            <div className="step">
              <div className="stack fallback-stack">
                <span className="ic" data-n="Thermal Grenade — default" role="img" aria-label="Thermal Grenade"><svg viewBox="0 0 50 50"><use href="#m-tg" /></svg></span>
                <span className="ic fallback" data-n="Charged Burst — risky fallback, costs real Energy" role="img" aria-label="Charged Burst"><svg viewBox="0 0 50 50"><use href="#m-cb" /></svg></span>
              </div>
              <small>filler</small>
            </div>
            <span className="arrow">→</span>
            <div className="step"><span className="ic" data-n="Vital Shot" role="img" aria-label="Vital Shot"><svg viewBox="0 0 50 50"><use href="#m-vs" /></svg></span><small>fixed</small></div>
            <span className="arrow">→</span>
            <div className="step"><span className="ic" data-n="Speed Shot — 2 GCD channel" role="img" aria-label="Speed Shot"><svg viewBox="0 0 50 50"><use href="#m-ss" /></svg></span><small>2 GCD</small></div>
            <span className="arrow">→</span>
            <div className="step"><span className="ic" data-n="Incendiary Grenade" role="img" aria-label="Incendiary Grenade"><svg viewBox="0 0 50 50"><use href="#m-ig" /></svg></span><small>fixed</small></div>
            <span className="arrow">→</span>
            <div className="step"><span className="ic" data-n="Shock Charge" role="img" aria-label="Shock Charge"><svg viewBox="0 0 50 50"><use href="#m-sc" /></svg></span><small>fixed</small></div>
            <span className="arrow">→</span>
            <div className="step">
              <div className="stack fallback-stack">
                <span className="ic" data-n="Thermal Grenade — default" role="img" aria-label="Thermal Grenade"><svg viewBox="0 0 50 50"><use href="#m-tg" /></svg></span>
                <span className="ic fallback" data-n="Charged Burst — risky fallback, costs real Energy" role="img" aria-label="Charged Burst"><svg viewBox="0 0 50 50"><use href="#m-cb" /></svg></span>
              </div>
              <small>filler</small>
            </div>
            <span className="arrow">↻</span>
          </div>
          <p style={{ marginTop: '18px', marginBottom: '0', fontSize: '13px', color: 'var(--ink-2)' }}>
            <b>10 actions · 12 GCD</b> (the two Speed Shot channels count double, eight single-GCD actions otherwise) — at a base 1.5 s GCD with no alacrity, one cycle runs exactly <b>18 s</b>, and repeats with no drift: Speed Shot and Explosive Charge both fall due right as their slot comes back around. This is a different shape than the endgame page's measured 10-slot, 15.4–16.2 s cycle — that page's alacrity compresses timings this page doesn't assume. This figure is derived from ability cooldowns, not measured — see section 05 to verify against your own tooltips.
          </p>
        </div>
      </section>

      {/* ===== KEY ===== */}
      <section>
        <h3 style={{ marginTop: '0' }}>Ability key</h3>
        <div className="keygrid">
        <div className="keyrow"><span className="ic" data-n="Shock Charge" role="img" aria-label="Shock Charge"><svg viewBox="0 0 50 50"><use href="#m-sc"/></svg></span><div><b>Shock Charge</b><span>10-GCD (15s) duration, no cooldown of its own · recast once a cycle at step 9 — the guide's own Charged Burst slot, repurposed without Repeated Shocks</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Speed Shot" role="img" aria-label="Speed Shot"><svg viewBox="0 0 50 50"><use href="#m-ss"/></svg></span><div><b>Speed Shot</b><span>6-GCD (9s) cooldown · twice a cycle, exactly on cooldown both times</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Incendiary Grenade" role="img" aria-label="Incendiary Grenade"><svg viewBox="0 0 50 50"><use href="#m-ig"/></svg></span><div><b>Incendiary Grenade</b><span>Always immediately after Speed Shot, refreshing its own 6-GCD buff</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Explosive Charge" role="img" aria-label="Explosive Charge"><svg viewBox="0 0 50 50"><use href="#m-ec"/></svg></span><div><b>Explosive Charge</b><span>12-GCD (18s) cooldown · opens the cycle at step 1, exactly on cooldown — the ability this cycle length is built around</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Sabotage" role="img" aria-label="Sabotage"><svg viewBox="0 0 50 50"><use href="#m-sb"/></svg></span><div><b>Sabotage</b><span>10-GCD (15s) cooldown · needs Shock Charge up (applied at step 9 the loop before), fires once a cycle with ~2 GCD of cooldown banked each time</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Vital Shot" role="img" aria-label="Vital Shot"><svg viewBox="0 0 50 50"><use href="#m-vs"/></svg></span><div><b>Vital Shot</b><span>10-GCD (15s) duration, no cooldown of its own · recast once a cycle, right after Sabotage — the guide's own pairing</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Charged Burst" role="img" aria-label="Charged Burst"><svg viewBox="0 0 50 50"><use href="#m-cb"/></svg></span><div><b>Charged Burst</b><span>Filler fallback · risky here, costs real Energy you may not have — also the guide's own step-9 slot if you do have Repeated Shocks</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Thermal Grenade" role="img" aria-label="Thermal Grenade"><svg viewBox="0 0 50 50"><use href="#m-tg"/></svg></span><div><b>Thermal Grenade</b><span>Default filler, twice a cycle · the Energy-management ability now, not just a filler — see section 03</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Bombing Run" role="img" aria-label="Bombing Run"><svg viewBox="0 0 50 50"><use href="#m-br"/></svg></span><div><b>Bombing Run</b><span>Replaces either filler slot whenever it's up — beats both Thermal Grenade and Charged Burst</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Target Hack" role="img" aria-label="Target Hack"><svg viewBox="0 0 50 50"><use href="#m-th"/></svg></span><div><b>Target Hack</b><span>Off-GCD · also grants Sequence Break, the Energy-regen buff this build runs on</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Adrenal" role="img" aria-label="Adrenal"><svg viewBox="0 0 50 50"><use href="#m-adr"/></svg></span><div><b>Adrenal</b><span>Off-GCD burst · opener only here, after Shock Charge lands</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Sweeping Gunfire" role="img" aria-label="Sweeping Gunfire"><svg viewBox="0 0 50 50"><use href="#m-sg"/></svg></span><div><b>Sweeping Gunfire</b><span>AoE channel · expensive, only for the AoE rotation in section 04</span></div></div>
      </div>
      </section>

      {/* ===== 01 WHY IT BREAKS ===== */}
      <section>
        <h2><span className="num">01</span> Why the endgame page's shape doesn't transfer</h2>
        <p className="lede">The <code>/saboteur</code> analysis found the same ten-slot, 7-fixed/3-flex cycle in all three parses, with zero exceptions across 46 combined steady-state cycles — every flex slot filled, lap after lap. That page's whole framing depends on Energy never being a limiting factor.</p>
        <p>Without Energy Regulators, it is. The guide is explicit about this: this build "does not offer enough DPS to be competitive with the Sustained DPS build, but is the only way to do sustained DPS before you get the Energy Regulators Legendary Implant, because you do not generate enough Energy to do the normal rotation without this build or that Implant." The fix on offer isn't a gear swap you can fake — it's a different ability-tree build (Hothead, generating roughly 1 Energy per second while Sequence Break is active) plus deliberately skipping fillers you'd otherwise always take.</p>

        <div className="call flag">
          <h4>Same cooldowns, a simpler shape</h4>
          <p>The /saboteur parses' 10-slot cycle nests a 7-fixed/3-flex pattern inside real alacrity, timed to run 15.4–16.2 s. This page's cycle is built from the same core cooldowns — Speed Shot at 6 GCD, Sabotage at 10 GCD, Explosive Charge at 12 GCD — but at base GCD (no alacrity assumed), so it settles into a fixed 12-GCD/18 s cycle that repeats identically forever instead of a variable flex-slot pattern. It's simpler to execute at a small cost: Sabotage fires with cooldown to spare each time, and Shock Charge / Vital Shot each go a few seconds without uptime before their slot comes back around. See the loop diagram above and section 03 for the full breakdown.</p>
        </div>

        <div className="call flag">
          <h4>A second gear gap: no Repeated Shocks tactical</h4>
          <p>Shock Charge and Sabotage are gated together — Sabotage needs Shock Charge up to use at all. The Repeated Shocks tactical would refresh Shock Charge automatically off Speed Shot ticks, so a geared character barely thinks about it. Without that tactical — also a common gap while leveling — Shock Charge simply runs its flat 10-GCD (15s) duration and drops on its own.</p>
          <p>That's why the cycle above prices in a dedicated Shock Charge recast every single lap — at step 9, the guide's own Charged Burst slot for a fully-tacticaled character. Without Repeated Shocks, that GCD goes to Shock Charge instead of Charged Burst's extra damage; it isn't an emergency fallback, it's a permanent one-GCD tax versus a fully-tacticaled rotation.</p>
        </div>
      </section>

      {/* ===== 02 OPENER ===== */}
      <section>
        <h2><span className="num">02</span> The opener</h2>
        <p className="lede">Nearly identical to the steady rotation below, just with your pre-casts and OCDs folded in. Skip the pre-cast Charged Burst if you can't actually get it off before combat starts — don't delay the real opener to force it in.</p>

        <ol className="plist" style={{ listStyle: 'none' }}>
          <li className="prow"><span className="n">1</span><span className="ic" data-n="Bombing Run (pre-cast)" role="img" aria-label="Bombing Run"><svg viewBox="0 0 50 50"><use href="#m-br"/></svg></span><div><b>Bombing Run</b><span>Pre-cast, lands as combat starts</span></div></li>
          <li className="prow"><span className="n">2</span><span className="ic" data-n="Charged Burst (pre-cast)" role="img" aria-label="Charged Burst"><svg viewBox="0 0 50 50"><use href="#m-cb"/></svg></span><div><b>Charged Burst</b><span>Pre-cast if you can land it before pull; skip otherwise</span></div></li>
          <li className="prow"><span className="n">3</span><span className="ic" data-n="Shock Charge" role="img" aria-label="Shock Charge"><svg viewBox="0 0 50 50"><use href="#m-sc"/></svg></span><div><b>Shock Charge</b><span>First real GCD of the fight</span></div></li>
          <li className="prow"><span className="n">4</span><span className="ic" data-n="Adrenal + Target Hack" role="img" aria-label="Adrenal and Target Hack"><svg viewBox="0 0 50 50"><use href="#m-adr"/></svg></span><div><b>Adrenal + Target Hack</b><span>Both off-GCD — pop them right after Shock Charge lands, not before, so you don't burn a GCD of their uptime on nothing</span></div></li>
          <li className="prow"><span className="n">5</span><span className="ic" data-n="Explosive Charge" role="img" aria-label="Explosive Charge"><svg viewBox="0 0 50 50"><use href="#m-ec"/></svg></span><div><b>Explosive Charge</b></div></li>
          <li className="prow"><span className="n">6</span><span className="ic" data-n="Speed Shot" role="img" aria-label="Speed Shot"><svg viewBox="0 0 50 50"><use href="#m-ss"/></svg></span><div><b>Speed Shot</b></div></li>
          <li className="prow"><span className="n">7</span><span className="ic" data-n="Incendiary Grenade" role="img" aria-label="Incendiary Grenade"><svg viewBox="0 0 50 50"><use href="#m-ig"/></svg></span><div><b>Incendiary Grenade</b></div></li>
          <li className="prow"><span className="n">8</span><span className="ic" data-n="Sabotage" role="img" aria-label="Sabotage"><svg viewBox="0 0 50 50"><use href="#m-sb"/></svg></span><div><b>Sabotage</b></div></li>
          <li className="prow"><span className="n">9</span><span className="ic" data-n="Thermal Grenade" role="img" aria-label="Thermal Grenade"><svg viewBox="0 0 50 50"><use href="#m-tg"/></svg></span><div><b>Thermal Grenade</b></div></li>
          <li className="prow"><span className="n">10</span><span className="ic" data-n="Vital Shot" role="img" aria-label="Vital Shot"><svg viewBox="0 0 50 50"><use href="#m-vs"/></svg></span><div><b>Vital Shot</b></div></li>
          <li className="prow"><span className="n">11</span><span className="ic" data-n="Speed Shot" role="img" aria-label="Speed Shot"><svg viewBox="0 0 50 50"><use href="#m-ss"/></svg></span><div><b>Speed Shot</b></div></li>
          <li className="prow"><span className="n">12</span><span className="ic" data-n="Incendiary Grenade" role="img" aria-label="Incendiary Grenade"><svg viewBox="0 0 50 50"><use href="#m-ig"/></svg></span><div><b>Incendiary Grenade</b></div></li>
          <li className="prow"><span className="n">13</span><span className="ic" data-n="Charged Burst" role="img" aria-label="Charged Burst"><svg viewBox="0 0 50 50"><use href="#m-cb"/></svg></span><div><b>Charged Burst</b></div></li>
          <li className="prow"><span className="n">14</span><span className="ic" data-n="Thermal Grenade" role="img" aria-label="Thermal Grenade"><svg viewBox="0 0 50 50"><use href="#m-tg"/></svg></span><div><b>Thermal Grenade</b></div></li>
          <li className="prow"><span className="n">15</span><span className="ic" data-n="Explosive Charge" role="img" aria-label="Explosive Charge"><svg viewBox="0 0 50 50"><use href="#m-ec"/></svg></span><div><b>Explosive Charge</b></div></li>
          <li className="prow"><span className="n">16</span><span className="ic" data-n="Speed Shot" role="img" aria-label="Speed Shot"><svg viewBox="0 0 50 50"><use href="#m-ss"/></svg></span><div><b>Speed Shot</b></div></li>
          <li className="prow"><span className="n">17</span><span className="ic" data-n="Incendiary Grenade" role="img" aria-label="Incendiary Grenade"><svg viewBox="0 0 50 50"><use href="#m-ig"/></svg></span><div><b>Incendiary Grenade</b><span>Steady 12-GCD cycle begins — section 03</span></div></li>
        </ol>
      </section>

      {/* ===== 03 THE ROTATION ===== */}
      <section>
        <h2><span className="num">03</span> The single-target rotation — one 12-GCD cycle</h2>
        <p className="lede">Ten actions, in the guide's own order — traced straight through from its opener (section 02) to where the pattern repeats, not derived from cooldowns alone. The guide's one filler slot (originally Charged Burst) is repurposed for Shock Charge's mandatory recast, since Speed Shot won't refresh it for you without Repeated Shocks. Every cooldown-gated ability still lands right as it comes off cooldown — that part checks out against the table above.</p>

        <ol className="plist" style={{ listStyle: 'none' }}>
          <li className="prow"><span className="n">1</span><span className="ic" data-n="Explosive Charge" role="img" aria-label="Explosive Charge"><svg viewBox="0 0 50 50"><use href="#m-ec"/></svg></span><div><b>Explosive Charge</b><span>12-GCD cooldown, lands exactly on time — the anchor the guide builds this loop around</span></div></li>
          <li className="prow"><span className="n">2</span><span className="ic" data-n="Speed Shot" role="img" aria-label="Speed Shot"><svg viewBox="0 0 50 50"><use href="#m-ss"/></svg></span><div><b>Speed Shot</b><span>2-GCD channel · 6-GCD cooldown, lands exactly on time</span></div></li>
          <li className="prow"><span className="n">3</span><span className="ic" data-n="Incendiary Grenade" role="img" aria-label="Incendiary Grenade"><svg viewBox="0 0 50 50"><use href="#m-ig"/></svg></span><div><b>Incendiary Grenade</b><span>Refreshes its 6-GCD buff right after the channel</span></div></li>
          <li className="prow"><span className="n">4</span><span className="ic" data-n="Sabotage" role="img" aria-label="Sabotage"><svg viewBox="0 0 50 50"><use href="#m-sb"/></svg></span><div><b>Sabotage</b><span>10-GCD cooldown, used once a cycle with 2 GCD banked · needs Shock Charge up, applied at step 9 the loop before</span></div></li>
          <li className="prow"><span className="n">5</span><span className="ic" data-n="Thermal Grenade" role="img" aria-label="Thermal Grenade"><svg viewBox="0 0 50 50"><use href="#m-tg"/></svg></span><div><b>Thermal Grenade</b><span>Filler — Charged Burst if you need the extra damage and can spend the Energy, Bombing Run if it's up</span></div></li>
          <li className="prow"><span className="n">6</span><span className="ic" data-n="Vital Shot" role="img" aria-label="Vital Shot"><svg viewBox="0 0 50 50"><use href="#m-vs"/></svg></span><div><b>Vital Shot</b><span>Paired right after Sabotage — the guide's own sequence</span></div></li>
          <li className="prow"><span className="n">7</span><span className="ic" data-n="Speed Shot" role="img" aria-label="Speed Shot"><svg viewBox="0 0 50 50"><use href="#m-ss"/></svg></span><div><b>Speed Shot</b><span>Second cast, exactly 6 GCD after the first</span></div></li>
          <li className="prow"><span className="n">8</span><span className="ic" data-n="Incendiary Grenade" role="img" aria-label="Incendiary Grenade"><svg viewBox="0 0 50 50"><use href="#m-ig"/></svg></span><div><b>Incendiary Grenade</b></div></li>
          <li className="prow"><span className="n">9</span><span className="ic" data-n="Shock Charge" role="img" aria-label="Shock Charge"><svg viewBox="0 0 50 50"><use href="#m-sc"/></svg></span><div><b>Shock Charge</b><span>Recast here — the guide's own Charged Burst slot. Stays up through step 4's Sabotage next loop, six GCD later</span></div></li>
          <li className="prow"><span className="n">10</span><span className="ic" data-n="Thermal Grenade" role="img" aria-label="Thermal Grenade"><svg viewBox="0 0 50 50"><use href="#m-tg"/></svg></span><div><b>Thermal Grenade</b><span>Filler, same rule as step 5 — then the cycle repeats at step 1</span></div></li>
        </ol>

        <div className="call">
          <h4>Two honest trade-offs for a cycle that never drifts</h4>
          <p>Locking this to a fixed 12-GCD shape costs a little: Sabotage (10-GCD cooldown) is used once a cycle with about 2 GCD of cooldown left on the table each time, and Shock Charge / Vital Shot (10-GCD durations) each go roughly 2 GCD — about 3 seconds — without uptime before their slot comes back around at step 9 or step 6. That's the price of a rotation you can run on autopilot instead of a tighter priority list that recovers that DPS but never repeats identically. If you'd rather squeeze that back out, the fix is a true priority system (use each cooldown the instant it's up, fill everything else with Thermal Grenade/Charged Burst) rather than this fixed cycle — worth revisiting once you're comfortable with the shape below.</p>
        </div>

        <div className="call flag">
          <h4>If the cycle gets knocked out of sync, Shock Charge jumps the queue</h4>
          <p>Movement, an interrupt, or a missed GCD can push you off the fixed 12-GCD shape. If that happens and Shock Charge is down, reapplying it is more important than finishing the cycle as written — Sabotage is dead weight without it. Skip whatever filler was queued to pay for the reapplication, then pick the cycle back up from wherever you land; don't stop DPSing to "reset" to step 1.</p>
        </div>

        <div className="call">
          <h4>The general principle: some DPS beats zero DPS</h4>
          <p>The guide is blunt about this: using any damaging ability is better than standing there deciding. If you mess up the cycle, don't stop to recover the "correct" sequence — just keep going. The only things that should ever stop your Saboteur rotation are fight mechanics that genuinely prevent damage, not aggro concerns or a desire to get back on script.</p>
        </div>
      </section>

      {/* ===== 04 AOE ===== */}
      <section>
        <h2><span className="num">04</span> AoE — same cycle shape, Sweeping Gunfire takes a slot's place</h2>
        <p className="lede">Sweeping Gunfire is expensive enough, and the rest of the AoE kit interdependent enough, that AoE still runs on the same 12-GCD-cycle structure as single target — a full Sweeping Gunfire channel just occupies one cycle's worth of slots on its own. Charged Burst and Vital Shot drop out entirely here; they're too expensive for what they add to AoE damage.</p>

        <div className="call">
          <h4>Sabotage's AoE has two prerequisites</h4>
          <p>It requires Shock Charge on the target to be usable at all, and a stack of Blazing Speed on that target for the AoE component specifically. In practice this means you need a higher-health primary target — a champion in a pack, or a designated kill priority — to get Sabotage's AoE and the Thermal Grenade proc that follows it.</p>
        </div>

        <p><b>If the primary target already has Shock Charge and Blazing Speed</b> (adds spawned next to a boss you're already DoTing): Bombing Run → Sabotage → Thermal Grenade / Shock Charge / a partial Sweeping Gunfire channel → Speed Shot → Incendiary Grenade → full Sweeping Gunfire channel → Speed Shot → Incendiary Grenade → Sabotage → Explosive Charge / Thermal Grenade → a single-GCD partial Sweeping Gunfire → Speed Shot → Incendiary Grenade → repeat. Don't move Shock Charge off the original target to chase a second one if the first is still relevant — put Explosive Charge or Thermal Grenade on the new target instead and swap back for Speed Shot.</p>

        <p><b>If the primary target doesn't have either yet</b> (fresh trash pack, high-health targets): Bombing Run → Shock Charge → Speed Shot → Incendiary Grenade → Sabotage → Thermal Grenade → Explosive Charge → Speed Shot → Incendiary Grenade → full Sweeping Gunfire channel → Speed Shot → Incendiary Grenade. This is more Energy-efficient than the burst version above, at the cost of taking longer to ramp into Sweeping Gunfire — use it whenever the AoE window runs longer than you can sustain the burst rotation.</p>
      </section>

      {/* ===== 05 VERIFY ===== */}
      <section>
        <h2><span className="num">05</span> Verify these in your own tooltips</h2>
        <p className="lede">Every number here is a guide-sourced reference point, not something measured from your own play the way the endgame page's numbers were measured from real logs. Check these directly.</p>
        <div className="tw">
        <table>
          <thead><tr><th>Claim</th><th>What to check</th></tr></thead>
          <tbody>
            <tr><td>Hothead regen</td><td>~1 Energy/second while Sequence Break is active — watch your Energy tick up during a Target Hack window and compare against standing still with it down.</td></tr>
            <tr><td>Sequence Break uptime</td><td>Calculated Measures + Trick Skip are supposed to keep it near 100%. If it's lapsing regularly, the Hothead regen isn't actually always-on for you and the whole build's math shifts.</td></tr>
            <tr><td>Improved Targeting Implant</td><td>Guide says not required for 100% Target Hack uptime, just insurance if it falls off early. Confirm you're not missing meaningful uptime without it before spending a slot on it.</td></tr>
            <tr><td>Repeated Shocks</td><td>Same tactical the endgame page assumes. If you don't have it (see section 01), confirm Shock Charge's duration and Sabotage's cooldown against your own tooltips — this page assumes 10 GCD/15s for both.</td></tr>
            <tr><td>Explosive Charge's raw cooldown</td><td>This page assumes 12 GCD/18s unbuffed. Confirm your own tooltip shows the same before-alacrity number — if it's lower, you have more room in the cycle than assumed here.</td></tr>
            <tr><td>Energy Regulators + Hothead together</td><td>Guide flags this combo as "excessive" for single-target — only worth it if you're expecting to run Sweeping Gunfire for an entire fight. Not a single-target consideration.</td></tr>
          </tbody>
        </table>
        </div>
      </section>

      {/* ===== 06 NOT YET ===== */}
      <section>
        <h2><span className="num">06</span> What not to chase yet</h2>
        <ul>
          <li><b>The /saboteur page's measured DPS numbers</b> (29,100–30,900) — those describe three parses that never had to cut a filler for Energy. Nothing on this page is meant to be compared against them directly.</li>
          <li><b>The ten-slot, 7-fixed/3-flex framing</b> — that describes what Energy Regulators enables. Without it, you're working from the 12-GCD cycle above, not that shape.</li>
          <li><b>Sweeping Gunfire spam</b> — only sensible once you have both Energy Regulators and Hothead, and only for fights where you're on AoE duty the entire time.</li>
          <li><b>Quickdraw-driven rotation tweaks</b> — the endgame page's parses show Quickdraw swapping into a flex slot below 30% target health in two of three logs. That's a real-log finding about a fully-geared rotation, not guidance for this build; treat it as out of scope until you're back on the normal cycle.</li>
          <li><b>Chasing 100% Shock Charge / Vital Shot uptime</b> — the ~3 s gap each cycle (section 03) is a structural side effect of a 10-GCD duration inside a 12-GCD cycle, not a timing mistake. Recasting earlier just moves the gap, it doesn't remove it — that needs Repeated Shocks or enough alacrity to shrink the cycle itself.</li>
        </ul>
      </section>

      <footer>
        <p>This page is guide theorycraft, not log analysis — there is no combat log behind it. Content is drawn from a user-supplied written guide covering the "No Energy Regulators Sustained Build" (Sniper-side original), translated to Gunslinger/Saboteur terminology, and cross-referenced against the three-parse findings on <code>/saboteur</code> where the two overlap (the chunk shape itself). If you record your own parse once you have the Energy Regulators Legendary Implant, it's worth revisiting <code>/saboteur</code> directly rather than this page.</p>
      </footer>

      </div>
    </div>
  );
}
