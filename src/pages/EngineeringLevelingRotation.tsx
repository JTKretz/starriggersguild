/**
 * Engineering — Leveling / Non-BiS Rotation
 * ---------------------------------------------------------------------------
 * This is NOT a log-derived page like /engineering. There is no combat log
 * behind these numbers — it's a priority-list rebuild of the same discipline
 * for a character with every ability unlocked but without the Energy
 * Regulators Legendary Implant that the /engineering parses could quietly
 * assume, since none of those three parses ever ran short on Energy. Treat
 * the specific claims here as guide-sourced reference points to verify
 * against your own tooltips and play, not measured facts.
 * Ability icons reused from /public/icons/sniper.
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

export default function EngineeringLevelingRotation({ theme }: { theme?: 'dark' | 'light' }) {
  return (
    <div className="ar-root" data-theme={theme}>
      <style>{CSS}</style>
      <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute', overflow: 'hidden' }}><defs>
      <clipPath id="ico-clip6"><rect width="50" height="50" rx="7" ry="7"/></clipPath>
      <symbol id="l-ip" viewBox="0 0 50 50"><image href="/icons/sniper/interrogation-probe.webp" width="50" height="50" clipPath="url(#ico-clip6)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="l-ss" viewBox="0 0 50 50"><image href="/icons/sniper/series-of-shots.webp" width="50" height="50" clipPath="url(#ico-clip6)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="l-pp" viewBox="0 0 50 50"><image href="/icons/sniper/plasma-probe.webp" width="50" height="50" clipPath="url(#ico-clip6)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="l-ep" viewBox="0 0 50 50"><image href="/icons/sniper/explosive-probe.webp" width="50" height="50" clipPath="url(#ico-clip6)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="l-emp" viewBox="0 0 50 50"><image href="/icons/sniper/emp-discharge.png" width="50" height="50" clipPath="url(#ico-clip6)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="l-cd" viewBox="0 0 50 50"><image href="/icons/sniper/corrosive-dart.webp" width="50" height="50" clipPath="url(#ico-clip6)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="l-sn" viewBox="0 0 50 50"><image href="/icons/sniper/snipe.webp" width="50" height="50" clipPath="url(#ico-clip6)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="l-fg" viewBox="0 0 50 50"><image href="/icons/sniper/fragmentation-grenade.webp" width="50" height="50" clipPath="url(#ico-clip6)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="l-os" viewBox="0 0 50 50"><image href="/icons/sniper/orbital-strike.webp" width="50" height="50" clipPath="url(#ico-clip6)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="l-ts" viewBox="0 0 50 50"><image href="/icons/sniper/targeting-systems.png" width="50" height="50" clipPath="url(#ico-clip6)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="l-adr" viewBox="0 0 50 50"><image href="/icons/sniper/adrenal.webp" width="50" height="50" clipPath="url(#ico-clip6)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="l-td" viewBox="0 0 50 50"><image href="/icons/sniper/takedown.webp" width="50" height="50" clipPath="url(#ico-clip6)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="l-sf" viewBox="0 0 50 50"><image href="/icons/sniper/suppressive-fire.png" width="50" height="50" clipPath="url(#ico-clip6)" preserveAspectRatio="xMidYMid slice"/></symbol>
      </defs></svg>

      <div className="wrap">

      <div className="mast">
        <p className="eyebrow">Sniper / Engineering · leveling &amp; non-BiS · priority list, not a measured parse</p>
        <h1>Two three-GCD chunks, not a ten-slot cycle</h1>
        <p className="standfirst">The <code>/engineering</code> page was built from three parses that all ran the same 7-fixed/3-flex, ten-slot cycle without exception — every flex slot got filled, every cycle, because none of those three players ever ran short on Energy. That's not a coincidence of skill; it's a specific piece of gear. Without the <strong>Energy Regulators Legendary Implant</strong> (which regenerates Energy while in cover), the normal rotation is not sustainable — you will run dry. This page is the guide-sourced fallback: a smaller two-chunk loop built to stay Energy-solvent using ability-tree picks and a tactical instead of that implant.</p>
        <dl className="facts">
          <div className="fact"><dt>Energy Regulators</dt><dd>not equipped<small>yet</small><span className="was">the gear the /engineering shape quietly assumes</span></dd></div>
          <div className="fact"><dt>Structure</dt><dd>2 chunks<small>× 3 GCDs</small><span className="was">not a fixed ten-slot cycle</span></dd></div>
          <div className="fact"><dt>Source</dt><dd>guide<small>+ your unlocks</small><span className="was">no combat log behind this page</span></dd></div>
        </dl>
      </div>

      {/* ===== LOOP AT A GLANCE ===== */}
      <section style={{ marginTop: '34px' }}>
        <h3 style={{ marginTop: '0' }}>One full loop, at a glance</h3>
        <p className="lede" style={{ marginBottom: '18px' }}>The two chunks from section 03, stitched into a single repeatable loop — same 10-slot count as the endgame page's measured cycle, filled by three tiers of certainty. The opener slot is a clean priority pick: Orbital Strike if it's up, Snipe otherwise. The two Fragmentation Grenade slots default to Fragmentation Grenade, with Snipe as a real but Energy-risky fallback the guide names explicitly — shown smaller and dimmed below. Everything else is a fixed ability, with situational omissions (not substitutions) covered in section 03's call-outs rather than shown here. Unlike the rest of this site, the timing below is extrapolated from GCD count, not measured from a combat log.</p>
        <div className="loopcard">
          <div className="loop">
            <div className="step">
              <div className="stack">
                <span className="ic" data-p="1" data-n="1. Orbital Strike — if it's up" role="img" aria-label="Orbital Strike"><svg viewBox="0 0 50 50"><use href="#l-os" /></svg></span>
                <span className="ic" data-p="2" data-n="2. Snipe — fallback" role="img" aria-label="Snipe"><svg viewBox="0 0 50 50"><use href="#l-sn" /></svg></span>
              </div>
              <small>flex</small>
            </div>
            <span className="arrow">→</span>
            <div className="step">
              <div className="stack fallback-stack">
                <span className="ic" data-n="Fragmentation Grenade — default" role="img" aria-label="Fragmentation Grenade"><svg viewBox="0 0 50 50"><use href="#l-fg" /></svg></span>
                <span className="ic fallback" data-n="Snipe — risky fallback, costs real Energy" role="img" aria-label="Snipe"><svg viewBox="0 0 50 50"><use href="#l-sn" /></svg></span>
              </div>
              <small>default</small>
            </div>
            <span className="arrow">→</span>
            <div className="step"><span className="ic" data-n="Explosive Probe" role="img" aria-label="Explosive Probe"><svg viewBox="0 0 50 50"><use href="#l-ep" /></svg></span><small>fixed</small></div>
            <span className="arrow">→</span>
            <div className="step"><span className="ic" data-n="Series of Shots — 2 GCD channel" role="img" aria-label="Series of Shots"><svg viewBox="0 0 50 50"><use href="#l-ss" /></svg></span><small>2 GCD</small></div>
            <span className="arrow">→</span>
            <div className="step"><span className="ic" data-n="Plasma Probe" role="img" aria-label="Plasma Probe"><svg viewBox="0 0 50 50"><use href="#l-pp" /></svg></span><small>fixed</small></div>
            <span className="arrow">→</span>
            <div className="step"><span className="ic" data-n="EMP Discharge" role="img" aria-label="EMP Discharge"><svg viewBox="0 0 50 50"><use href="#l-emp" /></svg></span><small>fixed</small></div>
            <span className="arrow">→</span>
            <div className="step">
              <div className="stack fallback-stack">
                <span className="ic" data-n="Fragmentation Grenade — default" role="img" aria-label="Fragmentation Grenade"><svg viewBox="0 0 50 50"><use href="#l-fg" /></svg></span>
                <span className="ic fallback" data-n="Snipe — risky fallback, costs real Energy" role="img" aria-label="Snipe"><svg viewBox="0 0 50 50"><use href="#l-sn" /></svg></span>
              </div>
              <small>default</small>
            </div>
            <span className="arrow">→</span>
            <div className="step"><span className="ic" data-n="Corrosive Dart" role="img" aria-label="Corrosive Dart"><svg viewBox="0 0 50 50"><use href="#l-cd" /></svg></span><small>fixed</small></div>
            <span className="arrow">→</span>
            <div className="step"><span className="ic" data-n="Series of Shots — 2 GCD channel" role="img" aria-label="Series of Shots"><svg viewBox="0 0 50 50"><use href="#l-ss" /></svg></span><small>2 GCD</small></div>
            <span className="arrow">→</span>
            <div className="step"><span className="ic" data-n="Plasma Probe" role="img" aria-label="Plasma Probe"><svg viewBox="0 0 50 50"><use href="#l-pp" /></svg></span><small>fixed</small></div>
            <span className="arrow">↻</span>
          </div>
          <p style={{ marginTop: '18px', marginBottom: '0', fontSize: '13px', color: 'var(--ink-2)' }}>
            <b>10 on-GCD slots · 11 GCD-equivalent</b> (the two Series of Shots channels count double) — the identical slot count to the <code>/engineering</code> page's measured cycle, just filled differently. At a rough 1.5 s base GCD with no alacrity, one full loop runs about <b>16.5 s</b>; the endgame parses' alacrity builds compressed the same 11 GCDs to 15.4–16.2 s, so expect somewhere in that neighborhood once your own alacrity is factored in. This figure is extrapolated from GCD count alone, not measured — see section 05 to verify against your own tooltips.
          </p>
        </div>
      </section>

      {/* ===== KEY ===== */}
      <section>
        <h3 style={{ marginTop: '0' }}>Ability key</h3>
        <div className="keygrid">
        <div className="keyrow"><span className="ic" data-n="Interrogation Probe" role="img" aria-label="Interrogation Probe"><svg viewBox="0 0 50 50"><use href="#l-ip"/></svg></span><div><b>Interrogation Probe</b><span>DoT · reapply the instant it falls off, ahead of everything else</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Series of Shots" role="img" aria-label="Series of Shots"><svg viewBox="0 0 50 50"><use href="#l-ss"/></svg></span><div><b>Series of Shots</b><span>2-GCD channel · separates the two chunks, still used on cooldown</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Plasma Probe" role="img" aria-label="Plasma Probe"><svg viewBox="0 0 50 50"><use href="#l-pp"/></svg></span><div><b>Plasma Probe</b><span>Always immediately after Series of Shots, same as endgame</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Explosive Probe" role="img" aria-label="Explosive Probe"><svg viewBox="0 0 50 50"><use href="#l-ep"/></svg></span><div><b>Explosive Probe</b><span>Chunk 1, slot 3 · net Energy-positive, keep this one</span></div></div>
        <div className="keyrow"><span className="ic" data-n="EMP Discharge" role="img" aria-label="EMP Discharge"><svg viewBox="0 0 50 50"><use href="#l-emp"/></svg></span><div><b>EMP Discharge</b><span>Chunk 2, slot 1 · needs Interrogation Probe up to use at all</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Corrosive Dart" role="img" aria-label="Corrosive Dart"><svg viewBox="0 0 50 50"><use href="#l-cd"/></svg></span><div><b>Corrosive Dart</b><span>Chunk 2, slot 3 · recast every lap</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Snipe" role="img" aria-label="Snipe"><svg viewBox="0 0 50 50"><use href="#l-sn"/></svg></span><div><b>Snipe</b><span>Chunk 1 fallback · risky here, costs real Energy you may not have</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Fragmentation Grenade" role="img" aria-label="Fragmentation Grenade"><svg viewBox="0 0 50 50"><use href="#l-fg"/></svg></span><div><b>Fragmentation Grenade</b><span>The Energy-management ability now, not just a filler — see section 03</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Orbital Strike" role="img" aria-label="Orbital Strike"><svg viewBox="0 0 50 50"><use href="#l-os"/></svg></span><div><b>Orbital Strike</b><span>Chunk 1, slot 1, whenever it's up — beats Snipe</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Targeting Systems" role="img" aria-label="Targeting Systems"><svg viewBox="0 0 50 50"><use href="#l-ts"/></svg></span><div><b>Targeting Systems</b><span>Off-GCD · also grants Systems Upgrade, the Energy-regen buff this build runs on</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Adrenal" role="img" aria-label="Adrenal"><svg viewBox="0 0 50 50"><use href="#l-adr"/></svg></span><div><b>Adrenal</b><span>Off-GCD burst · opener only here, after Interrogation Probe lands</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Suppressive Fire" role="img" aria-label="Suppressive Fire"><svg viewBox="0 0 50 50"><use href="#l-sf"/></svg></span><div><b>Suppressive Fire</b><span>AoE channel · expensive, only for the AoE rotation in section 04</span></div></div>
      </div>
      </section>

      {/* ===== 01 WHY IT BREAKS ===== */}
      <section>
        <h2><span className="num">01</span> Why the endgame page's shape doesn't transfer</h2>
        <p className="lede">The <code>/engineering</code> analysis found the same ten-slot, 7-fixed/3-flex cycle in all three parses, with zero exceptions across 46 combined steady-state cycles — every flex slot filled, lap after lap. That page's whole framing depends on Energy never being a limiting factor.</p>
        <p>Without Energy Regulators, it is. The guide is explicit about this: this build "does not offer enough DPS to be competitive with the Sustained DPS build, but is the only way to do sustained DPS before you get the Energy Regulators Legendary Implant, because you do not generate enough Energy to do the normal rotation without this build or that Implant." The fix on offer isn't a gear swap you can fake — it's a different ability-tree build (Efficient Systems, generating roughly 1 Energy per second while Systems Upgrade is active) plus deliberately skipping fillers you'd otherwise always take.</p>

        <div className="call flag">
          <h4>The chunk shape is the same — what's different is what you're allowed to keep</h4>
          <p>Chunk 1 below (flex ability, Fragmentation Grenade, Explosive Probe) is structurally the same slice the endgame page's own logs show — parse 1's "two flex slots then Explosive Probe" shape. Chunk 2 (EMP Discharge, Fragmentation Grenade, Corrosive Dart) matches the EMP-then-flex-then-Corrosive-Dart tail from parses 2 and 3. The BiS parses never had to cut anything from either chunk. This page's entire job is telling you which single ability to drop from a chunk when Energy won't cover all three — not to prescribe a different structure.</p>
        </div>
      </section>

      {/* ===== 02 OPENER ===== */}
      <section>
        <h2><span className="num">02</span> The opener</h2>
        <p className="lede">Nearly identical to the steady rotation below, just with your pre-casts and OCDs folded in. Skip the pre-cast Snipe if you can't actually get it off before combat starts — don't delay the real opener to force it in.</p>

        <ol className="plist" style={{ listStyle: 'none' }}>
          <li className="prow"><span className="n">1</span><span className="ic" data-n="Orbital Strike (pre-cast)" role="img" aria-label="Orbital Strike"><svg viewBox="0 0 50 50"><use href="#l-os"/></svg></span><div><b>Orbital Strike</b><span>Pre-cast, lands as combat starts</span></div></li>
          <li className="prow"><span className="n">2</span><span className="ic" data-n="Snipe (pre-cast)" role="img" aria-label="Snipe"><svg viewBox="0 0 50 50"><use href="#l-sn"/></svg></span><div><b>Snipe</b><span>Pre-cast if you can land it before pull; skip otherwise</span></div></li>
          <li className="prow"><span className="n">3</span><span className="ic" data-n="Interrogation Probe" role="img" aria-label="Interrogation Probe"><svg viewBox="0 0 50 50"><use href="#l-ip"/></svg></span><div><b>Interrogation Probe</b><span>First real GCD of the fight</span></div></li>
          <li className="prow"><span className="n">4</span><span className="ic" data-n="Adrenal + Targeting Systems" role="img" aria-label="Adrenal and Targeting Systems"><svg viewBox="0 0 50 50"><use href="#l-adr"/></svg></span><div><b>Adrenal + Targeting Systems</b><span>Both off-GCD — pop them right after Interrogation Probe lands, not before, so you don't burn a GCD of their uptime on nothing</span></div></li>
          <li className="prow"><span className="n">5</span><span className="ic" data-n="Explosive Probe" role="img" aria-label="Explosive Probe"><svg viewBox="0 0 50 50"><use href="#l-ep"/></svg></span><div><b>Explosive Probe</b></div></li>
          <li className="prow"><span className="n">6</span><span className="ic" data-n="Series of Shots" role="img" aria-label="Series of Shots"><svg viewBox="0 0 50 50"><use href="#l-ss"/></svg></span><div><b>Series of Shots</b></div></li>
          <li className="prow"><span className="n">7</span><span className="ic" data-n="Plasma Probe" role="img" aria-label="Plasma Probe"><svg viewBox="0 0 50 50"><use href="#l-pp"/></svg></span><div><b>Plasma Probe</b></div></li>
          <li className="prow"><span className="n">8</span><span className="ic" data-n="EMP Discharge" role="img" aria-label="EMP Discharge"><svg viewBox="0 0 50 50"><use href="#l-emp"/></svg></span><div><b>EMP Discharge</b></div></li>
          <li className="prow"><span className="n">9</span><span className="ic" data-n="Fragmentation Grenade" role="img" aria-label="Fragmentation Grenade"><svg viewBox="0 0 50 50"><use href="#l-fg"/></svg></span><div><b>Fragmentation Grenade</b></div></li>
          <li className="prow"><span className="n">10</span><span className="ic" data-n="Corrosive Dart" role="img" aria-label="Corrosive Dart"><svg viewBox="0 0 50 50"><use href="#l-cd"/></svg></span><div><b>Corrosive Dart</b></div></li>
          <li className="prow"><span className="n">11</span><span className="ic" data-n="Series of Shots" role="img" aria-label="Series of Shots"><svg viewBox="0 0 50 50"><use href="#l-ss"/></svg></span><div><b>Series of Shots</b></div></li>
          <li className="prow"><span className="n">12</span><span className="ic" data-n="Plasma Probe" role="img" aria-label="Plasma Probe"><svg viewBox="0 0 50 50"><use href="#l-pp"/></svg></span><div><b>Plasma Probe</b></div></li>
          <li className="prow"><span className="n">13</span><span className="ic" data-n="Snipe" role="img" aria-label="Snipe"><svg viewBox="0 0 50 50"><use href="#l-sn"/></svg></span><div><b>Snipe</b></div></li>
          <li className="prow"><span className="n">14</span><span className="ic" data-n="Fragmentation Grenade" role="img" aria-label="Fragmentation Grenade"><svg viewBox="0 0 50 50"><use href="#l-fg"/></svg></span><div><b>Fragmentation Grenade</b></div></li>
          <li className="prow"><span className="n">15</span><span className="ic" data-n="Explosive Probe" role="img" aria-label="Explosive Probe"><svg viewBox="0 0 50 50"><use href="#l-ep"/></svg></span><div><b>Explosive Probe</b></div></li>
          <li className="prow"><span className="n">16</span><span className="ic" data-n="Series of Shots" role="img" aria-label="Series of Shots"><svg viewBox="0 0 50 50"><use href="#l-ss"/></svg></span><div><b>Series of Shots</b></div></li>
          <li className="prow"><span className="n">17</span><span className="ic" data-n="Plasma Probe" role="img" aria-label="Plasma Probe"><svg viewBox="0 0 50 50"><use href="#l-pp"/></svg></span><div><b>Plasma Probe</b><span>Steady rotation begins — section 03</span></div></li>
        </ol>
      </section>

      {/* ===== 03 THE ROTATION ===== */}
      <section>
        <h2><span className="num">03</span> The single-target rotation — two chunks, one rule</h2>
        <p className="lede">Two three-GCD chunks, each followed by Series of Shots then Plasma Probe. The one rule that actually moves your DPS: every chunk needs at least one ability that generates a stack of Electrified Railgun — Snipe, Takedown, Fragmentation Grenade, or Series of Shots — so you can hold 100% uptime on 3 stacks. Everything else here is secondary to that.</p>

        <div className="chunks">
          <div className="chunk">
            <h4>Chunk 1</h4>
            <ol>
              <li><span className="ic" data-n="Snipe or Orbital Strike" role="img" aria-label="Snipe or Orbital Strike"><svg viewBox="0 0 50 50"><use href="#l-os"/></svg></span><div><b>Orbital Strike</b> when it's up, otherwise <b>Snipe</b></div></li>
              <li><span className="ic" data-n="Fragmentation Grenade" role="img" aria-label="Fragmentation Grenade"><svg viewBox="0 0 50 50"><use href="#l-fg"/></svg></span><div><b>Fragmentation Grenade</b></div></li>
              <li><span className="ic" data-n="Explosive Probe" role="img" aria-label="Explosive Probe"><svg viewBox="0 0 50 50"><use href="#l-ep"/></svg></span><div><b>Explosive Probe</b></div></li>
            </ol>
          </div>
          <div className="chunk">
            <h4>Chunk 2</h4>
            <ol>
              <li><span className="ic" data-n="EMP Discharge" role="img" aria-label="EMP Discharge"><svg viewBox="0 0 50 50"><use href="#l-emp"/></svg></span><div><b>EMP Discharge</b></div></li>
              <li><span className="ic" data-n="Fragmentation Grenade" role="img" aria-label="Fragmentation Grenade"><svg viewBox="0 0 50 50"><use href="#l-fg"/></svg></span><div><b>Fragmentation Grenade</b></div></li>
              <li><span className="ic" data-n="Corrosive Dart" role="img" aria-label="Corrosive Dart"><svg viewBox="0 0 50 50"><use href="#l-cd"/></svg></span><div><b>Corrosive Dart</b></div></li>
            </ol>
          </div>
        </div>
        <div className="chunk-connector">
          <span className="ic" data-n="Series of Shots" role="img" aria-label="Series of Shots"><svg viewBox="0 0 50 50"><use href="#l-ss"/></svg></span>
          <span>Series of Shots</span>
          <span className="ic" data-n="Plasma Probe" role="img" aria-label="Plasma Probe"><svg viewBox="0 0 50 50"><use href="#l-pp"/></svg></span>
          <span>Plasma Probe → other chunk → repeat</span>
        </div>

        <div className="call">
          <h4>Fragmentation Grenade goes second in each chunk on purpose</h4>
          <p>Putting Fragmentation Grenade in the middle slot of each chunk minimizes the chance Electrified Railgun falls off if the rotation gets disrupted mid-chunk — there's always a Railgun-refreshing GCD close to the front. It's also risky to reach for Snipe over an <em>unprocced</em> Fragmentation Grenade here: Snipe costs real Energy you may not have, where Fragmentation Grenade is close to Energy-neutral once its own refund passives are accounted for.</p>
          <p>If Explosive Probe's cooldown resets early or Orbital Strike comes up before its normal slot and there are adds worth hitting, drop Fragmentation Grenade from that chunk in favor of the bigger hit instead — but that's the only planned substitution. Everything else is "use the chunk as written unless Energy forces a cut."</p>
        </div>

        <div className="call flag">
          <h4>If Interrogation Probe falls off, it jumps the entire priority list</h4>
          <p>Reapplying it is more important than finishing either chunk. Omit Fragmentation Grenade from that chunk — or Snipe, if that's what's queued — to pay for the reapplication, then keep going with the rest of the chunk as normal. Don't stop DPSing to "reset" back to the top of the rotation; picking back up mid-chunk is fine.</p>
        </div>

        <div className="call">
          <h4>The general principle: some DPS beats zero DPS</h4>
          <p>The guide is blunt about this: using any damaging ability is better than standing there deciding. If you mess up a chunk, don't stop to recover the "correct" sequence — just keep going. The only things that should ever stop your Engineering rotation are fight mechanics that genuinely prevent damage, not aggro concerns or a desire to get back on script.</p>
        </div>
      </section>

      {/* ===== 04 AOE ===== */}
      <section>
        <h2><span className="num">04</span> AoE — same chunk shape, Suppressive Fire takes a chunk's place</h2>
        <p className="lede">Suppressive Fire is expensive enough, and the rest of the AoE kit interdependent enough, that AoE still runs on the same two-chunk-plus-Series-of-Shots structure as single target — a full Suppressive Fire channel just counts as one chunk on its own. Snipe and Corrosive Dart drop out entirely here; they're too expensive for what they add to AoE damage.</p>

        <div className="call">
          <h4>EMP Discharge's AoE has two prerequisites</h4>
          <p>It requires Interrogation Probe on the target to be usable at all, and a stack of Electrified Railgun on that target for the AoE component specifically. In practice this means you need a higher-health primary target — a champion in a pack, or a designated kill priority — to get EMP Discharge's AoE and the Fragmentation Grenade proc that follows it.</p>
        </div>

        <p><b>If the primary target already has Interrogation Probe and Electrified Railgun</b> (adds spawned next to a boss you're already DoTing): Orbital Strike → EMP Discharge → Fragmentation Grenade / Interrogation Probe / a partial Suppressive Fire channel → Series of Shots → Plasma Probe → full Suppressive Fire channel → Series of Shots → Plasma Probe → EMP Discharge → Explosive Probe / Fragmentation Grenade → a single-GCD partial Suppressive Fire → Series of Shots → Plasma Probe → repeat. Don't move Interrogation Probe off the original target to chase a second one if the first is still relevant — put Explosive Probe or Fragmentation Grenade on the new target instead and swap back for Series of Shots.</p>

        <p><b>If the primary target doesn't have either yet</b> (fresh trash pack, high-health targets): Orbital Strike → Interrogation Probe → Series of Shots → Plasma Probe → EMP Discharge → Fragmentation Grenade → Explosive Probe → Series of Shots → Plasma Probe → full Suppressive Fire channel → Series of Shots → Plasma Probe. This is more Energy-efficient than the burst version above, at the cost of taking longer to ramp into Suppressive Fire — use it whenever the AoE window runs longer than you can sustain the burst rotation.</p>
      </section>

      {/* ===== 05 VERIFY ===== */}
      <section>
        <h2><span className="num">05</span> Verify these in your own tooltips</h2>
        <p className="lede">Every number here is a guide-sourced reference point, not something measured from your own play the way the endgame page's numbers were measured from real logs. Check these directly.</p>
        <div className="tw">
        <table>
          <thead><tr><th>Claim</th><th>What to check</th></tr></thead>
          <tbody>
            <tr><td>Efficient Systems regen</td><td>~1 Energy/second while Systems Upgrade is active — watch your Energy tick up during a Targeting Systems window and compare against standing still with it down.</td></tr>
            <tr><td>Systems Upgrade uptime</td><td>Calculated Measures + System Kick are supposed to keep it near 100%. If it's lapsing regularly, the Efficient Systems regen isn't actually always-on for you and the whole build's math shifts.</td></tr>
            <tr><td>Improved Targeting Implant</td><td>Guide says not required for 100% Targeting Systems uptime, just insurance if it falls off early. Confirm you're not missing meaningful uptime without it before spending a slot on it.</td></tr>
            <tr><td>Ruthless Interrogation</td><td>Same tactical the endgame page assumes — confirm Interrogation Probe is refreshing off Series of Shots ticks for you the same way it does in the three logged parses.</td></tr>
            <tr><td>Energy Regulators + Efficient Systems together</td><td>Guide flags this combo as "excessive" for single-target — only worth it if you're expecting to run Suppressive Fire for an entire fight. Not a single-target consideration.</td></tr>
          </tbody>
        </table>
        </div>
      </section>

      {/* ===== 06 NOT YET ===== */}
      <section>
        <h2><span className="num">06</span> What not to chase yet</h2>
        <ul>
          <li><b>The /engineering page's measured DPS numbers</b> (29,100–30,900) — those describe three parses that never had to cut a filler for Energy. Nothing on this page is meant to be compared against them directly.</li>
          <li><b>The ten-slot, 7-fixed/3-flex framing</b> — that describes what Energy Regulators enables. Without it, you're working from the two-chunk model above, not that shape.</li>
          <li><b>Suppressive Fire spam</b> — only sensible once you have both Energy Regulators and Efficient Systems, and only for fights where you're on AoE duty the entire time.</li>
          <li><b>Takedown-driven chunk tweaks</b> — the endgame page's parses show Takedown swapping into a flex slot below 30% target health in two of three logs. That's a real-log finding about a fully-geared rotation, not guidance for this build; treat it as out of scope until you're back on the normal cycle.</li>
        </ul>
      </section>

      <footer>
        <p>This page is guide theorycraft, not log analysis — there is no combat log behind it. Content is drawn from a user-supplied written guide covering the "No Energy Regulators Sustained Build," cross-referenced against the three-parse findings on <code>/engineering</code> where the two overlap (the chunk shape itself). If you record your own parse once you have the Energy Regulators Legendary Implant, it's worth revisiting <code>/engineering</code> directly rather than this page.</p>
      </footer>

      </div>
    </div>
  );
}
