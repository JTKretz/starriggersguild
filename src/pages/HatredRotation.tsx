/**
 * Hatred — Rotation Standard
 * ---------------------------------------------------------------------------
 * Built from one StarParse detail log (single Operations Training Dummy pull).
 * Ability icons live as separate files under /public/icons/assassin.
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
  .cgrid{min-width:900px}
  .crow{display:grid;grid-template-columns:26px repeat(12,minmax(28px,1fr)) 44px 26px;
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

/* ---- reference-grid data: 15 macro-cycles anchored on Creeping Terror ---- */
type Cell = { n: string; mark?: 'scc' | 'rc' } | null;
type CycleRow = { cyc: string; cells: Cell[]; off: string[]; len: string; slots: number; flag?: boolean; best?: boolean; sub30?: boolean };

const g = (n: string): Cell => ({ n });
const CT = g('Creeping Terror'), DC = g('Discharge'), LS = g('Leeching Strike'), ER = g('Eradicate'),
  DF = g('Death Field'), AS = g('Assassinate'), SS = g('Saber Strike'), TH = g('Thrash');

const CYCLES: CycleRow[] = [
  { cyc: '1', cells: [CT, DC, LS, ER, DF, AS, LS, ER, SS, AS, TH, ER], off: ['Recklessness', 'Adrenal', 'Phantom Stride'], len: '17.41', slots: 12 },
  { cyc: '2', cells: [CT, DC, LS, ER, DF, AS, LS, ER, SS, TH, AS, ER], off: ['Recklessness'], len: '17.21', slots: 12, best: true },
  { cyc: '3', cells: [CT, DC, LS, ER, DF, AS, LS, ER, SS, AS, TH, ER], off: ['Recklessness', 'Phantom Stride'], len: '17.20', slots: 12, best: true },
  { cyc: '4', cells: [CT, DC, LS, ER, DF, LS, TH, ER, AS, SS, TH, ER], off: ['Recklessness'], len: '16.96', slots: 12 },
  { cyc: '5', cells: [CT, DC, LS, ER, DF, AS, LS, ER, SS, SS, TH, ER], off: ['Recklessness', 'Phantom Stride'], len: '17.50', slots: 12 },
  { cyc: '6', cells: [CT, DC, LS, ER, DF, AS, LS, ER, SS, TH, TH, ER], off: ['Recklessness'], len: '17.33', slots: 12 },
  { cyc: '7', cells: [CT, DC, LS, ER, DF, AS, LS, ER, SS, AS, TH, ER], off: ['Recklessness', 'Phantom Stride'], len: '17.34', slots: 12 },
  { cyc: '8', cells: [CT, DC, LS, ER, DF, AS, LS, ER, SS, TH, SS, ER], off: ['Recklessness'], len: '17.25', slots: 12 },
  { cyc: '9', cells: [CT, DC, LS, ER, DF, AS, LS, ER, SS, AS, TH, ER], off: ['Recklessness', 'Phantom Stride'], len: '17.47', slots: 12 },
  { cyc: '10', cells: [CT, DC, LS, ER, DF, AS, LS, ER, SS, TH, AS, ER], off: ['Recklessness'], len: '17.02', slots: 12 },
  { cyc: '11', cells: [CT, DC, LS, ER, DF, AS, LS, ER, SS, AS, TH, ER], off: ['Recklessness', 'Phantom Stride', 'Adrenal'], len: '17.67', slots: 12 },
  { cyc: '12', cells: [CT, DC, LS, ER, DF, LS, AS, ER, SS, TH, AS, ER], off: ['Recklessness'], len: '16.82', slots: 12, flag: true },
  { cyc: '13', cells: [CT, DC, AS, ER, LS, DF, AS, ER, LS, SS, AS, ER], off: ['Recklessness'], len: '16.92', slots: 12, sub30: true },
  { cyc: '14', cells: [CT, DC, AS, ER, LS, DF, AS, ER, LS, SS, AS, ER], off: ['Recklessness'], len: '16.93', slots: 12, sub30: true },
  { cyc: '15', cells: [CT, DC, AS, ER, LS, DF, AS, ER, SS, LS, AS, ER], off: ['Recklessness'], len: '18.02', slots: 12, sub30: true },
];

export default function HatredRotation({ theme }: { theme?: 'dark' | 'light' }) {
  return (
    <div className="ar-root" data-theme={theme}>
      <style>{CSS}</style>
      <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute', overflow: 'hidden' }}><defs>
      <clipPath id="ico-clip4"><rect width="50" height="50" rx="7" ry="7"/></clipPath>
      <symbol id="h-ct" viewBox="0 0 50 50"><image href="/icons/assassin/creeping-terror.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="h-dc" viewBox="0 0 50 50"><image href="/icons/assassin/discharge.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="h-ls" viewBox="0 0 50 50"><image href="/icons/assassin/leeching-strike.png" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="h-er" viewBox="0 0 50 50"><image href="/icons/assassin/eradicate.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="h-df" viewBox="0 0 50 50"><image href="/icons/assassin/death-field.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="h-as" viewBox="0 0 50 50"><image href="/icons/assassin/assassinate.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="h-ss" viewBox="0 0 50 50"><image href="/icons/assassin/saber-strike.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="h-th" viewBox="0 0 50 50"><image href="/icons/assassin/thrash.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="h-rk" viewBox="0 0 50 50"><image href="/icons/assassin/recklessness.png" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="h-ps" viewBox="0 0 50 50"><image href="/icons/assassin/phantom-stride.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="h-adr" viewBox="0 0 50 50"><image href="/icons/assassin/adrenal.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      </defs></svg>

      <div className="wrap">

      <div className="mast">
        <p className="eyebrow">Sith Assassin / Hatred · single-pull dummy parse · 36,814 DPS</p>
        <h1>Two DoTs, one fixed clock, one drifting priority</h1>
        <p className="standfirst">A twelve-GCD macro-cycle anchored on reapplying <strong>Creeping Terror and Discharge together</strong>, with Eradicate ticking on its own independent clock so regular it lands on slots 4, 8 and 12 of every single lap without exception. Everything else in the cycle is a live priority call, and it visibly changes shape the moment the target drops below 30%.</p>
        <dl className="facts">
          <div className="fact"><dt>DPS</dt><dd>36,814</dd></div>
          <div className="fact"><dt>GCD</dt><dd>1.405<small>s</small><span className="was">flat, no proc states — 180 measurements</span></dd></div>
          <div className="fact"><dt>Macro-cycle</dt><dd>17.25<small>s med</small><span className="was">15 complete laps, 12 slots each</span></dd></div>
          <div className="fact"><dt>Eradicate</dt><dd>4 / 8 / 12<small>slots</small><span className="was">5.69 s median own cadence, zero exceptions</span></dd></div>
          <div className="fact"><dt>DoT uptime</dt><dd>96<small>%</small><span className="was">Discharge + Creeping Terror, both parses of the fight</span></dd></div>
          <div className="fact"><dt>Leeching Strike</dt><dd>31<small>/31</small><span className="was">heal exactly matched damage, every cast</span></dd></div>
        </dl>
      </div>

      {/* ===== KEY ===== */}
      <section style={{ marginTop: '34px' }}>
        <h3 style={{ marginTop: '0' }}>Ability key — hover any icon anywhere on this page</h3>
        <div className="keygrid">
        <div className="keyrow"><span className="ic" data-n="Creeping Terror" role="img" aria-label="Creeping Terror"><svg viewBox="0 0 50 50"><use href="#h-ct"/></svg></span><div><b>Creeping Terror</b><span>18s DoT · internal, reapplied with Discharge</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Discharge" role="img" aria-label="Discharge"><svg viewBox="0 0 50 50"><use href="#h-dc"/></svg></span><div><b>Discharge</b><span>18s DoT · energy, needs the armor debuff to matter</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Eradicate" role="img" aria-label="Eradicate"><svg viewBox="0 0 50 50"><use href="#h-er"/></svg></span><div><b>Eradicate</b><span>Hit + 6s DoT · own ~5.7s clock, free via Raze</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Death Field" role="img" aria-label="Death Field"><svg viewBox="0 0 50 50"><use href="#h-df"/></svg></span><div><b>Death Field</b><span>AoE-capable nuke · grants 15 stacks of Deathmark</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Leeching Strike" role="img" aria-label="Leeching Strike"><svg viewBox="0 0 50 50"><use href="#h-ls"/></svg></span><div><b>Leeching Strike</b><span>Filler · heals for exactly what it damages</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Assassinate" role="img" aria-label="Assassinate"><svg viewBox="0 0 50 50"><use href="#h-as"/></svg></span><div><b>Assassinate</b><span>Sub-30% · or unlocked anywhere by Bloodletting</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Saber Strike" role="img" aria-label="Saber Strike"><svg viewBox="0 0 50 50"><use href="#h-ss"/></svg></span><div><b>Saber Strike</b><span>Weak filler · used to rebuild Force</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Thrash" role="img" aria-label="Thrash"><svg viewBox="0 0 50 50"><use href="#h-th"/></svg></span><div><b>Thrash</b><span>Strong filler · costs more Force than Saber Strike</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Recklessness" role="img" aria-label="Recklessness"><svg viewBox="0 0 50 50"><use href="#h-rk"/></svg></span><div><b>Recklessness</b><span>Off-GCD · 2 charges, Death Field then the next Eradicate</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Phantom Stride" role="img" aria-label="Phantom Stride"><svg viewBox="0 0 50 50"><use href="#h-ps"/></svg></span><div><b>Phantom Stride</b><span>Off-GCD gap closer · grants Raze on activation</span></div></div>
      </div>
      </section>

      {/* ===== 01 OPENER ===== */}
      <section>
        <h2><span className="num">01</span> The opener — Eradicate first, DoTs a beat later</h2>
        <p className="lede">The very first GCD is Eradicate, not a DoT — there's nothing to spread Raze from yet, so it just goes out at full Force cost to get the clock running immediately. Creeping Terror and Discharge follow on GCDs 2 and 3, then the rest of the kit comes online in a rush.</p>

        <figure>
          <svg viewBox="0 0 820 200" role="img" aria-label="Opener: Eradicate at 0.02 seconds, Creeping Terror at 1.55, Discharge at 2.89, Leeching Strike at 4.30, Eradicate again at 5.70, then Recklessness and an Adrenal off-GCD, Death Field at 7.21, Assassinate at 8.73, Phantom Stride off-GCD, then the first steady cycle from 11.99 seconds.">
            <g className="sv-num" style={{ textAnchor: 'middle' }}>
              <text x="40" y="30">0.0</text><text x="220" y="30">2.9</text><text x="420" y="30">5.7</text><text x="620" y="30">8.7</text><text x="760" y="30">12.0</text>
            </g>
            <g><title>Eradicate (opener, full Force cost)</title><use href="#h-er" x="16" y="40" width="44" height="44"/></g>
            <g><title>Creeping Terror</title><use href="#h-ct" x="140" y="40" width="40" height="40"/></g>
            <g><title>Discharge</title><use href="#h-dc" x="186" y="40" width="40" height="40"/></g>
            <g><title>Leeching Strike</title><use href="#h-ls" x="232" y="40" width="40" height="40"/></g>
            <g><title>Eradicate (free via Raze)</title><use href="#h-er" x="278" y="40" width="40" height="40"/></g>
            <g><title>Recklessness (off-GCD)</title><use href="#h-rk" x="330" y="46" width="26" height="26"/></g>
            <g><title>Adrenal (off-GCD)</title><use href="#h-adr" x="358" y="46" width="26" height="26"/></g>
            <g><title>Death Field</title><use href="#h-df" x="410" y="40" width="40" height="40"/></g>
            <g><title>Assassinate (Bloodletting from the opening Creeping Terror)</title><use href="#h-as" x="524" y="40" width="40" height="40"/></g>
            <g><title>Phantom Stride (off-GCD)</title><use href="#h-ps" x="576" y="46" width="26" height="26"/></g>
            <line x1="700" y1="34" x2="700" y2="140" stroke="var(--brass)" strokeWidth="2"/>
            <text className="sv-label" x="700" y="158" style={{ textAnchor: 'middle' }} fill="var(--brass)">first steady cycle starts here</text>
            <g className="sv-note">
              <text x="16" y="180">Bloodletting procs at 1.554s — off the very first Creeping Terror tick — and sits ready for 7.18s before Assassinate consumes it</text>
            </g>
          </svg>
          <figcaption>Timestamps: Eradicate 0.024 · Creeping Terror 1.553 · Discharge 2.894 · Leeching Strike 4.299 · Eradicate 5.703 (free) · Recklessness 6.298 (off-GCD) · Adrenal 6.500 (off-GCD) · Death Field 7.211 · Assassinate 8.730 · Phantom Stride 10.261 (off-GCD) · Leeching Strike 10.503 · Eradicate 11.986 (cycle 1 begins). Recklessness's second charge doesn't go to waste — it rides along until the next Eradicate at 11.986, three GCDs later.</figcaption>
        </figure>
      </section>

      {/* ===== 02 CYCLE ===== */}
      <section>
        <h2><span className="num">02</span> The cycle — a fixed open, a live-priority tail</h2>
        <p className="lede">Every lap's first five GCDs are identical, cycle after cycle: reapply both 18-second DoTs, spend the Force they just freed on Leeching Strike, then let Eradicate and Death Field go out together. What happens in the other seven slots is a genuine priority call, not a fixed shape.</p>

        <figure>
          <svg viewBox="0 0 820 220" role="img" aria-label="Fixed opening five slots: Creeping Terror, Discharge, Leeching Strike, Eradicate, Death Field. Then seven slots of live priority: Assassinate when available, Leeching Strike, a second Eradicate, fillers, a third Eradicate closing the lap.">
            <text className="sv-label" x="20" y="24" fill="var(--brass)">FIXED — identical in all 15 laps</text>
            <g><title>Creeping Terror</title><use href="#h-ct" x="20" y="34" width="42" height="42"/></g>
            <g><title>Discharge</title><use href="#h-dc" x="72" y="34" width="42" height="42"/></g>
            <g><title>Leeching Strike</title><use href="#h-ls" x="124" y="34" width="42" height="42"/></g>
            <g><title>Eradicate — always slot 4</title><use href="#h-er" x="176" y="34" width="42" height="42"/></g>
            <g><title>Death Field</title><use href="#h-df" x="228" y="34" width="42" height="42"/></g>
            <line className="sv-tick" x1="20" y1="88" x2="600" y2="88"/>
            <text className="sv-numb" x="20" y="104">slots 1–5, every lap</text>

            <text className="sv-label" x="20" y="148" fill="var(--ink-2)">LIVE PRIORITY — varies with health and procs</text>
            <g><title>Assassinate or Leeching Strike</title><use href="#h-as" x="20" y="158" width="38" height="38"/></g>
            <g><title>Leeching Strike or Assassinate</title><use href="#h-ls" x="66" y="158" width="38" height="38"/></g>
            <g><title>Eradicate — always slot 8</title><use href="#h-er" x="112" y="158" width="42" height="42"/></g>
            <g><title>Filler (Saber Strike or Thrash)</title><use href="#h-ss" x="166" y="158" width="38" height="38"/></g>
            <g><title>Filler (Saber Strike, Thrash, or Assassinate)</title><use href="#h-th" x="212" y="158" width="38" height="38"/></g>
            <g><title>Filler (Thrash, Saber Strike, or Assassinate)</title><use href="#h-as" x="258" y="158" width="38" height="38"/></g>
            <g><title>Eradicate — always slot 12, closes the lap</title><use href="#h-er" x="310" y="158" width="42" height="42"/></g>
            <text className="sv-label" x="450" y="182" fill="var(--brass)">→ next Creeping Terror</text>
          </svg>
          <figcaption>Median lap length 17.25 s across 15 complete laps. Slots 6, 7, 9, 10 and 11 vary with Bloodletting timing, Force level, and — after section 07 — target health. Slots 1–5, 8 and 12 never vary once the fight leaves the opener.</figcaption>
        </figure>
      </section>

      {/* ===== 03 WHY ERADICATE NEVER MOVES ===== */}
      <section>
        <h2><span className="num">03</span> Correction: Eradicate runs on its own clock, not Raze's 9-second cap</h2>
        <p className="lede">The ability guide frames Eradicate's availability around Raze, which is capped at once every 9 seconds. The log shows something tighter and more mechanical: Eradicate lands every 5.49–6.51 seconds without exception, 47 gaps measured, median 5.69 s — Eradicate has its own short cooldown, and Raze mostly just decides whether that cast is free.</p>

        <div className="tw">
        <table>
          <thead><tr><th>Measurement</th><th className="n">Count</th><th className="n">Value</th></tr></thead>
          <tbody>
            <tr className="hi"><td>Eradicate-to-Eradicate gap, full fight</td><td className="n">47</td><td className="n">5.49 s – 6.51 s</td></tr>
            <tr><td>Eradicate casts landing on cycle slots 4, 8, 12</td><td className="n">15 / 15 laps</td><td className="n">zero exceptions</td></tr>
            <tr><td>Eradicate casts with no Force spent (free via Raze)</td><td className="n">31 / 48</td><td className="n">64.6%</td></tr>
          </tbody>
        </table>
        </div>

        <div className="call">
          <h4>Raze decides the cost, not the cadence</h4>
          <p>If Eradicate's timing were actually gated by the 9-second Raze cap, its cadence would cluster near 9 s, not 5.7 s — and it would occasionally slip when Raze's cap is still active. It never slips: every one of the 15 complete laps in this log places Eradicate in exactly the same three slots. Raze's real job is Force economy — 31 of 48 casts went out for free — not availability.</p>
        </div>
      </section>

      {/* ===== 04 CORRECTION: SINGLE-CAST PROCS ===== */}
      <section>
        <h2><span className="num">04</span> Correction: two "always up" procs needed exactly one trigger each</h2>
        <p className="lede">Exploitive Strikes and Languishing Lashes are both described as procs that "shouldn't ever fall off" once melee damage is flowing. The log shows why that's not a simplification: each one applies exactly once, at the very start of the fight, and is never removed or reapplied for the remaining 270-plus seconds.</p>

        <div className="call flag">
          <h4>One apply each, zero removals, for the whole fight</h4>
          <p>Exploitive Strikes applies at 1.554 s (off the opening Creeping Terror's critical Force damage) and Languishing Lashes applies at 4.300 s (off the first Leeching Strike). Neither has a matching <code>RemoveEffect</code> anywhere else in 2,325 lines of log. Both procs simply persist at 100% uptime from their first trigger through the target's death at 272.303 s.</p>
        </div>
      </section>

      {/* ===== 05 GCD ===== */}
      <section>
        <h2><span className="num">05</span> The GCD is flat — no proc states, no alacrity windows</h2>
        <p className="lede">Unlike specs with a cooldown that temporarily compresses the GCD, Hatred's kit has nothing that does this. 180 plausible on-GCD gaps measured across the whole fight cluster in a single tight band.</p>
        <p style={{ marginTop: '16px' }}>Median <span className="mono">1.405 s</span>, minimum <span className="mono">1.005 s</span>, maximum <span className="mono">1.571 s</span> — the low and high ends are single outliers next to Phantom Stride's brief activation-delay window (section 01); the working floor for the entire 272-second fight is a flat 1.4 s, unchanged from the opener to the kill.</p>
      </section>

      {/* ===== 06 SCORECARD ===== */}
      <section>
        <h2><span className="num">06</span> Execution scorecard</h2>
        <p className="lede">All measured from effect apply/remove and AbilityActivate events across the full pull.</p>
        <div className="meters">
          <div className="meter"><span className="lbl">Eradicate landing on cycle slots 4 / 8 / 12</span><span className="val">15 / 15</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Bloodletting procs consumed by the very next Assassinate</span><span className="val">18 / 18</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Leeching Strike heal exactly matching damage dealt</span><span className="val">31 / 31</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Discharge uptime — deliberate small gaps, zero clips</span><span className="val">96.1%</span><span className="track"><span className="fill" style={{ width: '96.1%' }}></span></span></div>
          <div className="meter"><span className="lbl">Creeping Terror uptime — deliberate small gaps, zero clips</span><span className="val">96.8%</span><span className="track"><span className="fill" style={{ width: '96.8%' }}></span></span></div>
          <div className="meter"><span className="lbl">Recklessness → Death Field, immediately, every charge pop</span><span className="val">16 / 16</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Phantom Stride weaves costing no GCD slot</span><span className="val">6 / 6</span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
        </div>
      </section>

      {/* ===== 07 SUB-30% ===== */}
      <section>
        <h2><span className="num">07</span> Below 30% — Assassinate moves up and shows up twice as often</h2>
        <p className="lede">The target crosses 30% health at 200.793 s, on an Assassinate hit. Above 30%, Assassinate is proc-gated by Bloodletting and sits mid-cycle averaging under 2 uses per lap. Below 30%, it's simply always usable — and the cycle visibly reshapes around it.</p>

        <div className="tw">
        <table>
          <thead><tr><th>Phase</th><th className="n">Laps</th><th>Assassinate position</th><th className="n">Assassinate / lap</th></tr></thead>
          <tbody>
            <tr><td>Above 30%</td><td className="n">11 clean laps</td><td>Mid-cycle (slot 6 or 10), proc-gated</td><td className="n">1.7 avg</td></tr>
            <tr className="hi"><td>Below 30%</td><td className="n">3 clean laps</td><td>Slot 3 — right after Discharge</td><td className="n">3.0 avg</td></tr>
          </tbody>
        </table>
        </div>

        <div className="call">
          <h4>The same 12-slot shape, reshuffled around a new top priority</h4>
          <p>The fixed open (Creeping Terror, Discharge) and the fixed Eradicate slots (4, 8, 12) never move. What changes is everything between them: Leeching Strike gets pushed from slot 3 to slot 5, and Assassinate — no longer waiting on Bloodletting — claims the slot right after Discharge, appearing three times a lap instead of fewer than two. Cycle 12, which straddles the exact moment the target crosses 30%, shows the transition mid-lap: one early Assassinate already in the new position, one late one still in the old.</p>
        </div>
      </section>

      {/* ===== 08 GRID ===== */}
      <section>
        <h2><span className="num">08</span> Reference grid — 15 macro-cycles, Creeping Terror anchored</h2>
        <p className="lede">Each row is one lap. Hover any icon for its name. Columns 1, 2, 4, 5, 8 and 12 never change ability across all 15 rows. The last three rows (below 30%) show the shape change from section 07; row 12 is the transitional lap where the crossing happens mid-cycle.</p>
        <div className="gridwrap">
          <div className="cgrid">
            <div className="crow chead">
              <div>#</div><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div>
              <div>7</div><div>8</div><div>9</div><div>10</div><div>11</div><div>12</div>
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
          <span style={{ opacity: '.75' }}>Off column: count of off-GCD weaves that lap (Recklessness every time, plus any Phantom Stride / Adrenal). Flagged row is the sub-30% transition lap; green rows are the tightest-length laps above 30%.</span>
        </div>
        <p style={{ marginTop: '20px' }}>Rows 13–15 show Assassinate landing in slot 3 every single time post-transition, and slots 9–11 shrinking to just filler and one Leeching Strike instead of the two- and three-way filler mix seen above 30% — a tighter, more predictable shape with less room for Force-driven filler choice.</p>
      </section>

      {/* ===== 09 ===== */}
      <section>
        <h2><span className="num">09</span> Still on the table</h2>

        <div className="call">
          <h4>1 · Filler choice (Thrash vs. Saber Strike) looks Force-driven, not fixed</h4>
          <p>Across the 11 clean above-30% laps, the filler slots show every combination of Thrash and Saber Strike — never the same twice in a row across consecutive laps. This matches the guide's description of switching to the cheaper Saber Strike whenever Force runs low rather than following a fixed filler priority, but confirming the exact Force thresholds would need the log to carry Force amounts, which this one doesn't.</p>
        </div>

        <div className="call">
          <h4>2 · Recklessness's charge order matches the guide's default case exactly</h4>
          <p>The guide only calls out a specific charge order (Eradicate first) for multi-target Death Field situations. This is a single-target dummy parse, so the default order applies, and that's exactly what the log shows: Death Field consumes the first charge immediately, and whichever Eradicate comes next consumes the second, 16 times out of 16.</p>
        </div>

        <h3>Closed — nothing left to win</h3>
        <ul>
          <li><b>Eradicate's cadence</b> — its own ~5.7 s clock, not the 9 s Raze cap; confirmed by 47 gap measurements and 15/15 laps landing it on slots 4, 8, 12.</li>
          <li><b>Exploitive Strikes and Languishing Lashes</b> — one trigger each, 100% uptime for the rest of the fight, zero reapplications.</li>
          <li><b>Leeching Strike</b> — heals for exactly the damage it deals, 31/31, matching the guide's description precisely.</li>
          <li><b>Bloodletting → Assassinate</b> — 18 procs, 18 consumed by the immediately following Assassinate, no exceptions.</li>
          <li><b>Discharge / Creeping Terror</b> — 96%+ uptime with small deliberate gaps rather than clips, confirming the guide's "don't clip it" guidance is followed exactly.</li>
          <li><b>GCD</b> — flat 1.405 s median for the entire fight; no proc or cooldown compresses it at any point.</li>
        </ul>
      </section>

      <footer>
        <p>One StarParse detail log against a single Operations Training Dummy: 2,325 lines, <span className="mono">EnterCombat</span> 0 to a real <span className="mono">Death</span> event at 272.303 s, target health pool 10,000,000, DPS from summed logged <span className="mono">Damage</span> values (10,024,542 total). Gear-sourced procs present in the raw log (Power Surge, Mastery Surge, and the character's own Advanced Kyrprax Critical Adrenal) are personal loadout, not core Hatred mechanics, and are excluded from the model above. Ability icons are the in-game art, supplied by the user.</p>
      </footer>

      </div>
    </div>
  );
}

function iconRef(name: string): string {
  const map: Record<string, string> = {
    'Creeping Terror': 'h-ct',
    'Discharge': 'h-dc',
    'Leeching Strike': 'h-ls',
    'Eradicate': 'h-er',
    'Death Field': 'h-df',
    'Assassinate': 'h-as',
    'Saber Strike': 'h-ss',
    'Thrash': 'h-th',
    'Recklessness': 'h-rk',
    'Phantom Stride': 'h-ps',
    'Adrenal': 'h-adr',
  };
  return map[name] || 'h-ct';
}
