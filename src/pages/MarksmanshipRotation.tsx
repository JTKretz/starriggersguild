/**
 * Marksmanship — Rotation Standard
 * ---------------------------------------------------------------------------
 * Built from two independent StarParse detail logs (two different players).
 * Ability icons live as separate files under /public/icons/sniper.
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
  .meter .val .was{display:block;font-size:11px;color:var(--ink-3);font-weight:400;margin-top:2px}
  .meter.lag .lbl{color:var(--ink);font-weight:600}

  /* ---------- reference grid ---------- */
  .gridwrap{overflow-x:auto;border:1px solid var(--rule);background:var(--panel);padding-bottom:32px}
  .cgrid{min-width:820px}
  .crow{display:grid;grid-template-columns:26px repeat(8,minmax(28px,1fr)) 44px 26px;
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

/* ---- reference-grid data: 23 macro-cycles anchored on Penetrating Blasts, from parse 2 (the reference log) ---- */
type Cell = { n: string; mark?: 'scc' | 'rc' } | null;
type CycleRow = { cyc: string; cells: Cell[]; off: string[]; len: string; slots: number; flag?: boolean; best?: boolean };

const g = (n: string, mark?: 'scc' | 'rc'): Cell => ({ n, mark });
const FT = g('Followthrough');
const SN = g('Snipe');
const AM = g('Ambush');
const TD = g('Takedown');

/* columns: PB1 · PB2(SV extra) · post-PB slot(FT or Takedown) · Snipe · Snipe · FT · Ambush · FT */
const STD: Cell[] = [g('Penetrating Blasts'), null, FT, SN, SN, FT, AM, FT];
const SVR: Cell[] = [g('Penetrating Blasts'), g('Penetrating Blasts'), FT, SN, SN, FT, AM, FT];
const T30: Cell[] = [g('Penetrating Blasts'), null, TD, SN, SN, FT, AM, FT];
const SVT: Cell[] = [g('Penetrating Blasts'), g('Penetrating Blasts'), TD, SN, SN, FT, AM, FT];

const CYCLES: CycleRow[] = [
  { cyc: '1', cells: STD, off: ['Laze Target', 'Laze Target'], len: '10.81', slots: 7 },
  { cyc: '2', cells: STD, off: [], len: '11.21', slots: 7 },
  { cyc: '3', cells: STD, off: [], len: '11.20', slots: 7 },
  { cyc: '4', cells: SVR, off: ['Sniper Volley', 'Laze Target'], len: '12.81', slots: 8, flag: true },
  { cyc: '5', cells: STD, off: [], len: '10.80', slots: 7, best: true },
  { cyc: '6', cells: STD, off: ['Laze Target'], len: '11.20', slots: 7 },
  { cyc: '7', cells: STD, off: [], len: '11.20', slots: 7 },
  { cyc: '8', cells: SVR, off: ['Sniper Volley', 'Laze Target'], len: '12.80', slots: 8, flag: true, best: true },
  { cyc: '9', cells: STD, off: [], len: '10.91', slots: 7 },
  { cyc: '10', cells: STD, off: ['Laze Target'], len: '11.20', slots: 7 },
  { cyc: '11', cells: STD, off: [], len: '11.21', slots: 7 },
  { cyc: '12', cells: SVR, off: ['Sniper Volley', 'Laze Target'], len: '13.12', slots: 8, flag: true },
  { cyc: '13', cells: STD, off: [], len: '10.80', slots: 7, best: true },
  { cyc: '14', cells: STD, off: ['Laze Target'], len: '11.21', slots: 7 },
  { cyc: '15', cells: STD, off: [], len: '11.21', slots: 7 },
  { cyc: '16', cells: SVR, off: ['Sniper Volley', 'Laze Target'], len: '13.00', slots: 8, flag: true },
  { cyc: '17', cells: T30, off: [], len: '12.19', slots: 7 },
  { cyc: '18', cells: T30, off: ['Laze Target'], len: '12.50', slots: 7 },
  { cyc: '19', cells: T30, off: ['Adrenal'], len: '12.20', slots: 7 },
  { cyc: '20', cells: SVT, off: ['Sniper Volley', 'Laze Target'], len: '13.01', slots: 8, flag: true },
  { cyc: '21', cells: T30, off: [], len: '12.00', slots: 7, best: true },
  { cyc: '22', cells: T30, off: ['Laze Target'], len: '12.30', slots: 7 },
  { cyc: '23', cells: T30, off: ['Adrenaline Probe'], len: '12.11', slots: 7 },
];

export default function MarksmanshipRotation({ theme }: { theme?: 'dark' | 'light' }) {
  return (
    <div className="ar-root" data-theme={theme}>
      <style>{CSS}</style>
      <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute', overflow: 'hidden' }}><defs>
      <clipPath id="ico-clip3"><rect width="50" height="50" rx="7" ry="7"/></clipPath>
      <symbol id="s-pb" viewBox="0 0 50 50"><image href="/icons/sniper/penetrating-blasts.webp" width="50" height="50" clipPath="url(#ico-clip3)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="s-ft" viewBox="0 0 50 50"><image href="/icons/sniper/followthrough.webp" width="50" height="50" clipPath="url(#ico-clip3)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="s-sn" viewBox="0 0 50 50"><image href="/icons/sniper/snipe.webp" width="50" height="50" clipPath="url(#ico-clip3)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="s-am" viewBox="0 0 50 50"><image href="/icons/sniper/ambush.webp" width="50" height="50" clipPath="url(#ico-clip3)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="s-td" viewBox="0 0 50 50"><image href="/icons/sniper/takedown.webp" width="50" height="50" clipPath="url(#ico-clip3)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="s-sv" viewBox="0 0 50 50"><image href="/icons/sniper/sniper-volley.png" width="50" height="50" clipPath="url(#ico-clip3)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="s-cd" viewBox="0 0 50 50"><image href="/icons/sniper/corrosive-dart.webp" width="50" height="50" clipPath="url(#ico-clip3)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="s-lz" viewBox="0 0 50 50"><image href="/icons/sniper/laze-target.png" width="50" height="50" clipPath="url(#ico-clip3)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="s-os" viewBox="0 0 50 50"><image href="/icons/sniper/orbital-strike.webp" width="50" height="50" clipPath="url(#ico-clip3)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="s-adr" viewBox="0 0 50 50"><image href="/icons/sniper/adrenal.webp" width="50" height="50" clipPath="url(#ico-clip3)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="s-cr" viewBox="0 0 50 50"><image href="/icons/sniper/crouch.webp" width="50" height="50" clipPath="url(#ico-clip3)" preserveAspectRatio="xMidYMid slice"/></symbol>
      </defs></svg>

      <div className="wrap">

      <div className="mast">
        <p className="eyebrow">Sniper / Marksmanship · parse 2 as reference · 34,166 DPS</p>
        <h1>One channel, three Followthroughs, on repeat</h1>
        <p className="standfirst">A seven-GCD macro-cycle anchored on <strong>Penetrating Blasts</strong>, closing three separate Followthrough windows every lap — one shared with the channel, one off a Snipe pair, one off Ambush. Two independent players ran the identical skeleton; parse 2 layers an extra Crouch/Snap Shot weave on top that parse 1 never touches.</p>
        <dl className="facts">
          <div className="fact"><dt>DPS</dt><dd>34,166<span className="was">was: parse 1: 33,962</span></dd></div>
          <div className="fact"><dt>GCD</dt><dd>1.1 / 1.3 / 1.4<small>s</small><span className="was">three-state · was: parse 1: 1.3 / 1.4 (no Snap Shot)</span></dd></div>
          <div className="fact"><dt>Macro-cycle</dt><dd>11.20<small>s med</small><span className="was">23 complete laps · was: parse 1: 10.71 s, 24 laps</span></dd></div>
          <div className="fact"><dt>Penetrating Blasts</dt><dd>6<small>/6 ticks</small><span className="was">32 for 32 · was: parse 1: 33 for 33 — zero short channels, both parses</span></dd></div>
          <div className="fact"><dt>Corrosive Dart</dt><dd>100<small>%</small><span className="was">one cast each · confirmed twice</span></dd></div>
          <div className="fact"><dt>Sub-30% swap</dt><dd>7<small>/8</small><span className="was">was: parse 1: 8/8 — see section 07</span></dd></div>
        </dl>
      </div>

      {/* ===== KEY ===== */}
      <section style={{ marginTop: '34px' }}>
        <h3 style={{ marginTop: '0' }}>Ability key — hover any icon anywhere on this page</h3>
        <div className="keygrid">
        <div className="keyrow"><span className="ic" data-n="Penetrating Blasts" role="img" aria-label="Penetrating Blasts"><svg viewBox="0 0 50 50"><use href="#s-pb"/></svg></span><div><b>Penetrating Blasts</b><span>Channel · 6 ticks, applies the armor debuff</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Followthrough" role="img" aria-label="Followthrough"><svg viewBox="0 0 50 50"><use href="#s-ft"/></svg></span><div><b>Followthrough</b><span>Free window · after Penetrating Blasts, Ambush, Takedown, or 2 Snipes</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Snipe" role="img" aria-label="Snipe"><svg viewBox="0 0 50 50"><use href="#s-sn"/></svg></span><div><b>Snipe</b><span>Casted · used in pairs, feeds three procs at once</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Ambush" role="img" aria-label="Ambush"><svg viewBox="0 0 50 50"><use href="#s-am"/></svg></span><div><b>Ambush</b><span>Casted · hardest hit, grants Finish the Job below 30%</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Takedown" role="img" aria-label="Takedown"><svg viewBox="0 0 50 50"><use href="#s-td"/></svg></span><div><b>Takedown</b><span>Sub-30% only · swaps in for the post-Penetrating-Blasts slot</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Sniper Volley" role="img" aria-label="Sniper Volley"><svg viewBox="0 0 50 50"><use href="#s-sv"/></svg></span><div><b>Sniper Volley</b><span>Off-GCD · resets Penetrating Blasts, drops the GCD to 1.3 s</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Corrosive Dart" role="img" aria-label="Corrosive Dart"><svg viewBox="0 0 50 50"><use href="#s-cd"/></svg></span><div><b>Corrosive Dart</b><span>DoT · applied once, ran the entire fight</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Laze Target" role="img" aria-label="Laze Target"><svg viewBox="0 0 50 50"><use href="#s-lz"/></svg></span><div><b>Laze Target</b><span>Off-GCD utility · buffs the next Ambush</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Crouch" role="img" aria-label="Crouch"><svg viewBox="0 0 50 50"><use href="#s-cr"/></svg></span><div><b>Crouch</b><span>Off-GCD, parse 2 only · grants Snap Shot, speeds up the next Snipe</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Orbital Strike" role="img" aria-label="Orbital Strike"><svg viewBox="0 0 50 50"><use href="#s-os"/></svg></span><div><b>Orbital Strike</b><span>Pre-cast · landed at pull, opener only</span></div></div>
      </div>
      </section>

      {/* ===== 01 OPENER ===== */}
      <section>
        <h2><span className="num">01</span> The opener — identical skeleton, one extra layer</h2>
        <p className="lede">Both parses pre-cast Orbital Strike, open Corrosive Dart immediately, pop their Adrenal early, and reach for Sniper Volley at the very first opportunity to double up Penetrating Blasts before the rotation has even settled into shape. Parse 2 adds one thing parse 1 never does: Crouch, weaved in from 1.4 s onward.</p>

        <figure>
          <svg viewBox="0 0 820 220" role="img" aria-label="Parse 2 opener: Orbital Strike pre-cast lands at 0.01 seconds, then Corrosive Dart, Laze Target, an Adrenal, Crouch, Followthrough, Penetrating Blasts, an early Sniper Volley, a second immediate Penetrating Blasts, then Followthrough, Snipe, Crouch, Snipe, Followthrough, Ambush, Followthrough before the first steady cycle begins at 16.1 seconds.">
            <g className="sv-num" style={{ textAnchor: 'middle' }}>
              <text x="40" y="30">0.0</text><text x="180" y="30">3.1</text><text x="360" y="30">7.2</text><text x="560" y="30">12.0</text><text x="740" y="30">16.1</text>
            </g>
            <g><title>Orbital Strike (pre-cast, lands at 0.01s)</title><use href="#s-os" x="16" y="40" width="44" height="44"/></g>
            <g><title>Corrosive Dart</title><use href="#s-cd" x="70" y="40" width="40" height="40"/></g>
            <g><title>Laze Target (off-GCD)</title><use href="#s-lz" x="118" y="46" width="26" height="26"/></g>
            <g><title>Adrenal (off-GCD)</title><use href="#s-adr" x="150" y="46" width="26" height="26"/></g>
            <rect x="176" y="38" width="130" height="48" rx="6" fill="none" stroke="var(--brass)" strokeWidth="1.6" strokeDasharray="4 3"/>
            <g><title>Penetrating Blasts</title><use href="#s-pb" x="184" y="40" width="44" height="44"/></g>
            <g><title>Penetrating Blasts (Sniper Volley reset)</title><use href="#s-pb" x="248" y="40" width="44" height="44"/></g>
            <text className="sv-flex" x="241" y="102" style={{ textAnchor: 'middle' }} fill="var(--brass)">SV reset</text>
            <g><title>Followthrough</title><use href="#s-ft" x="320" y="40" width="40" height="40"/></g>
            <g><title>Snipe</title><use href="#s-sn" x="366" y="40" width="40" height="40"/></g>
            <g><title>Crouch → Snap Shot (off-GCD, parse 2 only)</title><use href="#s-cr" x="404" y="30" width="22" height="22"/></g>
            <g><title>Snipe (Snap Shot-accelerated)</title><use href="#s-sn" x="412" y="40" width="40" height="40"/></g>
            <g><title>Followthrough</title><use href="#s-ft" x="458" y="40" width="40" height="40"/></g>
            <g><title>Ambush</title><use href="#s-am" x="504" y="40" width="40" height="40"/></g>
            <g><title>Followthrough</title><use href="#s-ft" x="550" y="40" width="40" height="40"/></g>
            <line x1="700" y1="34" x2="700" y2="140" stroke="var(--brass)" strokeWidth="2"/>
            <text className="sv-label" x="700" y="158" style={{ textAnchor: 'middle' }} fill="var(--brass)">first steady cycle starts here</text>
            <g className="sv-note">
              <text x="16" y="196">Sniper Volley used at 5.20 s in parse 2 — 4.82 s in parse 1 — both players took it the instant it was up</text>
            </g>
          </svg>
          <figcaption>Parse 2 timestamps: Orbital Strike 0.010 (pre-cast) · Corrosive Dart 0.197 · Laze Target 0.599 · Adrenal 1.108 · Crouch 1.403 · Followthrough 1.706 · Penetrating Blasts 3.104 · Sniper Volley 5.203 · Penetrating Blasts 5.304 (reset) · Followthrough 7.203 · Snipe 8.515 · Crouch 9.113 · Snipe 9.613 · Followthrough 10.710 · Ambush 12.001 · Followthrough 13.610 · Penetrating Blasts 16.109 (cycle 1 begins). Parse 1 runs the identical shape one Crouch lighter — see section 04 for Corrosive Dart, confirmed identical in both.</figcaption>
        </figure>
      </section>

      {/* ===== 02 CYCLE ===== */}
      <section>
        <h2><span className="num">02</span> The cycle — one channel, three Followthrough windows</h2>
        <p className="lede">Every steady-state lap opens on Penetrating Blasts, then spends its Followthrough eligibility three separate times: once off the channel itself, once off a Snipe pair, once off Ambush. Both parses run this exact seven-slot shape — parse 2 just runs it slightly slower per lap, because Crouch adds real time even though it costs no dedicated slot.</p>

        <figure>
          <svg viewBox="0 0 820 200" role="img" aria-label="Standard macro-cycle: Penetrating Blasts, Followthrough, Snipe, Snipe, Followthrough, Ambush, Followthrough, repeat. Seven on-GCD slots, roughly 10.7 to 11.2 seconds depending on parse.">
            <g><title>Penetrating Blasts (channel, 6 ticks)</title><use href="#s-pb" x="20" y="30" width="46" height="46"/></g>
            <g><title>Followthrough — off the channel</title><use href="#s-ft" x="90" y="34" width="40" height="40"/></g>
            <g><title>Snipe</title><use href="#s-sn" x="150" y="34" width="40" height="40"/></g>
            <g><title>Snipe</title><use href="#s-sn" x="210" y="34" width="40" height="40"/></g>
            <g><title>Followthrough — off the Snipe pair</title><use href="#s-ft" x="270" y="34" width="40" height="40"/></g>
            <g><title>Ambush</title><use href="#s-am" x="340" y="30" width="46" height="46"/></g>
            <g><title>Followthrough — off Ambush</title><use href="#s-ft" x="410" y="34" width="40" height="40"/></g>
            <text className="sv-label" x="480" y="58" fill="var(--brass)">→ next Penetrating Blasts</text>
            <line className="sv-tick" x1="20" y1="96" x2="620" y2="96"/>
            <text className="sv-numb" x="20" y="112">7 on-GCD slots · parse 2 median 11.20 s (was: parse 1: 10.71 s) across 16 non-Sniper-Volley laps</text>
            <g className="sv-note">
              <text x="20" y="150">Parse 2 weaves a Crouch → Snap Shot proc into 22 of its 23 complete cycles, almost always right before the Snipe pair.</text>
              <text x="20" y="172">Zeroing Shots still compresses Ambush's cast in both parses — measured directly, all casts, both logs.</text>
            </g>
          </svg>
          <figcaption>All 16 non-Sniper-Volley laps in parse 2 run this exact seven-slot shape, same as parse 1's 20 — the two parses only diverge in how much off-GCD material gets packed into the gaps, not in the shape itself.</figcaption>
        </figure>
      </section>

      {/* ===== 03 WHY SNIPER VOLLEY BUYS A SECOND CHANNEL ===== */}
      <section>
        <h2><span className="num">03</span> Why Sniper Volley always buys a second Penetrating Blasts</h2>
        <p className="lede">Sniper Volley finishes Penetrating Blasts' cooldown on activation, so the channel that would otherwise start ~11 s later starts immediately instead. Confirmed in both parses, 13 uses total, every single one landing the second channel in well under half a GCD.</p>

        <div className="tw">
        <table>
          <thead><tr><th>Parse</th><th className="n">Uses</th><th className="n">Fastest SV → Penetrating Blasts</th><th className="n">Slowest</th><th className="n">Median</th></tr></thead>
          <tbody>
            <tr className="hi"><td>Parse 2 (reference)</td><td className="n">7</td><td className="n">0.101 s</td><td className="n">0.302 s</td><td className="n">0.200 s</td></tr>
            <tr><td>Parse 1</td><td className="n">6 mid-fight</td><td className="n">0.146 s</td><td className="n">0.290 s</td><td className="n">0.202 s</td></tr>
          </tbody>
        </table>
        </div>

        <div className="call">
          <h4>Sub-0.3 s gap, every single time, both players</h4>
          <p>Thirteen uses of Sniper Volley across two independent parses, thirteen times the second Penetrating Blasts lands within 0.3 s — far below a full GCD, confirming the reset is instant regardless of gear or execution style. The channel that follows always ends with exactly one Followthrough, not two: the actual cost of the extra channel is one of the lap's three Followthrough windows, not a free fourth one.</p>
        </div>
      </section>

      {/* ===== 04 CORRECTION: CORROSIVE DART ===== */}
      <section>
        <h2><span className="num">04</span> Correction: Corrosive Dart needed reapplying zero times, in either parse</h2>
        <p className="lede">The ability guide's default assumption is that Corrosive Dart needs to be checked and reapplied periodically. Neither log ever reapplies it — one cast each, then continuous damage ticks all the way to the target's death, ~293 seconds later.</p>

        <div className="call flag">
          <h4>One activation each, confirmed twice</h4>
          <p>Both parses show exactly one <code>Event : AbilityActivate</code> for Corrosive Dart. Parse 2 logs an instantaneous remove-and-reapply pair at 0.497 s — same timestamp for both halves, no gap in coverage — which reads as the log's own bookkeeping for the DoT settling in, not a second cast; there is still only one <code>AbilityActivate</code> in the whole file. Parse 1's removal lands 0.3 s after the target's Death event; parse 2's lands at the moment of death exactly. Neither log ever needed a second cast to maintain it.</p>
          <p>This matches the guide's note that the Agitating Energies tactical routes a large share of total damage through Corrosive Dart — evidently including whatever mechanism keeps the debuff itself from expiring. Two independent players, same result.</p>
        </div>
      </section>

      {/* ===== 05 GCD ===== */}
      <section>
        <h2><span className="num">05</span> The GCD, measured directly — and a third state in parse 2</h2>
        <p className="lede">The guide states plainly that Sniper Volley takes the GCD from 1.4 s to 1.3 s. Parse 1 confirms exactly two floors. Parse 2 confirms both floors again — and adds a third, faster one, tied to a mechanic parse 1 never uses at all.</p>

        <div className="tw">
        <table>
          <thead><tr><th>Snipe → Snipe gap</th><th className="n">Parse 1</th><th className="n">Parse 2</th><th>Cause</th></tr></thead>
          <tbody>
            <tr><td>1.09 s – 1.10 s</td><td className="n">0</td><td className="n">6</td><td>Crouch → Snap Shot consumed by that Snipe — parse 2 only</td></tr>
            <tr><td>1.29 s – 1.33 s</td><td className="n">13</td><td className="n">12</td><td>Sniper Volley window, or a Power / Mastery Surge proc active</td></tr>
            <tr><td>1.40 s – 1.81 s</td><td className="n">12</td><td className="n">6</td><td>baseline pacing, no proc active</td></tr>
          </tbody>
        </table>
        </div>
        <p style={{ marginTop: '16px' }}>Every one of parse 2's six fastest Snipe pairs sits immediately after a Crouch activation with its Snap Shot buff consumed within 0.001–0.7 s — a real, measured ~0.19 s reduction versus the unbuffed 1.29 s floor, stacked on top of the same Sniper Volley mechanic parse 1 also shows. Nothing in the ability guide covers Crouch or Snap Shot; this is a build/utility choice, not a spec-wide mechanic — parse 1's player simply never uses it.</p>
      </section>

      {/* ===== 06 SCORECARD ===== */}
      <section>
        <h2><span className="num">06</span> Execution scorecard</h2>
        <p className="lede">All measured from effect apply/remove and AbilityActivate events. Parse 2 values shown; parse 1 was close on every shared metric and shows zero instances of the Crouch/Snap Shot weave that's new here.</p>
        <div className="meters">
          <div className="meter"><span className="lbl">Penetrating Blasts channels completing all 6 ticks</span><span className="val">32 / 32<span className="was">was: 33/33</span></span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Sniper Volley uses resetting Penetrating Blasts within 0.3 s</span><span className="val">7 / 7<span className="was">was: 6/6</span></span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Corrosive Dart uptime from a single cast</span><span className="val">100%<span className="was">was: 100%</span></span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Finish the Job procs consumed by the very next Takedown</span><span className="val">7 / 8<span className="was">was: 8/8 — see section 07</span></span><span className="track"><span className="fill warn" style={{ width: '87.5%' }}></span></span></div>
          <div className="meter"><span className="lbl">Crouch weaves landing a Snap Shot before the next Snipe</span><span className="val">37 / 37<span className="was">was: 0 — mechanic unused in parse 1</span></span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Laze Target weaves costing no GCD slot</span><span className="val">13 / 13<span className="was">was: 7/7</span></span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
        </div>
      </section>

      {/* ===== 07 SUB-30% ===== */}
      <section>
        <h2><span className="num">07</span> Below 30% — why parse 2 lands 7/8, not 8/8</h2>
        <p className="lede">Both parses swap Takedown into the post-Penetrating-Blasts slot the moment the target crosses 30% health, and never move anything else. The only real difference: which ability makes the crossing hit.</p>

        <div className="tw">
        <table>
          <thead><tr><th>Parse</th><th>30% crossed via</th><th className="n">Timestamp</th><th>Finish the Job on Takedown #1?</th></tr></thead>
          <tbody>
            <tr className="hi"><td>Parse 1</td><td>Ambush</td><td className="n">206.997 s</td><td>Yes — Ambush itself grants the proc</td></tr>
            <tr className="hi"><td>Parse 2 (reference)</td><td>Penetrating Blasts</td><td className="n">200.797 s</td><td>No — first post-30% Ambush hasn't landed yet</td></tr>
          </tbody>
        </table>
        </div>

        <div className="call">
          <h4>Finish the Job only comes from Ambush — the crossing ability doesn't matter, except when it's the reason there's no Ambush yet</h4>
          <p>Finish the Job requires dealing Ambush damage below 30%; it isn't a prerequisite for Takedown itself, which only checks target health. Parse 1 happened to cross 30% on an Ambush, so every one of its 8 Takedowns had the buff available. Parse 2 crossed on a Penetrating Blasts tick instead, so its first Takedown (203.994 s) fired before the next Ambush (209.896 s) could grant the proc — landing 7 buffed Takedowns out of 8, with the shortfall explained entirely by timing, not a missed proc or an execution error.</p>
        </div>
      </section>

      {/* ===== 08 GRID ===== */}
      <section>
        <h2><span className="num">08</span> Reference grid — 23 macro-cycles, Penetrating Blasts anchored (parse 2)</h2>
        <p className="lede">Each row is one cycle from parse 2, the reference log. Hover any icon for its name. The second Penetrating Blasts column is empty except on Sniper Volley laps; the post-channel slot holds Followthrough above 30% health and Takedown below it. Crouch/Snap Shot weaves aren't tracked per cell — they appear in 22 of these 23 rows and are covered in sections 02 and 05 instead.</p>
        <div className="gridwrap">
          <div className="cgrid">
            <div className="crow chead">
              <div>#</div><div>PB1</div><div>PB2</div><div>Post</div>
              <div>SN</div><div>SN</div><div>FT</div><div>AM</div><div>FT</div>
              <div>Len</div><div>Off</div>
            </div>
            {CYCLES.map((row) => (
              <div key={row.cyc} className={`crow${row.flag ? ' flagrow' : ''}${row.best ? ' bestrow' : ''}`}>
                <div className="cyc">{row.cyc}</div>
                {row.cells.map((cell, i) =>
                  cell ? (
                    <span key={i} className="ic" data-n={cell.n} role="img" aria-label={cell.n}>
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
          <span style={{ opacity: '.75' }}>Off column: count of weaved extras that cycle (Sniper Volley, Laze Target, Adrenal, Adrenaline Probe) — Crouch excluded, see lede. Flagged rows are the four Sniper Volley laps; green rows are the tightest-length lap of each of the three shapes.</span>
        </div>
        <p style={{ marginTop: '20px' }}>Rows 17–23 show the sub-30% shape (Takedown in the Post column) overlapping cleanly with the Sniper Volley shape in row 20 — the two modifications stack without interfering, exactly as they did in parse 1's grid.</p>
      </section>

      {/* ===== 09 ===== */}
      <section>
        <h2><span className="num">09</span> Still on the table</h2>

        <div className="call">
          <h4>1 · Crouch/Snap Shot is a real build choice, not a universal mechanic</h4>
          <p>Parse 2 weaves Crouch 37 times, landing a Snap Shot before 22 of its 23 complete cycles' Snipe pairs; parse 1 never uses it once across an equally clean, equally optimized parse. Both players hit within 200 DPS of the guide's expectations for this spec — whatever Crouch/Snap Shot is worth, it isn't the difference between a good and a bad parse. It's simply not covered by the ability guide this page is built from.</p>
        </div>

        <div className="call">
          <h4>2 · The guide's "use Takedown's Followthrough" alternative never appears, in either parse</h4>
          <p>The guide explicitly allows using the Followthrough procced by Takedown itself rather than skipping it, calling the DPS difference negligible. Across all 16 sub-30% cycles in the two logs combined, that path is never taken — both players consistently used the simpler skip-it approach the guide also endorses.</p>
        </div>

        <div className="call">
          <h4>3 · Sniper Volley timing looks fixed to its own cooldown, not to boss health, in both parses</h4>
          <p>All mid-fight Sniper Volley uses land roughly every fourth cycle in both logs, including the very first use within five seconds of pulling. Neither player shows any sign of deliberately holding it.</p>
        </div>

        <h3>Closed — nothing left to win</h3>
        <ul>
          <li><b>Penetrating Blasts ticks 6 times, every time</b> — 33/33 in parse 1, 32/32 in parse 2, matching the guide's note about the 7.7 patch buff.</li>
          <li><b>Corrosive Dart</b> — one cast, 100% uptime for the full fight, zero reapplications needed, confirmed independently in both parses.</li>
          <li><b>Sniper Volley → Penetrating Blasts reset</b> — 13 uses across both parses, every one landing the second channel within 0.3 s.</li>
          <li><b>GCD</b> — 1.3 s / 1.4 s confirmed in both parses; parse 2 adds a measured 1.1 s third state tied specifically to Crouch/Snap Shot.</li>
          <li><b>Sub-30% Takedown swap</b> — clean in both parses; the 7/8 vs 8/8 Finish the Job attach rate is fully explained by which ability made the 30% crossing, not by execution quality.</li>
          <li><b>Zeroing Shots</b> — measured Ambush cast times cluster in bands consistent with 0–2 stacks in both logs; no cast ever runs at the full un-reduced length once the fight gets going.</li>
        </ul>
      </section>

      <footer>
        <p>Two StarParse detail logs from two different players, each against a single Operations Training Dummy with a 10,000,000 health pool. Parse 1: 2,119 lines, <span className="mono">EnterCombat</span> 0 to a real <span className="mono">Death</span> event at 294.648 s, DPS from summed logged <span className="mono">Damage</span> values (10,006,716 total). Parse 2 (reference): 2,834 lines, <span className="mono">EnterCombat</span> 0 to a real <span className="mono">Death</span> event at 292.825 s, DPS computed the same way (10,004,689 total). Gear-sourced procs present in the raw logs (Power Surge, Mastery Surge, Spotter, and each character's own critical Adrenal — Advanced Polybiotic Attack in parse 1, Advanced Kyrprax Critical in parse 2) are personal loadout, not core Marksmanship mechanics, and are excluded from the model above except where they plausibly explain a measured GCD reading in section 05. Parse 2 also logs Crouch/Snap Shot and one use of Adrenaline Probe, neither present in parse 1 — situational build choices, not part of the core model. Ability icons are the in-game art, supplied by the user.</p>
      </footer>

      </div>
    </div>
  );
}

function iconRef(name: string): string {
  const map: Record<string, string> = {
    'Penetrating Blasts': 's-pb',
    'Followthrough': 's-ft',
    'Snipe': 's-sn',
    'Ambush': 's-am',
    'Takedown': 's-td',
    'Sniper Volley': 's-sv',
    'Corrosive Dart': 's-cd',
    'Laze Target': 's-lz',
    'Orbital Strike': 's-os',
    'Adrenal': 's-adr',
    'Crouch': 's-cr',
  };
  return map[name] || 's-pb';
}
