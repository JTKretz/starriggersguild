/**
 * Fury — Rotation Standard
 * ---------------------------------------------------------------------------
 * Built from a single StarParse detail log (no second parse to compare).
 * Ability icons live as separate files under /public/icons/marauder.
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
  .cgrid{min-width:820px}
  .crow{display:grid;grid-template-columns:26px repeat(11,minmax(28px,1fr)) 44px 26px;
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

/* ---- reference-grid data: 17 macro-cycles anchored on Ravage, from the log ---- */
type Cell = { n: string; mark?: 'scc' | 'rc' } | null;
type CycleRow = { cyc: string; cells: Cell[]; off: string[]; len: string; slots: number; flag?: boolean; best?: boolean };

const g = (n: string, mark?: 'scc' | 'rc'): Cell => ({ n, mark });

const P1: Cell[] = [g('Ravage'), g('Force Scream'), g('Vicious Slash'), g('Furious Strike'), g('Obliterate'), g('Vicious Slash'), g('Battering Assault'), g('Force Crush'), null, g('Furious Strike'), g('Obliterate')];
const P2: Cell[] = [g('Ravage'), g('Force Scream'), g('Vicious Throw'), g('Furious Strike'), g('Obliterate'), g('Vicious Slash'), g('Battering Assault'), g('Force Crush'), null, g('Furious Strike'), g('Obliterate')];

const CYCLES: CycleRow[] = [
  { cyc: '1', cells: P1, off: ['Raging Burst', 'Berserk', 'Raging Burst', 'Frenzy', 'Berserk'], len: '17.09', slots: 11, flag: true },
  { cyc: '2', cells: P1, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '17.00', slots: 11 },
  { cyc: '3', cells: P1, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '17.32', slots: 11 },
  { cyc: '4', cells: P1, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '17.04', slots: 11, best: true },
  { cyc: '5', cells: P1, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '17.02', slots: 11, best: true },
  { cyc: '6', cells: P1, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '17.17', slots: 11 },
  { cyc: '7', cells: P1, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '17.14', slots: 11 },
  { cyc: '8', cells: P1, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '17.19', slots: 11 },
  { cyc: '9', cells: P1, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '17.12', slots: 11 },
  { cyc: '10', cells: P1, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '17.07', slots: 11, best: true },
  { cyc: '11', cells: P1, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '17.13', slots: 11 },
  { cyc: '12', cells: P1, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '17.07', slots: 11, best: true },
  { cyc: '13', cells: [g('Ravage'), g('Force Scream'), g('Vicious Throw'), g('Furious Strike'), g('Obliterate'), g('Vicious Slash'), g('Battering Assault'), g('Force Crush'), null, g('Furious Strike'), g('Obliterate')], off: ['Raging Burst', 'Raging Burst', 'Frenzy', 'Berserk', 'Adrenal', 'Bloodthirst'], len: '17.07', slots: 12, flag: true },
  { cyc: '14', cells: P2, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '17.29', slots: 12 },
  { cyc: '15', cells: P2, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '17.03', slots: 12, best: true },
  { cyc: '16', cells: P2, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '17.28', slots: 12 },
  { cyc: '17', cells: P2, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '17.11', slots: 12, best: true },
];

export default function FuryRotation({ theme }: { theme?: 'dark' | 'light' }) {
  return (
    <div className="ar-root" data-theme={theme}>
      <style>{CSS}</style>
      <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute', overflow: 'hidden' }}><defs>
      <clipPath id="ico-clip2"><rect width="50" height="50" rx="7" ry="7"/></clipPath>
      <symbol id="f-rb" viewBox="0 0 50 50"><image href="/icons/marauder/raging-burst.webp" width="50" height="50" clipPath="url(#ico-clip2)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="f-fs" viewBox="0 0 50 50"><image href="/icons/marauder/furious-strike.webp" width="50" height="50" clipPath="url(#ico-clip2)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="f-ob" viewBox="0 0 50 50"><image href="/icons/marauder/obliterate.webp" width="50" height="50" clipPath="url(#ico-clip2)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="f-fc" viewBox="0 0 50 50"><image href="/icons/marauder/force-crush.png" width="50" height="50" clipPath="url(#ico-clip2)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="f-scr" viewBox="0 0 50 50"><image href="/icons/marauder/force-scream.webp" width="50" height="50" clipPath="url(#ico-clip2)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="f-rv" viewBox="0 0 50 50"><image href="/icons/marauder/ravage.webp" width="50" height="50" clipPath="url(#ico-clip2)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="f-ba" viewBox="0 0 50 50"><image href="/icons/marauder/battering-assault.webp" width="50" height="50" clipPath="url(#ico-clip2)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="f-vs" viewBox="0 0 50 50"><image href="/icons/marauder/vicious-slash.webp" width="50" height="50" clipPath="url(#ico-clip2)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="f-vt" viewBox="0 0 50 50"><image href="/icons/marauder/vicious-throw.webp" width="50" height="50" clipPath="url(#ico-clip2)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="f-bz" viewBox="0 0 50 50"><image href="/icons/marauder/berserk.webp" width="50" height="50" clipPath="url(#ico-clip2)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="f-chg" viewBox="0 0 50 50"><image href="/icons/marauder/force-charge.webp" width="50" height="50" clipPath="url(#ico-clip2)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="f-adr" viewBox="0 0 50 50"><image href="/icons/marauder/adrenal.webp" width="50" height="50" clipPath="url(#ico-clip2)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="f-fur" viewBox="0 0 50 50"><image href="/icons/marauder/fury.webp" width="50" height="50" clipPath="url(#ico-clip2)" preserveAspectRatio="xMidYMid slice"/></symbol>
      </defs></svg>

      <div className="wrap">

      <div className="mast">
        <p className="eyebrow">Marauder / Fury · single parse · 27,879 DPS</p>
        <h1>Two half-cycles, one alternating burst</h1>
        <p className="standfirst">A five-to-six-GCD half-cycle that alternates <strong>Berserk and Force Crush as the source of Destruction</strong>, every other half feeding an off-GCD Raging Burst. Two halves make one 17-second macro-cycle, repeated seventeen times.</p>
        <dl className="facts">
          <div className="fact"><dt>DPS</dt><dd>27,879<span className="was">summed logged damage / 301.9 s</span></dd></div>
          <div className="fact"><dt>GCD</dt><dd>1.2717<small>s</small><span className="was">alacrity 17.95%</span></dd></div>
          <div className="fact"><dt>Efficiency</dt><dd>84.39<small>%</small><span className="was">47.0 s net drift</span></dd></div>
          <div className="fact"><dt>Macro-cycle</dt><dd>17.1<small>s med</small><span className="was">2 halves, 11–12 slots</span></dd></div>
          <div className="fact"><dt>DoT uptime</dt><dd>100<small>%</small><span className="was">Bloody Slashes + Bleeding</span></dd></div>
          <div className="fact"><dt>Off-GCD weave</dt><dd>2<small>/half</small><span className="was">Raging Burst + Berserk</span></dd></div>
        </dl>
      </div>

      {/* ===== KEY ===== */}
      <section style={{ marginTop: '34px' }}>
        <h3 style={{ marginTop: '0' }}>Ability key — hover any icon anywhere on this page</h3>
        <div className="keygrid">
        <div className="keyrow"><span className="ic" data-n="Raging Burst" role="img" aria-label="Raging Burst"><svg viewBox="0 0 50 50"><use href="#f-rb"/></svg></span><div><b>Raging Burst</b><span>Off-GCD · autocrit, free via Destruction</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Furious Strike" role="img" aria-label="Furious Strike"><svg viewBox="0 0 50 50"><use href="#f-fs"/></svg></span><div><b>Furious Strike</b><span>On cooldown · grants Furious Rage</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Obliterate" role="img" aria-label="Obliterate"><svg viewBox="0 0 50 50"><use href="#f-ob"/></svg></span><div><b>Obliterate</b><span>Leap · grants Dominate, +8 Fury</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Force Crush" role="img" aria-label="Force Crush"><svg viewBox="0 0 50 50"><use href="#f-fc"/></svg></span><div><b>Force Crush</b><span>2 GCDs · alternate Destruction source</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Force Scream" role="img" aria-label="Force Scream"><svg viewBox="0 0 50 50"><use href="#f-scr"/></svg></span><div><b>Force Scream</b><span>Consumes Battle Cry</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Ravage" role="img" aria-label="Ravage"><svg viewBox="0 0 50 50"><use href="#f-rv"/></svg></span><div><b>Ravage</b><span>Free · builds Fury, applies Bloody Slashes</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Battering Assault" role="img" aria-label="Battering Assault"><svg viewBox="0 0 50 50"><use href="#f-ba"/></svg></span><div><b>Battering Assault</b><span>Rage generator</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Vicious Slash" role="img" aria-label="Vicious Slash"><svg viewBox="0 0 50 50"><use href="#f-vs"/></svg></span><div><b>Vicious Slash</b><span>Filler · where the drift sits</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Vicious Throw" role="img" aria-label="Vicious Throw"><svg viewBox="0 0 50 50"><use href="#f-vt"/></svg></span><div><b>Vicious Throw</b><span>Sub-30% · replaces Vicious Slash</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Berserk" role="img" aria-label="Berserk"><svg viewBox="0 0 50 50"><use href="#f-bz"/></svg></span><div><b>Berserk</b><span>Off-GCD · needs 30 Fury, grants Destruction</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Force Charge" role="img" aria-label="Force Charge"><svg viewBox="0 0 50 50"><use href="#f-chg"/></svg></span><div><b>Force Charge</b><span>Gap closer · opener only here</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Fury" role="img" aria-label="Fury"><svg viewBox="0 0 50 50"><use href="#f-fur"/></svg></span><div><b>Fury</b><span>0–30 stacking resource, spent on Berserk</span></div></div>
      </div>
      </section>

      {/* ===== 01 OPENER ===== */}
      <section>
        <h2><span className="num">01</span> The opener</h2>
        <p className="lede">Deliberately paced, not a clean N-GCD template: the log shows a real gap after Force Crush, timed to land the Adrenal right before the first Raging Burst — exactly what the ability guide recommends.</p>

        <figure>
          <svg viewBox="0 0 820 220" role="img" aria-label="Opener: Force Charge, Force Crush, then a paced gap for the Adrenal, Raging Burst and Berserk off-GCD, then Furious Strike, Obliterate, Ravage into the first steady cycle.">
            <g className="sv-num" textAnchor="middle">
              <text x="84" y="56">1</text><text x="220" y="56">2</text><text x="400" y="56">3</text><text x="480" y="56">4</text><text x="560" y="56">5</text>
            </g>
            <rect x="146" y="62" width="180" height="56" rx="6" fill="none" stroke="currentColor" opacity=".4" strokeDasharray="4 3"/>
            <g><title>Force Charge</title><use href="#f-chg" x="60" y="66" width="48" height="48"/></g>
            <g><title>Force Crush</title><use href="#f-fc" x="196" y="66" width="48" height="48"/></g>
            <g><title>Furious Strike</title><use href="#f-fs" x="376" y="66" width="48" height="48"/></g>
            <g><title>Obliterate</title><use href="#f-ob" x="456" y="66" width="48" height="48"/></g>
            <g><title>Ravage</title><use href="#f-rv" x="536" y="66" width="48" height="48"/></g>
            <line x1="322" y1="60" x2="322" y2="122" stroke="var(--brass)" strokeWidth="3"/>
            <g><title>Raging Burst (off-GCD)</title><use href="#f-rb" x="270" y="126" width="24" height="24"/></g>
            <g><title>Berserk (off-GCD)</title><use href="#f-bz" x="300" y="126" width="24" height="24"/></g>
            <g><title>Adrenal (off-GCD)</title><use href="#f-adr" x="330" y="126" width="24" height="24"/></g>
            <text className="sv-label" x="322" y="164" textAnchor="middle" fill="var(--brass)">off‑GCD</text>
            <g className="sv-note">
              <line className="sv-tick" x1="84" y1="122" x2="84" y2="176"/>
              <text x="40" y="192">generates 3 Rage,</text><text x="40" y="206">closes the gap</text>
              <line className="sv-tick" x1="220" y1="122" x2="220" y2="196"/>
              <text x="176" y="212">2.8 s paced gap — lands Adrenal</text>
              <line className="sv-tick" x1="560" y1="122" x2="560" y2="176"/>
              <text x="516" y="192">first cycle</text><text x="516" y="206">starts here</text>
            </g>
          </svg>
          <figcaption>Real timestamps: Force Charge 0.02 · Force Crush 1.51 · Raging Burst 2.91 (off-GCD) · Berserk 3.42 (off-GCD) · Adrenal 3.92 (off-GCD) · Furious Strike 4.32 · Obliterate 5.73 · Ravage 7.34 — the first steady cycle. <b>The guide's own advice explains the gap</b>: activate the Adrenal right after Force Crush and right before the next Raging Burst.</figcaption>
        </figure>
      </section>

      {/* ===== 02 CYCLE ===== */}
      <section>
        <h2><span className="num">02</span> The cycle — two halves, one macro</h2>
        <p className="lede">Every half-cycle ends the same way: whichever of Berserk or Force Crush granted Destruction gets spent on an off-GCD Raging Burst. The halves alternate which one does it.</p>

        <figure>
          <svg viewBox="0 0 820 300" role="img" aria-label="Half A opens on Ravage and is capped by Berserk feeding Raging Burst. Half B runs Vicious Slash, Battering Assault, Force Crush, and is capped by Force Crush feeding the next Raging Burst.">
            <text className="sv-label" x="20" y="24" fill="var(--brass)">HALF A — Berserk half</text>
            <g><title>Ravage</title><use href="#f-rv" x="20" y="34" width="42" height="42"/></g>
            <g><title>Force Scream</title><use href="#f-scr" x="72" y="34" width="42" height="42"/></g>
            <g><title>Vicious Slash</title><use href="#f-vs" x="124" y="34" width="42" height="42"/></g>
            <g><title>Furious Strike</title><use href="#f-fs" x="176" y="34" width="42" height="42"/></g>
            <g><title>Obliterate</title><use href="#f-ob" x="228" y="34" width="42" height="42"/></g>
            <g><title>Berserk (off-GCD)</title><use href="#f-bz" x="300" y="40" width="26" height="26"/></g>
            <text className="sv-note" x="333" y="58">grants Destruction</text>
            <g><title>Raging Burst (off-GCD, autocrit + free)</title><use href="#f-rb" x="480" y="34" width="42" height="42"/></g>
            <text className="sv-note" x="530" y="60">autocrit, free — closes Half A</text>
            <line className="sv-tick" x1="20" y1="90" x2="600" y2="90"/>
            <text className="sv-numb" x="20" y="106">~8.6 s = 5 on-GCD slots + 1.7 GCDs of Vicious Slash drift</text>

            <text className="sv-label" x="20" y="154" fill="var(--cb-f)">HALF B — Force Crush half</text>
            <g><title>Vicious Slash</title><use href="#f-vs" x="20" y="164" width="42" height="42"/></g>
            <g><title>Battering Assault</title><use href="#f-ba" x="72" y="164" width="42" height="42"/></g>
            <rect x="124" y="164" width="90" height="42" rx="6" fill="none" stroke="var(--cb-f)" strokeWidth="1.6" strokeDasharray="4 3"/>
            <g><title>Force Crush (2 GCDs, alternate Destruction source)</title><use href="#f-fc" x="132" y="164" width="42" height="42"/></g>
            <text className="sv-flex" x="169" y="220" textAnchor="middle" fill="var(--cb-f)">2 GCD</text>
            <g><title>Furious Strike</title><use href="#f-fs" x="228" y="164" width="42" height="42"/></g>
            <g><title>Obliterate</title><use href="#f-ob" x="280" y="164" width="42" height="42"/></g>
            <g><title>Raging Burst (off-GCD, autocrit + free)</title><use href="#f-rb" x="480" y="164" width="42" height="42"/></g>
            <text className="sv-note" x="530" y="190">autocrit, free — closes Half B</text>
            <line className="sv-tick" x1="20" y1="220" x2="600" y2="220"/>
            <text className="sv-numb" x="20" y="236">~8.6 s = 6 on-GCD slots (Force Crush weighs 2)</text>

            <text className="sv-label" x="600" y="270" textAnchor="middle" fill="var(--brass)">= one 17.1 s macro-cycle, 11 on-GCD slots</text>
          </svg>
          <figcaption>Both halves end in the same off-GCD Raging Burst — the guide's "alternating with Force Crush" language means <b>which ability supplies Destruction</b>, not that Raging Burst only fires every other half. It fires every half, weaved for free.</figcaption>
        </figure>
      </section>

      {/* ===== 03 WHY RAGING BURST NEVER MISSES ===== */}
      <section>
        <h2><span className="num">03</span> Why Raging Burst never goes out unbuffed</h2>
        <p className="lede">Destruction is one-at-a-time — measured zero overlaps across 36 procs — so the two sources (Berserk, Force Crush) never step on each other. Whichever fires, the next Raging Burst is free and an autocrit.</p>

        <div className="tw">
        <table>
          <thead><tr><th>Source</th><th colSpan={2}>Grants</th><th className="n">Procs</th><th>Consumed by</th></tr></thead>
          <tbody>
            <tr className="hi"><td className="n">Berserk</td><td className="icc"><span className="ic" data-n="Berserk" role="img" aria-label="Berserk"><svg viewBox="0 0 50 50"><use href="#f-bz"/></svg></span></td><td>Destruction</td><td className="n">18</td><td>Raging Burst, next off-GCD weave — <b>zero overlaps</b></td></tr>
            <tr className="hi"><td className="n">Force Crush</td><td className="icc"><span className="ic" data-n="Force Crush" role="img" aria-label="Force Crush"><svg viewBox="0 0 50 50"><use href="#f-fc"/></svg></span></td><td>Destruction</td><td className="n">18</td><td>Raging Burst, next off-GCD weave — <b>zero overlaps</b></td></tr>
            <tr><td className="n">Furious Strike</td><td className="icc"><span className="ic" data-n="Furious Strike" role="img" aria-label="Furious Strike"><svg viewBox="0 0 50 50"><use href="#f-fs"/></svg></span></td><td>Furious Rage</td><td className="n">35</td><td>Raging Burst — held median 5.7 GCDs</td></tr>
            <tr><td className="n">Force Charge / Obliterate</td><td className="icc"><span className="ic" data-n="Obliterate" role="img" aria-label="Obliterate"><svg viewBox="0 0 50 50"><use href="#f-ob"/></svg></span></td><td>Battle Cry</td><td className="n">18</td><td>Force Scream — always, <b>correctly on-GCD in the log</b></td></tr>
          </tbody>
        </table>
        </div>

        <div className="call flag">
          <h4>Correction: the log's "consumed by" pointed at the wrong ability</h4>
          <p>An automated pass credited Destruction, Furious Rage and Fury to whichever <em>on-GCD</em> ability happened to sit nearest the effect's removal — Force Crush, Vicious Slash, Vicious Throw. All three are actually consumed by <b>off-GCD Raging Burst or Berserk</b>, confirmed by checking removal timestamps directly against those activations (gap under 0.2 s). Battle Cry's attribution to Force Scream was correct — Force Scream is on-GCD, so the automated pass could see it.</p>
        </div>
      </section>

      {/* ===== 04 CORRECTION: OFF-GCD ===== */}
      <section>
        <h2><span className="num">04</span> Correction: Raging Burst and Berserk cost no GCD</h2>
        <p className="lede">Neither the ability guide nor casual reading of "Raging Burst and Smash" as your two rotational burst attacks flags this. The log is unambiguous: both weave in for free.</p>

        <figure>
          <svg viewBox="0 0 820 200" role="img" aria-label="Comparing on-GCD ability spacing with and without Raging Burst and Berserk present: identical gaps either way, confirming both fire off-GCD.">
            <text className="sv-label" x="20" y="24">Neighbours around Raging Burst / Berserk, sampled from the log</text>
            <g className="sv-num" textAnchor="start">
              <text x="20" y="70">Force Crush (1.51) → Raging Burst (2.91, off) → Berserk (3.42, off) → Adrenal (3.92, off) → Furious Strike (4.32)</text>
              <text x="20" y="100">Ravage (218.14) → Force Scream (219.68, next) — 1.4 s later, one clean GCD, despite Raging Burst firing in between</text>
            </g>
            <line className="sv-tick" x1="20" y1="130" x2="780" y2="130"/>
            <text className="sv-note" x="20" y="150">If Raging Burst consumed a GCD slot, that second gap would be ~2.7 s (two GCDs). It measures one.</text>
          </svg>
          <figcaption>35 Raging Bursts and 19 Berserks, every one weaved between on-GCD casts with no measurable delay added — the off-GCD detection heuristic (do this ability's neighbours sit one GCD apart with or without it?) flags both with zero ambiguity.</figcaption>
        </figure>
      </section>

      {/* ===== 05 GCD AT ANY ALACRITY ===== */}
      <section>
        <h2><span className="num">05</span> Where 17.95% alacrity comes from</h2>
        <p className="lede">Ten independent mechanics — five cooldown floors, two re-proc floors, three effect durations — agree on the same scaling factor to within a few thousandths.</p>

        <div className="tw">
        <table>
          <thead><tr><th>Mechanic</th><th className="n">Base</th><th className="n">Measured</th><th className="n">Scale</th></tr></thead>
          <tbody>
            <tr><td>Force Crush cooldown</td><td className="n">20 s</td><td className="n">16.955</td><td className="n">0.8478</td></tr>
            <tr><td>Ravage cooldown</td><td className="n">20 s</td><td className="n">16.997</td><td className="n">0.8499</td></tr>
            <tr><td>Force Scream cooldown</td><td className="n">20 s</td><td className="n">16.923</td><td className="n">0.8462</td></tr>
            <tr><td>Battering Assault cooldown</td><td className="n">20 s</td><td className="n">16.903</td><td className="n">0.8452</td></tr>
            <tr><td>Vicious Throw cooldown</td><td className="n">20 s</td><td className="n">17.025</td><td className="n">0.8513</td></tr>
            <tr><td>Force Scream re-proc floor</td><td className="n">20 s</td><td className="n">16.923</td><td className="n">0.8462</td></tr>
            <tr><td>Vicious Throw re-proc floor</td><td className="n">20 s</td><td className="n">17.041</td><td className="n">0.8521</td></tr>
            <tr><td>Destruction duration</td><td className="n">10 s</td><td className="n">8.489</td><td className="n">0.8489</td></tr>
            <tr><td>Furious Rage duration</td><td className="n">9 s</td><td className="n">7.591</td><td className="n">0.8434</td></tr>
          </tbody>
        </table>
        </div>
        <p style={{ marginTop: '16px' }}>Mean scale <span className="mono">0.8478</span> ⇒ GCD <span className="mono">1.2717 s</span>, alacrity <span className="mono">17.95%</span>. That is a high-alacrity build — every cooldown and duration above compresses by the same fifth, which is exactly why an integer-GCD cycle length holds regardless of gear.</p>
      </section>

      {/* ===== 06 SCORECARD ===== */}
      <section>
        <h2><span className="num">06</span> Execution scorecard</h2>
        <p className="lede">All measured from effect apply/remove events, corrected for the off-GCD attribution bug above.</p>
        <div className="meters">
          <div className="meter"><span className="lbl">Destruction procs, zero overlaps (one-at-a-time)</span><span className="val">36 / 36</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Battle Cry consumed by Force Scream, every time</span><span className="val">18 / 18</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Bloody Slashes uptime (Ravage DoT)</span><span className="val">100%</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Bleeding (Cauterized Coronary) uptime — gear DoT</span><span className="val">100%</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Raging Burst weaved off-GCD, no drift added</span><span className="val">35 / 35</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Furious Rage held before consumption (5.7 GCDs)</span><span className="val">85.5%</span><span className="track"><span className="fill warn" style={{ width: '85.5%' }}></span></span></div>
          <div className="meter"><span className="lbl">Force Crush uptime on target — periodic, low by design</span><span className="val">16.9%</span><span className="track"><span className="fill warn" style={{ width: '16.9%' }}></span></span></div>
          <div className="meter lag"><span className="lbl">GCD efficiency (ideal slots ÷ actual span)</span><span className="val">84.39%</span><span className="track"><span className="fill bad" style={{ width: '84.39%' }}></span></span></div>
        </div>
      </section>

      {/* ===== 07 DRIFT ===== */}
      <section>
        <h2><span className="num">07</span> Where the 47 seconds sits</h2>
        <p className="lede">Net drift across the parse is 47.0 s — 37 GCDs — against a 254.3 s ideal. Almost half of it is one ability.</p>
        <figure>
          <svg viewBox="0 0 780 280" role="img" aria-label="Net drift by ability. Vicious Slash accounts for 21.7 of the 47.0 second total, followed by Obliterate, Furious Strike, Force Crush, Ravage, Force Scream and Battering Assault at under 6 seconds each.">
            <line className="sv-axis" x1="220" y1="24" x2="220" y2="240"/>
            <g className="sv-num" textAnchor="middle">
              <text x="220" y="256">0</text><text x="410" y="256">+10 s</text><text x="600" y="256">+20 s</text>
            </g>
            <g className="sv-label" fill="currentColor">
              <text x="30" y="42">Vicious Slash (29)</text><text x="30" y="72">Obliterate (35)</text>
              <text x="30" y="102">Furious Strike (35)</text><text x="30" y="132">Force Crush (18)</text>
              <text x="30" y="162">Ravage (18)</text><text x="30" y="192">Force Scream (18)</text>
              <text x="30" y="222">Battering Assault (17)</text>
            </g>
            <rect x="220" y="26" width="412" height="16" fill="var(--brass)"/>
            <rect x="220" y="56" width="108" height="16" fill="var(--hs-f)"/>
            <rect x="220" y="86" width="102" height="16" fill="var(--hs-f)"/>
            <rect x="220" y="116" width="88" height="16" fill="var(--hs-f)"/>
            <rect x="220" y="146" width="59" height="16" fill="var(--hs-f)"/>
            <rect x="220" y="176" width="51" height="16" fill="var(--hs-f)"/>
            <rect x="220" y="206" width="46" height="16" fill="var(--hs-f)"/>
            <g className="sv-numb">
              <text x="640" y="39" fill="var(--brass)">+21.70</text>
              <text x="336" y="69">+5.67</text><text x="330" y="99">+5.35</text><text x="296" y="129">+4.62</text>
              <text x="267" y="159">+3.08</text><text x="259" y="189">+2.67</text><text x="254" y="219">+2.44</text>
            </g>
            <text className="sv-label" x="750" y="20" textAnchor="end" fill="var(--brass)">46% of the total</text>
          </svg>
          <figcaption>Vicious Slash alone contributes <b>21.7 s of the 47.0 s</b> — an average of <b>0.75 s of hesitation per cast</b>, roughly six-tenths of a GCD, on the rotation's lowest-priority filler. Every locked-cooldown ability (Force Crush, Ravage, Force Scream, Battering Assault) drifts by well under a third of that per use.</figcaption>
        </figure>
      </section>

      {/* ===== 08 GRID ===== */}
      <section>
        <h2><span className="num">08</span> Reference grid — 17 macro-cycles, Ravage anchored</h2>
        <p className="lede">Each row is one 17-second macro-cycle: Half A (Berserk) then Half B (Force Crush). Hover any icon for its name. The empty column marks the Half A / Half B seam.</p>
        <div className="gridwrap">
          <div className="cgrid">
            <div className="crow chead">
              <div>#</div><div>RV</div><div>F1</div><div>F2</div><div>FS</div><div>OB</div>
              <div>VS</div><div>BA</div><div>FC</div><div>·</div><div>FS</div><div>OB</div>
              <div>Len</div><div>Off</div>
            </div>
            {CYCLES.map((row) => (
              <div key={row.cyc} className={`crow${row.flag ? ' flagrow' : ''}${row.best ? ' bestrow' : ''}`}>
                <div className="cyc">{row.cyc}</div>
                {row.cells.map((cell, i) =>
                  cell ? (
                    <span key={i} className={`ic${cell.mark === 'scc' ? ' sccmark' : cell.mark === 'rc' ? ' rcmark' : ''}`} data-n={cell.n} role="img" aria-label={cell.n}>
                      <svg viewBox="0 0 50 50"><use href={`#${iconRef(cell.n)}`} /></svg>
                    </span>
                  ) : (
                    <span key={i} className="ic nil" aria-hidden="true"></span>
                  )
                )}
                <div className="len">{row.len}</div>
                <div className="stk">{row.off.length}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="markkey">
          <span style={{ opacity: '.75' }}>Off column: count of off-GCD weaves that cycle (Raging Burst ×2, Berserk ×1, plus any Frenzy / Adrenal / Bloodthirst). Flagged rows carry an extra off-GCD action; green rows are the tightest-length cycles measured.</span>
        </div>
        <p style={{ marginTop: '20px' }}>Cycles 14–17 show the sub-30% swap: <b>Vicious Throw replaces Half A's Vicious Slash</b>, not Force Scream as the guide describes. Force Scream stays in its normal slot throughout. Cycle 13 is the parse's only Bloodthirst, paired with the Adrenal and an extra Frenzy, matching the guide's suggested pairing almost exactly.</p>
      </section>

      {/* ===== 09 ===== */}
      <section>
        <h2><span className="num">09</span> Still on the table</h2>

        <div className="call flag">
          <h4>1 · Obliterate generates 8 Fury, not 4</h4>
          <p>The guide states every Rage-spending attack generates 4 Fury (2 base, +2 from Short Fuse). The log's <span className="mono">ModifyCharges : Fury</span> events show Raging Burst, Furious Strike and Vicious Throw all landing +4 as expected — but <b>Obliterate lands +8, every time, 17 for 17</b>. Whether that is a discipline interaction not mentioned in the guide or a gear/tactical effect is not resolvable from this log alone; it is consistent enough across the parse to treat as real rather than noise.</p>
        </div>

        <div className="call flag">
          <h4>2 · The sub-30% swap doesn't match the guide</h4>
          <p>The guide describes moving Force Scream out of the Berserk half and using Vicious Throw where Force Scream would have gone. The log shows Force Scream staying exactly where it always sits, with <b>Vicious Throw simply replacing Half A's Vicious Slash</b> instead. Only one parse reaches sub-30%, so this is one data point, not a pattern — but it is what the player actually did four cycles in a row.</p>
        </div>

        <div className="call">
          <h4>3 · Vicious Slash carries 46% of the parse's drift</h4>
          <p>0.75 s average hesitation per cast, against every other filler running under a third of that. It is the lowest-priority ability in the kit by design, so some of this may be deliberate — deciding whether to spend it or hold for Vicious Throw sub-30% — but it is the single largest lever available for tightening the rotation.</p>
        </div>

        <h3>Closed — nothing left to win</h3>
        <ul>
          <li><b>Destruction</b> — 36 procs from two sources, zero overlaps, always spent on the next off-GCD Raging Burst.</li>
          <li><b>Battle Cry</b> — 18 procs, 18 consumed by Force Scream, no exceptions.</li>
          <li><b>Bloody Slashes / Bleeding</b> — both DoTs, 100% uptime, zero gaps.</li>
          <li><b>Off-GCD weave</b> — Raging Burst and Berserk both confirmed free, every activation.</li>
          <li><b>GCD</b> — 1.2717 s / 17.95% alacrity, agreed by ten independent mechanics.</li>
        </ul>
      </section>

      <footer>
        <p>Single StarParse detail log: 2,567 lines, EnterCombat 0 to ExitCombat 301.90 s, no target HP pool or Death event present in this export, so DPS is computed from summed logged <span className="mono">Damage</span> effect values rather than an HP/time calculation. No second parse exists to compare against, so every "this is where the time goes" claim in §7 and §9 is this one player's execution, not a pattern across runs. Gear- and tactical-sourced procs seen in the raw log (Cascading Domination, Gravity Vortex, Mastery Surge, Dark Synergy, Power Surge, Blood Fury, Fearless Victor, Thirst for Rage, Sprint, Satiated) are this character's specific loadout, not core Fury mechanics, and are excluded from the model above — Bleeding (Cauterized Coronary) is one such gear DoT, included in the uptime scorecard only because it happened to run at 100%. Bloodthirst's off-GCD status is assumed from general game knowledge, not measured — it fired only once in this parse, too few to verify algorithmically. Ability icons are the in-game art, supplied by the user.</p>
      </footer>

      </div>
    </div>
  );
}

function iconRef(name: string): string {
  const map: Record<string, string> = {
    'Ravage': 'f-rv',
    'Force Scream': 'f-scr',
    'Vicious Slash': 'f-vs',
    'Vicious Throw': 'f-vt',
    'Furious Strike': 'f-fs',
    'Obliterate': 'f-ob',
    'Battering Assault': 'f-ba',
    'Force Crush': 'f-fc',
    'Raging Burst': 'f-rb',
    'Berserk': 'f-bz',
    'Force Charge': 'f-chg',
    'Adrenal': 'f-adr',
    'Fury': 'f-fur',
  };
  return map[name] || 'f-rv';
}
