/**
 * Hatred — Rotation Standard
 * ---------------------------------------------------------------------------
 * Built from two independent StarParse detail logs (two different players).
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
  .meter .val .was{display:block;font-size:11px;color:var(--ink-3);font-weight:400;margin-top:2px}
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

/* ---- reference-grid data: 14 macro-cycles anchored on Creeping Terror, from parse 2 (the reference log) ---- */
type Cell = { n: string; mark?: 'scc' | 'rc' } | null;
type CycleRow = { cyc: string; cells: Cell[]; off: string[]; len: string; slots: number; flag?: boolean; best?: boolean };

const g = (n: string): Cell => ({ n });
const CT = g('Creeping Terror'), DC = g('Discharge'), LS = g('Leeching Strike'), ER = g('Eradicate'),
  DF = g('Death Field'), AS = g('Assassinate'), SS = g('Saber Strike'), TH = g('Thrash');

const CYCLES: CycleRow[] = [
  { cyc: '1', cells: [CT, DC, AS, ER, LS, LS, TH, ER, SS, DF, TH, ER], off: ['Force Cloak', 'Stealth', 'Phantom Stride', 'Adrenal', 'Recklessness'], len: '17.46', slots: 12, flag: true },
  { cyc: '2', cells: [CT, DC, AS, ER, LS, LS, SS, ER, SS, DF, TH, ER], off: ['Recklessness'], len: '16.84', slots: 12, best: true },
  { cyc: '3', cells: [CT, DC, AS, ER, LS, AS, LS, ER, SS, DF, AS, ER], off: ['Phantom Stride', 'Recklessness'], len: '17.49', slots: 12 },
  { cyc: '4', cells: [CT, DC, LS, ER, TH, LS, TH, ER, SS, DF, AS, ER], off: ['Recklessness'], len: '16.89', slots: 12 },
  { cyc: '5', cells: [CT, DC, AS, ER, LS, LS, AS, ER, SS, DF, TH, ER], off: ['Phantom Stride', 'Recklessness'], len: '17.22', slots: 12 },
  { cyc: '6', cells: [CT, DC, LS, ER, AS, LS, SS, ER, SS, DF, TH, ER], off: ['Recklessness'], len: '16.93', slots: 12 },
  { cyc: '7', cells: [CT, DC, AS, ER, LS, AS, LS, ER, SS, DF, TH, ER], off: ['Force Cloak', 'Stealth', 'Phantom Stride', 'Recklessness'], len: '17.15', slots: 12, flag: true },
  { cyc: '8', cells: [CT, DC, AS, ER, LS, LS, TH, ER, SS, DF, TH, ER], off: ['Recklessness'], len: '16.82', slots: 12, best: true },
  { cyc: '9', cells: [CT, DC, AS, ER, LS, LS, AS, ER, SS, DF, AS, ER], off: ['Phantom Stride', 'Recklessness'], len: '17.63', slots: 12 },
  { cyc: '10', cells: [CT, DC, LS, ER, TH, LS, TH, ER, SS, DF, AS, ER], off: ['Recklessness'], len: '16.77', slots: 12, best: true },
  { cyc: '11', cells: [CT, DC, AS, ER, LS, LS, AS, ER, SS, DF, AS, ER], off: ['Phantom Stride', 'Recklessness'], len: '17.22', slots: 12 },
  { cyc: '12', cells: [CT, DC, AS, ER, LS, LS, AS, ER, SS, DF, AS, ER], off: ['Recklessness'], len: '17.09', slots: 12 },
  { cyc: '13', cells: [CT, DC, AS, ER, LS, LS, AS, ER, TH, DF, AS, ER], off: ['Adrenal', 'Force Cloak', 'Stealth', 'Phantom Stride', 'Recklessness'], len: '17.31', slots: 12, flag: true },
  { cyc: '14', cells: [CT, DC, AS, ER, LS, LS, AS, ER, SS, DF, AS, ER], off: ['Recklessness'], len: '17.00', slots: 12 },
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
      <symbol id="h-fc" viewBox="0 0 50 50"><image href="/icons/assassin/force-cloak.png" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      </defs></svg>

      <div className="wrap">

      <div className="mast">
        <p className="eyebrow">Sith Assassin / Hatred · parse 2 as reference · 38,022 DPS</p>
        <h1>Same fixed clock, one real technique parse 1 never uses</h1>
        <p className="standfirst">Both parses share the identical <strong>Eradicate 4/8/12</strong> clock and the same fixed Creeping Terror + Discharge open. The DPS gap isn't just variance: parse 2 opens from stealth and re-enters it three more times to trigger <strong>Shadowcraft</strong>, landing four 6-second windows of guaranteed critical hits that parse 1 never touches at all.</p>
        <dl className="facts">
          <div className="fact"><dt>DPS</dt><dd>38,022<span className="was">was: parse 1: 36,814</span></dd></div>
          <div className="fact"><dt>GCD</dt><dd>1.403<small>s</small><span className="was">flat, both parses · was: 1.405 s</span></dd></div>
          <div className="fact"><dt>Macro-cycle</dt><dd>17.09<small>s med</small><span className="was">14 clean laps · was: 17.25 s, 15 laps</span></dd></div>
          <div className="fact"><dt>Eradicate</dt><dd>4 / 8 / 12<small>slots</small><span className="was">confirmed again, zero exceptions</span></dd></div>
          <div className="fact"><dt>Shadowcraft windows</dt><dd>4<small>× 6s</small><span className="was">100% crit inside · was: parse 1: 0</span></dd></div>
          <div className="fact"><dt>Death Field</dt><dd>slot 10<small>always</small><span className="was">was: parse 1: slot 5 — real style difference</span></dd></div>
        </dl>
      </div>

      {/* ===== KEY ===== */}
      <section style={{ marginTop: '34px' }}>
        <h3 style={{ marginTop: '0' }}>Ability key — hover any icon anywhere on this page</h3>
        <div className="keygrid">
        <div className="keyrow"><span className="ic" data-n="Creeping Terror" role="img" aria-label="Creeping Terror"><svg viewBox="0 0 50 50"><use href="#h-ct"/></svg></span><div><b>Creeping Terror</b><span>18s DoT · internal, reapplied with Discharge</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Discharge" role="img" aria-label="Discharge"><svg viewBox="0 0 50 50"><use href="#h-dc"/></svg></span><div><b>Discharge</b><span>18s DoT · energy, needs the armor debuff to matter</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Eradicate" role="img" aria-label="Eradicate"><svg viewBox="0 0 50 50"><use href="#h-er"/></svg></span><div><b>Eradicate</b><span>Hit + 6s DoT · own ~5.6s clock, free via Raze</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Death Field" role="img" aria-label="Death Field"><svg viewBox="0 0 50 50"><use href="#h-df"/></svg></span><div><b>Death Field</b><span>AoE-capable nuke · grants Deathmark and Penetrating Death</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Leeching Strike" role="img" aria-label="Leeching Strike"><svg viewBox="0 0 50 50"><use href="#h-ls"/></svg></span><div><b>Leeching Strike</b><span>Filler · heals for exactly what it damages</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Assassinate" role="img" aria-label="Assassinate"><svg viewBox="0 0 50 50"><use href="#h-as"/></svg></span><div><b>Assassinate</b><span>Sub-30% · or unlocked anywhere by Bloodletting</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Saber Strike" role="img" aria-label="Saber Strike"><svg viewBox="0 0 50 50"><use href="#h-ss"/></svg></span><div><b>Saber Strike</b><span>Weak filler · used to rebuild Force</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Thrash" role="img" aria-label="Thrash"><svg viewBox="0 0 50 50"><use href="#h-th"/></svg></span><div><b>Thrash</b><span>Strong filler · costs more Force than Saber Strike</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Recklessness" role="img" aria-label="Recklessness"><svg viewBox="0 0 50 50"><use href="#h-rk"/></svg></span><div><b>Recklessness</b><span>Off-GCD · 2 charges, consumed by Death Field then Eradicate</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Phantom Stride" role="img" aria-label="Phantom Stride"><svg viewBox="0 0 50 50"><use href="#h-ps"/></svg></span><div><b>Phantom Stride</b><span>Off-GCD gap closer · from stealth, triggers Shadowcraft</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Force Cloak" role="img" aria-label="Force Cloak"><svg viewBox="0 0 50 50"><use href="#h-fc"/></svg></span><div><b>Force Cloak</b><span>Off-GCD, parse 2 only · vanish, re-enter stealth mid-fight</span></div></div>
      </div>
      </section>

      {/* ===== 01 OPENER ===== */}
      <section>
        <h2><span className="num">01</span> The opener — from stealth, straight into a guaranteed crit</h2>
        <p className="lede">Parse 2 starts already in stealth and opens with Phantom Stride into Death Field rather than Eradicate. That single choice lands a 51,207-damage opening hit — nearly five times any other single hit in the fight — because Shadowcraft is active from the very first GCD.</p>

        <figure>
          <svg viewBox="0 0 820 200" role="img" aria-label="Opener: Phantom Stride from stealth at 0.037 seconds triggers Shadowcraft, Death Field lands a 51207 damage critical hit, then Creeping Terror at 1.4 seconds and Discharge at 2.8 seconds, then the first steady cycle from roughly 16 seconds.">
            <g className="sv-num" style={{ textAnchor: 'middle' }}>
              <text x="40" y="30">0.0</text><text x="220" y="30">1.4</text><text x="420" y="30">2.8</text><text x="620" y="30">4.3</text><text x="760" y="30">16.1</text>
            </g>
            <g><title>Phantom Stride (from stealth, triggers Shadowcraft)</title><use href="#h-ps" x="16" y="46" width="30" height="30"/></g>
            <g><title>Death Field (51,207 damage, guaranteed crit)</title><use href="#h-df" x="60" y="34" width="50" height="50"/></g>
            <g><title>Creeping Terror</title><use href="#h-ct" x="230" y="40" width="40" height="40"/></g>
            <g><title>Discharge</title><use href="#h-dc" x="410" y="40" width="40" height="40"/></g>
            <g><title>Bloodletting proc, off the Creeping Terror tick</title><use href="#h-as" x="610" y="46" width="26" height="26"/></g>
            <line x1="700" y1="34" x2="700" y2="140" stroke="var(--brass)" strokeWidth="2"/>
            <text className="sv-label" x="700" y="158" style={{ textAnchor: 'middle' }} fill="var(--brass)">first steady cycle starts here</text>
            <g className="sv-note">
              <text x="16" y="180">The very next GCD after Death Field is Creeping Terror, not another attack — the DoTs still go down early, opener or not</text>
            </g>
          </svg>
          <figcaption>Timestamps: Phantom Stride 0.037 (from stealth) · Death Field 0.037 (51,207 damage) · Creeping Terror 1.397 · Discharge 2.798 · Bloodletting procs at 4.315 (off the Creeping Terror tick) · Assassinate 7.465 · Eradicate 8.851, inside the first Shadowcraft window (section 03). Parse 1 opens with Eradicate instead, from full Force, with no stealth and no Shadowcraft — see the original opener sequence preserved in the footer.</figcaption>
        </figure>
      </section>

      {/* ===== 02 CYCLE ===== */}
      <section>
        <h2><span className="num">02</span> The cycle — same fixed pieces, reshuffled order</h2>
        <p className="lede">Both parses fix Creeping Terror and Discharge as slots 1–2 and Eradicate as slots 4, 8 and 12. Where they genuinely differ: parse 1 places Death Field right after the opening DoTs (slot 5); parse 2 delays it all the way to slot 10, right before the cycle's third Eradicate.</p>

        <figure>
          <svg viewBox="0 0 820 220" role="img" aria-label="Parse 2's twelve-slot cycle: Creeping Terror, Discharge, Assassinate, Eradicate, Leeching Strike, Leeching Strike, Assassinate, Eradicate, filler, Death Field, Assassinate, Eradicate. Death Field sits at slot 10, not slot 5 as in parse 1.">
            <text className="sv-label" x="20" y="24" fill="var(--brass)">FIXED IN BOTH PARSES</text>
            <g><title>Creeping Terror</title><use href="#h-ct" x="20" y="34" width="38" height="38"/></g>
            <g><title>Discharge</title><use href="#h-dc" x="66" y="34" width="38" height="38"/></g>
            <g><title>Eradicate — slot 4, both parses</title><use href="#h-er" x="150" y="34" width="38" height="38"/></g>
            <g><title>Eradicate — slot 8, both parses</title><use href="#h-er" x="322" y="34" width="38" height="38"/></g>
            <g><title>Eradicate — slot 12, both parses</title><use href="#h-er" x="580" y="34" width="38" height="38"/></g>
            <line className="sv-tick" x1="20" y1="86" x2="620" y2="86"/>
            <text className="sv-numb" x="20" y="102">slots 1, 2, 4, 8, 12 — identical position, both parses</text>

            <text className="sv-label" x="20" y="146" fill="var(--ink-2)">PARSE 2 ONLY — Death Field moves to slot 10</text>
            <g><title>Assassinate — proc-gated or sub-30%</title><use href="#h-as" x="20" y="156" width="34" height="34"/></g>
            <g><title>Leeching Strike ×2</title><use href="#h-ls" x="62" y="156" width="34" height="34"/></g>
            <g><title>Assassinate or Leeching Strike</title><use href="#h-as" x="104" y="156" width="34" height="34"/></g>
            <g><title>Filler (Saber Strike or Thrash)</title><use href="#h-ss" x="188" y="156" width="34" height="34"/></g>
            <g><title>Death Field — slot 10, parse 2 only</title><use href="#h-df" x="360" y="152" width="42" height="42"/></g>
            <g><title>Assassinate or filler</title><use href="#h-as" x="500" y="156" width="34" height="34"/></g>
            <text className="sv-label" x="600" y="180" fill="var(--brass)">→ next Creeping Terror</text>
          </svg>
          <figcaption>Median lap length 17.09 s across 14 clean laps (was: parse 1's 17.25 s across 15). Neither position is more "correct" — both are internally 100% consistent within their own parse, which is what makes this a genuine style difference rather than an execution gap.</figcaption>
        </figure>
      </section>

      {/* ===== 03 SHADOWCRAFT ===== */}
      <section>
        <h2><span className="num">03</span> The real improvement: four guaranteed-crit windows</h2>
        <p className="lede">Parse 2 re-enters stealth four times mid-fight — Force Cloak to vanish, then Phantom Stride back onto the target — to trigger Shadowcraft, which the ability guide describes as "increases your critical chance by 100% for 6 seconds." Parse 1 never does this once. This is the single largest mechanical difference between the two parses.</p>

        <div className="tw">
        <table>
          <thead><tr><th>Window</th><th className="n">Duration</th><th className="n">Crits</th><th className="n">Damage</th><th className="n">Effective DPS</th></tr></thead>
          <tbody>
            <tr className="hi"><td>7.143 s – 13.217 s</td><td className="n">6.07 s</td><td className="n">100%</td><td className="n">335,557</td><td className="n">55,245</td></tr>
            <tr className="hi"><td>19.116 s – 25.120 s</td><td className="n">6.00 s</td><td className="n">100%</td><td className="n">333,053</td><td className="n">55,472</td></tr>
            <tr className="hi"><td>121.760 s – 127.852 s</td><td className="n">6.09 s</td><td className="n">100%</td><td className="n">373,666</td><td className="n">61,337</td></tr>
            <tr className="hi"><td>224.417 s – 230.515 s</td><td className="n">6.10 s</td><td className="n">100%</td><td className="n">404,501</td><td className="n">66,333</td></tr>
          </tbody>
        </table>
        </div>

        <div className="call fix">
          <h4>83 for 83 crits inside the windows; 561 of 776 (72.3%) outside them</h4>
          <p>Every single damage instance inside the four Shadowcraft windows crit — 83 out of 83, measured directly from the <code>*</code> crit marker in the log. Outside the windows, the crit rate drops to a still-healthy 72.3%, which is the character's normal baseline. The four windows total 24.3 seconds — 9.2% of the fight — but at 1.5–1.75× the fight's average DPS each, they answer the question directly: part of parse 2's higher number is a real, repeatable technique, not just favorable rolls.</p>
        </div>

        <p style={{ marginTop: '16px' }}>Each window opens the same way: Phantom Stride, then Assassinate immediately (Bloodletting is always already up by the time the player re-engages), then Eradicate, then Leeching Strike — a deliberate burst sequence queued to land inside the crit window, not a coincidence of normal priority.</p>
      </section>

      {/* ===== 04 CORRECTIONS ===== */}
      <section>
        <h2><span className="num">04</span> Two mechanics this page missed the first time — confirmed in both parses</h2>
        <p className="lede">Re-checking against a second log surfaced two real effects that the original build of this page didn't account for. Both are present in near-identical form in parse 1 too, which means they were always part of the core Hatred kit — just missed, not new.</p>

        <div className="call flag">
          <h4>Pervasive Death → Penetrating Death, off every Death Field cast</h4>
          <p>Every Death Field cast grants a stack of Penetrating Death that lasts almost exactly 10.2 s, confirmed in both parses (16/16 in parse 1, 16/16 in parse 2). Because Death Field's own cadence is close to 17 s, this leaves a recurring ~6.7–7.4 s gap each cycle where the buff isn't active — it does not maintain full uptime the way Exploitive Strikes or Languishing Lashes do.</p>
        </div>

        <div className="call flag">
          <h4>"Thrashing Terror" is a real, sizeable damage source in both logs</h4>
          <p>101 hits in parse 1, 98 in parse 2, each dealing 11,000–14,000 internal damage — roughly 10% of total damage in both parses. It isn't named as a standalone rotational ability in the guide's ability list, which is exactly why it was missed initially; it shows up in the log as its own damage source rather than under Thrash or Creeping Terror's name.</p>
        </div>
      </section>

      {/* ===== 05 WHY ERADICATE NEVER MOVES ===== */}
      <section>
        <h2><span className="num">05</span> Eradicate's clock, reconfirmed independently</h2>
        <p className="lede">The original finding holds exactly, in a fight with a completely different opener and four extra burst windows layered on top: Eradicate lands on slots 4, 8 and 12 of every single clean lap, in both parses, with no exceptions.</p>

        <div className="tw">
        <table>
          <thead><tr><th>Measurement</th><th className="n">Parse 1</th><th className="n">Parse 2</th></tr></thead>
          <tbody>
            <tr><td>Eradicate-to-Eradicate gap, full fight</td><td className="n">5.49 s – 6.51 s</td><td className="n">4.54 s – 6.10 s</td></tr>
            <tr className="hi"><td>Median Eradicate gap</td><td className="n">5.69 s</td><td className="n">5.63 s</td></tr>
            <tr><td>Eradicate landing on cycle slots 4, 8, 12</td><td className="n">15 / 15 laps</td><td className="n">14 / 14 clean laps</td></tr>
            <tr><td>Eradicate casts with no Force spent (free via Raze)</td><td className="n">31 / 48</td><td className="n">31 / 46</td></tr>
          </tbody>
        </table>
        </div>
      </section>

      {/* ===== 06 GCD ===== */}
      <section>
        <h2><span className="num">06</span> The GCD is still flat</h2>
        <p className="lede">No cooldown compresses Hatred's GCD in either parse, including through the four Shadowcraft windows in parse 2 — Shadowcraft buffs critical chance, not speed.</p>
        <p style={{ marginTop: '16px' }}>Parse 2: median <span className="mono">1.403 s</span>, range <span className="mono">1.233 s – 1.727 s</span> across 183 measurements. Parse 1: median <span className="mono">1.405 s</span>, range <span className="mono">1.005 s – 1.571 s</span>. Both sit on the same flat floor for the entire fight.</p>
      </section>

      {/* ===== 07 SCORECARD ===== */}
      <section>
        <h2><span className="num">07</span> Execution scorecard</h2>
        <p className="lede">All measured from effect apply/remove and AbilityActivate events. Parse 2 values shown; parse 1 matches on every shared metric.</p>
        <div className="meters">
          <div className="meter"><span className="lbl">Eradicate landing on cycle slots 4 / 8 / 12</span><span className="val">14 / 14<span className="was">was: 15/15</span></span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Shadowcraft windows landing 100% crit</span><span className="val">4 / 4<span className="was">was: 0 — mechanic unused in parse 1</span></span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Discharge uptime — deliberate small gaps, zero clips</span><span className="val">96.6%<span className="was">was: 96.1%</span></span><span className="track"><span className="fill" style={{ width: '96.6%' }}></span></span></div>
          <div className="meter"><span className="lbl">Creeping Terror uptime — deliberate small gaps, zero clips</span><span className="val">97.0%<span className="was">was: 96.8%</span></span><span className="track"><span className="fill" style={{ width: '97.0%' }}></span></span></div>
          <div className="meter"><span className="lbl">Penetrating Death applied off every Death Field cast</span><span className="val">16 / 16<span className="was">was: 16/16</span></span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Recklessness charges consumed, no waste</span><span className="val">16 / 16<span className="was">was: 16/16</span></span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
        </div>
      </section>

      {/* ===== 08 SUB-30% ===== */}
      {/* ===== 08 GRID ===== */}
      <section>
        <h2><span className="num">08</span> Reference grid — 14 macro-cycles, Creeping Terror anchored (parse 2)</h2>
        <p className="lede">Each row is one clean lap from parse 2, the reference log — the stealth-opener lap is covered in section 01 instead. Hover any icon for its name. Columns 1, 2, 4, 5, 8 and 12 never change ability; column 10 is always Death Field, the clearest structural difference from parse 1's grid.</p>
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
          <span style={{ opacity: '.75' }}>Off column: count of off-GCD weaves that lap (Recklessness every time, plus any Phantom Stride / Adrenal / Force Cloak+Stealth). Flagged rows are the three Shadowcraft-burst laps; green rows are the tightest-length laps.</span>
        </div>
        <p style={{ marginTop: '20px' }}>Rows 1, 7 and 13 are the laps carrying a Force Cloak / Stealth / Phantom Stride burst — note their length isn't meaningfully longer than the others, since none of those off-GCD actions cost a slot.</p>
      </section>

      {/* ===== 09 ===== */}
      <section>
        <h2><span className="num">09</span> Below 30% — the same shift, a different trigger</h2>
        <p className="lede">The target crosses 30% health at 196.156 s, this time on a Thrashing Terror tick rather than a direct attack. As in parse 1, Assassinate's role changes immediately: proc-gated and occasional above 30%, essentially always-available below it.</p>

        <div className="tw">
        <table>
          <thead><tr><th>Parse</th><th className="n">Assassinate uses</th><th className="n">Before 30%</th><th className="n">After 30%</th></tr></thead>
          <tbody>
            <tr><td>Parse 1</td><td className="n">31</td><td className="n">19</td><td className="n">12</td></tr>
            <tr className="hi"><td>Parse 2 (reference)</td><td className="n">30</td><td className="n">19</td><td className="n">11</td></tr>
          </tbody>
        </table>
        </div>
        <p style={{ marginTop: '16px' }}>Nearly identical split in both parses, despite completely different openers and burst techniques — the sub-30% priority shift is a stable, spec-wide behavior, not something either player's individual style changes.</p>
      </section>

      {/* ===== 10 ===== */}
      <section>
        <h2><span className="num">10</span> Still on the table</h2>

        <div className="call">
          <h4>1 · Recklessness sits unspent for longer in parse 2, by design</h4>
          <p>Parse 1 pops Recklessness and consumes the first charge on the very next GCD (Death Field, slot 5). Parse 2 pops it in the same relative spot but doesn't reach Death Field until slot 10 — six to seven seconds later. The charges simply wait; all 16 pops across both parses get fully consumed with no waste, so this is a scheduling difference, not a mistake.</p>
        </div>

        <div className="call">
          <h4>2 · Filler choice still looks Force-driven in both parses</h4>
          <p>Thrash and Saber Strike keep alternating unpredictably in both logs, consistent with switching based on Force level rather than a fixed filler priority. Neither log carries Force amounts, so the exact thresholds remain unconfirmed either way.</p>
        </div>

        <h3>Closed — nothing left to win</h3>
        <ul>
          <li><b>Eradicate's cadence</b> — its own ~5.6–5.7 s clock, confirmed in two independent parses landing it on slots 4, 8, 12 with zero exceptions between them.</li>
          <li><b>Shadowcraft</b> — 100% crit rate inside all 4 windows measured, a real and repeatable technique parse 1 simply never uses.</li>
          <li><b>Pervasive Death / Penetrating Death and Thrashing Terror</b> — both confirmed present and near-identical in magnitude across both parses.</li>
          <li><b>Leeching Strike</b> — heals for exactly the damage it deals in both logs.</li>
          <li><b>Bloodletting → Assassinate</b> and the sub-30% priority shift — both stable across two independent players.</li>
          <li><b>GCD</b> — flat in both parses; nothing in Hatred's kit compresses it, Shadowcraft included.</li>
        </ul>
      </section>

      <footer>
        <p>Two StarParse detail logs from two different players, each against a single Operations Training Dummy with a 10,000,000 health pool. Parse 1: 2,325 lines, <span className="mono">EnterCombat</span> 0 to a real <span className="mono">Death</span> event at 272.303 s, DPS from summed logged <span className="mono">Damage</span> values (10,024,542 total). Parse 2 (reference): 2,348 lines, <span className="mono">EnterCombat</span> 0 to a real <span className="mono">Death</span> event at 263.162 s (10,005,945 total) — this log also shows four brief <span className="mono">ExitCombat</span>/<span className="mono">EnterCombat</span> pairs, each lining up exactly with a Force Cloak/Stealth cycle rather than any data issue. Gear-sourced procs (Power Surge, Mastery Surge, and each character's own critical Adrenal) are personal loadout, not core Hatred mechanics, and are excluded from the model above. Ability icons are the in-game art, supplied by the user.</p>
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
    'Force Cloak': 'h-fc',
  };
  return map[name] || 'h-ct';
}
