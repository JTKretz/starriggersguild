/**
 * Marksmanship — Rotation Standard
 * ---------------------------------------------------------------------------
 * Built from one StarParse detail log (single Operations Training Dummy pull).
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

/* ---- reference-grid data: 24 macro-cycles anchored on Penetrating Blasts ---- */
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
  { cyc: '1', cells: STD, off: [], len: '10.61', slots: 7 },
  { cyc: '2', cells: STD, off: ['Laze Target'], len: '11.22', slots: 7 },
  { cyc: '3', cells: STD, off: [], len: '11.10', slots: 7 },
  { cyc: '4', cells: SVR, off: ['Sniper Volley'], len: '12.55', slots: 8, flag: true },
  { cyc: '5', cells: STD, off: [], len: '10.51', slots: 7, best: true },
  { cyc: '6', cells: STD, off: ['Laze Target'], len: '11.13', slots: 7 },
  { cyc: '7', cells: STD, off: [], len: '11.22', slots: 7 },
  { cyc: '8', cells: SVR, off: ['Sniper Volley'], len: '12.56', slots: 8, flag: true },
  { cyc: '9', cells: STD, off: [], len: '10.63', slots: 7, best: true },
  { cyc: '10', cells: STD, off: [], len: '11.21', slots: 7 },
  { cyc: '11', cells: STD, off: [], len: '11.45', slots: 7 },
  { cyc: '12', cells: SVR, off: ['Sniper Volley', 'Laze Target'], len: '12.40', slots: 8, flag: true },
  { cyc: '13', cells: STD, off: [], len: '10.60', slots: 7, best: true },
  { cyc: '14', cells: STD, off: [], len: '11.23', slots: 7 },
  { cyc: '15', cells: STD, off: ['Laze Target'], len: '11.18', slots: 7 },
  { cyc: '16', cells: SVR, off: ['Sniper Volley'], len: '12.57', slots: 8, flag: true },
  { cyc: '17', cells: STD, off: [], len: '10.62', slots: 7, best: true },
  { cyc: '18', cells: T30, off: [], len: '11.18', slots: 7 },
  { cyc: '19', cells: T30, off: ['Adrenal'], len: '11.71', slots: 7 },
  { cyc: '20', cells: SVT, off: ['Sniper Volley', 'Laze Target'], len: '12.69', slots: 8, flag: true },
  { cyc: '21', cells: T30, off: [], len: '10.71', slots: 7, best: true },
  { cyc: '22', cells: T30, off: [], len: '11.14', slots: 7 },
  { cyc: '23', cells: T30, off: [], len: '11.25', slots: 7 },
  { cyc: '24', cells: SVT, off: ['Sniper Volley', 'Laze Target'], len: '12.54', slots: 8, flag: true },
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
      </defs></svg>

      <div className="wrap">

      <div className="mast">
        <p className="eyebrow">Sniper / Marksmanship · single-pull dummy parse · 33,962 DPS</p>
        <h1>One channel, three Followthroughs, on repeat</h1>
        <p className="standfirst">A seven-GCD macro-cycle anchored on <strong>Penetrating Blasts</strong>, closing three separate Followthrough windows every lap — one shared with the channel, one off a Snipe pair, one off Ambush. Sniper Volley buys a second channel every fourth cycle at the cost of exactly one of those three.</p>
        <dl className="facts">
          <div className="fact"><dt>DPS</dt><dd>33,962</dd></div>
          <div className="fact"><dt>GCD</dt><dd>1.3 / 1.4<small>s</small><span className="was">dual-state, confirmed both floors</span></dd></div>
          <div className="fact"><dt>Macro-cycle</dt><dd>10.71<small>s med</small><span className="was">24 complete laps, 7–8 slots each</span></dd></div>
          <div className="fact"><dt>Penetrating Blasts</dt><dd>6<small>/6 ticks</small><span className="was">33 for 33, zero short channels</span></dd></div>
          <div className="fact"><dt>Corrosive Dart</dt><dd>100<small>%</small><span className="was">one cast, 293 s of uptime</span></dd></div>
          <div className="fact"><dt>Sub-30% swap</dt><dd>8<small>/8</small><span className="was">Takedown ↔ Finish the Job, clean every time</span></dd></div>
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
        <div className="keyrow"><span className="ic" data-n="Orbital Strike" role="img" aria-label="Orbital Strike"><svg viewBox="0 0 50 50"><use href="#s-os"/></svg></span><div><b>Orbital Strike</b><span>Pre-cast · landed at pull, opener only</span></div></div>
      </div>
      </section>

      {/* ===== 01 OPENER ===== */}
      <section>
        <h2><span className="num">01</span> The opener — pre-cast, then a doubled channel</h2>
        <p className="lede">Orbital Strike is cast before <code>EnterCombat</code> and lands 0.037 s into the fight. From there the log runs Corrosive Dart, an Adrenal, Laze Target, then reaches for Sniper Volley immediately — getting two Penetrating Blasts channels back to back before the rotation has even settled into shape.</p>

        <figure>
          <svg viewBox="0 0 820 220" role="img" aria-label="Opener sequence: Orbital Strike pre-cast lands at 0.04 seconds, then Corrosive Dart, an Adrenal, Laze Target, Penetrating Blasts, an early Sniper Volley, a second immediate Penetrating Blasts, then Followthrough, Snipe, Snipe, Followthrough, Ambush, Followthrough before the first steady cycle begins at 15.5 seconds.">
            <g className="sv-num" style={{ textAnchor: 'middle' }}>
              <text x="40" y="30">0.0</text><text x="180" y="30">2.9</text><text x="360" y="30">6.9</text><text x="560" y="30">12.4</text><text x="740" y="30">15.5</text>
            </g>
            <g><title>Orbital Strike (pre-cast, lands at 0.04s)</title><use href="#s-os" x="16" y="40" width="44" height="44"/></g>
            <g><title>Corrosive Dart</title><use href="#s-cd" x="70" y="40" width="40" height="40"/></g>
            <g><title>Adrenal (off-GCD)</title><use href="#s-adr" x="118" y="46" width="26" height="26"/></g>
            <g><title>Laze Target (off-GCD)</title><use href="#s-lz" x="150" y="46" width="26" height="26"/></g>
            <rect x="176" y="38" width="130" height="48" rx="6" fill="none" stroke="var(--brass)" strokeWidth="1.6" strokeDasharray="4 3"/>
            <g><title>Penetrating Blasts</title><use href="#s-pb" x="184" y="40" width="44" height="44"/></g>
            <g><title>Penetrating Blasts (Sniper Volley reset)</title><use href="#s-pb" x="248" y="40" width="44" height="44"/></g>
            <text className="sv-flex" x="241" y="102" style={{ textAnchor: 'middle' }} fill="var(--brass)">SV reset</text>
            <g><title>Followthrough</title><use href="#s-ft" x="320" y="40" width="40" height="40"/></g>
            <g><title>Snipe</title><use href="#s-sn" x="366" y="40" width="40" height="40"/></g>
            <g><title>Snipe</title><use href="#s-sn" x="412" y="40" width="40" height="40"/></g>
            <g><title>Followthrough</title><use href="#s-ft" x="458" y="40" width="40" height="40"/></g>
            <g><title>Ambush</title><use href="#s-am" x="504" y="40" width="40" height="40"/></g>
            <g><title>Followthrough</title><use href="#s-ft" x="550" y="40" width="40" height="40"/></g>
            <line x1="700" y1="34" x2="700" y2="140" stroke="var(--brass)" strokeWidth="2"/>
            <text className="sv-label" x="700" y="158" style={{ textAnchor: 'middle' }} fill="var(--brass)">first steady cycle starts here</text>
            <g className="sv-note">
              <text x="16" y="196">Sniper Volley used at 4.82 s — the very first opportunity, not saved for later</text>
            </g>
          </svg>
          <figcaption>Timestamps: Orbital Strike 0.037 (pre-cast) · Corrosive Dart 1.393 · Adrenal 1.913 · Laze Target 2.508 · Penetrating Blasts 2.920 · Sniper Volley 4.818 · Penetrating Blasts 5.014 (reset) · Followthrough 6.906 · Snipe 8.211 / 9.505 · Followthrough 11.000 · Ambush 12.401 · Followthrough 13.909 · Penetrating Blasts 15.523 (cycle 1 begins). Corrosive Dart is never reapplied again — see section 04.</figcaption>
        </figure>
      </section>

      {/* ===== 02 CYCLE ===== */}
      <section>
        <h2><span className="num">02</span> The cycle — one channel, three Followthrough windows</h2>
        <p className="lede">Every steady-state lap opens on Penetrating Blasts, then spends its Followthrough eligibility three separate times: once off the channel itself, once off a Snipe pair, once off Ambush. 24 complete laps in the log, median 10.71 s, 7 on-GCD slots.</p>

        <figure>
          <svg viewBox="0 0 820 200" role="img" aria-label="Standard macro-cycle: Penetrating Blasts, Followthrough, Snipe, Snipe, Followthrough, Ambush, Followthrough, repeat. Seven on-GCD slots across roughly 10.7 seconds.">
            <g><title>Penetrating Blasts (channel, 6 ticks)</title><use href="#s-pb" x="20" y="30" width="46" height="46"/></g>
            <g><title>Followthrough — off the channel</title><use href="#s-ft" x="90" y="34" width="40" height="40"/></g>
            <g><title>Snipe</title><use href="#s-sn" x="150" y="34" width="40" height="40"/></g>
            <g><title>Snipe</title><use href="#s-sn" x="210" y="34" width="40" height="40"/></g>
            <g><title>Followthrough — off the Snipe pair</title><use href="#s-ft" x="270" y="34" width="40" height="40"/></g>
            <g><title>Ambush</title><use href="#s-am" x="340" y="30" width="46" height="46"/></g>
            <g><title>Followthrough — off Ambush</title><use href="#s-ft" x="410" y="34" width="40" height="40"/></g>
            <text className="sv-label" x="480" y="58" fill="var(--brass)">→ next Penetrating Blasts</text>
            <line className="sv-tick" x1="20" y1="96" x2="620" y2="96"/>
            <text className="sv-numb" x="20" y="112">7 on-GCD slots · median 10.71 s · mean 10.85 s across 20 non-Sniper-Volley laps</text>
            <g className="sv-note">
              <text x="20" y="150">Zeroing Shots (2 stacks by the time Ambush fires) compresses that cast from ~2.0 s to ~1.6–1.7 s — measured directly, all 25 casts.</text>
              <text x="20" y="172">Marksman's Finesse and Honed Shots both build from the same Snipe pair; neither ever needed rebuilding mid-fight once stacked.</text>
            </g>
          </svg>
          <figcaption>All 20 non-Sniper-Volley laps run this exact seven-slot shape with no substitutions once the fight leaves the opener and before the target drops below 30% — the four Sniper Volley laps and the seven sub-30% laps each modify it in one specific, consistent way (sections 03 and 06).</figcaption>
        </figure>
      </section>

      {/* ===== 03 WHY SNIPER VOLLEY BUYS A SECOND CHANNEL ===== */}
      <section>
        <h2><span className="num">03</span> Why Sniper Volley always buys a second Penetrating Blasts</h2>
        <p className="lede">Sniper Volley finishes Penetrating Blasts' cooldown on activation, so the channel that would otherwise start ~10.7 s later starts immediately instead. The one thing that pays for it: the Followthrough window that channel would have opened on its own is skipped, folded into the Followthrough after the second channel.</p>

        <div className="tw">
        <table>
          <thead><tr><th>Cycle</th><th>Penetrating Blasts #1</th><th>Sniper Volley</th><th>Penetrating Blasts #2</th><th className="n">Gap #1→SV</th><th className="n">Gap SV→#2</th></tr></thead>
          <tbody>
            <tr className="hi"><td className="n">4</td><td>48.454</td><td>50.552</td><td>50.757</td><td className="n">2.098 s</td><td className="n">0.205 s</td></tr>
            <tr className="hi"><td className="n">8</td><td>93.860</td><td>95.903</td><td>96.098</td><td className="n">2.043 s</td><td className="n">0.195 s</td></tr>
            <tr className="hi"><td className="n">12</td><td>139.709</td><td>141.672</td><td>141.877</td><td className="n">1.963 s</td><td className="n">0.205 s</td></tr>
            <tr className="hi"><td className="n">16</td><td>185.125</td><td>187.182</td><td>187.328</td><td className="n">2.057 s</td><td className="n">0.146 s</td></tr>
            <tr className="hi"><td className="n">20</td><td>231.213</td><td>233.219</td><td>233.509</td><td className="n">2.006 s</td><td className="n">0.290 s</td></tr>
            <tr className="hi"><td className="n">24</td><td>277.009</td><td>278.958</td><td>279.156</td><td className="n">1.949 s</td><td className="n">0.198 s</td></tr>
          </tbody>
        </table>
        </div>

        <div className="call">
          <h4>Sub-0.3 s gap, every single time</h4>
          <p>Six uses of Sniper Volley in the log, six times the second Penetrating Blasts lands within 0.3 s — far below a full GCD, confirming Sniper Volley itself costs no GCD slot and that the reset is instant. The channel that follows always ends with exactly one Followthrough, not two, which is the actual cost of the extra channel: one of the lap's three Followthrough windows is spent, not multiplied.</p>
        </div>
      </section>

      {/* ===== 04 CORRECTION: CORROSIVE DART ===== */}
      <section>
        <h2><span className="num">04</span> Correction: Corrosive Dart needed reapplying zero times</h2>
        <p className="lede">The ability guide's default assumption is that Corrosive Dart needs to be checked and reapplied periodically. This log never reapplies it at all — one cast at 1.393 s, then continuous damage ticks all the way to the target's death 293 seconds later.</p>

        <div className="call flag">
          <h4>One activation, one apply, one remove — at the very end</h4>
          <p>Corrosive Dart shows exactly one <code>Event : AbilityActivate</code> in the entire log and exactly one <code>RemoveEffect</code>, and that removal happens at 294.149 s — three-tenths of a second after the target's Death event, not from the DoT expiring. Between those two log lines, Corrosive Dart contributes 316 separate damage instances, an average of one roughly every 0.93 s, far more often than an 18 s DoT's own tick rate would produce on its own.</p>
          <p>This matches the guide's note that the Agitating Energies tactical routes a large share of total damage through Corrosive Dart — evidently including whatever mechanism keeps the debuff itself from expiring, since this run never needed a second cast to maintain it.</p>
        </div>
      </section>

      {/* ===== 05 GCD ===== */}
      <section>
        <h2><span className="num">05</span> The dual-state GCD, measured directly</h2>
        <p className="lede">The guide states plainly that Sniper Volley takes the GCD from 1.4 s to 1.3 s. Twenty-five independent Snipe-to-Snipe measurements confirm both floors directly, with no value landing between them.</p>

        <div className="tw">
        <table>
          <thead><tr><th>Snipe → Snipe gap</th><th className="n">Count</th><th>Typical cause</th></tr></thead>
          <tbody>
            <tr><td>1.29 s – 1.33 s</td><td className="n">13</td><td>Sniper Volley window, or a Power Surge / Mastery Surge gear proc active</td></tr>
            <tr><td>1.40 s – 1.45 s</td><td className="n">12</td><td>baseline pacing, no alacrity proc active</td></tr>
          </tbody>
        </table>
        </div>
        <p style={{ marginTop: '16px' }}>The lowest measurement (1.294 s) sits inside a confirmed Sniper Volley window; the highest (1.454 s) sits nowhere near one. Nothing in between — the GCD is genuinely bimodal in this log, not a smooth alacrity curve, which lines up with a proc-driven speed boost rather than a passive stat.</p>
      </section>

      {/* ===== 06 SCORECARD ===== */}
      <section>
        <h2><span className="num">06</span> Execution scorecard</h2>
        <p className="lede">All measured from effect apply/remove and AbilityActivate events across the full 294.6 s pull.</p>
        <div className="meters">
          <div className="meter"><span className="lbl">Penetrating Blasts channels completing all 6 ticks</span><span className="val">33 / 33</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Finish the Job procs consumed by the very next Takedown</span><span className="val">8 / 8</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Sniper Volley uses resetting Penetrating Blasts within 0.3 s</span><span className="val">6 / 6</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Corrosive Dart uptime from a single cast</span><span className="val">100%</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Takedown swaps with zero extra Followthrough wasted</span><span className="val">8 / 8</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Laze Target weaves costing no GCD slot</span><span className="val">7 / 7</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
        </div>
      </section>

      {/* ===== 07 SUB-30% ===== */}
      <section>
        <h2><span className="num">07</span> Below 30% — Takedown swaps in, nothing else moves</h2>
        <p className="lede">The target crosses 30% health at 206.997 s, on an Ambush hit. The very next cycle's post-Penetrating-Blasts slot uses Takedown instead of Followthrough — and every cycle after that does the same, all the way to the kill.</p>

        <figure>
          <svg viewBox="0 0 780 170" role="img" aria-label="Cumulative damage crosses 30 percent remaining health at 206.997 seconds via an Ambush hit. The next Penetrating Blasts cycle, at 208.318 seconds, uses Takedown in the slot that would normally hold a Followthrough, and every following cycle does the same.">
            <line className="sv-axis" x1="40" y1="40" x2="40" y2="120"/>
            <line className="sv-tick" x1="40" y1="80" x2="740" y2="80"/>
            <g><title>Ambush crosses 30% at 206.997s</title><circle cx="120" cy="80" r="6" fill="var(--brass)"/></g>
            <text className="sv-numb" x="120" y="62" style={{ textAnchor: 'middle' }} fill="var(--brass)">206.997 — 30% crossed</text>
            <g><title>Penetrating Blasts, 208.318s</title><use href="#s-pb" x="220" y="56" width="46" height="46"/></g>
            <g><title>Takedown — first sub-30% use, 210.528s</title><use href="#s-td" x="290" y="56" width="46" height="46"/></g>
            <text className="sv-note" x="220" y="130">first post-30% cycle: Takedown fills the slot, 2.21 s later</text>
            <text className="sv-label" x="600" y="80" style={{ textAnchor: 'middle' }} fill="var(--ink-2)">7 more cycles, identical swap, through the kill at 294.648s</text>
          </svg>
          <figcaption>Finish the Job (Ambush's sub-30% proc) fires 8 times; Takedown fires 8 times; every single Finish the Job is consumed by the immediately following Takedown. Zero drops, zero double-procs, zero cycles where the guide's alternative — using Takedown's own Followthrough proc instead of skipping it — shows up in this log.</figcaption>
        </figure>
      </section>

      {/* ===== 08 GRID ===== */}
      <section>
        <h2><span className="num">08</span> Reference grid — 24 macro-cycles, Penetrating Blasts anchored</h2>
        <p className="lede">Each row is one cycle. Hover any icon for its name. The second Penetrating Blasts column is empty except on Sniper Volley laps; the post-channel slot holds Followthrough above 30% health and Takedown below it.</p>
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
          <span style={{ opacity: '.75' }}>Off column: count of weaved extras that cycle (Sniper Volley, Laze Target, Adrenal). Flagged rows are the four Sniper Volley laps; green rows are the tightest-length lap of each of the three shapes.</span>
        </div>
        <p style={{ marginTop: '20px' }}>Rows 18–24 show the sub-30% shape (Takedown in the Post column) overlapping cleanly with the Sniper Volley shape in rows 20 and 24 — the two modifications stack without interfering, confirming they act on different parts of the cycle.</p>
      </section>

      {/* ===== 09 ===== */}
      <section>
        <h2><span className="num">09</span> Still on the table</h2>

        <div className="call">
          <h4>1 · The guide's "use Takedown's Followthrough" alternative never appears</h4>
          <p>The guide explicitly allows using the Followthrough procced by Takedown itself rather than skipping it, calling the DPS difference negligible. Across all 8 sub-30% cycles in this log, that path is never taken — the player consistently used the simpler skip-it approach the guide also endorses. Both are legal; this log only demonstrates one of them.</p>
        </div>

        <div className="call">
          <h4>2 · Sniper Volley timing looks fixed to its own cooldown, not to boss health</h4>
          <p>All 4 mid-fight Sniper Volley uses (cycles 4, 8, 12, 16) land almost exactly every 4th cycle (~45.4 s apart), including the very first use just 4.8 s into the opener. Whatever governs when it comes off cooldown, this player used it the instant it was available every time — nothing in the log suggests any deliberate delaying or holding.</p>
        </div>

        <h3>Closed — nothing left to win</h3>
        <ul>
          <li><b>Penetrating Blasts ticks 6 times, every time</b> — 33/33, matching the guide's note about the 7.7 patch buff from 5 ticks to 6.</li>
          <li><b>Corrosive Dart</b> — one cast, 100% uptime for the full 293 seconds, zero reapplications needed.</li>
          <li><b>Finish the Job → Takedown</b> — 8 procs, 8 consumptions, no exceptions.</li>
          <li><b>Sniper Volley → Penetrating Blasts reset</b> — 6 uses, 6 times the second channel starts within 0.3 s.</li>
          <li><b>GCD</b> — bimodal 1.3 s / 1.4 s, exactly as described, with no intermediate values across 25 measurements.</li>
          <li><b>Zeroing Shots</b> — measured Ambush cast times cluster in two bands consistent with 0–2 stacks; no cast ever ran at the full un-reduced length once the fight got going.</li>
        </ul>
      </section>

      <footer>
        <p>One StarParse detail log against a single Operations Training Dummy: 2,119 lines, <span className="mono">EnterCombat</span> 0 to a real <span className="mono">Death</span> event at 294.648 s, target health pool 10,000,000, DPS from summed logged <span className="mono">Damage</span> values (10,006,716 total, the small excess is overkill on the final hit). Gear-sourced procs present in the raw log (Power Surge, Mastery Surge, Advanced Polybiotic Attack Adrenal, Spotter) are this character's specific loadout, not core Marksmanship mechanics, and are excluded from the model above except where they plausibly explain a measured GCD reading in section 05. Ability icons are the in-game art, supplied by the user.</p>
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
  };
  return map[name] || 's-pb';
}
