/**
 * Innovative Ordnance — Rotation Standard
 * ---------------------------------------------------------------------------
 * Ported from a single-file React prototype. Ability icons live as separate
 * files under /public/icons/mercenary rather than inlined base64.
 *
 * Usage:
 *   import MercenaryRotation from './MercenaryRotation';
 *   <MercenaryRotation />                  // follows the OS colour scheme
 *   <MercenaryRotation theme="dark" />     // force dark
 *   <MercenaryRotation theme="light" />    // force light
 *
 * Styles are scoped to .ar-root, so nothing leaks to the host page.
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
  .ic.sccmark::before,.ic.rcmark::before{content:"";position:absolute;right:-5px;top:-2px;
    bottom:-2px;width:3px;border-radius:1px}
  .ic.sccmark::before{background:var(--brass)}
  .ic.rcmark::before{background:var(--cb-f)}
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

  figure{margin:0 0 26px;background:var(--panel);border:1px solid var(--rule);padding:20px 22px 14px}
  figure svg{display:block;width:100%;max-width:100%;height:auto}
  figcaption{font-size:13px;color:var(--ink-2);margin-top:14px;padding-top:12px;
    border-top:1px solid var(--rule-2);max-width:82ch}
  figcaption b{color:var(--ink);font-weight:600}
  .sv-label{font-family:var(--font-display);font-size:11px;letter-spacing:.06em;
    text-transform:uppercase;fill:currentColor;opacity:.62}
  .sv-note{font-family:var(--font-body);font-size:11px;fill:currentColor;opacity:.75}
  .sv-num{font-family:var(--font-data);font-size:11px;fill:currentColor;opacity:.7}
  .sv-numb{font-family:var(--font-data);font-size:12px;fill:currentColor}
  .sv-flex{font-family:var(--font-display);font-size:13px;font-weight:600;letter-spacing:.06em;
    fill:var(--brass)}
  .sv-sc{font-family:var(--font-data);font-size:10.5px;fill:var(--brass)}
  .sv-axis{stroke:currentColor;opacity:.45;stroke-width:1}
  .sv-tick{stroke:currentColor;opacity:.28;stroke-width:1}

  .meters{display:grid;gap:10px;background:var(--panel);border:1px solid var(--rule);padding:20px 22px}
  .meter{display:grid;grid-template-columns:1fr 84px;gap:14px;align-items:center}
  .meter .lbl{font-size:13.5px;color:var(--ink-2)}
  .meter .track{grid-column:1/-1;height:8px;background:var(--panel-2);
    box-shadow:inset 0 0 0 1px var(--rule-2);border-radius:1px;overflow:hidden}
  .meter .fill{height:100%;background:var(--good);border-radius:1px}
  .meter .fill.warn{background:var(--brass)} .meter .fill.bad{background:var(--bad)}
  .meter .val{font-family:var(--font-data);font-size:13px;text-align:right;font-variant-numeric:tabular-nums}
  .meter.lag .lbl{color:var(--ink);font-weight:600}

  /* ---------- reference grid ---------- */
  .gridwrap{overflow-x:auto;border:1px solid var(--rule);background:var(--panel);padding-bottom:32px}
  .cgrid{min-width:740px}
  .crow{display:grid;grid-template-columns:26px repeat(12,minmax(28px,1fr)) 44px 26px 22px;
    gap:5px;align-items:center;padding:5px 12px;border-bottom:1px solid var(--rule-2)}
  .crow:last-child{border-bottom:0}
  .chead{position:sticky;top:0;background:var(--panel-2);z-index:3;
    border-bottom:1px solid var(--rule);padding-top:9px;padding-bottom:9px}
  .chead>*{font-family:var(--font-display);text-transform:uppercase;letter-spacing:.08em;
    font-size:9.5px;color:var(--ink-3);text-align:center;line-height:1.2}
  .crow>.cyc{font-family:var(--font-data);font-size:12px;color:var(--ink-3);
    text-align:right;font-variant-numeric:tabular-nums}
  .crow>.len,.crow>.stk{font-family:var(--font-data);font-size:12px;text-align:center;
    font-variant-numeric:tabular-nums;color:var(--ink-2)}
  .crow>.scc{text-align:center;font-size:11px}
  .stk.ten{color:var(--good);font-weight:700} .stk.low{color:var(--bad)}
  .scc.yes{color:var(--brass)} .scc.no{color:var(--bad)}
  .crow.flagrow{background:color-mix(in srgb,var(--bad) 11%,transparent)}
  .crow.bestrow{background:color-mix(in srgb,var(--er-f) 12%,transparent)}
  .markkey{display:flex;flex-wrap:wrap;gap:8px 22px;margin:14px 0 0;font-size:12.5px;
    color:var(--ink-2);align-items:center}
  .markkey>span{display:flex;align-items:center;gap:8px}
  .markkey .bar{display:inline-block;width:3px;height:16px;border-radius:1px}
  .markkey .ic{max-width:24px;flex:0 0 24px}

  .tw{overflow-x:auto}
  table{border-collapse:collapse;width:100%;min-width:500px;font-size:14px}
  th,td{text-align:left;padding:9px 12px 9px 0;border-bottom:1px solid var(--rule-2);vertical-align:middle}
  th{font-family:var(--font-display);text-transform:uppercase;letter-spacing:.09em;
    font-size:10.5px;color:var(--ink-3);border-bottom:1px solid var(--rule)}
  td.n,th.n{text-align:right;font-family:var(--font-data);font-variant-numeric:tabular-nums;padding-right:16px}
  tbody tr:last-child td{border-bottom:0}
  tr.hi td{background:color-mix(in srgb,var(--er-f) 12%,transparent)}
  tr.no td{color:var(--ink-3)}
  td.icc{width:44px;padding-right:12px}
  td.icc .ic{max-width:30px}

  .call{border-left:3px solid var(--brass);background:var(--panel);padding:16px 20px;margin:24px 0}
  .call h4{font-family:var(--font-display);text-transform:uppercase;letter-spacing:.09em;
    font-size:12.5px;margin:0 0 7px;color:var(--brass)}
  .call p{margin:0 0 8px} .call p:last-child{margin-bottom:0}
  .call.flag{border-left-color:var(--bad)} .call.flag h4{color:var(--bad)}
  .call.fix{border-left-color:var(--good)} .call.fix h4{color:var(--good)}
  code,.mono{font-family:var(--font-data);font-size:.9em;background:var(--panel-2);padding:1px 5px;border-radius:2px}
  ul{max-width:66ch;padding-left:20px} li{margin-bottom:7px}
  footer{margin-top:52px;padding-top:18px;border-top:1px solid var(--rule);font-size:12.5px;color:var(--ink-3)}
  footer p{max-width:78ch}
`;

export default function MercenaryRotation({ theme }: { theme?: 'dark' | 'light' }) {
  return (
    <div className="ar-root" data-theme={theme}>
      <style>{CSS}</style>
      <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute', overflow: 'hidden' }}><defs>
      <clipPath id="ico-clip"><rect width="50" height="50" rx="7" ry="7"/></clipPath>
      <symbol id="i-ir" viewBox="0 0 50 50"><image href="/icons/mercenary/incendiary-missile.webp" width="50" height="50" clipPath="url(#ico-clip)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="i-sb" viewBox="0 0 50 50"><image href="/icons/mercenary/serrated-shot.webp" width="50" height="50" clipPath="url(#ico-clip)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="i-cb" viewBox="0 0 50 50"><image href="/icons/mercenary/power-shot.webp" width="50" height="50" clipPath="url(#ico-clip)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="i-mb" viewBox="0 0 50 50"><image href="/icons/mercenary/mag-shot.webp" width="50" height="50" clipPath="url(#ico-clip)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="i-ap" viewBox="0 0 50 50"><image href="/icons/mercenary/thermal-detonator.webp" width="50" height="50" clipPath="url(#ico-clip)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="i-er" viewBox="0 0 50 50"><image href="/icons/mercenary/missile-blast.webp" width="50" height="50" clipPath="url(#ico-clip)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="i-hs" viewBox="0 0 50 50"><image href="/icons/mercenary/rapid-shots.png" width="50" height="50" clipPath="url(#ico-clip)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="i-fa" viewBox="0 0 50 50"><image href="/icons/mercenary/unload.webp" width="50" height="50" clipPath="url(#ico-clip)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="i-en" viewBox="0 0 50 50"><image href="/icons/mercenary/electro-net.webp" width="50" height="50" clipPath="url(#ico-clip)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="i-scc" viewBox="0 0 50 50"><image href="/icons/mercenary/supercharged-gas.webp" width="50" height="50" clipPath="url(#ico-clip)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="i-rc" viewBox="0 0 50 50"><image href="/icons/mercenary/vent-heat.webp" width="50" height="50" clipPath="url(#ico-clip)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="i-adr" viewBox="0 0 50 50"><image href="/icons/mercenary/adrenal.webp" width="50" height="50" clipPath="url(#ico-clip)" preserveAspectRatio="xMidYMid slice"/></symbol>
      </defs></svg>

      <div className="wrap">

      <div className="mast">
        <p className="eyebrow">Mercenary / Innovative Ordnance · parse 2 walkthrough · 33,394 DPS reference, 35,067 best (parse 3)</p>
        <h1>The rotation, and what it costs</h1>
        <p className="standfirst">An 11-GCD opener, then a <strong>ten-GCD cycle anchored on Incendiary Missile</strong> repeated twenty times. Seven slots are locked. Three are yours.</p>
        <dl className="facts">
          <div className="fact"><dt>DPS</dt><dd>33,394<span className="was">10M HP / 299.45 s</span></dd></div>
          <div className="fact"><dt>GCD</dt><dd>1.4015<small>s</small><span className="was">alacrity 7.02%</span></dd></div>
          <div className="fact"><dt>Efficiency</dt><dd>98.25<small>%</small><span className="was">parse 1: 95.81%</span></dd></div>
          <div className="fact"><dt>Cycle</dt><dd>14.21<small>s med</small><span className="was">10 GCDs = 14.015</span></dd></div>
          <div className="fact"><dt>DoT uptime</dt><dd>100<small>%</small><span className="was">all five, zero gaps</span></dd></div>
          <div className="fact"><dt>Procs used</dt><dd>27/27<span className="was">none wasted</span></dd></div>
          <div className="fact"><dt>Parse 3</dt><dd>35,067<span className="was">best seen — corrects §03's math</span></dd></div>
        </dl>
      </div>

      {/* ===== KEY ===== */}
      <section style={{ marginTop: '34px' }}>
        <h3 style={{ marginTop: '0' }}>Ability key — hover any icon anywhere on this page</h3>
        <div className="keygrid">
        <div className="keyrow"><span className="ic" data-n="Incendiary Missile" role="img" aria-label="Incendiary Missile"><svg viewBox="0 0 50 50"><use href="#i-ir"/></svg></span><div><b>Incendiary Missile</b><span>DoT · instant</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Serrated Shot" role="img" aria-label="Serrated Shot"><svg viewBox="0 0 50 50"><use href="#i-sb"/></svg></span><div><b>Serrated Shot</b><span>DoT · cast</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><div><b>Power Shot</b><span>Arms Innovative Particle Accelerator</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><div><b>Mag Shot</b><span>Free, and reduces heat</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Thermal Detonator" role="img" aria-label="Thermal Detonator"><svg viewBox="0 0 50 50"><use href="#i-ap"/></svg></span><div><b>Thermal Detonator</b><span>Anchor · on cooldown</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><div><b>Missile Blast</b><span>Best filler · +2 Supercharge</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><div><b>Rapid Shots</b><span>Heat breather · free</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Unload" role="img" aria-label="Unload"><svg viewBox="0 0 50 50"><use href="#i-fa"/></svg></span><div><b>Unload</b><span>Opener, plus a proc-down fallback · 2 GCDs</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Electro Net" role="img" aria-label="Electro Net"><svg viewBox="0 0 50 50"><use href="#i-en"/></svg></span><div><b>Electro Net</b><span>Cooldown · 84.55 s</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Supercharged Gas" role="img" aria-label="Supercharged Gas"><svg viewBox="0 0 50 50"><use href="#i-scc"/></svg></span><div><b>Supercharged Gas</b><span>Off-GCD · needs 10 stacks</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Vent Heat" role="img" aria-label="Vent Heat"><svg viewBox="0 0 50 50"><use href="#i-rc"/></svg></span><div><b>Vent Heat</b><span>Off-GCD · heat reset</span></div></div>
      </div>
      </section>

      {/* ===== 01 OPENER ===== */}
      <section>
        <h2><span className="num">01</span> The opener</h2>
        <p className="lede">Eleven GCD slots, identical in shape across both parses. It exists to get both DoTs down, land the first Innovative Particle Accelerator without Speed to Burn available, and start Thermal Detonator's cooldown.</p>

        <figure>
          <svg viewBox="0 0 820 268" role="img" aria-label="The opener in order: Serrated Shot pre-cast, Incendiary Missile, Mag Shot, Unload across two GCDs, Electro Net, Supercharged Gas off-GCD, Thermal Detonator, Missile Blast, Mag Shot, Power Shot, Mag Shot, then the cycle begins.">
            <defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs>
            <g className="sv-num" textAnchor="middle">
              <text x="84" y="56">1</text><text x="140" y="56">2</text><text x="196" y="56">3</text>
              <text x="284" y="56">4–5</text><text x="364" y="56">6</text><text x="420" y="56">7</text>
              <text x="476" y="56">8</text><text x="532" y="56">9</text><text x="588" y="56">10</text><text x="644" y="56">11</text>
            </g>
            <rect x="228" y="62" width="112" height="56" rx="6" fill="none" stroke="currentColor" opacity=".4" strokeDasharray="4 3"/>
            <g><title>Serrated Shot</title><use href="#i-sb" x="60" y="66" width="48" height="48"/></g>
            <g><title>Incendiary Missile</title><use href="#i-ir" x="116" y="66" width="48" height="48"/></g>
            <g><title>Mag Shot</title><use href="#i-mb" x="172" y="66" width="48" height="48"/></g>
            <g><title>Unload</title><use href="#i-fa" x="260" y="66" width="48" height="48"/></g>
            <g><title>Electro Net</title><use href="#i-en" x="340" y="66" width="48" height="48"/></g>
            <g><title>Thermal Detonator</title><use href="#i-ap" x="396" y="66" width="48" height="48"/></g>
            <g><title>Missile Blast</title><use href="#i-er" x="452" y="66" width="48" height="48"/></g>
            <g><title>Mag Shot</title><use href="#i-mb" x="508" y="66" width="48" height="48"/></g>
            <g><title>Power Shot</title><use href="#i-cb" x="564" y="66" width="48" height="48"/></g>
            <g><title>Mag Shot</title><use href="#i-mb" x="620" y="66" width="48" height="48"/></g>
            {/* off-GCD Supercharged Gas */}
            <line x1="392" y1="60" x2="392" y2="120" stroke="var(--brass)" strokeWidth="3"/>
            <g><title>Supercharged Gas (off-GCD)</title><use href="#i-scc" x="381" y="124" width="22" height="22"/></g>
            <text className="sv-label" x="392" y="160" textAnchor="middle" fill="var(--brass)">off‑GCD</text>
            {/* annotations */}
            <g className="sv-note">
              <line className="sv-tick" x1="84" y1="122" x2="84" y2="176"/>
              <text x="40" y="192">cast before</text><text x="40" y="206">combat starts</text>
              <line className="sv-tick" x1="196" y1="122" x2="196" y2="212"/>
              <text x="150" y="228">the only Mag Shot in the</text><text x="150" y="242">parse that builds heat</text>
              <line className="sv-tick" x1="284" y1="122" x2="284" y2="176"/>
              <text x="236" y="192">2 GCDs — procs Innovative Particle Accelerator</text><text x="236" y="206">before Speed to Burn can exist</text>
              <line className="sv-tick" x1="536" y1="122" x2="536" y2="176"/>
              <text x="500" y="192">Thermal Detonator</text><text x="500" y="206">cooldown running</text>
            </g>
            <line x1="676" y1="90" x2="716" y2="90" stroke="var(--brass)" strokeWidth="1.5" markerEnd="url(#ah)" style={{ color: 'var(--brass)' }}/>
            <text className="sv-label" x="740" y="86" fill="var(--brass)">cycle</text>
            <text className="sv-label" x="740" y="100" fill="var(--brass)">starts</text>
          </svg>
          <figcaption>Parse 2 timings: <span className="mono">−1.52 · 0.03 · 1.49 · 2.88 · 5.61 · 7.09 · 8.51 · 9.92 · 11.29 · 12.60</span>, then the cycle's first Incendiary Missile at 13.99. <b>This is the only correct Unload in the whole parse</b> — it procs Innovative Particle Accelerator during the one window where Power Shot would be a full cast, because Speed to Burn needs a Mag Shot to have landed first.</figcaption>
        </figure>
      </section>

      {/* ===== 02 CYCLE ===== */}
      <section>
        <h2><span className="num">02</span> The cycle</h2>
        <p className="lede">Anchored on Incendiary Missile, the Innovative Particle Accelerator chain reads straight across: each Power Shot arms the Mag Shot that follows it.</p>

        <figure>
          <svg viewBox="-78 0 898 330" role="img" aria-label="The ten-GCD cycle: Incendiary Missile, flexible slot one, Power Shot, Serrated Shot, flexible slots two and three, Thermal Detonator, Mag Shot, Power Shot, Mag Shot. Each Power Shot arms a Mag Shot. Supercharge contributions total ten.">
            <defs><marker id="ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs>
            <line x1="70" y1="26" x2="712" y2="26" stroke="var(--brass)" strokeWidth="1"/>
            <line x1="70" y1="20" x2="70" y2="32" stroke="var(--brass)" strokeWidth="1.5"/>
            <line x1="712" y1="20" x2="712" y2="32" stroke="var(--brass)" strokeWidth="1.5"/>
            <text className="sv-label" x="391" y="15" textAnchor="middle" fill="var(--brass)">10 GCDs = 14.015 s = Incendiary Missile duration = Thermal Detonator cooldown</text>

            <g fill="none" stroke="var(--cb-f)" strokeWidth="1.6" style={{ color: 'var(--cb-f)' }}>
              <path d="M226 118 C 226 58, 556 58, 556 118" markerEnd="url(#ah2)"/>
              <path d="M622 118 C 622 90, 688 90, 688 118" markerEnd="url(#ah2)"/>
            </g>
            <text className="sv-label" x="391" y="52" textAnchor="middle" fill="var(--cb-f)">arms Innovative Particle Accelerator → free Mag Shot</text>

            <g className="sv-num" textAnchor="middle">
              <text x="94" y="102">1</text><text x="160" y="102">2</text><text x="226" y="102">3</text>
              <text x="292" y="102">4</text><text x="358" y="102">5</text><text x="424" y="102">6</text>
              <text x="490" y="102">7</text><text x="556" y="102">8</text><text x="622" y="102">9</text><text x="688" y="102">10</text>
            </g>
            <g><title>Incendiary Missile</title><use href="#i-ir" x="70" y="120" width="48" height="48"/></g>
            <rect x="136" y="120" width="48" height="48" rx="6" fill="none" stroke="var(--brass)" strokeWidth="1.6" strokeDasharray="4 3"/>
            <text className="sv-flex" x="160" y="150" textAnchor="middle">F1</text>
            <g><title>Power Shot</title><use href="#i-cb" x="202" y="120" width="48" height="48"/></g>
            <g><title>Serrated Shot</title><use href="#i-sb" x="268" y="120" width="48" height="48"/></g>
            <rect x="334" y="120" width="48" height="48" rx="6" fill="none" stroke="var(--brass)" strokeWidth="1.6" strokeDasharray="4 3"/>
            <text className="sv-flex" x="358" y="150" textAnchor="middle">F2</text>
            <rect x="400" y="120" width="48" height="48" rx="6" fill="none" stroke="var(--brass)" strokeWidth="1.6" strokeDasharray="4 3"/>
            <text className="sv-flex" x="424" y="150" textAnchor="middle">F3</text>
            <g><title>Thermal Detonator</title><use href="#i-ap" x="466" y="120" width="48" height="48"/></g>
            <g><title>Mag Shot</title><use href="#i-mb" x="532" y="120" width="48" height="48"/></g>
            <g><title>Power Shot</title><use href="#i-cb" x="598" y="120" width="48" height="48"/></g>
            <g><title>Mag Shot</title><use href="#i-mb" x="664" y="120" width="48" height="48"/></g>

            <g className="sv-note" textAnchor="middle">
              <text x="94" y="184">refresh</text><text x="226" y="184">cast</text><text x="292" y="184">refresh</text>
              <text x="490" y="184">on cd</text><text x="556" y="184">free</text>
              <text x="622" y="184">instant</text><text x="688" y="184">free</text>
            </g>
            <text className="sv-label" x="64" y="206" textAnchor="end">Supercharge</text>
            <g className="sv-sc" textAnchor="middle">
              <text x="94" y="206">—</text><text x="160" y="206">+1/2</text><text x="226" y="206">+1</text>
              <text x="292" y="206">—</text><text x="358" y="206">+1/2</text><text x="424" y="206">+1/2</text>
              <text x="490" y="206">+3</text><text x="556" y="206">—</text><text x="622" y="206">+1</text><text x="688" y="206">—</text>
            </g>
            <text className="sv-numb" x="724" y="206" fill="var(--brass)">= 10</text>

            <g stroke="var(--brass)" strokeWidth="1.2" strokeDasharray="3 3" fill="none">
              <path d="M160 216 L160 232"/><path d="M358 216 L358 232"/><path d="M424 216 L424 232"/>
              <path d="M160 232 L424 232"/><path d="M292 232 L292 246"/>
            </g>
            <text className="sv-label" x="292" y="262" textAnchor="middle" fill="var(--brass)">pick one for each, in this order</text>
            <g><title>Missile Blast</title><use href="#i-er" x="176" y="272" width="38" height="38"/></g>
            <text className="sv-numb" x="195" y="324" textAnchor="middle" fill="var(--er-f)">1st</text>
            <g><title>Power Shot</title><use href="#i-cb" x="273" y="272" width="38" height="38"/></g>
            <text className="sv-numb" x="292" y="324" textAnchor="middle">2nd</text>
            <g><title>Rapid Shots</title><use href="#i-hs" x="370" y="272" width="38" height="38"/></g>
            <text className="sv-numb" x="389" y="324" textAnchor="middle">3rd</text>
            <text className="sv-note" x="440" y="288">max two Missile Blasts per cycle</text>
            <text className="sv-note" x="440" y="304">— a third overcaps Supercharge</text>
          </svg>
          <figcaption>The locked slots contribute exactly 5 Supercharge (Thermal Detonator 3, plus 1 from each Power Shot). The three flexible slots must supply the other 5 — which only <b>two Missile Blasts plus anything</b> achieves. Slot 3's Power Shot is a normal cast whose damage lands at the end of the GCD; slot 9's is instant via Speed to Burn. Both arm a Mag Shot.</figcaption>
        </figure>

        <h3>Filler priority</h3>
        <div className="tw">
        <table>
          <thead><tr><th className="n">#</th><th colSpan={2}>Filler</th><th className="n">SC</th><th>Condition</th></tr></thead>
          <tbody>
            <tr className="hi"><td className="n">1</td><td className="icc"><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span></td><td>Missile Blast</td><td className="n">+2</td><td>Whenever Volatile Warhead is up. <strong>Maximum two per cycle</strong> — landing even one already covers most of the flex requirement once Serrated Shot's own Supercharge is counted (section 03).</td></tr>
            <tr><td className="n">2</td><td className="icc"><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span></td><td>Power Shot</td><td className="n">+1</td><td>The remaining slot, whenever heat allows it.</td></tr>
            <tr><td className="n">3</td><td className="icc"><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span></td><td>Rapid Shots</td><td className="n">+1</td><td>The heat breather. Free, and keeps you out of the high-heat tier.</td></tr>
            <tr className="no"><td className="n">—</td><td className="icc"><span className="ic" data-n="Electro Net" role="img" aria-label="Electro Net"><svg viewBox="0 0 50 50"><use href="#i-en"/></svg></span></td><td>Electro Net</td><td className="n">0</td><td>On cooldown (84.55 s) only. Take the Rapid Shots slot, never an Missile Blast.</td></tr>
            <tr><td className="n">4</td><td className="icc"><span className="ic" data-n="Unload" role="img" aria-label="Unload"><svg viewBox="0 0 50 50"><use href="#i-fa"/></svg></span></td><td>Unload</td><td className="n">0</td><td>Opener, or as a fallback when Volatile Warhead is down for both remaining flex slots at once — outdamages two ordinary proc-less fillers combined (section 03). Pair with Vent Heat for the cost.</td></tr>
          </tbody>
        </table>
        </div>
      </section>

      {/* ===== 03 TWO-ER CEILING ===== */}
      <section>
        <h2><span className="num">03</span> Correction: the locked total is six, not five</h2>
        <p className="lede">A third parse — 35,067 DPS, the best of the three — reaches the Supercharge cap in 18 of 20 cycles instead of 8. It isn't landing more Missile Blasts. It's that Serrated Shot generates a stack of its own, which this section's math never counted.</p>

        <figure>
          <svg viewBox="0 0 820 262" role="img" aria-label="Four filler combinations as stacked bars against the ten-stack cap, now including Serrated Shot's own contribution. Three Missile Blasts reaches twelve and wastes two. Two Missile Blasts plus Rapid Shots or Power Shot reaches eleven and wastes one. One Missile Blast plus two cheap fillers reaches exactly ten.">
            <line x1="680" y1="20" x2="680" y2="218" stroke="var(--brass)" strokeWidth="1.5" strokeDasharray="4 3"/>
            <text className="sv-label" x="680" y="14" textAnchor="middle" fill="var(--brass)">cap = 10</text>

            <g><title>Missile Blast</title><use href="#i-er" x="34" y="28" width="26" height="26"/></g>
            <g><title>Missile Blast</title><use href="#i-er" x="64" y="28" width="26" height="26"/></g>
            <g><title>Missile Blast</title><use href="#i-er" x="94" y="28" width="26" height="26"/></g>
            <g><title>Missile Blast</title><use href="#i-er" x="34" y="80" width="26" height="26"/></g>
            <g><title>Missile Blast</title><use href="#i-er" x="64" y="80" width="26" height="26"/></g>
            <g><title>Rapid Shots</title><use href="#i-hs" x="94" y="80" width="26" height="26"/></g>
            <g><title>Missile Blast</title><use href="#i-er" x="34" y="132" width="26" height="26"/></g>
            <g><title>Missile Blast</title><use href="#i-er" x="64" y="132" width="26" height="26"/></g>
            <g><title>Power Shot</title><use href="#i-cb" x="94" y="132" width="26" height="26"/></g>
            <g><title>Missile Blast</title><use href="#i-er" x="34" y="184" width="26" height="26"/></g>
            <g><title>Rapid Shots</title><use href="#i-hs" x="64" y="184" width="26" height="26"/></g>
            <g><title>Rapid Shots</title><use href="#i-hs" x="94" y="184" width="26" height="26"/></g>

            <rect x="150" y="28" width="318" height="26" fill="currentColor" opacity=".2"/>
            <rect x="468" y="28" width="106" height="26" fill="var(--er-f)"/>
            <rect x="574" y="28" width="106" height="26" fill="var(--er-f)"/>
            <rect x="680" y="28" width="106" height="26" fill="var(--bad)" opacity=".62"/>
            <text className="sv-numb" x="800" y="46" fill="var(--bad)">12</text>

            <rect x="150" y="80" width="318" height="26" fill="currentColor" opacity=".2"/>
            <rect x="468" y="80" width="106" height="26" fill="var(--er-f)"/>
            <rect x="574" y="80" width="106" height="26" fill="var(--er-f)"/>
            <rect x="680" y="80" width="53" height="26" fill="var(--bad)" opacity=".62"/>
            <text className="sv-numb" x="745" y="98" fill="var(--bad)">11</text>

            <rect x="150" y="132" width="318" height="26" fill="currentColor" opacity=".2"/>
            <rect x="468" y="132" width="106" height="26" fill="var(--er-f)"/>
            <rect x="574" y="132" width="106" height="26" fill="var(--er-f)"/>
            <rect x="680" y="132" width="53" height="26" fill="var(--bad)" opacity=".62"/>
            <text className="sv-numb" x="745" y="150" fill="var(--bad)">11</text>

            <rect x="150" y="184" width="318" height="26" fill="currentColor" opacity=".2"/>
            <rect x="468" y="184" width="106" height="26" fill="var(--er-f)"/>
            <rect x="574" y="184" width="53" height="26" fill="var(--hs-f)"/>
            <rect x="627" y="184" width="53" height="26" fill="var(--hs-f)"/>
            <text className="sv-numb" x="694" y="202" fill="var(--good)">10</text>

            <text className="sv-note" x="309" y="46" textAnchor="middle">locked slots = 6</text>
            <text className="sv-note" x="733" y="70" textAnchor="middle" fill="var(--bad)">2 wasted</text>
            <text className="sv-label" x="150" y="244">Grey = Thermal Detonator 3 + Power Shot 1 + Power Shot 1 + Serrated Shot 1</text>
          </svg>
          <figcaption>Counting Serrated Shot's own Supercharge stack, the locked total is <b>6</b>, not 5 — Thermal Detonator 3, one Power Shot each on the two fixed casts, and Serrated Shot's own 1. A single Missile Blast plus two ordinary fillers now lands exactly on <b>10</b>; a second Missile Blast already reaches the cap alone, and anything cast after that just overflows. <b>Two Missile Blasts is the ceiling worth avoiding now, not the target to aim for.</b></figcaption>
        </figure>

        <div className="call flag">
          <h4>What this overturned</h4>
          <p>Every reading above assumed Serrated Shot's DoT recast was a zero-Supercharge action, like Incendiary Missile. It isn't. Tracing the raw Supercharge stack counter in a third, higher parse (35,067 DPS) against the damage event landing at that instant shows Serrated Shot granting exactly <b>+1 Supercharge on every measured cast</b> — clean, no exceptions.</p>
          <p>It's also the reason that parse pops Supercharged Gas in <b>18 of 20 cycles (90%)</b> against this page's reference parse's 8 of 20 (40%) — despite averaging <em>fewer</em> Missile Blasts per cycle, not more. Supercharged Burn is that parse's single largest damage source, 21.8% of total damage, which makes this the biggest lever in the whole rotation.</p>
          <p>Whether the two original parses show the same Serrated Shot tick is worth checking directly — their raw logs weren't available to re-verify here (see section 09). If they do, this section's math has undercounted since the page's first draft.</p>
        </div>

        <div className="call">
          <h4>A fifth option: Unload when the proc is down</h4>
          <p>That same parse fired a full Unload channel — both remaining flex slots at once — four times mid-fight, always with no Volatile Warhead proc up. Average damage across those four channels: <b>~56,000</b>, against roughly <b>~31,000</b> for what two ordinary proc-less fillers (Rapid Shots + Power Shot) would have done in the same window. Each was paired with a Vent Heat shortly after to cover the cost. Unload still contributes 0 Supercharge — this doesn't change the cap math above — but as a pure damage fallback for a proc-down cycle, it beats the filler table's other two picks.</p>
        </div>

        <div className="call fix">
          <h4>Excess procs cost nothing to defer</h4>
          <p>Supply reached three procs in one cycle exactly once. Parse 2, cycle 18: three generated, <b>two Missile Blasts fired</b>, the third carried into cycle 19 — which then fired two while generating only one of its own.</p>
          <p>Nothing was lost, and nothing could have been. Because the proc is one-at-a-time (see 04), a held proc suppresses the next. Declining the third doesn't discard a proc; it delays when the following one arrives.</p>
        </div>
      </section>

      {/* ===== 04 PROC MECHANIC ===== */}
      <section>
        <h2><span className="num">04</span> Correction: the proc is one-at-a-time, not on a timer</h2>
        <p className="lede">The ability reference gives Volatile Warhead a 15-second internal cooldown and a below-30%-health condition. Neither survives contact with the log.</p>

        <figure>
          <svg viewBox="0 0 820 250" role="img" aria-label="26 intervals between Volatile Warhead procs, sorted ascending. 23 of 26 fall below the documented 15 second floor, the fastest 2.7 seconds.">
            <line className="sv-axis" x1="66" y1="196" x2="784" y2="196"/>
            <g className="sv-num" textAnchor="end"><text x="60" y="200">0</text><text x="60" y="104">15</text><text x="60" y="42">25</text></g>
            <line x1="66" y1="100" x2="784" y2="100" stroke="var(--bad)" strokeWidth="1.5" strokeDasharray="4 3"/>
            <text className="sv-label" x="70" y="92" fill="var(--bad)">Documented floor — 15 s internal cooldown</text>
            <g fill="var(--er-f)">
              <rect x="75" y="178" width="21" height="18"/><rect x="102" y="176" width="21" height="20"/>
              <rect x="129" y="175" width="21" height="21"/><rect x="156" y="159" width="21" height="37"/>
              <rect x="183" y="158" width="21" height="38"/><rect x="210" y="143" width="21" height="53"/>
              <rect x="237" y="143" width="21" height="53"/><rect x="264" y="141" width="21" height="55"/>
              <rect x="291" y="140" width="21" height="56"/><rect x="318" y="131" width="21" height="65"/>
              <rect x="345" y="123" width="21" height="73"/><rect x="372" y="123" width="21" height="73"/>
              <rect x="399" y="123" width="21" height="73"/><rect x="426" y="123" width="21" height="73"/>
              <rect x="453" y="123" width="21" height="73"/><rect x="480" y="123" width="21" height="73"/>
              <rect x="507" y="123" width="21" height="73"/><rect x="534" y="122" width="21" height="74"/>
              <rect x="561" y="122" width="21" height="74"/><rect x="588" y="117" width="21" height="79"/>
              <rect x="615" y="114" width="21" height="82"/><rect x="642" y="102" width="21" height="94"/>
              <rect x="669" y="102" width="21" height="94"/>
            </g>
            <g fill="var(--hs-f)">
              <rect x="696" y="66" width="21" height="130"/><rect x="723" y="63" width="21" height="133"/>
              <rect x="750" y="30" width="21" height="166"/>
            </g>
            <text className="sv-numb" x="85" y="172" fill="var(--er-f)">2.7</text>
            <text className="sv-numb" x="760" y="24" textAnchor="middle" fill="var(--hs-f)">25.4</text>
            <text className="sv-label" x="66" y="222">26 intervals between proc applications, sorted</text>
            <text className="sv-label" x="784" y="222" textAnchor="end" fill="var(--er-f)">23 of 26 below 15 s</text>
            <text className="sv-note" x="66" y="242">Gap from consuming a proc to the next appearing: floor 1.01 s, median 7.63 s. A 15 s cooldown would floor that at 14.0 s.</text>
          </svg>
          <figcaption>Applications and removals <b>strictly alternate — zero overlaps across 26 transitions</b>, so you can only ever hold one proc and unspent supply cannot accumulate. The first proc lands at 5.8 s against a full-health 10,000,000 HP dummy, so the health condition is not gating it either.</figcaption>
        </figure>

        <div className="call flag">
          <h4>What this overturned</h4>
          <p>An earlier version of this page argued that roughly half of all Missile Blasts were unprocced and that the player was buying Supercharge with bad Missile Blasts. <b>Both were wrong</b>, derived from the reference document rather than the log. <b>All 27 Missile Blasts fired with the proc up, and no proc expired unused.</b></p>
          <p>Only two Rapid Shots went off while a proc was active, both with the Missile Blast following on the very next GCD, and the proc had landed 0.33 s and 0.10 s earlier — committed keystrokes, not decisions. <b>22 of 24 Rapid Shots had no proc available to use instead.</b></p>
        </div>

        <div className="call">
          <h4>The real cost of a long hold</h4>
          <p>Median hold from proc to Missile Blast is 2.0 GCDs; the longest was 5.9. The long ones all wait out the locked block, which cannot be interrupted, so they are structural. But because holding suppresses generation, roughly <b>30% of the parse was spent sitting on a proc</b>. Supply accelerates as the fight goes on — mean re-proc gap 10.4 s in the first third, <b>3.7 s in the last</b>, where Rapid Shots usage correspondingly halves from 9 to 5. The filler mix already tracks the supply curve.</p>
        </div>
      </section>

      {/* ===== 05 TEN GCD ===== */}
      <section>
        <h2><span className="num">05</span> Why ten GCDs, at any alacrity</h2>
        <p className="lede">Alacrity divides the GCD and every 15-second mechanic by the same factor, so the ratio never moves.</p>

        <figure>
          <svg viewBox="0 0 820 250" role="img" aria-label="Two timelines: at zero alacrity ten GCDs span 15 seconds; at 7.02 percent alacrity ten GCDs span 14.015 seconds. Both hold exactly ten GCDs.">
            <text className="sv-label" x="100" y="40">Base game — 0% alacrity</text>
            <line className="sv-axis" x1="100" y1="96" x2="760" y2="96"/>
            <g className="sv-tick">
              <line x1="100" y1="62" x2="100" y2="96"/><line x1="166" y1="68" x2="166" y2="96"/>
              <line x1="232" y1="68" x2="232" y2="96"/><line x1="298" y1="68" x2="298" y2="96"/>
              <line x1="364" y1="68" x2="364" y2="96"/><line x1="430" y1="68" x2="430" y2="96"/>
              <line x1="496" y1="68" x2="496" y2="96"/><line x1="562" y1="68" x2="562" y2="96"/>
              <line x1="628" y1="68" x2="628" y2="96"/><line x1="694" y1="68" x2="694" y2="96"/>
              <line x1="760" y1="62" x2="760" y2="96"/>
            </g>
            <rect x="100" y="76" width="660" height="20" fill="currentColor" opacity=".1"/>
            <g className="sv-num" textAnchor="middle">
              <text x="133" y="91">1</text><text x="199" y="91">2</text><text x="265" y="91">3</text>
              <text x="331" y="91">4</text><text x="397" y="91">5</text><text x="463" y="91">6</text>
              <text x="529" y="91">7</text><text x="595" y="91">8</text><text x="661" y="91">9</text><text x="727" y="91">10</text>
            </g>
            <text className="sv-num" x="100" y="116">GCD 1.500 s</text>
            <text className="sv-numb" x="768" y="91">15.000 s</text>

            <text className="sv-label" x="100" y="160" fill="var(--brass)">This parse — 7.02% alacrity</text>
            <line className="sv-axis" x1="100" y1="216" x2="717" y2="216"/>
            <g className="sv-tick">
              <line x1="100" y1="182" x2="100" y2="216"/><line x1="162" y1="188" x2="162" y2="216"/>
              <line x1="223" y1="188" x2="223" y2="216"/><line x1="285" y1="188" x2="285" y2="216"/>
              <line x1="347" y1="188" x2="347" y2="216"/><line x1="409" y1="188" x2="409" y2="216"/>
              <line x1="470" y1="188" x2="470" y2="216"/><line x1="532" y1="188" x2="532" y2="216"/>
              <line x1="594" y1="188" x2="594" y2="216"/><line x1="655" y1="188" x2="655" y2="216"/>
              <line x1="717" y1="182" x2="717" y2="216"/>
            </g>
            <rect x="100" y="196" width="617" height="20" fill="var(--brass)" opacity=".2"/>
            <g className="sv-num" textAnchor="middle">
              <text x="131" y="211">1</text><text x="193" y="211">2</text><text x="254" y="211">3</text>
              <text x="316" y="211">4</text><text x="378" y="211">5</text><text x="439" y="211">6</text>
              <text x="501" y="211">7</text><text x="563" y="211">8</text><text x="624" y="211">9</text><text x="686" y="211">10</text>
            </g>
            <text className="sv-num" x="100" y="236">GCD 1.4015 s</text>
            <text className="sv-numb" x="725" y="211" fill="var(--brass)">14.015 s</text>
            <line x1="717" y1="146" x2="717" y2="224" stroke="var(--brass)" strokeWidth="1.5" strokeDasharray="3 3"/>
          </svg>
          <figcaption>Both rows hold exactly ten GCDs; only the absolute length changes. Because Thermal Detonator's cooldown and the DoT durations compress by the identical factor, the ten-GCD cycle is structural rather than a property of this gear level.</figcaption>
        </figure>

        <div className="tw">
        <table>
          <thead><tr><th>Mechanic</th><th className="n">Base</th><th className="n">Measured</th><th className="n">Scale</th><th className="n">Implied GCD</th></tr></thead>
          <tbody>
            <tr><td>Incendiary Missile debuff duration</td><td className="n">15 s</td><td className="n">14.032</td><td className="n">0.9355</td><td className="n">1.4032</td></tr>
            <tr><td>Serrated Shot debuff duration</td><td className="n">15 s</td><td className="n">14.019</td><td className="n">0.9346</td><td className="n">1.4019</td></tr>
            <tr><td>Thermal Detonator cooldown</td><td className="n">15 s</td><td className="n">14.031</td><td className="n">0.9354</td><td className="n">1.4031</td></tr>
            <tr><td>Speed to Burn internal cooldown</td><td className="n">15 s</td><td className="n">13.980</td><td className="n">0.9320</td><td className="n">1.3980</td></tr>
            <tr><td>Electro Net cooldown</td><td className="n">90 s</td><td className="n">84.551</td><td className="n">0.9395</td><td className="n">1.4092</td></tr>
          </tbody>
        </table>
        </div>
        <p style={{ marginTop: '16px' }}>Individual activation gaps run as low as <span className="mono">1.177 s</span>, which suggested a faster GCD. It cannot be — a 1.29 s GCD would make every measurement above impossible. Those are <strong>±0.12 s of timestamp jitter</strong>, which cancels over 210 activations, so net drift across the parse is the number to trust rather than any single transition.</p>
      </section>

      {/* ===== 06 SCORECARD ===== */}
      <section>
        <h2><span className="num">06</span> Execution scorecard</h2>
        <p className="lede">All measured from effect apply/remove events. One row lags.</p>
        <div className="meters">
          <div className="meter"><span className="lbl">Missile Blasts fired with Volatile Warhead active</span><span className="val">27 / 27</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Procs converted — none expired unused</span><span className="val">27 / 27</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Speed to Burn spent on Power Shot (zero desync)</span><span className="val">21 / 21</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Mag Shots that vented heat (Superheated Shot)</span><span className="val">43 / 43</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">DoT uptime — all five tracked DoTs, zero gaps</span><span className="val">100%</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Mag Shots made free by Innovative Particle Accelerator</span><span className="val">42 / 43</span><span className="track"><span className="fill" style={{ width: '97.7%' }}></span></span></div>
          <div className="meter"><span className="lbl">Innovative Particle Accelerator dead zone entered</span><span className="val">0 / 43</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">GCD efficiency at the pinned 1.4015 s</span><span className="val">98.25%</span><span className="track"><span className="fill warn" style={{ width: '98.25%' }}></span></span></div>
          <div className="meter lag"><span className="lbl">Cycles reaching 10 Supercharge</span><span className="val">8 / 20</span><span className="track"><span className="fill bad" style={{ width: '40%' }}></span></span></div>
        </div>
      </section>

      {/* ===== 07 DRIFT ===== */}
      <section>
        <h2><span className="num">07</span> Where the 5.26 seconds sits</h2>
        <p className="lede">Net time against a 1.4015 s budget per activation, two for the Unload channel. Negative bars came in under budget — that is the jitter.</p>
        <figure>
          <svg viewBox="0 0 780 310" role="img" aria-label="Net drift by ability. Serrated Shot plus 2.73 seconds is 52 percent of the total; every other ability is under half a second except Thermal Detonator, Missile Blast and Unload. Power Shot came in 0.69 seconds under budget, which is timestamp jitter.">
            <line className="sv-axis" x1="230" y1="28" x2="230" y2="247"/>
            <g className="sv-num" textAnchor="middle">
              <text x="230" y="262">0</text><text x="405" y="262">+1 s</text><text x="580" y="262">+2 s</text>
            </g>
            <g className="sv-label" fill="currentColor">
              <text x="64" y="48">Serrated Shot (21)</text><text x="64" y="75">Thermal Detonator (21)</text>
              <text x="64" y="102">Missile Blast (27)</text><text x="64" y="129">Unload (2)</text>
              <text x="64" y="156">Rapid Shots (24)</text><text x="64" y="183">Electro Net (4)</text>
              <text x="64" y="210">Incendiary Missile (21)</text><text x="64" y="237">Mag Shot (42)</text>
            </g>
            <g><title>Serrated Shot</title><use href="#i-sb" x="30" y="32" width="24" height="24"/></g>
            <g><title>Thermal Detonator</title><use href="#i-ap" x="30" y="59" width="24" height="24"/></g>
            <g><title>Missile Blast</title><use href="#i-er" x="30" y="86" width="24" height="24"/></g>
            <g><title>Unload</title><use href="#i-fa" x="30" y="113" width="24" height="24"/></g>
            <g><title>Rapid Shots</title><use href="#i-hs" x="30" y="140" width="24" height="24"/></g>
            <g><title>Electro Net</title><use href="#i-en" x="30" y="167" width="24" height="24"/></g>
            <g><title>Incendiary Missile</title><use href="#i-ir" x="30" y="194" width="24" height="24"/></g>
            <g><title>Mag Shot</title><use href="#i-mb" x="30" y="221" width="24" height="24"/></g>
            <rect x="230" y="36" width="478" height="16" fill="var(--brass)"/>
            <rect x="230" y="63" width="180" height="16" fill="var(--hs-f)"/>
            <rect x="230" y="90" width="156" height="16" fill="var(--hs-f)"/>
            <rect x="230" y="117" width="133" height="16" fill="var(--hs-f)"/>
            <rect x="230" y="144" width="46" height="16" fill="var(--hs-f)"/>
            <rect x="230" y="171" width="39" height="16" fill="var(--hs-f)"/>
            <rect x="230" y="198" width="16" height="16" fill="var(--hs-f)"/>
            <rect x="226" y="225" width="4" height="16" fill="var(--cb-f)"/>
            <g className="sv-numb">
              <text x="716" y="49" fill="var(--brass)">+2.73</text>
              <text x="418" y="76">+1.03</text><text x="394" y="103">+0.89</text><text x="371" y="130">+0.76</text>
              <text x="284" y="157">+0.26</text><text x="277" y="184">+0.22</text><text x="254" y="211">+0.09</text>
              <text x="240" y="238" fill="var(--cb-f)">−0.02</text>
            </g>
            <text className="sv-label" x="766" y="34" textAnchor="end" fill="var(--brass)">52% of the total</text>
            <line className="sv-tick" x1="30" y1="274" x2="750" y2="274"/>
            <g><title>Power Shot</title><use href="#i-cb" x="30" y="280" width="22" height="22"/></g>
            <text className="sv-note" x="62" y="288">Power Shot (47) came in <tspan fill="var(--cb-f)">0.69 s under</tspan> budget — not a gain,</text>
            <text className="sv-note" x="62" y="302">that is the ±0.12 s timestamp jitter cancelling out.</text>
          </svg>
          <figcaption>Serrated Shot's median handoff is <b>1.503 s</b> against a <b>1.370 s</b> floor already demonstrated in this same parse, so roughly 2.7 s is genuinely recoverable rather than cast-time cost. It is the rotation's decision point — the moment you must read Supercharge, proc state and heat at once. Deciding fillers 2 and 3 <em>before</em> casting it is the drill.</figcaption>
        </figure>
      </section>

      {/* ===== 08 GRID ===== */}
      <section>
        <h2><span className="num">08</span> Reference grid — 20 cycles, IR anchored</h2>
        <p className="lede">Read down F1, F2 and F3. Everything else is fixed. Hover any icon for its name.</p>
        <div className="gridwrap">
          <div className="cgrid">
            <div className="crow chead">
              <div>#</div><div>IR</div><div>F1</div><div>CB</div><div>SB</div><div>F2</div><div>F3</div><div>F4</div>
              <div>AP</div><div>ins</div><div>MB</div><div>CB</div><div>MB</div><div>Len</div><div>SC</div><div>SCC</div>
            </div>
            <div className="crow"><div className="cyc">1</div><span className="ic" data-n="Incendiary Missile" role="img" aria-label="Incendiary Missile"><svg viewBox="0 0 50 50"><use href="#i-ir"/></svg></span><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Serrated Shot" role="img" aria-label="Serrated Shot"><svg viewBox="0 0 50 50"><use href="#i-sb"/></svg></span><span className="ic sccmark" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Thermal Detonator" role="img" aria-label="Thermal Detonator"><svg viewBox="0 0 50 50"><use href="#i-ap"/></svg></span><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><div className="len">14.43</div><div className="stk ">9</div><div className="scc yes">●</div></div>
            <div className="crow flagrow"><div className="cyc">2</div><span className="ic" data-n="Incendiary Missile" role="img" aria-label="Incendiary Missile"><svg viewBox="0 0 50 50"><use href="#i-ir"/></svg></span><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Serrated Shot" role="img" aria-label="Serrated Shot"><svg viewBox="0 0 50 50"><use href="#i-sb"/></svg></span><span className="ic rcmark" data-n="Unload" role="img" aria-label="Unload"><svg viewBox="0 0 50 50"><use href="#i-fa"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Thermal Detonator" role="img" aria-label="Thermal Detonator"><svg viewBox="0 0 50 50"><use href="#i-ap"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic sccmark" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><div className="len">15.38</div><div className="stk low">6</div><div className="scc yes">●</div></div>
            <div className="crow bestrow"><div className="cyc">3</div><span className="ic" data-n="Incendiary Missile" role="img" aria-label="Incendiary Missile"><svg viewBox="0 0 50 50"><use href="#i-ir"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Serrated Shot" role="img" aria-label="Serrated Shot"><svg viewBox="0 0 50 50"><use href="#i-sb"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Thermal Detonator" role="img" aria-label="Thermal Detonator"><svg viewBox="0 0 50 50"><use href="#i-ap"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic sccmark" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><div className="len">14.49</div><div className="stk ten">10</div><div className="scc yes">●</div></div>
            <div className="crow"><div className="cyc">4</div><span className="ic" data-n="Incendiary Missile" role="img" aria-label="Incendiary Missile"><svg viewBox="0 0 50 50"><use href="#i-ir"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Serrated Shot" role="img" aria-label="Serrated Shot"><svg viewBox="0 0 50 50"><use href="#i-sb"/></svg></span><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Thermal Detonator" role="img" aria-label="Thermal Detonator"><svg viewBox="0 0 50 50"><use href="#i-ap"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><span className="ic sccmark" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><div className="len">14.20</div><div className="stk ">9</div><div className="scc yes">●</div></div>
            <div className="crow"><div className="cyc">5</div><span className="ic" data-n="Incendiary Missile" role="img" aria-label="Incendiary Missile"><svg viewBox="0 0 50 50"><use href="#i-ir"/></svg></span><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Serrated Shot" role="img" aria-label="Serrated Shot"><svg viewBox="0 0 50 50"><use href="#i-sb"/></svg></span><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Thermal Detonator" role="img" aria-label="Thermal Detonator"><svg viewBox="0 0 50 50"><use href="#i-ap"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><div className="len">14.00</div><div className="stk ">9</div><div className="scc no">○</div></div>
            <div className="crow"><div className="cyc">6</div><span className="ic" data-n="Incendiary Missile" role="img" aria-label="Incendiary Missile"><svg viewBox="0 0 50 50"><use href="#i-ir"/></svg></span><span className="ic sccmark" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Serrated Shot" role="img" aria-label="Serrated Shot"><svg viewBox="0 0 50 50"><use href="#i-sb"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic" data-n="Electro Net" role="img" aria-label="Electro Net"><svg viewBox="0 0 50 50"><use href="#i-en"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Thermal Detonator" role="img" aria-label="Thermal Detonator"><svg viewBox="0 0 50 50"><use href="#i-ap"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><div className="len">14.34</div><div className="stk low">8</div><div className="scc yes">●</div></div>
            <div className="crow"><div className="cyc">7</div><span className="ic" data-n="Incendiary Missile" role="img" aria-label="Incendiary Missile"><svg viewBox="0 0 50 50"><use href="#i-ir"/></svg></span><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Serrated Shot" role="img" aria-label="Serrated Shot"><svg viewBox="0 0 50 50"><use href="#i-sb"/></svg></span><span className="ic sccmark" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Thermal Detonator" role="img" aria-label="Thermal Detonator"><svg viewBox="0 0 50 50"><use href="#i-ap"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><div className="len">14.23</div><div className="stk ">9</div><div className="scc yes">●</div></div>
            <div className="crow"><div className="cyc">8</div><span className="ic" data-n="Incendiary Missile" role="img" aria-label="Incendiary Missile"><svg viewBox="0 0 50 50"><use href="#i-ir"/></svg></span><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Serrated Shot" role="img" aria-label="Serrated Shot"><svg viewBox="0 0 50 50"><use href="#i-sb"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic sccmark" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Thermal Detonator" role="img" aria-label="Thermal Detonator"><svg viewBox="0 0 50 50"><use href="#i-ap"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><div className="len">14.07</div><div className="stk ">9</div><div className="scc yes">●</div></div>
            <div className="crow bestrow"><div className="cyc">9</div><span className="ic" data-n="Incendiary Missile" role="img" aria-label="Incendiary Missile"><svg viewBox="0 0 50 50"><use href="#i-ir"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Serrated Shot" role="img" aria-label="Serrated Shot"><svg viewBox="0 0 50 50"><use href="#i-sb"/></svg></span><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic" data-n="Thermal Detonator" role="img" aria-label="Thermal Detonator"><svg viewBox="0 0 50 50"><use href="#i-ap"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic sccmark" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><div className="len">15.26</div><div className="stk ten">10</div><div className="scc yes">●</div></div>
            <div className="crow"><div className="cyc">10</div><span className="ic" data-n="Incendiary Missile" role="img" aria-label="Incendiary Missile"><svg viewBox="0 0 50 50"><use href="#i-ir"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Serrated Shot" role="img" aria-label="Serrated Shot"><svg viewBox="0 0 50 50"><use href="#i-sb"/></svg></span><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Thermal Detonator" role="img" aria-label="Thermal Detonator"><svg viewBox="0 0 50 50"><use href="#i-ap"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><span className="ic sccmark" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><div className="len">14.11</div><div className="stk ">9</div><div className="scc yes">●</div></div>
            <div className="crow bestrow"><div className="cyc">11</div><span className="ic" data-n="Incendiary Missile" role="img" aria-label="Incendiary Missile"><svg viewBox="0 0 50 50"><use href="#i-ir"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Serrated Shot" role="img" aria-label="Serrated Shot"><svg viewBox="0 0 50 50"><use href="#i-sb"/></svg></span><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Thermal Detonator" role="img" aria-label="Thermal Detonator"><svg viewBox="0 0 50 50"><use href="#i-ap"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><span className="ic sccmark" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><div className="len">14.05</div><div className="stk ten">10</div><div className="scc yes">●</div></div>
            <div className="crow flagrow"><div className="cyc">12</div><span className="ic" data-n="Incendiary Missile" role="img" aria-label="Incendiary Missile"><svg viewBox="0 0 50 50"><use href="#i-ir"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Serrated Shot" role="img" aria-label="Serrated Shot"><svg viewBox="0 0 50 50"><use href="#i-sb"/></svg></span><span className="ic" data-n="Electro Net" role="img" aria-label="Electro Net"><svg viewBox="0 0 50 50"><use href="#i-en"/></svg></span><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Thermal Detonator" role="img" aria-label="Thermal Detonator"><svg viewBox="0 0 50 50"><use href="#i-ap"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><div className="len">14.23</div><div className="stk low">7</div><div className="scc no">○</div></div>
            <div className="crow"><div className="cyc">13</div><span className="ic" data-n="Incendiary Missile" role="img" aria-label="Incendiary Missile"><svg viewBox="0 0 50 50"><use href="#i-ir"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Serrated Shot" role="img" aria-label="Serrated Shot"><svg viewBox="0 0 50 50"><use href="#i-sb"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic sccmark" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic rcmark" data-n="Thermal Detonator" role="img" aria-label="Thermal Detonator"><svg viewBox="0 0 50 50"><use href="#i-ap"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><div className="len">14.91</div><div className="stk ">9</div><div className="scc yes">●</div></div>
            <div className="crow"><div className="cyc">14</div><span className="ic" data-n="Incendiary Missile" role="img" aria-label="Incendiary Missile"><svg viewBox="0 0 50 50"><use href="#i-ir"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Serrated Shot" role="img" aria-label="Serrated Shot"><svg viewBox="0 0 50 50"><use href="#i-sb"/></svg></span><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Thermal Detonator" role="img" aria-label="Thermal Detonator"><svg viewBox="0 0 50 50"><use href="#i-ap"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic sccmark" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><div className="len">14.02</div><div className="stk ">9</div><div className="scc yes">●</div></div>
            <div className="crow bestrow"><div className="cyc">15</div><span className="ic" data-n="Incendiary Missile" role="img" aria-label="Incendiary Missile"><svg viewBox="0 0 50 50"><use href="#i-ir"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Serrated Shot" role="img" aria-label="Serrated Shot"><svg viewBox="0 0 50 50"><use href="#i-sb"/></svg></span><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Thermal Detonator" role="img" aria-label="Thermal Detonator"><svg viewBox="0 0 50 50"><use href="#i-ap"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic sccmark" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><div className="len">14.05</div><div className="stk ten">10</div><div className="scc yes">●</div></div>
            <div className="crow bestrow"><div className="cyc">16</div><span className="ic" data-n="Incendiary Missile" role="img" aria-label="Incendiary Missile"><svg viewBox="0 0 50 50"><use href="#i-ir"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Serrated Shot" role="img" aria-label="Serrated Shot"><svg viewBox="0 0 50 50"><use href="#i-sb"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Thermal Detonator" role="img" aria-label="Thermal Detonator"><svg viewBox="0 0 50 50"><use href="#i-ap"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic sccmark" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><div className="len">14.21</div><div className="stk ten">10</div><div className="scc yes">●</div></div>
            <div className="crow bestrow"><div className="cyc">17</div><span className="ic" data-n="Incendiary Missile" role="img" aria-label="Incendiary Missile"><svg viewBox="0 0 50 50"><use href="#i-ir"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Serrated Shot" role="img" aria-label="Serrated Shot"><svg viewBox="0 0 50 50"><use href="#i-sb"/></svg></span><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Thermal Detonator" role="img" aria-label="Thermal Detonator"><svg viewBox="0 0 50 50"><use href="#i-ap"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic sccmark" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><div className="len">14.19</div><div className="stk ten">10</div><div className="scc yes">●</div></div>
            <div className="crow"><div className="cyc">18</div><span className="ic" data-n="Incendiary Missile" role="img" aria-label="Incendiary Missile"><svg viewBox="0 0 50 50"><use href="#i-ir"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Serrated Shot" role="img" aria-label="Serrated Shot"><svg viewBox="0 0 50 50"><use href="#i-sb"/></svg></span><span className="ic" data-n="Electro Net" role="img" aria-label="Electro Net"><svg viewBox="0 0 50 50"><use href="#i-en"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Thermal Detonator" role="img" aria-label="Thermal Detonator"><svg viewBox="0 0 50 50"><use href="#i-ap"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><span className="ic sccmark" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><div className="len">14.19</div><div className="stk ">9</div><div className="scc yes">●</div></div>
            <div className="crow bestrow"><div className="cyc">19</div><span className="ic" data-n="Incendiary Missile" role="img" aria-label="Incendiary Missile"><svg viewBox="0 0 50 50"><use href="#i-ir"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Serrated Shot" role="img" aria-label="Serrated Shot"><svg viewBox="0 0 50 50"><use href="#i-sb"/></svg></span><span className="ic" data-n="Rapid Shots" role="img" aria-label="Rapid Shots"><svg viewBox="0 0 50 50"><use href="#i-hs"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Thermal Detonator" role="img" aria-label="Thermal Detonator"><svg viewBox="0 0 50 50"><use href="#i-ap"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><span className="ic sccmark" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><div className="len">14.34</div><div className="stk ten">10</div><div className="scc yes">●</div></div>
            <div className="crow bestrow"><div className="cyc">20</div><span className="ic" data-n="Incendiary Missile" role="img" aria-label="Incendiary Missile"><svg viewBox="0 0 50 50"><use href="#i-ir"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Serrated Shot" role="img" aria-label="Serrated Shot"><svg viewBox="0 0 50 50"><use href="#i-sb"/></svg></span><span className="ic" data-n="Missile Blast" role="img" aria-label="Missile Blast"><svg viewBox="0 0 50 50"><use href="#i-er"/></svg></span><span className="ic rcmark" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Thermal Detonator" role="img" aria-label="Thermal Detonator"><svg viewBox="0 0 50 50"><use href="#i-ap"/></svg></span><span className="ic nil" aria-hidden="true"></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><span className="ic sccmark" data-n="Power Shot" role="img" aria-label="Power Shot"><svg viewBox="0 0 50 50"><use href="#i-cb"/></svg></span><span className="ic" data-n="Mag Shot" role="img" aria-label="Mag Shot"><svg viewBox="0 0 50 50"><use href="#i-mb"/></svg></span><div className="len">final</div><div className="stk ten">10</div><div className="scc yes">●</div></div>
          </div>
        </div>
        <div className="markkey">
          <span><i className="bar" style={{ background: 'var(--brass)' }}></i>
            <span className="ic" data-n="Supercharged Gas" role="img" aria-label="Supercharged Gas"><svg viewBox="0 0 50 50"><use href="#i-scc"/></svg></span>
            fired off‑GCD at this point</span>
          <span><i className="bar" style={{ background: 'var(--cb-f)' }}></i>
            <span className="ic" data-n="Vent Heat" role="img" aria-label="Vent Heat"><svg viewBox="0 0 50 50"><use href="#i-rc"/></svg></span>
            fired off‑GCD at this point</span>
          <span style={{ opacity: '.75' }}>Green rows: 10 stacks · Red rows: the two worst · ins / F4: the two cycles that ran 11 slots</span>
        </div>
        <p style={{ marginTop: '20px' }}>Filler slots across the 20 cycles: <strong>Missile Blast 26 (43%), Rapid Shots 24 (40%), Power Shot 6 (10%), Electro Net 3, Unload 1</strong>. The most common shape is <span className="mono">ER / HS / ER</span> at four occurrences, and every one of the eight ten-stack cycles carries two Missile Blasts.</p>
      </section>

      {/* ===== 09 ===== */}
      <section>
        <h2><span className="num">09</span> Still on the table</h2>

        <div className="call flag">
          <h4>1 · The 24 Rapid Shots</h4>
          <p>22 of them had no proc available, so they are not missed Missile Blasts — they are missed <b>Power Shot</b>, which is a heat question, which is a Vent Heat question. Used three times at <span className="mono">37.5</span> / <span className="mono">196.8</span> / <span className="mono">295.0</span>, intervals of <b>159.2 s then 98.3 s</b>. If the shorter one is the true cooldown, a use was missed near 137 s — exactly the stretch (cycles 9–14) where Power Shot substitutes for the second Missile Blast and stacks sag to 10, 9, 10, 7, 9, 9.</p>
        </div>

        <div className="call flag">
          <h4>2 · Cycle 2, and Electro Net placement</h4>
          <p>Cycle 2 is the worst in either parse: 15.38 s, <b>6 Supercharge</b>, Unload burning two GCDs for nothing. Cycles 6, 12 and 18 spent a filler on Electro Net; in 12 it landed alongside two Power Shots so no slot generated more than 1. Keep both Missile Blasts and let Electro Net take the Rapid Shots slot — that holds the cycle at 9 instead of 7.</p>
        </div>

        <div className="call">
          <h4>3 · 2.7 s in the Serrated Shot handoff</h4>
          <p>Median 1.503 s against a 1.370 s floor already hit in this parse. About 2 GCDs.</p>
        </div>

        <div className="call flag">
          <h4>4 · Does Serrated Shot's Supercharge tick apply to parses 1 and 2?</h4>
          <p>Confirmed directly in a third parse (35,067 DPS): every Serrated Shot cast grants +1 Supercharge, no exceptions (section 03). The original two parses' raw logs weren't available to re-check this. If they show the same tick, section 03's "5 locked" model has been under-counting since this page's first draft; if they don't, something about the third parse's gear or tactical is generating Supercharge Serrated Shot normally doesn't.</p>
        </div>

        <h3>Closed — nothing left to win</h3>
        <ul>
          <li><b>Volatile Warhead</b> — 27 procs, 27 Missile Blasts, none wasted, none expired. Confirmed again in a third parse: 24/24.</li>
          <li><b>Innovative Particle Accelerator</b> — 42 of 43 Mag Shots free; the dead zone never entered in either parse.</li>
          <li><b>Speed to Burn</b> — 21 procs, all 21 on Power Shot. The documented desync never happened.</li>
          <li><b>DoT uptime</b> — 100% on all five, from effect events.</li>
          <li><b>Electro Net</b> — true cooldown 84.551 s; the best interval in the parse was 84.551 s.</li>
          <li><b>Cycle structure</b> — every cycle in both parses maps onto the same ten-GCD spine.</li>
          <li><b>Unload as a proc-down fallback</b> — confirmed in a third parse: a full channel outdamages two ordinary fillers when Volatile Warhead has no proc up (~56,000 vs ~31,000), paired with Vent Heat for the heat cost (section 03).</li>
          <li><b>Opener Adrenal</b> — the third parse fires an offensive Adrenal off-GCD in the opener, reused ~193 s later. Pure cooldown access, not a rotation decision, but worth slotting into your own opener if you have one available.</li>
        </ul>
      </section>

      <footer>
        <p>Ability icons are the in-game art, supplied by the user. Parse 2 detail log: 2,870 events, 245 activations, EnterCombat 0 to ExitCombat 299.451 s, Operations Training Dummy at 10,000,000 HP, death 299.472 s. Parse 3: 2,855 events, 220 activations, EnterCombat 0 to Death 285.153 s, same 10,000,000 HP dummy, 35,067 DPS — supplied the Serrated Shot Supercharge correction and the Unload-fallback finding in section 03 and the closed list in section 09, traced by matching the raw Supercharge stack counter to the damage event landing at each instant. Parse 1: 241 events, 220 on‑GCD, span 321.81 s, assumed to share parse 2's gear and therefore its 7.02% alacrity. Cycles anchored on Incendiary Missile; Supercharged Gas, Vent Heat and the attack adrenal treated as off‑GCD; Unload budgeted at two GCDs. Supercharge totals are anchor-dependent — the same parse measured from Thermal Detonator gives 9 of 20 rather than 8. Alacrity derived from five mechanics with known base values, the four 15 s probes agreeing to within 0.004. Heat amounts appear in neither log — only Generate and Vent events — so no heat simulation is attempted. Vent Heat's cooldown is inferred from one interval and is worth confirming in game.</p>
      </footer>

      </div>
    </div>
  );
}
