/**
 * Fury — Rotation Standard
 * ---------------------------------------------------------------------------
 * Built from two independent StarParse detail logs (two different players).
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

/* ---- reference-grid data: 17 macro-cycles anchored on Ravage, from parse 2 (the reference log) ---- */
type Cell = { n: string; mark?: 'scc' | 'rc' } | null;
type CycleRow = { cyc: string; cells: Cell[]; off: string[]; len: string; slots: number; flag?: boolean; best?: boolean };

const g = (n: string, mark?: 'scc' | 'rc'): Cell => ({ n, mark });

const Q1: Cell[] = [g('Ravage'), g('Force Scream'), g('Vicious Slash'), g('Furious Strike'), g('Obliterate'), g('Battering Assault'), g('Vicious Slash'), g('Force Crush'), null, g('Furious Strike'), g('Obliterate')];
const Q2: Cell[] = [g('Ravage'), g('Force Scream'), g('Vicious Throw'), g('Furious Strike'), g('Obliterate'), g('Battering Assault'), g('Vicious Slash'), g('Force Crush'), null, g('Furious Strike'), g('Obliterate')];
const Q3: Cell[] = [g('Ravage'), g('Vicious Throw'), g('Force Scream'), g('Furious Strike'), g('Obliterate'), g('Battering Assault'), g('Vicious Slash'), g('Force Crush'), null, g('Furious Strike'), g('Obliterate')];

const CYCLES: CycleRow[] = [
  { cyc: '1', cells: Q1, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '16.91', slots: 11 },
  { cyc: '2', cells: Q1, off: ['Raging Burst', 'Force Camouflage', 'Raging Burst', 'Berserk'], len: '16.89', slots: 11, flag: true },
  { cyc: '3', cells: Q1, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '16.80', slots: 11, best: true },
  { cyc: '4', cells: Q1, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '16.92', slots: 11 },
  { cyc: '5', cells: Q1, off: ['Raging Burst', 'Force Camouflage', 'Raging Burst', 'Berserk'], len: '16.81', slots: 11, flag: true },
  { cyc: '6', cells: Q1, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '16.88', slots: 11 },
  { cyc: '7', cells: Q1, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '16.91', slots: 11 },
  { cyc: '8', cells: Q1, off: ['Raging Burst', 'Force Camouflage', 'Raging Burst', 'Berserk'], len: '16.80', slots: 11, flag: true },
  { cyc: '9', cells: Q1, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '16.91', slots: 11 },
  { cyc: '10', cells: Q1, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '16.83', slots: 11, best: true },
  { cyc: '11', cells: Q1, off: ['Raging Burst', 'Force Camouflage', 'Adrenal', 'Raging Burst', 'Berserk'], len: '16.80', slots: 11, flag: true, best: true },
  { cyc: '12', cells: Q1, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '17.11', slots: 11 },
  { cyc: '13', cells: Q2, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '16.83', slots: 12, best: true },
  { cyc: '14', cells: Q2, off: ['Raging Burst', 'Force Camouflage', 'Raging Burst', 'Berserk'], len: '16.81', slots: 12, flag: true, best: true },
  { cyc: '15', cells: Q3, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '16.89', slots: 12 },
  { cyc: '16', cells: Q2, off: ['Raging Burst', 'Raging Burst', 'Berserk'], len: '16.80', slots: 12, best: true },
  { cyc: '17', cells: Q3, off: ['Raging Burst', 'Frenzy', 'Berserk', 'Raging Burst'], len: '17.00', slots: 12, flag: true },
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
        <p className="eyebrow">Marauder / Fury · parse 2 as reference · 33,725 DPS</p>
        <h1>Two half-cycles, one alternating burst</h1>
        <p className="standfirst">A five-to-six-GCD half-cycle that alternates <strong>Berserk and Force Crush as the source of Destruction</strong>, every other half feeding an off-GCD Raging Burst. Two independent players ran the identical structure — parse 2 just executed it at 94% efficiency against parse 1's 84%.</p>
        <dl className="facts">
          <div className="fact"><dt>DPS</dt><dd>33,725<span className="was">was: parse 1: 27,879</span></dd></div>
          <div className="fact"><dt>GCD</dt><dd>1.3973<small>s</small><span className="was">alacrity 7.35% · was: 17.95%</span></dd></div>
          <div className="fact"><dt>Efficiency</dt><dd>94.13<small>%</small><span className="was">17.4 s net drift · was: 47.0 s</span></dd></div>
          <div className="fact"><dt>Macro-cycle</dt><dd>16.9<small>s med</small><span className="was">2 halves, 11–12 slots, both parses</span></dd></div>
          <div className="fact"><dt>DoT uptime</dt><dd>100<small>%</small><span className="was">Bloody Slashes + Bleeding, both parses</span></dd></div>
          <div className="fact"><dt>Off-GCD weave</dt><dd>2<small>/half</small><span className="was">Raging Burst + Berserk, confirmed twice</span></dd></div>
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
        <div className="keyrow"><span className="ic" data-n="Vicious Slash" role="img" aria-label="Vicious Slash"><svg viewBox="0 0 50 50"><use href="#f-vs"/></svg></span><div><b>Vicious Slash</b><span>Filler · where the drift sits, both parses</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Vicious Throw" role="img" aria-label="Vicious Throw"><svg viewBox="0 0 50 50"><use href="#f-vt"/></svg></span><div><b>Vicious Throw</b><span>Sub-30% · replaces Vicious Slash</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Berserk" role="img" aria-label="Berserk"><svg viewBox="0 0 50 50"><use href="#f-bz"/></svg></span><div><b>Berserk</b><span>Off-GCD · needs 30 Fury, grants Destruction</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Force Charge" role="img" aria-label="Force Charge"><svg viewBox="0 0 50 50"><use href="#f-chg"/></svg></span><div><b>Force Charge</b><span>Gap closer · opener only, both parses</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Fury" role="img" aria-label="Fury"><svg viewBox="0 0 50 50"><use href="#f-fur"/></svg></span><div><b>Fury</b><span>0–30 stacking resource, spent on Berserk</span></div></div>
      </div>
      </section>

      {/* ===== 01 OPENER ===== */}
      <section>
        <h2><span className="num">01</span> The opener — same shape, different priorities</h2>
        <p className="lede">Both parses open Force Charge into Force Crush, pause for roughly the same 2.8 s window, then start the first steady half-cycle at Furious Strike. What each player stuffs into that window is where they differ.</p>

        <figure>
          <svg viewBox="0 0 820 240" role="img" aria-label="Parse 2 opener: Force Charge, Bloodthirst immediately after, Force Crush, then a 2.8 second window packing Frenzy, Adrenal, Raging Burst and Berserk off-GCD, before Furious Strike starts the first steady cycle.">
            <g className="sv-num" textAnchor="middle">
              <text x="84" y="56">1</text><text x="220" y="56">2</text><text x="400" y="56">3</text><text x="480" y="56">4</text><text x="560" y="56">5</text>
            </g>
            <rect x="146" y="62" width="180" height="56" rx="6" fill="none" stroke="currentColor" opacity=".4" strokeDasharray="4 3"/>
            <g><title>Force Charge</title><use href="#f-chg" x="60" y="66" width="48" height="48"/></g>
            <g><title>Force Crush</title><use href="#f-fc" x="196" y="66" width="48" height="48"/></g>
            <g><title>Furious Strike</title><use href="#f-fs" x="376" y="66" width="48" height="48"/></g>
            <g><title>Obliterate</title><use href="#f-ob" x="456" y="66" width="48" height="48"/></g>
            <g><title>Ravage</title><use href="#f-rv" x="536" y="66" width="48" height="48"/></g>
            <g><title>Bloodthirst (off-GCD)</title><use href="#f-fur" x="20" y="20" width="26" height="26"/></g>
            <text className="sv-note" x="50" y="38">Bloodthirst at 0.39 s — before Force Crush even lands</text>
            <line x1="322" y1="60" x2="322" y2="140" stroke="var(--brass)" strokeWidth="3"/>
            <g><title>Frenzy (off-GCD)</title><use href="#f-adr" x="260" y="126" width="22" height="22"/></g>
            <g><title>Adrenal (off-GCD)</title><use href="#f-adr" x="288" y="126" width="22" height="22"/></g>
            <g><title>Raging Burst (off-GCD)</title><use href="#f-rb" x="316" y="126" width="22" height="22"/></g>
            <g><title>Berserk (off-GCD)</title><use href="#f-bz" x="344" y="126" width="22" height="22"/></g>
            <text className="sv-label" x="322" y="164" textAnchor="middle" fill="var(--brass)">off‑GCD ×4</text>
            <g className="sv-note">
              <line className="sv-tick" x1="84" y1="122" x2="84" y2="196"/>
              <text x="40" y="212">generates 3 Rage</text>
              <line className="sv-tick" x1="220" y1="122" x2="220" y2="196"/>
              <text x="176" y="212">2.80 s paced gap — same width as parse 1's</text>
              <line className="sv-tick" x1="560" y1="122" x2="560" y2="196"/>
              <text x="516" y="212">first cycle starts here</text>
            </g>
          </svg>
          <figcaption>Parse 2 timestamps: Force Charge 0.02 · Bloodthirst 0.39 (off-GCD) · Force Crush 1.50 · Frenzy 1.80 (off-GCD) · Adrenal 1.99 (off-GCD) · Raging Burst 2.90 (off-GCD) · Berserk 3.31 (off-GCD) · Furious Strike 4.30. <b>Parse 1 saved Bloodthirst for a single mid-fight use around the two-thirds mark instead</b> — same opener skeleton, genuinely different raid-buff timing decision.</figcaption>
        </figure>
      </section>

      {/* ===== 02 CYCLE ===== */}
      <section>
        <h2><span className="num">02</span> The cycle — two halves, one macro</h2>
        <p className="lede">Every half-cycle ends the same way in both parses: whichever of Berserk or Force Crush granted Destruction gets spent on an off-GCD Raging Burst. Only the internal order of Half B's two fillers differs between players.</p>

        <figure>
          <svg viewBox="0 0 820 300" role="img" aria-label="Half A opens on Ravage and is capped by Berserk feeding Raging Burst. Half B runs Battering Assault then Vicious Slash then Force Crush, capped by Force Crush feeding the next Raging Burst.">
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
            <text className="sv-numb" x="20" y="106">~8.4 s = 5 on-GCD slots — identical order in both parses</text>

            <text className="sv-label" x="20" y="154" fill="var(--cb-f)">HALF B — Force Crush half</text>
            <g><title>Battering Assault</title><use href="#f-ba" x="20" y="164" width="42" height="42"/></g>
            <g><title>Vicious Slash</title><use href="#f-vs" x="72" y="164" width="42" height="42"/></g>
            <rect x="124" y="164" width="90" height="42" rx="6" fill="none" stroke="var(--cb-f)" strokeWidth="1.6" strokeDasharray="4 3"/>
            <g><title>Force Crush (2 GCDs, alternate Destruction source)</title><use href="#f-fc" x="132" y="164" width="42" height="42"/></g>
            <text className="sv-flex" x="169" y="220" textAnchor="middle" fill="var(--cb-f)">2 GCD</text>
            <g><title>Furious Strike</title><use href="#f-fs" x="228" y="164" width="42" height="42"/></g>
            <g><title>Obliterate</title><use href="#f-ob" x="280" y="164" width="42" height="42"/></g>
            <g><title>Raging Burst (off-GCD, autocrit + free)</title><use href="#f-rb" x="480" y="164" width="42" height="42"/></g>
            <text className="sv-note" x="530" y="190">autocrit, free — closes Half B</text>
            <line className="sv-tick" x1="20" y1="220" x2="600" y2="220"/>
            <text className="sv-numb" x="20" y="236">~8.4 s = 6 on-GCD slots (Force Crush weighs 2)</text>

            <text className="sv-label" x="600" y="270" textAnchor="middle" fill="var(--brass)">= one 16.9 s macro-cycle, 11 on-GCD slots</text>
          </svg>
          <figcaption>Parse 2 runs Half B as <b>Battering Assault then Vicious Slash</b>; parse 1 ran the same two abilities in the opposite order. Neither changes the slot count or the timing — it is a genuine stylistic difference between the two players, not a correctness question.</figcaption>
        </figure>
      </section>

      {/* ===== 03 WHY RAGING BURST NEVER MISSES ===== */}
      <section>
        <h2><span className="num">03</span> Why Raging Burst never goes out unbuffed</h2>
        <p className="lede">Destruction is one-at-a-time in both parses — zero overlaps across 36 procs each — so the two sources (Berserk, Force Crush) never step on each other. Whichever fires, the next Raging Burst is free and an autocrit.</p>

        <div className="tw">
        <table>
          <thead><tr><th>Source</th><th colSpan={2}>Grants</th><th className="n">Procs</th><th>Consumed by</th></tr></thead>
          <tbody>
            <tr className="hi"><td className="n">Berserk</td><td className="icc"><span className="ic" data-n="Berserk" role="img" aria-label="Berserk"><svg viewBox="0 0 50 50"><use href="#f-bz"/></svg></span></td><td>Destruction</td><td className="n">18</td><td>Raging Burst, next off-GCD weave — <b>zero overlaps, both parses</b></td></tr>
            <tr className="hi"><td className="n">Force Crush</td><td className="icc"><span className="ic" data-n="Force Crush" role="img" aria-label="Force Crush"><svg viewBox="0 0 50 50"><use href="#f-fc"/></svg></span></td><td>Destruction</td><td className="n">18</td><td>Raging Burst, next off-GCD weave — <b>zero overlaps, both parses</b></td></tr>
            <tr><td className="n">Furious Strike</td><td className="icc"><span className="ic" data-n="Furious Strike" role="img" aria-label="Furious Strike"><svg viewBox="0 0 50 50"><use href="#f-fs"/></svg></span></td><td>Furious Rage</td><td className="n">35</td><td>Raging Burst — held median 5.1 GCDs</td></tr>
            <tr><td className="n">Force Charge / Obliterate</td><td className="icc"><span className="ic" data-n="Obliterate" role="img" aria-label="Obliterate"><svg viewBox="0 0 50 50"><use href="#f-ob"/></svg></span></td><td>Battle Cry</td><td className="n">18</td><td>Force Scream — always, <b>correctly on-GCD in the log</b></td></tr>
          </tbody>
        </table>
        </div>

        <div className="call flag">
          <h4>Correction: the log's "consumed by" pointed at the wrong ability</h4>
          <p>An automated pass credited Destruction, Furious Rage and Fury to whichever <em>on-GCD</em> ability happened to sit nearest the effect's removal — Force Crush, Vicious Slash, Vicious Throw. All three are actually consumed by <b>off-GCD Raging Burst or Berserk</b>, confirmed in parse 1 by checking removal timestamps directly against those activations (gap under 0.2 s), and the same off-GCD-weave relationship holds in parse 2. Battle Cry's attribution to Force Scream was correct in both — Force Scream is on-GCD, so the automated pass could see it.</p>
        </div>
      </section>

      {/* ===== 04 CORRECTION: OFF-GCD ===== */}
      <section>
        <h2><span className="num">04</span> Correction: Raging Burst and Berserk cost no GCD</h2>
        <p className="lede">Neither the ability guide nor casual reading of "Raging Burst and Smash" as your two rotational burst attacks flags this. Both logs are unambiguous: both weave in for free.</p>

        <figure>
          <svg viewBox="0 0 820 200" role="img" aria-label="Comparing on-GCD ability spacing with and without Raging Burst and Berserk present, in both parses: identical gaps either way, confirming both fire off-GCD.">
            <text className="sv-label" x="20" y="24">Neighbours around Raging Burst / Berserk, sampled from each log</text>
            <g className="sv-num" textAnchor="start">
              <text x="20" y="60">Parse 1 — Force Crush (1.51) → Raging Burst (2.91, off) → Berserk (3.42, off) → Adrenal (3.92, off) → Furious Strike (4.32)</text>
              <text x="20" y="86">Parse 2 — Force Crush (1.50) → Frenzy, Adrenal, Raging Burst, Berserk (four off-GCD) → Furious Strike (4.30)</text>
              <text x="20" y="112">Both gaps measure ≈2.8 s — one player weaves 3 off-GCD actions through it, the other weaves 4</text>
            </g>
            <line className="sv-tick" x1="20" y1="140" x2="780" y2="140"/>
            <text className="sv-note" x="20" y="160">If any of these cost a GCD slot, the gap would grow with each one added. It doesn't, in either log.</text>
          </svg>
          <figcaption>35 Raging Bursts and 19 Berserks in each parse, every one weaved between on-GCD casts with no measurable delay added regardless of how many other off-GCD actions share the same window.</figcaption>
        </figure>
      </section>

      {/* ===== 05 GCD AT ANY ALACRITY ===== */}
      <section>
        <h2><span className="num">05</span> Where 7.35% alacrity comes from</h2>
        <p className="lede">Fourteen independent mechanics — cooldown floors, re-proc floors — agree on the same scaling factor to within a few thousandths. Parse 1 measured a different scale (17.95% alacrity) from the same set of mechanics — different gear, not a different technique.</p>

        <div className="tw">
        <table>
          <thead><tr><th>Mechanic</th><th className="n">Base</th><th className="n">Measured</th><th className="n">Scale</th></tr></thead>
          <tbody>
            <tr><td>Berserker's Call re-proc floor</td><td className="n">18 s</td><td className="n">16.702</td><td className="n">0.9279</td></tr>
            <tr><td>Force Crush cooldown</td><td className="n">18 s</td><td className="n">16.792</td><td className="n">0.9329</td></tr>
            <tr><td>Ravage cooldown</td><td className="n">18 s</td><td className="n">16.798</td><td className="n">0.9332</td></tr>
            <tr><td>Battering Assault cooldown</td><td className="n">18 s</td><td className="n">16.793</td><td className="n">0.9329</td></tr>
            <tr><td>Raging Burst re-proc floor</td><td className="n">9 s</td><td className="n">8.345</td><td className="n">0.9272</td></tr>
            <tr><td>Furious Defense re-proc floor</td><td className="n">9 s</td><td className="n">8.386</td><td className="n">0.9318</td></tr>
            <tr><td>Furious Rage re-proc floor</td><td className="n">9 s</td><td className="n">8.386</td><td className="n">0.9318</td></tr>
            <tr><td>Blood Fury re-proc floor</td><td className="n">9 s</td><td className="n">8.385</td><td className="n">0.9317</td></tr>
            <tr><td>Raging Burst cooldown</td><td className="n">9 s</td><td className="n">8.395</td><td className="n">0.9328</td></tr>
            <tr><td>Furious Strike cooldown</td><td className="n">9 s</td><td className="n">8.386</td><td className="n">0.9318</td></tr>
            <tr><td>Obliterate cooldown</td><td className="n">9 s</td><td className="n">8.378</td><td className="n">0.9309</td></tr>
          </tbody>
        </table>
        </div>
        <p style={{ marginTop: '16px' }}>Mean scale <span className="mono">0.9315</span> ⇒ GCD <span className="mono">1.3973 s</span>, alacrity <span className="mono">7.35%</span>. Same identity as parse 1 — every cooldown and duration compresses by one factor — just a smaller factor here, which is exactly why parse 2's macro-cycle (16.9 s) is close to parse 1's (17.1 s) despite the two players running noticeably different gear.</p>
      </section>

      {/* ===== 06 SCORECARD ===== */}
      <section>
        <h2><span className="num">06</span> Execution scorecard</h2>
        <p className="lede">All measured from effect apply/remove events, corrected for the off-GCD attribution bug above. Parse 2 values shown; parse 1 was close on every discipline metric and far behind only on raw GCD efficiency.</p>
        <div className="meters">
          <div className="meter"><span className="lbl">Destruction procs, zero overlaps (one-at-a-time)</span><span className="val">36 / 36</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Battle Cry consumed by Force Scream, every time</span><span className="val">18 / 18</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Bloody Slashes uptime (Ravage DoT)</span><span className="val">100%</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Bleeding (Cauterized Coronary) uptime — gear DoT</span><span className="val">100%</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Raging Burst weaved off-GCD, no drift added</span><span className="val">35 / 35</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Furious Rage held before consumption (5.1 GCDs)</span><span className="val">85.2%</span><span className="track"><span className="fill warn" style={{ width: '85.2%' }}></span></span></div>
          <div className="meter"><span className="lbl">Force Crush uptime on target — periodic, low by design</span><span className="val">17.1%</span><span className="track"><span className="fill warn" style={{ width: '17.1%' }}></span></span></div>
          <div className="meter lag"><span className="lbl">GCD efficiency (ideal slots ÷ actual span) — parse 1 was 84.39%</span><span className="val">94.13%</span><span className="track"><span className="fill" style={{ width: '94.13%' }}></span></span></div>
        </div>
      </section>

      {/* ===== 07 DRIFT ===== */}
      <section>
        <h2><span className="num">07</span> Where the 17 seconds sits</h2>
        <p className="lede">Net drift across parse 2 is 17.4 s — 12.5 GCDs — against a 279.5 s ideal. Vicious Slash alone accounts for slightly <b>more</b> than the whole total; every other ability nets out at or ahead of ideal pace.</p>
        <figure>
          <svg viewBox="0 0 780 260" role="img" aria-label="Net drift by ability in parse 2. Vicious Slash accounts for 17.6 seconds against a 17.4 second total, followed by Force Scream at 2.9 seconds and everything else under half a second.">
            <line className="sv-axis" x1="220" y1="24" x2="220" y2="220"/>
            <g className="sv-num" textAnchor="middle">
              <text x="220" y="236">0</text><text x="410" y="236">+10 s</text><text x="600" y="236">+20 s</text>
            </g>
            <g className="sv-label" fill="currentColor">
              <text x="30" y="42">Vicious Slash (29)</text><text x="30" y="72">Force Scream (18)</text>
              <text x="30" y="102">Furious Strike (35)</text><text x="30" y="132">Ravage (18)</text>
              <text x="30" y="162">Force Crush (18)</text><text x="30" y="192">Obliterate (35)</text>
            </g>
            <rect x="220" y="26" width="335" height="16" fill="var(--brass)"/>
            <rect x="220" y="56" width="55" height="16" fill="var(--hs-f)"/>
            <rect x="220" y="86" width="8" height="16" fill="var(--hs-f)"/>
            <rect x="220" y="116" width="7" height="16" fill="var(--hs-f)"/>
            <rect x="220" y="146" width="4" height="16" fill="var(--hs-f)"/>
            <rect x="220" y="176" width="3" height="16" fill="var(--hs-f)"/>
            <g className="sv-numb">
              <text x="565" y="39" fill="var(--brass)">+17.63</text>
              <text x="285" y="69">+2.91</text><text x="238" y="99">+0.32</text><text x="237" y="129">+0.30</text>
              <text x="234" y="159">+0.19</text><text x="233" y="189">+0.12</text>
            </g>
            <text className="sv-label" x="750" y="20" textAnchor="end" fill="var(--brass)">101% of net total</text>
          </svg>
          <figcaption>0.61 s average hesitation per Vicious Slash cast (29 uses) — lower than parse 1's 0.75 s, but still the entire story: every locked-cooldown ability in parse 2 runs within three-tenths of a second of its ideal pace across the whole fight.</figcaption>
        </figure>
      </section>

      {/* ===== 08 GRID ===== */}
      <section>
        <h2><span className="num">08</span> Reference grid — 17 macro-cycles, Ravage anchored (parse 2)</h2>
        <p className="lede">Each row is one 16.9-second macro-cycle: Half A (Berserk) then Half B (Force Crush). Hover any icon for its name. The empty column marks the Half A / Half B seam. Compare the Half B order to parse 1's grid: Battering Assault leads here, Vicious Slash led there.</p>
        <div className="gridwrap">
          <div className="cgrid">
            <div className="crow chead">
              <div>#</div><div>RV</div><div>F1</div><div>F2</div><div>FS</div><div>OB</div>
              <div>BA</div><div>VS</div><div>FC</div><div>·</div><div>FS</div><div>OB</div>
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
          <span style={{ opacity: '.75' }}>Off column: count of off-GCD weaves that cycle (Raging Burst ×2, Berserk ×1, plus any Force Camouflage / Adrenal / Frenzy). Flagged rows carry an extra off-GCD action; green rows are the tightest-length cycles measured.</span>
        </div>
        <p style={{ marginTop: '20px' }}>Cycles 13, 14 and 16 show Vicious Throw landing after Force Scream; cycles 15 and 17 show it landing <b>before</b> Force Scream instead — even within one player's execution, its exact position varies. In both placements it replaces Half A's Vicious Slash, never Force Scream as the guide describes, matching parse 1 exactly.</p>
      </section>

      {/* ===== 09 ===== */}
      <section>
        <h2><span className="num">09</span> Still on the table</h2>

        <div className="call flag">
          <h4>1 · The sub-30% swap doesn't match the guide, in either parse</h4>
          <p>The guide describes moving Force Scream out of the Berserk half and using Vicious Throw where Force Scream would have gone. Both logs show Force Scream staying in Half A, with <b>Vicious Throw simply replacing Half A's Vicious Slash</b> instead — nine cycles total across two independent players, zero cycles matching the guide's description. This is no longer one data point.</p>
        </div>

        <div className="call">
          <h4>2 · Half B's internal order is a real style difference</h4>
          <p>Parse 1 runs Vicious Slash then Battering Assault; parse 2 runs Battering Assault then Vicious Slash. Both land the same 6 on-GCD slots in the same total time, so neither is "more correct" — it's the one piece of this rotation that looks like genuine personal preference rather than a mechanical constraint.</p>
        </div>

        <div className="call">
          <h4>3 · Vicious Slash is still the single largest lever</h4>
          <p>46% of parse 1's much larger drift, and effectively all of parse 2's much smaller drift. The absolute hesitation per cast dropped from 0.75 s to 0.61 s between the two players — real, but modest — which means most of the efficiency gap between an 84%-efficient parse and a 94%-efficient one comes from everything else running almost exactly on pace, not from Vicious Slash improving dramatically.</p>
        </div>

        <h3>Closed — nothing left to win</h3>
        <ul>
          <li><b>Obliterate generates 8 Fury, not the guide's baseline 4</b> — confirmed 17/17 in parse 1 and 17/17 in parse 2. Two independent logs, same number, every time.</li>
          <li><b>Destruction</b> — 36 procs from two sources in each parse, zero overlaps, always spent on the next off-GCD Raging Burst.</li>
          <li><b>Battle Cry</b> — 18 procs, 18 consumed by Force Scream, no exceptions, either parse.</li>
          <li><b>Bloody Slashes / Bleeding</b> — both DoTs, 100% uptime, zero gaps, both parses.</li>
          <li><b>Off-GCD weave</b> — Raging Burst and Berserk both confirmed free, every activation, both parses.</li>
          <li><b>GCD</b> — pinned independently in each log (1.2717 s / 1.3973 s) from ten-plus agreeing mechanics each time.</li>
        </ul>
      </section>

      <footer>
        <p>Two StarParse detail logs from two different players. Parse 1: 2,567 lines, EnterCombat 0 to ExitCombat 301.90 s, no target HP pool or Death event, DPS from summed logged <span className="mono">Damage</span> values. Parse 2 (reference): 2,575 lines, EnterCombat 0 to a real <span className="mono">Death</span> event at 297.50 s, DPS computed the same way but cross-checked against the kill timestamp. Gear- and tactical-sourced procs present in both raw logs (Cascading Domination, Gravity Vortex, Mastery Surge, Dark Synergy, Power Surge, Blood Fury, Fearless Victor, Thirst for Rage, Sprint, Satiated) are each character's specific loadout, not core Fury mechanics, and are excluded from the model above — Bleeding (Cauterized Coronary) is one such gear DoT in both logs, included in the uptime scorecard only because it happened to run at 100% in both. Parse 2 also logs a defensive Force Camouflage (5 uses) and an "Advanced Kyrprax Critical Adrenal" not present in parse 1 — situational, not part of the core model. Bloodthirst fired once in each parse; its off-GCD status is assumed from general game knowledge, not measured, since one activation per log is too few to verify algorithmically. Ability icons are the in-game art, supplied by the user.</p>
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
