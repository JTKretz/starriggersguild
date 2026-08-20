/**
 * Engineering — Rotation Standard
 * ---------------------------------------------------------------------------
 * Built from one StarParse detail log (parse 1, the reference parse until a
 * second/third log is added). Ability icons live as separate files under
 * /public/icons/sniper.
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
  .meter .val .was{display:block;font-size:11px;color:var(--ink-3);font-weight:400;margin-top:2px}

  /* ---------- reference grid ---------- */
  .gridwrap{overflow-x:auto;border:1px solid var(--rule);background:var(--panel);padding-bottom:32px}
  .cgrid{min-width:980px}
  .crow{display:grid;grid-template-columns:26px repeat(10,minmax(26px,1fr)) 44px 30px;
    gap:5px;align-items:center;padding:5px 12px;border-bottom:1px solid var(--rule-2)}
  .crow:last-child{border-bottom:0}
  .chead{position:sticky;top:0;background:var(--panel-2);z-index:3;
    border-bottom:1px solid var(--rule);padding-top:9px;padding-bottom:9px}
  .chead>*{font-family:var(--font-display);text-transform:uppercase;letter-spacing:.08em;
    font-size:9.5px;color:var(--ink-3);text-align:center;line-height:1.2}
  .crow>.cyc{font-family:var(--font-data);font-size:12px;color:var(--ink-3);
    text-align:right;font-variant-numeric:tabular-nums}
  .crow>.len{font-family:var(--font-data);font-size:12px;text-align:center;
    font-variant-numeric:tabular-nums;color:var(--ink-2)}
  .crow>.offc{font-size:11px;text-align:center}
  .offc .ic{max-width:22px}
  .crow.flagrow{background:color-mix(in srgb,var(--brass) 11%,transparent)}
  .crow.bestrow{background:color-mix(in srgb,var(--er-f) 12%,transparent)}
  .crow.execrow{background:color-mix(in srgb,var(--mb-f) 12%,transparent)}
  .markkey{display:flex;flex-wrap:wrap;gap:8px 22px;margin:14px 0 0;font-size:12.5px;
    color:var(--ink-2);align-items:center}

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

/* ---- reference-grid data: 16 steady macro-cycles anchored on Corrosive Dart, from parse 1 ---- */
type Cell = { n: string } | null;
type CycleRow = { cyc: string; cells: Cell[]; off: string[]; len: string; flag?: boolean; best?: boolean };

const g = (n: string): Cell => ({ n });
const SS = g('Series of Shots');
const PP = g('Plasma Probe');
const EP = g('Explosive Probe');
const EMP = g('EMP Discharge');
const CD = g('Corrosive Dart');
const SN = g('Snipe');
const FG = g('Fragmentation Grenade');
const OS = g('Orbital Strike');

/* columns: SS1 · PP1 · F1 · F2 · EP · SS2 · PP2 · EMP · F3 · CD */
const row = (f1: Cell, f2: Cell, f3: Cell): Cell[] => [SS, PP, f1, f2, EP, SS, PP, EMP, f3, CD];

const CYCLES: CycleRow[] = [
  { cyc: '1', cells: row(FG, SN, FG), off: ['Targeting Systems'], len: '15.86' },
  { cyc: '2', cells: row(OS, SN, SN), off: ['Adrenaline Probe'], len: '15.71', flag: true },
  { cyc: '3', cells: row(SN, FG, FG), off: [], len: '15.63' },
  { cyc: '4', cells: row(OS, FG, FG), off: ['Targeting Systems'], len: '15.50' },
  { cyc: '5', cells: row(SN, FG, FG), off: [], len: '15.80' },
  { cyc: '6', cells: row(OS, FG, FG), off: [], len: '15.77' },
  { cyc: '7', cells: row(SN, FG, FG), off: ['Targeting Systems'], len: '15.69' },
  { cyc: '8', cells: row(OS, FG, SN), off: ['Adrenaline Probe'], len: '15.37', best: true },
  { cyc: '9', cells: row(SN, FG, FG), off: [], len: '15.62' },
  { cyc: '10', cells: row(OS, FG, SN), off: [], len: '15.52' },
  { cyc: '11', cells: row(SN, FG, FG), off: ['Targeting Systems'], len: '15.70' },
  { cyc: '12', cells: row(OS, FG, FG), off: [], len: '15.52' },
  { cyc: '13', cells: row(SN, FG, FG), off: [], len: '15.68' },
  { cyc: '14', cells: row(SN, FG, FG), off: ['Targeting Systems'], len: '15.80' },
  { cyc: '15', cells: row(OS, SN, SN), off: ['Adrenaline Probe', 'Adrenal'], len: '15.74', flag: true },
  { cyc: '16', cells: row(SN, FG, SN), off: [], len: '15.70' },
];

/* ---- parse 2 (Tcmeaty) — same 7 fixed / 3 flex slots, different order:
   F1 · EP · SS1 · PP1 · EMP · F2 · F3 · [F4, nil except the extended final row] · SS2 · PP2 · CD ---- */
type CycleRow2 = { cyc: string; cells: Cell[]; off: string[]; len: string; flag?: boolean; best?: boolean; exec?: boolean };
const TD = g('Takedown');
const row2 = (f1: Cell, f2: Cell, f3: Cell, f4: Cell = null): Cell[] => [f1, EP, SS, PP, EMP, f2, f3, f4, SS, PP, CD];

const CYCLES2: CycleRow2[] = [
  { cyc: '1', cells: row2(FG, OS, FG), off: [], len: '15.50', best: true },
  { cyc: '2', cells: row2(FG, SN, FG), off: [], len: '16.00' },
  { cyc: '3', cells: row2(FG, OS, FG), off: ['Targeting Systems'], len: '15.61' },
  { cyc: '4', cells: row2(FG, SN, FG), off: [], len: '15.88' },
  { cyc: '5', cells: row2(FG, OS, FG), off: [], len: '15.60' },
  { cyc: '6', cells: row2(FG, FG, SN), off: ['Targeting Systems'], len: '15.69' },
  { cyc: '7', cells: row2(FG, OS, FG), off: ['Adrenaline Probe', 'Entrench'], len: '15.51' },
  { cyc: '8', cells: row2(FG, SN, FG), off: [], len: '16.01' },
  { cyc: '9', cells: row2(FG, OS, FG), off: ['Targeting Systems'], len: '15.61' },
  { cyc: '10', cells: row2(FG, SN, FG), off: [], len: '16.00' },
  { cyc: '11', cells: row2(FG, OS, FG), off: [], len: '15.51' },
  { cyc: '12', cells: row2(TD, SN, FG), off: [], len: '15.90', exec: true },
  { cyc: '13', cells: row2(FG, OS, FG), off: ['Targeting Systems', 'Adrenaline Probe'], len: '15.51' },
  { cyc: '14', cells: row2(FG, TD, FG), off: ['Adrenal'], len: '16.01', exec: true },
  { cyc: '15', cells: row2(FG, OS, TD, FG), off: [], len: '17.12', exec: true },
];

/* ---- parse 3 (Superheavy) — same shape B as parse 2, plus a rare 5th "insert" slot
   before Corrosive Dart on the one extended cycle: F1 · EP · SS1 · PP1 · EMP · F2 · F3 · F4 · SS2 · PP2 · F5 · CD ---- */
type CycleRow3 = { cyc: string; cells: Cell[]; off: string[]; len: string; flag?: boolean; best?: boolean; exec?: boolean };
const RS = g('Rifle Shot');
const row3 = (f1: Cell, f2: Cell, f3: Cell, f4: Cell = null, f5: Cell = null): Cell[] => [f1, EP, SS, PP, EMP, f2, f3, f4, SS, PP, f5, CD];

const CYCLES3: CycleRow3[] = [
  { cyc: '1', cells: row3(FG, OS, SN), off: ['Adrenaline Probe'], len: '15.49', best: true },
  { cyc: '2', cells: row3(FG, SN, FG), off: [], len: '16.01' },
  { cyc: '3', cells: row3(FG, OS, FG), off: ['Targeting Systems'], len: '15.55' },
  { cyc: '4', cells: row3(FG, SN, FG), off: [], len: '15.98' },
  { cyc: '5', cells: row3(FG, OS, FG), off: [], len: '15.49' },
  { cyc: '6', cells: row3(FG, SN, SN), off: ['Targeting Systems'], len: '16.20', flag: true },
  { cyc: '7', cells: row3(FG, OS, FG), off: ['Adrenaline Probe'], len: '15.50' },
  { cyc: '8', cells: row3(FG, SN, FG), off: [], len: '15.90' },
  { cyc: '9', cells: row3(FG, OS, FG), off: [], len: '15.50' },
  { cyc: '10', cells: row3(FG, SN, FG), off: ['Targeting Systems'], len: '16.00' },
  { cyc: '11', cells: row3(FG, OS, TD, null, FG), off: [], len: '17.00', exec: true },
  { cyc: '12', cells: row3(null, TD, FG), off: [], len: '14.59', exec: true },
  { cyc: '13', cells: row3(FG, OS, FG), off: ['Targeting Systems'], len: '15.50' },
  { cyc: '14', cells: row3(FG, TD, FG), off: ['Adrenal', 'Adrenaline Probe'], len: '15.90', exec: true },
  { cyc: '15', cells: row3(RS, FG, OS), off: [], len: '15.60' },
];

export default function EngineeringRotation({ theme }: { theme?: 'dark' | 'light' }) {
  return (
    <div className="ar-root" data-theme={theme}>
      <style>{CSS}</style>
      <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute', overflow: 'hidden' }}><defs>
      <clipPath id="ico-clip4"><rect width="50" height="50" rx="7" ry="7"/></clipPath>
      <symbol id="e-ip" viewBox="0 0 50 50"><image href="/icons/sniper/interrogation-probe.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="e-ss" viewBox="0 0 50 50"><image href="/icons/sniper/series-of-shots.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="e-pp" viewBox="0 0 50 50"><image href="/icons/sniper/plasma-probe.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="e-ep" viewBox="0 0 50 50"><image href="/icons/sniper/explosive-probe.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="e-emp" viewBox="0 0 50 50"><image href="/icons/sniper/emp-discharge.png" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="e-cd" viewBox="0 0 50 50"><image href="/icons/sniper/corrosive-dart.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="e-sn" viewBox="0 0 50 50"><image href="/icons/sniper/snipe.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="e-fg" viewBox="0 0 50 50"><image href="/icons/sniper/fragmentation-grenade.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="e-os" viewBox="0 0 50 50"><image href="/icons/sniper/orbital-strike.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="e-ts" viewBox="0 0 50 50"><image href="/icons/sniper/targeting-systems.png" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="e-ap" viewBox="0 0 50 50"><image href="/icons/sniper/adrenaline-probe.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="e-adr" viewBox="0 0 50 50"><image href="/icons/sniper/adrenal.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="e-td" viewBox="0 0 50 50"><image href="/icons/sniper/takedown.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="e-rs" viewBox="0 0 50 50"><image href="/icons/sniper/rifle-shot.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      </defs></svg>

      <div className="wrap">

      <div className="mast">
        <p className="eyebrow">Sniper / Engineering · three independent parses · 30,873 / 30,039 / 29,123 DPS</p>
        <h1>Two channels, ten slots, three of them yours</h1>
        <p className="standfirst">An eleven-GCD macro-cycle anchored on <strong>Corrosive Dart</strong>, <strong>Explosive Probe</strong>, and <strong>EMP Discharge</strong> — split into two near-identical halves, each opening on a Series of Shots / Plasma Probe pair. Seven of the ten on-GCD slots are locked every single time; the other three are yours to fill. Three different players confirm the same 7-fixed/3-flex split and the same locked-ability counts. The highest-DPS parse of the three does it with the <em>slowest</em> GCD and the <em>fewest</em> total GCDs of the group — the gap comes from what fills each GCD, not how many there are.</p>
        <dl className="facts">
          <div className="fact"><dt>DPS</dt><dd>30,873<small>best</small><span className="was">was: parse 1: 30,039 · parse 2: 29,123</span></dd></div>
          <div className="fact"><dt>GCD</dt><dd>1.4742<small>s</small><span className="was">was: parse 1: 1.4014 s · parse 2: 1.4584 s — slowest of the three, highest DPS anyway</span></dd></div>
          <div className="fact"><dt>Macro-cycle</dt><dd>15.74<small>s mean</small><span className="was">was: parse 1: 15.66 s · parse 2: 15.76 s</span></dd></div>
          <div className="fact"><dt>Corrosive Dart / Explosive Probe / EMP</dt><dd>16–17<small>each</small><span className="was">100% uptime, zero gaps in all three — counts differ only by where the fight ends mid-cycle</span></dd></div>
          <div className="fact"><dt>Interrogation Probe</dt><dd>1<small>cast</small><span className="was">100% uptime the whole fight, all three parses</span></dd></div>
          <div className="fact"><dt>Electrified Railgun</dt><dd>3<small>/3 stacks</small><span className="was">capped within seconds, held almost the whole fight · parse 3's one brief drop explained in section 05</span></dd></div>
        </dl>
      </div>

      {/* ===== KEY ===== */}
      <section style={{ marginTop: '34px' }}>
        <h3 style={{ marginTop: '0' }}>Ability key — hover any icon anywhere on this page</h3>
        <div className="keygrid">
        <div className="keyrow"><span className="ic" data-n="Interrogation Probe" role="img" aria-label="Interrogation Probe"><svg viewBox="0 0 50 50"><use href="#e-ip"/></svg></span><div><b>Interrogation Probe</b><span>DoT · cast once, kept alive by the Ruthless Interrogation tactical</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Series of Shots" role="img" aria-label="Series of Shots"><svg viewBox="0 0 50 50"><use href="#e-ss"/></svg></span><div><b>Series of Shots</b><span>2-GCD channel · used twice every cycle, on cooldown</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Plasma Probe" role="img" aria-label="Plasma Probe"><svg viewBox="0 0 50 50"><use href="#e-pp"/></svg></span><div><b>Plasma Probe</b><span>AoE DoT · always immediately after Series of Shots</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Explosive Probe" role="img" aria-label="Explosive Probe"><svg viewBox="0 0 50 50"><use href="#e-ep"/></svg></span><div><b>Explosive Probe</b><span>Fixed anchor · closes the first half of every cycle</span></div></div>
        <div className="keyrow"><span className="ic" data-n="EMP Discharge" role="img" aria-label="EMP Discharge"><svg viewBox="0 0 50 50"><use href="#e-emp"/></svg></span><div><b>EMP Discharge</b><span>Fixed anchor · opens the second half, needs Electrified Railgun up</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Corrosive Dart" role="img" aria-label="Corrosive Dart"><svg viewBox="0 0 50 50"><use href="#e-cd"/></svg></span><div><b>Corrosive Dart</b><span>DoT · recast every cycle, duration matches the cycle length exactly</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Snipe" role="img" aria-label="Snipe"><svg viewBox="0 0 50 50"><use href="#e-sn"/></svg></span><div><b>Snipe</b><span>Flex filler · the fallback, cheaper but weaker than Fragmentation Grenade</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Fragmentation Grenade" role="img" aria-label="Fragmentation Grenade"><svg viewBox="0 0 50 50"><use href="#e-fg"/></svg></span><div><b>Fragmentation Grenade</b><span>Flex filler · the default, energy-positive thanks to Engineer's Tool Belt</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Orbital Strike" role="img" aria-label="Orbital Strike"><svg viewBox="0 0 50 50"><use href="#e-os"/></svg></span><div><b>Orbital Strike</b><span>Flex filler, top priority · roughly every other cycle</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Targeting Systems" role="img" aria-label="Targeting Systems"><svg viewBox="0 0 50 50"><use href="#e-ts"/></svg></span><div><b>Targeting Systems</b><span>Off-GCD, on cooldown · guaranteed crit on the next Explosive Probe</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Adrenaline Probe" role="img" aria-label="Adrenaline Probe"><svg viewBox="0 0 50 50"><use href="#e-ap"/></svg></span><div><b>Adrenaline Probe</b><span>Off-GCD · energy top-off, used when it dips too low</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Adrenal" role="img" aria-label="Adrenal"><svg viewBox="0 0 50 50"><use href="#e-adr"/></svg></span><div><b>Adrenal</b><span>Off-GCD burst · opener, then saved for a later Orbital Strike</span></div></div>
      </div>
      </section>

      {/* ===== 01 OPENER ===== */}
      <section>
        <h2><span className="num">01</span> The opener — bootstrap the two DoTs, then the anchor</h2>
        <p className="lede">The opener doesn't run the steady-state skeleton at all. It's the minimum sequence needed to get both DoTs up and the Corrosive Dart/Explosive Probe/EMP Discharge anchor cycle started, in the order that gets the most damage on the target the fastest.</p>

        <figure>
          <svg viewBox="0 0 820 200" role="img" aria-label="Opener: Interrogation Probe, Adrenal off-GCD, Explosive Probe, Series of Shots channel, Plasma Probe, EMP Discharge, Snipe, Corrosive Dart, then the first steady cycle begins.">
            <g className="sv-num" style={{ textAnchor: 'middle' }}>
              <text x="30" y="30">0.0</text><text x="260" y="30">3.0</text><text x="500" y="30">7.2</text><text x="740" y="30">11.6</text>
            </g>
            <g><title>Interrogation Probe (0.032s)</title><use href="#e-ip" x="16" y="40" width="42" height="42"/></g>
            <g><title>Adrenal (off-GCD, 0.813s)</title><use href="#e-adr" x="60" y="48" width="26" height="26"/></g>
            <g><title>Explosive Probe (1.501s)</title><use href="#e-ep" x="94" y="40" width="42" height="42"/></g>
            <g><title>Series of Shots (2-GCD channel, 3.036s)</title><use href="#e-ss" x="150" y="36" width="48" height="48"/></g>
            <g><title>Plasma Probe (5.736s)</title><use href="#e-pp" x="212" y="40" width="42" height="42"/></g>
            <g><title>EMP Discharge (7.209s)</title><use href="#e-emp" x="268" y="40" width="42" height="42"/></g>
            <g><title>Snipe (8.598s)</title><use href="#e-sn" x="324" y="40" width="42" height="42"/></g>
            <g><title>Corrosive Dart (10.112s)</title><use href="#e-cd" x="380" y="40" width="42" height="42"/></g>
            <line x1="450" y1="34" x2="450" y2="140" stroke="var(--brass)" strokeWidth="2"/>
            <text className="sv-label" x="450" y="158" style={{ textAnchor: 'middle' }} fill="var(--brass)">first steady cycle starts here</text>
            <g className="sv-note">
              <text x="16" y="196">Explosive Probe comes before the first Series of Shots here — the only place in the whole parse it does.</text>
            </g>
          </svg>
          <figcaption>Timestamps: Interrogation Probe 0.032 · Adrenal 0.813 (off-GCD) · Explosive Probe 1.501 · Series of Shots 3.036 · Plasma Probe 5.736 · EMP Discharge 7.209 · Snipe 8.598 · Corrosive Dart 10.112 · Series of Shots 11.610 (cycle 1 of the steady grid begins). Seven GCDs total, one mini-cycle shorter than every cycle that follows.</figcaption>
        </figure>

        <div className="call">
          <h4>Adrenal goes early here, not after Orbital Strike</h4>
          <p>The guide's stated ideal is popping the Adrenal immediately after Orbital Strike, to buff the two Series of Shots channels, EMP Discharge, and the full Orbital Strike duration all at once. The opener breaks that rule — Adrenal fires at 0.813 s, thirty-two seconds before the first Orbital Strike even happens. The second (and last) Adrenal of the parse, at 259.577 s, <em>does</em> follow the rule: it lands 3.94 s after an Orbital Strike at 255.641 s. Popping the first one immediately at pull instead of holding it is the standard opener convention across every spec on this site, not something specific to Engineering.</p>
        </div>

        <div className="call">
          <h4>Parse 2 opens on Corrosive Dart instead of Interrogation Probe</h4>
          <p>Parse 2 (Tcmeaty) runs a near-identical seven-slot opener — Corrosive Dart 0.039 · Interrogation Probe 1.501 · Adrenal 2.207 (off-GCD) · Explosive Probe 2.905 · Series of Shots 4.307 · Plasma Probe 7.238 · EMP Discharge 8.736 — but leads with Corrosive Dart rather than Interrogation Probe. Both openers are just "cast whichever fixed ability isn't already running yet, fastest first" — Corrosive Dart is the one with a recurring clock to start, so opening on it gets that clock ticking half a GCD sooner. Neither order is wrong; the guide doesn't specify one.</p>
        </div>

        <div className="call fix">
          <h4>Parse 3 pre-casts Orbital Strike and Targeting Systems before pull — free damage neither of the other two parses claims</h4>
          <p>Parse 3 (Superheavy, the highest-DPS parse of the three) activates Orbital Strike at <b>−2.486 s</b> and Targeting Systems at <b>−5.706 s</b> — both before <span className="mono">EnterCombat</span>, both landing exactly as combat starts. Orbital Strike's cast time and Targeting Systems' guaranteed-crit buff both survive the transition into combat intact: the pre-cast Targeting Systems buff is still consumed by the very first Explosive Probe at 1.804 s, same as every other instance in section 04. Neither parse 1 nor parse 2 pre-casts anything — their first Orbital Strike lands 26–33 s into the fight, and their first Targeting Systems is a normal in-combat cast. This is the same trick the Marksmanship page documents for its own pre-cast Orbital Strike opener, and it's worth exactly as much here: a full cast's worth of damage that costs nothing, because it happens before the parse timer even starts.</p>
        </div>
      </section>

      {/* ===== 02 THE CYCLE ===== */}
      <section>
        <h2><span className="num">02</span> The cycle — two mirrored halves, seven locked slots</h2>
        <p className="lede">Every one of the 16 steady-state cycles in this parse runs the exact same ten-slot shape, with zero deviation. Corrosive Dart, Explosive Probe, and EMP Discharge share the same real-world cooldown — confirmed directly: all three average 17.1 s between casts, with the cycle re-anchoring on Corrosive Dart because its own DoT duration is what actually forces the recast.</p>

        <figure>
          <svg viewBox="0 0 820 200" role="img" aria-label="Standard macro-cycle: Series of Shots, Plasma Probe, flex, flex, Explosive Probe, Series of Shots, Plasma Probe, EMP Discharge, flex, Corrosive Dart. Ten on-GCD slots, roughly 15.7 seconds.">
            <g><title>Series of Shots (2-GCD channel)</title><use href="#e-ss" x="14" y="30" width="46" height="46"/></g>
            <g><title>Plasma Probe</title><use href="#e-pp" x="72" y="34" width="40" height="40"/></g>
            <rect x="122" y="30" width="90" height="48" rx="6" fill="none" stroke="var(--brass)" strokeWidth="1.4" strokeDasharray="4 3"/>
            <g><title>Flex slot 1 — Orbital Strike, Snipe, or Fragmentation Grenade</title><use href="#e-fg" x="128" y="34" width="40" height="40"/></g>
            <g><title>Flex slot 2 — usually Fragmentation Grenade or Snipe</title><use href="#e-sn" x="174" y="34" width="40" height="40"/></g>
            <g><title>Explosive Probe (fixed)</title><use href="#e-ep" x="228" y="30" width="46" height="46"/></g>
            <g><title>Series of Shots (2-GCD channel)</title><use href="#e-ss" x="286" y="30" width="46" height="46"/></g>
            <g><title>Plasma Probe</title><use href="#e-pp" x="344" y="34" width="40" height="40"/></g>
            <g><title>EMP Discharge (fixed)</title><use href="#e-emp" x="396" y="30" width="46" height="46"/></g>
            <rect x="452" y="30" width="46" height="48" rx="6" fill="none" stroke="var(--brass)" strokeWidth="1.4" strokeDasharray="4 3"/>
            <g><title>Flex slot 3 — usually Fragmentation Grenade, sometimes Snipe</title><use href="#e-fg" x="454" y="34" width="40" height="40"/></g>
            <g><title>Corrosive Dart (fixed, recast every cycle)</title><use href="#e-cd" x="510" y="30" width="46" height="46"/></g>
            <text className="sv-label" x="640" y="58" fill="var(--brass)">→ next Series of Shots</text>
            <line className="sv-tick" x1="14" y1="96" x2="600" y2="96"/>
            <text className="sv-numb" x="14" y="112">10 on-GCD slots · 11 GCD-equivalent (2 channels count double) · mean 15.66 s across 16 cycles</text>
            <g className="sv-note">
              <text x="14" y="150">The three boxed flex slots are the only place the sequence ever varies — see section 03.</text>
            </g>
          </svg>
          <figcaption>All 16 steady cycles run this exact shape. Seven slots are fixed by cooldown alone: two Series of Shots (each a 2-GCD channel, always immediately followed by Plasma Probe), Explosive Probe, EMP Discharge, and Corrosive Dart.</figcaption>
        </figure>

        <div className="call">
          <h4>Two shapes, and shape B is the more common of the two — same seven fixed slots either way</h4>
          <p>All three parses agree on two things without exception: EMP Discharge is always the very next GCD after a Plasma Probe, and Explosive Probe always has exactly one flex slot in front of it. Where they disagree is what happens to the other two flex slots and Corrosive Dart:</p>
          <div className="tw">
          <table>
            <thead><tr><th>Parse</th><th>Shape</th></tr></thead>
            <tbody>
              <tr><td>1 (Gőthmog)</td><td><span className="mono">SS · PP · flex · flex · EP · SS · PP · EMP · flex · CD</span></td></tr>
              <tr className="hi"><td>2 (Tcmeaty)</td><td><span className="mono">flex · EP · SS · PP · EMP · flex · flex · SS · PP · CD</span></td></tr>
              <tr className="hi"><td>3 (Superheavy)</td><td><span className="mono">flex · EP · SS · PP · EMP · flex · flex · SS · PP · CD</span></td></tr>
            </tbody>
          </table>
          </div>
          <p>Parse 1 is the outlier: it pairs its two "spare" flex slots in front of Explosive Probe and leaves Corrosive Dart trailing a single flex GCD. Parses 2 and 3 both pair them right after EMP Discharge instead, letting Corrosive Dart follow its Plasma Probe with zero delay — shape B, now confirmed in two of three parses including the highest-DPS one. All three shapes total the same 7 fixed + 3 flex GCDs and land within 0.3 s of each other's mean cycle length (15.66 / 15.76 / 15.74 s) — this still reads as genuine player preference rather than a DPS-relevant choice, since the highest and lowest DPS parses (3 and 2) run the identical shape.</p>
        </div>
      </section>

      {/* ===== 03 FLEX PRIORITY ===== */}
      <section>
        <h2><span className="num">03</span> The three flex slots — priority is Orbital Strike, then energy</h2>
        <p className="lede">With no energy amounts in the log, the exact numbers behind each choice aren't directly provable — but the pattern is consistent across both parses, and the two players lean on the flex pool quite differently while still agreeing on the priority order.</p>

        <div className="tw">
        <table>
          <thead><tr><th>#</th><th>Filler</th><th>Parse 1</th><th>Parse 2</th><th>Parse 3</th><th>Where it lands</th></tr></thead>
          <tbody>
            <tr className="hi"><td>1</td><td>Orbital Strike</td><td>7 uses (14%)</td><td>8 uses (16%)</td><td>9 uses (18%)</td><td>Always takes the flex slot right before Explosive Probe, the moment it's up — plus one pre-cast, section 01</td></tr>
            <tr><td>2</td><td>Fragmentation Grenade</td><td>25 uses (51%)</td><td>30 uses (61%)</td><td>27 uses (53%)</td><td>Default filler whenever energy allows it — the "superior filler" per the guide</td></tr>
            <tr><td>3</td><td>Snipe</td><td>17 uses (35%)</td><td>8 uses (16%)</td><td>10 uses (20%)</td><td>Fallback, cheaper but weaker per GCD</td></tr>
            <tr><td>4</td><td>Takedown</td><td>0 uses</td><td>3 uses (6%)</td><td>4 uses (8%)</td><td>Sub-30% execute swap — see the call-out below</td></tr>
            <tr><td>5</td><td>Rifle Shot</td><td>0 uses</td><td>0 uses</td><td>1 use (2%)</td><td>Last-resort filler, one GCD near the very end of parse 3 — see section 05</td></tr>
          </tbody>
        </table>
        </div>

        <div className="call">
          <h4>The flex slot right after EMP Discharge favors Fragmentation Grenade because Energy Overrides pays for it</h4>
          <p>EMP Discharge grants Energy Overrides, making the next Fragmentation Grenade free — a proc that lasts 15 s, long enough to survive to whichever GCD actually uses it. In parse 1 that's flex slot 3, immediately after EMP Discharge: 11 of 16 cycles take Fragmentation Grenade there, versus a roughly even split between Fragmentation Grenade and Snipe in the two flex slots further from the proc. Parse 2's shape puts <em>two</em> flex slots right after EMP Discharge instead of one, and both lean Fragmentation Grenade even harder — 61% of its flex GCDs go to Fragmentation Grenade against parse 1's 51%, with Snipe usage cut by more than half. Same proc, same logic, just applied to a different-shaped cycle.</p>
          <p>When Orbital Strike is available it always takes the flex slot right before Explosive Probe outright — never a later one — in all three parses. Two of parse 1's seven Orbital Strike cycles (rows 2 and 15 in the grid) take two Snipes and zero Fragmentation Grenades instead of the usual mix; parse 2 shows no equivalent outlier among its eight, but parse 3 has exactly one (row 6 in its grid, section 08c). Without energy amounts logged there's still no way to confirm what drives these exceptions — flagged in section 09.</p>
        </div>

        <div className="call flag">
          <h4>Takedown: a sub-30% execute that shows up in two of three parses</h4>
          <p>Parse 2 casts Takedown three times (207.185 s, 250.131 s, 268.711 s of a 283 s fight); parse 3 casts it four times (199.233 s, 215.226 s, 249.536 s, 275.136 s of a 279 s fight) — both clusters sitting in the final third of the fight, both always swapping into a flex slot rather than adding one. Parse 1 never casts it once, despite running the <em>longest</em> fight of the three (285.6 s), which should cross the same health threshold. The ability doc doesn't mention Takedown for Engineering at all, so with two of three parses now showing it, this reads more like "parse 1's player skipped an available button" than "Takedown is optional" — but it's still not confirmed which. Same open question the Marksmanship page has about Crouch/Snap Shot.</p>
        </div>
      </section>

      {/* ===== 04 TARGETING SYSTEMS ===== */}
      <section>
        <h2><span className="num">04</span> Targeting Systems never expires unused — it waits for the next Explosive Probe</h2>
        <p className="lede">The ability doc calls Systems Upgrade a "20 second" buff and says it should be used on cooldown. What actually matters for damage is the separate crit-chance buff Targeting Systems grants on your next Explosive Probe — and the log shows that half doesn't run on a timer at all. Confirmed in all three parses, including one pre-cast before pull.</p>

        <div className="tw">
        <table>
          <thead><tr><th>Parse</th><th>Targeting Systems cast</th><th className="n">Next Explosive Probe</th><th className="n">Gap</th><th className="n">Buff removed</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>15.069 s</td><td className="n">18.771 s</td><td className="n">3.70 s</td><td className="n">19.271 s (+0.50 after EP)</td></tr>
            <tr><td>1</td><td>71.121 s</td><td className="n">87.331 s</td><td className="n">16.21 s</td><td className="n">87.829 s (+0.50 after EP)</td></tr>
            <tr><td>1</td><td>128.264 s</td><td className="n">138.545 s</td><td className="n">10.28 s</td><td className="n">138.745 s (+0.20 after EP)</td></tr>
            <tr><td>1</td><td>186.299 s</td><td className="n">189.999 s</td><td className="n">3.70 s</td><td className="n">190.301 s (+0.30 after EP)</td></tr>
            <tr><td>1</td><td>245.931 s</td><td className="n">258.080 s</td><td className="n">12.15 s</td><td className="n">258.274 s (+0.19 after EP)</td></tr>
            <tr className="hi"><td>2</td><td>53.469 s</td><td className="n">54.562 s</td><td className="n">1.09 s</td><td className="n">54.665 s (+0.10 after EP)</td></tr>
            <tr className="hi"><td>2</td><td>110.755 s</td><td className="n">122.958 s</td><td className="n">12.20 s</td><td className="n">123.060 s (+0.10 after EP)</td></tr>
            <tr className="hi"><td>2</td><td>170.466 s</td><td className="n">174.280 s</td><td className="n">3.81 s</td><td className="n">174.383 s (+0.10 after EP)</td></tr>
            <tr className="hi"><td>2</td><td>226.794 s</td><td className="n">242.909 s</td><td className="n">16.12 s</td><td className="n">243.416 s (+0.51 after EP)</td></tr>
            <tr><td>3</td><td>−5.706 s (pre-cast)</td><td className="n">1.804 s</td><td className="n">7.51 s</td><td className="n">2.298 s (+0.49 after EP)</td></tr>
            <tr><td>3</td><td>6.012 s</td><td className="n">19.288 s</td><td className="n">13.28 s</td><td className="n">19.999 s (+0.71 after EP)</td></tr>
            <tr><td>3</td><td>62.515 s</td><td className="n">70.502 s</td><td className="n">7.99 s</td><td className="n">71.211 s (+0.71 after EP)</td></tr>
            <tr><td>3</td><td>119.314 s</td><td className="n">122.417 s</td><td className="n">3.10 s</td><td className="n">123.163 s (+0.75 after EP)</td></tr>
            <tr><td>3</td><td>178.326 s</td><td className="n">190.931 s</td><td className="n">12.61 s</td><td className="n">191.631 s (+0.70 after EP)</td></tr>
            <tr><td>3</td><td>234.545 s</td><td className="n">242.232 s</td><td className="n">7.69 s</td><td className="n">242.943 s (+0.71 after EP)</td></tr>
          </tbody>
        </table>
        </div>

        <div className="call">
          <h4>15 for 15 across three parses, no matter how long the wait — even pre-cast before pull</h4>
          <p>Every in-combat Targeting Systems cast across all three logs has its crit buff consumed by the very next Explosive Probe — confirmed by the buff's removal timestamp landing 0.10–0.75 s after that Explosive Probe's own activation, matching Explosive Probe's normal detonation delay exactly. The wait ranges from 1.1 s to 16.2 s across these fifteen instances and it never once expires early. Parse 3's pre-cast instance (section 01) is the cleanest proof of all: cast 5.7 s before combat even starts, it still survives to buff the very first Explosive Probe. Weave it in the instant it's off cooldown — there's no timing risk to manage, and it's safe to fire before pull too.</p>
        </div>
      </section>

      {/* ===== 05 ELECTRIFIED RAILGUN ===== */}
      <section>
        <h2><span className="num">05</span> Electrified Railgun — capped within seconds, held for almost the entire fight</h2>
        <p className="lede">The guide notes that Fragmentation Grenade, Snipe, and Takedown all apply a stack of Electrified Railgun on top of Series of Shots' own stacking, specifically so the DoT can sit at its 3-stack cap continuously. All three logs confirm it does — parse 3 also shows the one exception across all three parses, and why.</p>

        <div className="meters">
          <div className="meter"><span className="lbl">Time to first reach 3/3 Electrified Railgun stacks</span><span className="val">3.939 s<span className="was">was: parse 2: 5.349 s · parse 3: 4.200 s</span></span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Stacks lost across the rest of the fight</span><span className="val">0<span className="was">was: parse 3: 1 brief drop at 260.7 s, reapplied to 3/3 within 2.1 s — see below</span></span><span className="track"><span className="fill" style={{ width: '97%' }}></span></span></div>
          <div className="meter"><span className="lbl">Electrified Railgun's share of total damage</span><span className="val">11.37%<span className="was">was: guide estimate ~10% · parse 2: 11.68% · parse 3: 9.15%</span></span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
        </div>

        <div className="call">
          <h4>Parse 3's one drop traces straight back to Rifle Shot</h4>
          <p>Electrified Railgun fully expires at 260.746 s in parse 3 and is rebuilt from 1 stack within 2.1 s — the only uptime gap across all three parses. The three GCDs immediately before the drop are Corrosive Dart (256.737 s), Rifle Shot (258.137 s), and Explosive Probe (259.533 s) — and per the ability doc, none of those three refresh Electrified Railgun; only Series of Shots' own ticks, Fragmentation Grenade, Snipe, and Takedown do. Rifle Shot filled the flex slot that would normally hold Fragmentation Grenade or Snipe here (see section 03's filler table), so the DoT went unrefreshed for just long enough to lapse before the next Series of Shots picked it back up. One substitution, one small and fully explained gap — not a mystery, and not a meaningful damage loss either.</p>
        </div>
      </section>

      {/* ===== 06 GCD ===== */}
      <section>
        <h2><span className="num">06</span> The GCD, measured directly — and the highest-DPS parse has the slowest one</h2>
        <p className="lede">Series of Shots is a fixed 2-GCD channel, so its activation-to-Plasma-Probe gap gives a clean, repeated GCD reading with no filler-choice noise in it at all.</p>

        <div className="tw">
        <table>
          <thead><tr><th>Parse</th><th className="n">DPS</th><th className="n">Channels measured</th><th className="n">Mean channel</th><th className="n">Implied GCD</th></tr></thead>
          <tbody>
            <tr><td>1 (Gőthmog)</td><td className="n">30,039</td><td className="n">33</td><td className="n">2.8027 s</td><td className="n">1.4014 s</td></tr>
            <tr><td>2 (Tcmeaty)</td><td className="n">29,123</td><td className="n">32</td><td className="n">2.9168 s</td><td className="n">1.4584 s</td></tr>
            <tr className="hi"><td>3 (Superheavy)</td><td className="n">30,873</td><td className="n">32</td><td className="n">2.9484 s</td><td className="n">1.4742 s</td></tr>
          </tbody>
        </table>
        </div>
        <p>Parse 1's 1.4014 s matches the alacrity build used throughout this site's other reference parses (compare the Mercenary and Marksmanship pages' 1.4015 s and 1.4019–1.4032 s readings). Parses 2 and 3 both run slower, less-alacrity builds — and parse 3, the slowest of the three at 1.4742 s, is also the highest-DPS parse. Over a ~279–286 s fight that difference is real: parse 1 fits roughly 204 total GCDs, parse 2 roughly 194, parse 3 roughly 189 — fifteen fewer GCDs than parse 1, for 2.8% more damage. The gap comes from what fills each GCD (more Orbital Strike, per section 03, plus the free pre-cast from section 01), not from casting faster.</p>
        <p style={{ marginTop: '16px' }}>The 11-GCD-equivalent cycle predicts macro-cycle lengths of 15.42 s / 16.04 s / 16.22 s for parses 1/2/3 at their respective GCDs. Measured means are 15.66 s / 15.76 s / 15.74 s — parse 1 runs 1.6% long, parse 2 runs 1.7% short, and parse 3 runs 3.0% short of its own prediction. The first two look like noise in opposite directions around a real 11-GCD cycle; parse 3's larger gap is still unexplained and worth checking against a fourth log.</p>
      </section>

      {/* ===== 07 SCORECARD ===== */}
      <section>
        <h2><span className="num">07</span> Execution scorecard</h2>
        <p className="lede">All measured from effect apply/remove and AbilityActivate events across all three parses. Parse 1 values shown; parses 2 and 3 match on every shared metric except where noted.</p>
        <div className="meters">
          <div className="meter"><span className="lbl">Corrosive Dart / Explosive Probe / EMP Discharge uptime across the whole fight</span><span className="val">100%<span className="was">17 casts each in parse 1 · same 100% uptime in parses 2 and 3, counts vary only by mid-cycle fight-end truncation</span></span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Interrogation Probe uptime from a single cast</span><span className="val">100%<span className="was">applied 0.033 s, removed at target death · same in parses 2 and 3</span></span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Steady cycles matching a fixed 7-locked/3-flex skeleton</span><span className="val">16 / 16<span className="was">was: parse 2: 16/16 · parse 3: 15/15 (2 cycles distorted by the sub-30% transition, section 08c) — different flex order, see section 02</span></span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Targeting Systems buffs consumed by the next Explosive Probe</span><span className="val">15 / 15<span className="was">across all three parses combined, incl. one pre-cast — see section 04</span></span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Series of Shots channels reaching Plasma Probe with no gap</span><span className="val">33 / 34<span className="was">last one truncated by death · was: parse 2: 32/33 · parse 3: 32/32</span></span><span className="track"><span className="fill" style={{ width: '97%' }}></span></span></div>
        </div>
      </section>

      {/* ===== 08 GRID ===== */}
      <section>
        <h2><span className="num">08</span> Reference grid — parse 1 (Gőthmog), 16 steady macro-cycles</h2>
        <p className="lede">Each row is one cycle after the opener. Hover any icon for its name. Flagged rows are the two "two Snipes, no Fragmentation Grenade" outliers discussed in section 03; the green row is the tightest lap in the parse.</p>
        <div className="gridwrap">
          <div className="cgrid">
            <div className="crow chead">
              <div>#</div><div>SS1</div><div>PP1</div><div>F1</div><div>F2</div><div>EP</div>
              <div>SS2</div><div>PP2</div><div>EMP</div><div>F3</div><div>CD</div>
              <div>Len</div><div>Off</div>
            </div>
            {CYCLES.map((r) => (
              <div key={r.cyc} className={`crow${r.flag ? ' flagrow' : ''}${r.best ? ' bestrow' : ''}`}>
                <div className="cyc">{r.cyc}</div>
                {r.cells.map((cell, i) =>
                  cell ? (
                    <span key={i} className="ic" data-n={cell.n} role="img" aria-label={cell.n}>
                      <svg viewBox="0 0 50 50"><use href={`#${iconRef(cell.n)}`} /></svg>
                    </span>
                  ) : (
                    <span key={i} className="ic nil" aria-hidden="true"></span>
                  )
                )}
                <div className="len">{r.len}</div>
                <div className="offc">
                  {r.off.length ? (
                    <span className="ic" data-n={r.off.join(', ')} role="img" aria-label={r.off.join(', ')}>
                      <svg viewBox="0 0 50 50"><use href={`#${iconRef(r.off[0])}`} /></svg>
                    </span>
                  ) : (
                    <span className="ic nil" aria-hidden="true"></span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="markkey">
          <span style={{ opacity: '.75' }}>Off column: the off-GCD extra weaved into that cycle (Targeting Systems, Adrenaline Probe, or Adrenal), when there is one — hover for the full list on rows with more than one.</span>
        </div>
      </section>

      {/* ===== 08b GRID PARSE 2 ===== */}
      <section>
        <h2><span className="num">08b</span> Reference grid — parse 2 (Tcmeaty), 15 steady macro-cycles</h2>
        <p className="lede">Same seven fixed slots, reordered per section 02: the flex slot before Explosive Probe comes first, and the other two sit right after EMP Discharge instead of trailing before Corrosive Dart. Red rows are the sub-30% Takedown cycles from section 03; the last row is the fight-ending 11-slot cycle where Takedown adds a GCD rather than replacing one.</p>
        <div className="gridwrap">
          <div className="cgrid">
            <div className="crow chead" style={{ gridTemplateColumns: '26px repeat(11,minmax(26px,1fr)) 44px 30px' }}>
              <div>#</div><div>F1</div><div>EP</div><div>SS1</div><div>PP1</div><div>EMP</div>
              <div>F2</div><div>F3</div><div>F4</div><div>SS2</div><div>PP2</div><div>CD</div>
              <div>Len</div><div>Off</div>
            </div>
            {CYCLES2.map((r) => (
              <div key={r.cyc} className={`crow${r.exec ? ' execrow' : ''}${r.best ? ' bestrow' : ''}`} style={{ gridTemplateColumns: '26px repeat(11,minmax(26px,1fr)) 44px 30px' }}>
                <div className="cyc">{r.cyc}</div>
                {r.cells.map((cell, i) =>
                  cell ? (
                    <span key={i} className="ic" data-n={cell.n} role="img" aria-label={cell.n}>
                      <svg viewBox="0 0 50 50"><use href={`#${iconRef(cell.n)}`} /></svg>
                    </span>
                  ) : (
                    <span key={i} className="ic nil" aria-hidden="true"></span>
                  )
                )}
                <div className="len">{r.len}</div>
                <div className="offc">
                  {r.off.length ? (
                    <span className="ic" data-n={r.off.join(', ')} role="img" aria-label={r.off.join(', ')}>
                      <svg viewBox="0 0 50 50"><use href={`#${iconRef(r.off[0])}`} /></svg>
                    </span>
                  ) : (
                    <span className="ic nil" aria-hidden="true"></span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="markkey">
          <span style={{ opacity: '.75' }}>F4 is nil for every row except the last — the one cycle in either parse that runs 11 on-GCD slots instead of 10, squeezed in as the target neared death.</span>
        </div>
      </section>

      {/* ===== 08c GRID PARSE 3 ===== */}
      <section>
        <h2><span className="num">08c</span> Reference grid — parse 3 (Superheavy), 15 steady macro-cycles</h2>
        <p className="lede">Same shape B as parse 2. Row 15 opens on Rifle Shot instead of the usual Fragmentation Grenade or Snipe — the one Electrified Railgun gap in section 05. Rows 11–14 sit in the sub-30% execute window: row 11 runs long (an extra Fragmentation Grenade squeezed in before Corrosive Dart, in the F5 column), row 12 runs short (missing its F1 flex entirely), and both carry a Takedown.</p>
        <div className="gridwrap">
          <div className="cgrid">
            <div className="crow chead" style={{ gridTemplateColumns: '26px repeat(12,minmax(24px,1fr)) 44px 30px' }}>
              <div>#</div><div>F1</div><div>EP</div><div>SS1</div><div>PP1</div><div>EMP</div>
              <div>F2</div><div>F3</div><div>F4</div><div>SS2</div><div>PP2</div><div>F5</div><div>CD</div>
              <div>Len</div><div>Off</div>
            </div>
            {CYCLES3.map((r) => (
              <div key={r.cyc} className={`crow${r.exec ? ' execrow' : ''}${r.flag ? ' flagrow' : ''}${r.best ? ' bestrow' : ''}`} style={{ gridTemplateColumns: '26px repeat(12,minmax(24px,1fr)) 44px 30px' }}>
                <div className="cyc">{r.cyc}</div>
                {r.cells.map((cell, i) =>
                  cell ? (
                    <span key={i} className="ic" data-n={cell.n} role="img" aria-label={cell.n}>
                      <svg viewBox="0 0 50 50"><use href={`#${iconRef(cell.n)}`} /></svg>
                    </span>
                  ) : (
                    <span key={i} className="ic nil" aria-hidden="true"></span>
                  )
                )}
                <div className="len">{r.len}</div>
                <div className="offc">
                  {r.off.length ? (
                    <span className="ic" data-n={r.off.join(', ')} role="img" aria-label={r.off.join(', ')}>
                      <svg viewBox="0 0 50 50"><use href={`#${iconRef(r.off[0])}`} /></svg>
                    </span>
                  ) : (
                    <span className="ic nil" aria-hidden="true"></span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="markkey">
          <span style={{ opacity: '.75' }}>F1 is nil on row 12 — the one cycle across all three parses where the flex slot before Explosive Probe is skipped outright rather than filled.</span>
        </div>
      </section>

      {/* ===== 09 STILL ON THE TABLE ===== */}
      <section>
        <h2><span className="num">09</span> Still on the table</h2>

        <div className="call flag">
          <h4>1 · No energy amounts in any of these logs</h4>
          <p>Same limitation as every other spec on this site — only Spend/Restore <em>events</em> are logged, never quantities. The Snipe-vs-Fragmentation-Grenade filler choice, the occasional "double Snipe" Orbital Strike cycle (parse 1 twice, parse 3 once), and parse 3's single Rifle Shot near the end are all plausibly energy-driven, but none of it is provable from these logs alone.</p>
        </div>

        <div className="call">
          <h4>2 · Systems Upgrade's own duration looks inconsistent — not yet resolved</h4>
          <p>The 10%-probe-damage buff Systems Upgrade (distinct from the Explosive Probe crit buff covered in section 04) shows apply-to-remove gaps that alternate between about 20 s and about 30 s across parse 1's four measured instances. That doesn't match the ability doc's flat "20 seconds," and no explanation has been confirmed yet across three logs now — worth checking directly in-game rather than guessing further from parses.</p>
        </div>

        <div className="call">
          <h4>3 · Why does parse 1 never use Takedown at all?</h4>
          <p>Parses 2 and 3 both cast Takedown three or four times, always clustered in the fight's final third. Parse 1 runs the <em>longest</em> fight of the three and never casts it once. Ability-tree/utility choice is still the leading explanation (section 03) now that two of three parses agree, but it remains an inference, not a confirmed rule — a fourth log where Takedown is unavailable by choice would settle it.</p>
        </div>

        <div className="call">
          <h4>4 · Orbital Strike's cadence mostly tracks its own cooldown, with occasional real gaps</h4>
          <p>Parse 1: six of seven gaps between Orbital Strike casts sit tightly between 33.997 s and 34.277 s; the seventh is 51.452 s, almost exactly one and a half cycles — one use skipped outright, not merely delayed. All three parses show the shape holds most of the time but isn't perfectly rigid; nothing in any of the three logs explains the skips.</p>
        </div>

        <div className="call">
          <h4>5 · Parse 3's cycle length undershoots its own GCD prediction by more than the other two</h4>
          <p>Parses 1 and 2 land within about 1.7% of the 11-GCD prediction, in opposite directions. Parse 3 undershoots by 3.0% — noticeably more, and in the same direction as parse 2. With three data points this could be a real pattern (something about faster clearing at lower GCD-count trims real time off the cycle) or still just noise; a fourth log would help separate the two.</p>
        </div>

        <h3>Closed — confirmed across all three parses</h3>
        <ul>
          <li><b>Corrosive Dart / Explosive Probe / EMP Discharge</b> — 100% uptime, zero gaps, in all three parses. Corrosive Dart is recast every cycle by design, not a once-and-forget DoT like Interrogation Probe.</li>
          <li><b>Interrogation Probe</b> — one cast, 100% uptime for the entire fight, in all three parses, confirming the Ruthless Interrogation tactical keeps it alive without reapplication.</li>
          <li><b>Cycle shape</b> — 7 fixed / 3 flex slots in all three parses; only the internal ordering of the flex slots differs (section 02, two of three parses agree on the order), not the count.</li>
          <li><b>Targeting Systems</b> — its Explosive Probe crit buff is consumed by the next Explosive Probe every time, regardless of how long the wait is, and survives being pre-cast before pull; 15/15 across all three parses (section 04).</li>
          <li><b>Electrified Railgun</b> — capped at 3 stacks within the first several seconds and held almost the entire fight in all three parses; the single drop (parse 3) traces cleanly to one filler substitution (section 05).</li>
          <li><b>GCD / the 11-GCD cycle math</b> — measured directly off the Series of Shots channel in all three parses (1.4014 s / 1.4584 s / 1.4742 s, three different alacrity builds); the highest-DPS parse runs the slowest GCD, confirming filler quality matters more than cast speed (section 06).</li>
          <li><b>Pre-casting Orbital Strike and Targeting Systems before pull</b> — free damage confirmed working exactly like the Marksmanship page's pre-cast Orbital Strike, in the one parse that tries it (section 01).</li>
        </ul>
      </section>

      <footer>
        <p>Three StarParse detail logs, each against a single Operations Training Dummy with a 10,000,000 health pool, from three different players. Parse 1 (Gőthmog): 2,364 lines, <span className="mono">EnterCombat</span> 0 to a real <span className="mono">Death</span> event at 285.620 s, DPS from summed logged <span className="mono">Damage</span> values (8,579,670 total ÷ 285.591 s to <span className="mono">ExitCombat</span> = 30,039). Parse 2 (Tcmeaty): 2,337 lines, <span className="mono">Death</span> at 283.137 s, 8,245,212 total damage ÷ 283.115 s to <span className="mono">ExitCombat</span> = 29,123 DPS. Parse 3 (Superheavy, the highest-DPS parse of the three): 2,481 lines, pre-combat activations from −49.5 s onward, <span className="mono">Death</span> at 279.148 s, 8,617,600 total damage ÷ 279.134 s to <span className="mono">ExitCombat</span> = 30,873 DPS. Everything reported as "confirmed" or "closed" above holds across all three logs; everything else is flagged in section 09 as still needing a fourth parse. Gear-sourced procs and personal-loadout casts present in the raw logs (Power Surge, Mastery Surge, Critical Surge, Spotter, each character's own Adrenal, and parse 3's pre-combat Crouch/Target Acquired/Shield Probe) are excluded from the model above except where they explain a measured reading directly. Parse 2 also logs one use of Entrench; parse 3 logs one use of Rifle Shot, covered in section 05. Ability icons are the in-game art, supplied by the user.</p>
      </footer>

      </div>
    </div>
  );
}

function iconRef(name: string): string {
  const map: Record<string, string> = {
    'Interrogation Probe': 'e-ip',
    'Series of Shots': 'e-ss',
    'Plasma Probe': 'e-pp',
    'Explosive Probe': 'e-ep',
    'EMP Discharge': 'e-emp',
    'Corrosive Dart': 'e-cd',
    'Snipe': 'e-sn',
    'Fragmentation Grenade': 'e-fg',
    'Orbital Strike': 'e-os',
    'Targeting Systems': 'e-ts',
    'Adrenaline Probe': 'e-ap',
    'Adrenal': 'e-adr',
    'Takedown': 'e-td',
    'Rifle Shot': 'e-rs',
  };
  return map[name] || 'e-ss';
}
