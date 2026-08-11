/**
 * Serenity — Rotation Standard
 * ---------------------------------------------------------------------------
 * Built from two independent StarParse detail logs (two different players).
 * Ability icons live as separate files under /public/icons/shadow.
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

/* ---- reference-grid data: 14 macro-cycles anchored on Sever Force, from parse 2 (the reference log) ---- */
type Cell = { n: string; mark?: 'scc' | 'rc' } | null;
type CycleRow = { cyc: string; cells: Cell[]; off: string[]; len: string; slots: number; flag?: boolean; best?: boolean };

const g = (n: string): Cell => ({ n });
const CT = g('Sever Force'), DC = g('Force Breach'), LS = g('Serenity Strike'), ER = g('Squelch'),
  DF = g('Force in Balance'), AS = g('Spinning Strike'), SS = g('Saber Strike'), TH = g('Double Strike');

const CYCLES: CycleRow[] = [
  { cyc: '1', cells: [CT, DC, AS, ER, LS, LS, TH, ER, SS, DF, TH, ER], off: ['Force Cloak', 'Stealth', 'Shadow Stride', 'Adrenal', 'Force Potency'], len: '17.46', slots: 12, flag: true },
  { cyc: '2', cells: [CT, DC, AS, ER, LS, LS, SS, ER, SS, DF, TH, ER], off: ['Force Potency'], len: '16.84', slots: 12, best: true },
  { cyc: '3', cells: [CT, DC, AS, ER, LS, AS, LS, ER, SS, DF, AS, ER], off: ['Shadow Stride', 'Force Potency'], len: '17.49', slots: 12 },
  { cyc: '4', cells: [CT, DC, LS, ER, TH, LS, TH, ER, SS, DF, AS, ER], off: ['Force Potency'], len: '16.89', slots: 12 },
  { cyc: '5', cells: [CT, DC, AS, ER, LS, LS, AS, ER, SS, DF, TH, ER], off: ['Shadow Stride', 'Force Potency'], len: '17.22', slots: 12 },
  { cyc: '6', cells: [CT, DC, LS, ER, AS, LS, SS, ER, SS, DF, TH, ER], off: ['Force Potency'], len: '16.93', slots: 12 },
  { cyc: '7', cells: [CT, DC, AS, ER, LS, AS, LS, ER, SS, DF, TH, ER], off: ['Force Cloak', 'Stealth', 'Shadow Stride', 'Force Potency'], len: '17.15', slots: 12, flag: true },
  { cyc: '8', cells: [CT, DC, AS, ER, LS, LS, TH, ER, SS, DF, TH, ER], off: ['Force Potency'], len: '16.82', slots: 12, best: true },
  { cyc: '9', cells: [CT, DC, AS, ER, LS, LS, AS, ER, SS, DF, AS, ER], off: ['Shadow Stride', 'Force Potency'], len: '17.63', slots: 12 },
  { cyc: '10', cells: [CT, DC, LS, ER, TH, LS, TH, ER, SS, DF, AS, ER], off: ['Force Potency'], len: '16.77', slots: 12, best: true },
  { cyc: '11', cells: [CT, DC, AS, ER, LS, LS, AS, ER, SS, DF, AS, ER], off: ['Shadow Stride', 'Force Potency'], len: '17.22', slots: 12 },
  { cyc: '12', cells: [CT, DC, AS, ER, LS, LS, AS, ER, SS, DF, AS, ER], off: ['Force Potency'], len: '17.09', slots: 12 },
  { cyc: '13', cells: [CT, DC, AS, ER, LS, LS, AS, ER, TH, DF, AS, ER], off: ['Adrenal', 'Force Cloak', 'Stealth', 'Shadow Stride', 'Force Potency'], len: '17.31', slots: 12, flag: true },
  { cyc: '14', cells: [CT, DC, AS, ER, LS, LS, AS, ER, SS, DF, AS, ER], off: ['Force Potency'], len: '17.00', slots: 12 },
];

export default function SerenityRotation({ theme }: { theme?: 'dark' | 'light' }) {
  return (
    <div className="ar-root" data-theme={theme}>
      <style>{CSS}</style>
      <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute', overflow: 'hidden' }}><defs>
      <clipPath id="ico-clip4"><rect width="50" height="50" rx="7" ry="7"/></clipPath>
      <symbol id="h-ct" viewBox="0 0 50 50"><image href="/icons/shadow/sever-force.png" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="h-dc" viewBox="0 0 50 50"><image href="/icons/shadow/force-breach.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="h-ls" viewBox="0 0 50 50"><image href="/icons/shadow/serenity-strike.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="h-er" viewBox="0 0 50 50"><image href="/icons/shadow/squelch.png" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="h-df" viewBox="0 0 50 50"><image href="/icons/shadow/force-in-balance.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="h-as" viewBox="0 0 50 50"><image href="/icons/shadow/spinning-strike.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="h-ss" viewBox="0 0 50 50"><image href="/icons/shadow/saber-strike.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="h-th" viewBox="0 0 50 50"><image href="/icons/shadow/double-strike.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="h-rk" viewBox="0 0 50 50"><image href="/icons/shadow/force-potency.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="h-ps" viewBox="0 0 50 50"><image href="/icons/shadow/shadow-stride.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="h-adr" viewBox="0 0 50 50"><image href="/icons/shadow/adrenal.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="h-fc" viewBox="0 0 50 50"><image href="/icons/shadow/force-cloak.webp" width="50" height="50" clipPath="url(#ico-clip4)" preserveAspectRatio="xMidYMid slice"/></symbol>
      </defs></svg>

      <div className="wrap">

      <div className="mast">
        <p className="eyebrow">Jedi Shadow / Serenity · parse 2 as reference · 38,022 DPS</p>
        <h1>Same fixed clock — the rest is a dummy-only trick</h1>
        <p className="standfirst">Both parses share the identical <strong>Squelch 4/8/12</strong> clock and the same fixed Sever Force + Force Breach open. The raw DPS gap isn't a better rotation: parse 2 repeatedly exploits a training-dummy-only quirk in Force Cloak to trigger Shadowcraft's guaranteed-crit window four times. Per the ability guide, Force Cloak doesn't actually exit combat against a real Operations boss — strip the four windows out, and parse 2's real execution runs essentially even with parse 1's clean number, not ahead of it.</p>
        <dl className="facts">
          <div className="fact"><dt>DPS</dt><dd>38,022<span className="was">was: parse 1: 36,814</span></dd></div>
          <div className="fact"><dt>GCD</dt><dd>1.403<small>s</small><span className="was">flat, both parses · was: 1.405 s</span></dd></div>
          <div className="fact"><dt>Macro-cycle</dt><dd>17.09<small>s med</small><span className="was">14 clean laps · was: 17.25 s, 15 laps</span></dd></div>
          <div className="fact"><dt>Squelch</dt><dd>4 / 8 / 12<small>slots</small><span className="was">confirmed again, zero exceptions</span></dd></div>
          <div className="fact"><dt>Unpadded DPS</dt><dd>~35,800<small>excl. 4 windows</small><span className="was">was: parse 1 (clean): 36,814 — not actually ahead</span></dd></div>
          <div className="fact"><dt>Force in Balance</dt><dd>slot 10<small>always</small><span className="was">was: parse 1: slot 5 — real style difference</span></dd></div>
        </dl>
      </div>

      {/* ===== KEY ===== */}
      <section style={{ marginTop: '34px' }}>
        <h3 style={{ marginTop: '0' }}>Ability key — hover any icon anywhere on this page</h3>
        <div className="keygrid">
        <div className="keyrow"><span className="ic" data-n="Sever Force" role="img" aria-label="Sever Force"><svg viewBox="0 0 50 50"><use href="#h-ct"/></svg></span><div><b>Sever Force</b><span>18s DoT · internal, reapplied with Force Breach</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Force Breach" role="img" aria-label="Force Breach"><svg viewBox="0 0 50 50"><use href="#h-dc"/></svg></span><div><b>Force Breach</b><span>18s DoT · energy, needs the armor debuff to matter</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Squelch" role="img" aria-label="Squelch"><svg viewBox="0 0 50 50"><use href="#h-er"/></svg></span><div><b>Squelch</b><span>Hit + 6s DoT · own ~5.6s clock, free via Force Strike</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Force in Balance" role="img" aria-label="Force in Balance"><svg viewBox="0 0 50 50"><use href="#h-df"/></svg></span><div><b>Force in Balance</b><span>AoE-capable nuke · grants Force Suppression and Penetrating Death</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Serenity Strike" role="img" aria-label="Serenity Strike"><svg viewBox="0 0 50 50"><use href="#h-ls"/></svg></span><div><b>Serenity Strike</b><span>Filler · heals for exactly what it damages</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Spinning Strike" role="img" aria-label="Spinning Strike"><svg viewBox="0 0 50 50"><use href="#h-as"/></svg></span><div><b>Spinning Strike</b><span>Sub-30% · or unlocked anywhere by Crush Spirit</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Saber Strike" role="img" aria-label="Saber Strike"><svg viewBox="0 0 50 50"><use href="#h-ss"/></svg></span><div><b>Saber Strike</b><span>Weak filler · used to rebuild Force</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Double Strike" role="img" aria-label="Double Strike"><svg viewBox="0 0 50 50"><use href="#h-th"/></svg></span><div><b>Double Strike</b><span>Strong filler · costs more Force than Saber Strike</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Force Potency" role="img" aria-label="Force Potency"><svg viewBox="0 0 50 50"><use href="#h-rk"/></svg></span><div><b>Force Potency</b><span>Off-GCD · 2 charges, consumed by Force in Balance then Squelch</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Shadow Stride" role="img" aria-label="Shadow Stride"><svg viewBox="0 0 50 50"><use href="#h-ps"/></svg></span><div><b>Shadow Stride</b><span>Off-GCD gap closer · from stealth, triggers Shadowcraft</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Force Cloak" role="img" aria-label="Force Cloak"><svg viewBox="0 0 50 50"><use href="#h-fc"/></svg></span><div><b>Force Cloak</b><span>Off-GCD, parse 2 only · exits combat on a dummy; not against a real boss (section 03)</span></div></div>
      </div>
      </section>

      {/* ===== 01 OPENER ===== */}
      <section>
        <h2><span className="num">01</span> The opener — tagged Stealth, but no Shadowcraft yet</h2>
        <p className="lede">Parse 2 starts flagged with the Stealth buff at pull, but opens directly with Force in Balance, not Shadow Stride — so Shadowcraft never triggers here. The 51,207-damage opening hit is a large crit, not a guaranteed one; no Shadowcraft buff is active in the log until 7.143 s, and only after a Force Cloak vanish and re-stealth mid-fight (section 03).</p>

        <figure>
          <svg viewBox="0 0 820 200" role="img" aria-label="Opener: Force in Balance cast directly at 0.037 seconds with no Shadowcraft active, then Sever Force at 1.4 seconds and Force Breach at 2.8 seconds, then a Force Cloak vanish and re-stealth around 6.3 seconds leading into the first real Shadowcraft window at 7.1 seconds, covered in section 03.">
            <g className="sv-num" style={{ textAnchor: 'middle' }}>
              <text x="40" y="30">0.0</text><text x="220" y="30">1.4</text><text x="420" y="30">2.8</text><text x="620" y="30">4.3</text><text x="760" y="30">16.1</text>
            </g>
            <g><title>Force in Balance (51,207 damage — a large crit, but no Shadowcraft active yet)</title><use href="#h-df" x="16" y="34" width="50" height="50"/></g>
            <g><title>Sever Force</title><use href="#h-ct" x="230" y="40" width="40" height="40"/></g>
            <g><title>Force Breach</title><use href="#h-dc" x="410" y="40" width="40" height="40"/></g>
            <g><title>Crush Spirit proc, off the Sever Force tick</title><use href="#h-as" x="610" y="46" width="26" height="26"/></g>
            <line x1="700" y1="34" x2="700" y2="140" stroke="var(--brass)" strokeWidth="2"/>
            <text className="sv-label" x="700" y="158" style={{ textAnchor: 'middle' }} fill="var(--brass)">first steady cycle starts here</text>
            <g className="sv-note">
              <text x="16" y="180">The very next GCD after Force in Balance is Sever Force, not another attack — the DoTs still go down early, opener or not</text>
              <text x="16" y="196">The first real Shadowcraft window opens at 7.143 s, right after a Force Cloak vanish at 6.26 s — see section 03</text>
            </g>
          </svg>
          <figcaption>Timestamps: Force in Balance 0.037 (51,207 damage, no Shadowcraft active) · Sever Force 1.397 · Force Breach 2.798 · Crush Spirit procs at 4.315 (off the Sever Force tick) · Force Cloak 6.260 → Stealth 6.262 → Shadow Stride 7.143, the first genuine Shadowcraft trigger · Spinning Strike 7.465 · Squelch 8.851, inside that first window (section 03). Parse 1 opens with Squelch instead, from full Force, with no stealth and no Shadowcraft — see the original opener sequence preserved in the footer.</figcaption>
        </figure>
      </section>

      {/* ===== 02 CYCLE ===== */}
      <section>
        <h2><span className="num">02</span> The cycle — six fixed slots, six filled by priority</h2>
        <p className="lede">Six of the twelve slots never change ability, lap after lap: Sever Force, Force Breach, three copies of Squelch, and Force in Balance. The other six aren't random — they're filled by a strict priority order, and most of the "which ability goes here" variance in the reference grid comes from just one of those six slots.</p>

        <figure>
          <svg viewBox="0 0 820 230" role="img" aria-label="Twelve-slot cycle: Sever Force, Force Breach, then a flexible slot, Squelch, three more flexible slots, Squelch, a flexible slot, Force in Balance, a flexible slot, Squelch. Six slots are fixed and six are filled by priority: Spinning Strike first, then Serenity Strike, then Double Strike, then Saber Strike.">
            <g className="sv-num" textAnchor="middle">
              <text x="46" y="16">1</text><text x="112" y="16">2</text><text x="178" y="16">3</text><text x="244" y="16">4</text>
              <text x="310" y="16">5</text><text x="376" y="16">6</text><text x="442" y="16">7</text><text x="508" y="16">8</text>
              <text x="574" y="16">9</text><text x="640" y="16">10</text><text x="706" y="16">11</text><text x="772" y="16">12</text>
            </g>
            <g><title>Sever Force — fixed</title><use href="#h-ct" x="24" y="26" width="44" height="44"/></g>
            <g><title>Force Breach — fixed</title><use href="#h-dc" x="90" y="26" width="44" height="44"/></g>
            <rect x="156" y="26" width="44" height="44" rx="6" fill="none" stroke="var(--brass)" strokeWidth="1.6" strokeDasharray="4 3"/>
            <text className="sv-flex" x="178" y="52" textAnchor="middle">F1</text>
            <g><title>Squelch — fixed, slot 4</title><use href="#h-er" x="222" y="26" width="44" height="44"/></g>
            <rect x="288" y="26" width="44" height="44" rx="6" fill="none" stroke="var(--brass)" strokeWidth="1.6" strokeDasharray="4 3"/>
            <text className="sv-flex" x="310" y="52" textAnchor="middle">F2</text>
            <rect x="354" y="26" width="44" height="44" rx="6" fill="none" stroke="var(--brass)" strokeWidth="1.6" strokeDasharray="4 3"/>
            <text className="sv-flex" x="376" y="52" textAnchor="middle">F3</text>
            <rect x="420" y="26" width="44" height="44" rx="6" fill="none" stroke="var(--brass)" strokeWidth="1.6" strokeDasharray="4 3"/>
            <text className="sv-flex" x="442" y="52" textAnchor="middle">F4</text>
            <g><title>Squelch — fixed, slot 8</title><use href="#h-er" x="486" y="26" width="44" height="44"/></g>
            <rect x="552" y="26" width="44" height="44" rx="6" fill="none" stroke="var(--brass)" strokeWidth="1.6" strokeDasharray="4 3"/>
            <text className="sv-flex" x="574" y="52" textAnchor="middle">F5</text>
            <g><title>Force in Balance — fixed (slot 10 in parse 2, slot 5 in parse 1 — see the style-difference note below)</title><use href="#h-df" x="618" y="26" width="44" height="44"/></g>
            <rect x="684" y="26" width="44" height="44" rx="6" fill="none" stroke="var(--brass)" strokeWidth="1.6" strokeDasharray="4 3"/>
            <text className="sv-flex" x="706" y="52" textAnchor="middle">F6</text>
            <g><title>Squelch — fixed, slot 12</title><use href="#h-er" x="750" y="26" width="44" height="44"/></g>

            <g stroke="var(--brass)" strokeWidth="1.2" strokeDasharray="3 3" fill="none">
              <path d="M178 90 L178 106"/><path d="M310 90 L310 106"/><path d="M376 90 L376 106"/>
              <path d="M442 90 L442 106"/><path d="M574 90 L574 106"/><path d="M706 90 L706 106"/>
              <path d="M178 106 L706 106"/><path d="M442 106 L442 120"/>
            </g>
            <text className="sv-label" x="442" y="136" textAnchor="middle" fill="var(--brass)">pick one for each flexible slot, in this order</text>

            <g><title>Spinning Strike</title><use href="#h-as" x="182" y="150" width="42" height="42"/></g>
            <text className="sv-numb" x="203" y="206" textAnchor="middle" fill="var(--er-f)">1st</text>
            <g><title>Serenity Strike</title><use href="#h-ls" x="282" y="150" width="42" height="42"/></g>
            <text className="sv-numb" x="303" y="206" textAnchor="middle">2nd</text>
            <g><title>Double Strike</title><use href="#h-th" x="382" y="150" width="42" height="42"/></g>
            <text className="sv-numb" x="403" y="206" textAnchor="middle">3rd</text>
            <g><title>Saber Strike</title><use href="#h-ss" x="482" y="150" width="42" height="42"/></g>
            <text className="sv-numb" x="503" y="206" textAnchor="middle">4th</text>
            <text className="sv-note" x="560" y="176">the rebuild step</text>
            <text className="sv-note" x="560" y="192">(Force below ~45–50)</text>
          </svg>
          <figcaption>Solid icons are fixed — identical every lap, both parses. Dashed boxes (F1–F6) are each filled by whichever of the four priority abilities applies. Median lap length 17.09 s across 14 clean laps in parse 2 (was: parse 1's 17.25 s across 15). Force in Balance's own slot is fixed within each parse but not between them — parse 1 places it at slot 5, right after the opening DoTs; parse 2 delays it to slot 10. Neither is more "correct"; both are internally 100% consistent within their own parse, which is what makes it a style difference rather than an execution gap.</figcaption>
        </figure>

        <p className="lede" style={{ marginBottom: '24px' }}><b>F1</b> is where most of the grid's variety actually lives — Spinning Strike whenever Crush Spirit is up or health allows it, Serenity Strike otherwise. <b>F2–F4</b> are almost always Serenity Strike, then Double Strike whenever Serenity Strike is still on its own cooldown. <b>F5</b> is Saber Strike in all but one of the 14 clean laps; <b>F6</b> splits close to evenly between Double Strike and Spinning Strike.</p>

        <h3>Filler priority, in detail</h3>
        <div className="tw">
        <table>
          <thead><tr><th className="n">#</th><th colSpan={2}>Filler</th><th className="n">Cost</th><th>Condition</th></tr></thead>
          <tbody>
            <tr className="hi"><td className="n">1</td><td className="icc"><span className="ic" data-n="Spinning Strike" role="img" aria-label="Spinning Strike"><svg viewBox="0 0 50 50"><use href="#h-as"/></svg></span></td><td>Spinning Strike</td><td className="n">20, 6s CD</td><td>Crush Spirit is up, or the target is below 30% health. Take it the moment it's available — a proc left sitting is priority lost, not banked.</td></tr>
            <tr><td className="n">2</td><td className="icc"><span className="ic" data-n="Serenity Strike" role="img" aria-label="Serenity Strike"><svg viewBox="0 0 50 50"><use href="#h-ls"/></svg></span></td><td>Serenity Strike</td><td className="n">13–25, ~12s CD</td><td>The default filler, used on cooldown — its own ~12 s cooldown doesn't divide evenly into the ~17 s macro-cycle, which is why it isn't always up for both of a lap's usual two preferred slots. Cost drops 4 per active DoT, as low as 13 with all three up.</td></tr>
            <tr><td className="n">3</td><td className="icc"><span className="ic" data-n="Double Strike" role="img" aria-label="Double Strike"><svg viewBox="0 0 50 50"><use href="#h-th"/></svg></span></td><td>Double Strike</td><td className="n">20, no CD</td><td>Fills in whenever Serenity Strike is still on cooldown and Force allows.</td></tr>
            <tr className="no"><td className="n">4</td><td className="icc"><span className="ic" data-n="Saber Strike" role="img" aria-label="Saber Strike"><svg viewBox="0 0 50 50"><use href="#h-ss"/></svg></span></td><td>Saber Strike</td><td className="n">free, +3</td><td>Force below roughly 45–50. Restores Force on hit — the rebuild step, not a real filler choice.</td></tr>
          </tbody>
        </table>
        </div>

        <div className="call">
          <h4>Why Spinning Strike shows up once some laps, twice others</h4>
          <p>Spinning Strike's own cooldown is short — measured at a median 5.6–5.7 s below 30% health, in the same range as Squelch's. Above 30%, though, it can only fire when Crush Spirit is up, and Crush Spirit's own gate runs on a completely different clock: a ~15 s internal cooldown (measured 14.0–17.9 s between procs across both parses) plus whatever random delay it takes for the 30%-chance roll to land on a periodic tick after that cooldown clears.</p>
          <p>A ~14–18 s proc cycle doesn't divide evenly into a ~17 s macro-cycle. Some laps get exactly one window where a proc is ready; others get none until late, then two clear close together. That mismatch — not inconsistent play — is the entire reason Spinning Strike's slot count swings between one and two per lap above 30% health, and it's also why the swing disappears completely below 30%, where Spinning Strike runs on its own clock alone.</p>
        </div>

        <div className="call fix">
          <h4>Serenity Strike: on cooldown, with one exception</h4>
          <p>Delaying it for a third DoT stack isn't worth it — a GCD held back can cost a whole extra use later. The one real exception would be a Shadowcraft window, since Serenity Strike heals for as much as it damages and a guaranteed crit doubles both halves at once — but see section 03: against a real boss, the only legitimate Shadowcraft window is a genuine pre-pull stealth opener, not something to plan a filler delay around mid-fight.</p>
        </div>
      </section>

      {/* ===== 03 SHADOWCRAFT ===== */}
      <section>
        <h2><span className="num">03</span> Correction: the DPS gap is a dummy-only exploit, not a technique</h2>
        <p className="lede">Parse 2 re-enters stealth four times over the fight — Force Cloak to vanish, then Shadow Stride back onto the target — to trigger Shadowcraft, "increases your critical chance by 100% for 6 seconds" per the ability guide. But the guide also says this, specifically about Force Cloak: <b>"Force Cloak now behaves differently in Operations. It still drops your threat to 0, you just don't actually exit combat anymore."</b> Against a real boss, none of this works — you can't re-enter stealth mid-fight if you never left combat. All four windows measured here depend on the training dummy letting Force Cloak do something it can't do in a real Operations pull.</p>

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

        <div className="call flag">
          <h4>Confirmed directly: the dummy actually exits combat; a real boss wouldn't let it</h4>
          <p>Each of the four Force Cloak uses lines up exactly with a brief <code>ExitCombat</code> / <code>EnterCombat</code> pair in the raw log — the training dummy really did drop combat state each time, which is exactly the pre-Operations behavior the guide says no longer applies to a real boss fight. Every single damage instance inside the four windows crit (83 of 83), against a 72.3% baseline outside them — the mechanism is real and correctly measured. What it isn't is repeatable in the content this discipline is actually played in.</p>
        </div>

        <div className="call">
          <h4>What parse 2 looks like with the exploit removed</h4>
          <p>Stripping out both the damage and the time from all four windows: 8,559,168 damage over the remaining 238.90 s of the fight — <b>≈35,800 DPS</b>. Parse 1, which never touches this mechanic at all, ran the entire fight at a clean <b>36,814 DPS</b>. Once the padding is removed, parse 2's real execution is not ahead of parse 1 — if anything it's marginally behind. Nothing else examined on this page (Force in Balance's slot, the filler mix, GCD pacing) shows a genuine improvement once the exploit is set aside; the whole apparent DPS gap between the two parses was the four windows.</p>
        </div>

        <p style={{ marginTop: '16px' }}>Each window still opens the same deliberate way — Shadow Stride, then Spinning Strike immediately (Crush Spirit is always already up by the time the player re-engages), then Squelch, then Serenity Strike, which lands inside all four windows and twice in three of them. That sequencing is real skill; the setup that creates the opportunity for it is not something a real boss fight allows.</p>
      </section>

      {/* ===== 04 CORRECTIONS ===== */}
      <section>
        <h2><span className="num">04</span> Two mechanics this page missed the first time — confirmed in both parses</h2>
        <p className="lede">Re-checking against a second log surfaced two real effects that the original build of this page didn't account for. Both are present in near-identical form in parse 1 too, which means they were always part of the core Serenity kit — just missed, not new.</p>

        <div className="call flag">
          <h4>Pervasive Death → Penetrating Death, off every Force in Balance cast</h4>
          <p>Every Force in Balance cast grants a stack of Penetrating Death that lasts almost exactly 10.2 s, confirmed in both parses (16/16 in parse 1, 16/16 in parse 2). Because Force in Balance's own cadence is close to 17 s, this leaves a recurring ~6.7–7.4 s gap each cycle where the buff isn't active — it does not maintain full uptime the way Force Synergy or Atrophying Attacks do.</p>
        </div>

        <div className="call flag">
          <h4>"Thrashing Terror" is a real, sizeable damage source in both logs</h4>
          <p>101 hits in parse 1, 98 in parse 2, each dealing 11,000–14,000 internal damage — roughly 10% of total damage in both parses. It isn't named as a standalone rotational ability in the guide's ability list, which is exactly why it was missed initially; it shows up in the log as its own damage source rather than under Double Strike or Sever Force's name.</p>
        </div>
      </section>

      {/* ===== 05 WHY ERADICATE NEVER MOVES ===== */}
      <section>
        <h2><span className="num">05</span> Squelch's clock, reconfirmed independently</h2>
        <p className="lede">The original finding holds exactly, in a fight with a completely different opener and four extra burst windows layered on top: Squelch lands on slots 4, 8 and 12 of every single clean lap, in both parses, with no exceptions.</p>

        <div className="tw">
        <table>
          <thead><tr><th>Measurement</th><th className="n">Parse 1</th><th className="n">Parse 2</th></tr></thead>
          <tbody>
            <tr><td>Squelch-to-Squelch gap, full fight</td><td className="n">5.49 s – 6.51 s</td><td className="n">4.54 s – 6.10 s</td></tr>
            <tr className="hi"><td>Median Squelch gap</td><td className="n">5.69 s</td><td className="n">5.63 s</td></tr>
            <tr><td>Squelch landing on cycle slots 4, 8, 12</td><td className="n">15 / 15 laps</td><td className="n">14 / 14 clean laps</td></tr>
            <tr><td>Squelch casts with no Force spent (free via Force Strike)</td><td className="n">31 / 48</td><td className="n">31 / 46</td></tr>
          </tbody>
        </table>
        </div>
      </section>

      {/* ===== 06 GCD ===== */}
      <section>
        <h2><span className="num">06</span> The GCD is still flat</h2>
        <p className="lede">No cooldown compresses Serenity's GCD in either parse, including through the four Shadowcraft windows in parse 2 — Shadowcraft buffs critical chance, not speed.</p>
        <p style={{ marginTop: '16px' }}>Parse 2: median <span className="mono">1.403 s</span>, range <span className="mono">1.233 s – 1.727 s</span> across 183 measurements. Parse 1: median <span className="mono">1.405 s</span>, range <span className="mono">1.005 s – 1.571 s</span>. Both sit on the same flat floor for the entire fight.</p>
      </section>

      {/* ===== 07 SCORECARD ===== */}
      <section>
        <h2><span className="num">07</span> Execution scorecard</h2>
        <p className="lede">All measured from effect apply/remove and AbilityActivate events. Parse 2 values shown; parse 1 matches on every shared metric.</p>
        <div className="meters">
          <div className="meter"><span className="lbl">Squelch landing on cycle slots 4 / 8 / 12</span><span className="val">14 / 14<span className="was">was: 15/15</span></span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Shadowcraft windows landing 100% crit (dummy-only, section 03)</span><span className="val">4 / 4<span className="was">was: 0 — mechanic unused in parse 1</span></span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Force Breach uptime — deliberate small gaps, zero clips</span><span className="val">96.6%<span className="was">was: 96.1%</span></span><span className="track"><span className="fill" style={{ width: '96.6%' }}></span></span></div>
          <div className="meter"><span className="lbl">Sever Force uptime — deliberate small gaps, zero clips</span><span className="val">97.0%<span className="was">was: 96.8%</span></span><span className="track"><span className="fill" style={{ width: '97.0%' }}></span></span></div>
          <div className="meter"><span className="lbl">Penetrating Death applied off every Force in Balance cast</span><span className="val">16 / 16<span className="was">was: 16/16</span></span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
          <div className="meter"><span className="lbl">Force Potency charges consumed, no waste</span><span className="val">16 / 16<span className="was">was: 16/16</span></span><span className="track"><span className="fill" style={{ width: '100%' }}></span></span></div>
        </div>
      </section>

      {/* ===== 08 SUB-30% ===== */}
      {/* ===== 08 GRID ===== */}
      <section>
        <h2><span className="num">08</span> Reference grid — 14 macro-cycles, Sever Force anchored (parse 2)</h2>
        <p className="lede">Each row is one clean lap from parse 2, the reference log — the stealth-opener lap is covered in section 01 instead. Hover any icon for its name. Columns 1, 2, 4, 5, 8 and 12 never change ability; column 10 is always Force in Balance, the clearest structural difference from parse 1's grid.</p>
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
          <span style={{ opacity: '.75' }}>Off column: count of off-GCD weaves that lap (Force Potency every time, plus any Shadow Stride / Adrenal / Force Cloak+Stealth). Flagged rows are the three Shadowcraft-burst laps; green rows are the tightest-length laps.</span>
        </div>
        <p style={{ marginTop: '20px' }}>Rows 1, 7 and 13 are the laps carrying a Force Cloak / Stealth / Shadow Stride burst — note their length isn't meaningfully longer than the others, since none of those off-GCD actions cost a slot.</p>
      </section>

      {/* ===== 09 ===== */}
      <section>
        <h2><span className="num">09</span> Below 30% — the same shift, a different trigger</h2>
        <p className="lede">The target crosses 30% health at 196.156 s, this time on a Thrashing Terror tick rather than a direct attack. As in parse 1, Spinning Strike's role changes immediately: proc-gated and occasional above 30%, essentially always-available below it.</p>

        <div className="tw">
        <table>
          <thead><tr><th>Parse</th><th className="n">Spinning Strike uses</th><th className="n">Before 30%</th><th className="n">After 30%</th></tr></thead>
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
          <h4>1 · Force Potency sits unspent for longer in parse 2, by design</h4>
          <p>Parse 1 pops Force Potency and consumes the first charge on the very next GCD (Force in Balance, slot 5). Parse 2 pops it in the same relative spot but doesn't reach Force in Balance until slot 10 — six to seven seconds later. The charges simply wait; all 16 pops across both parses get fully consumed with no waste, so this is a scheduling difference, not a mistake.</p>
        </div>

        <div className="call">
          <h4>2 · Filler choice still looks Force-driven in both parses</h4>
          <p>Double Strike and Saber Strike keep alternating unpredictably in both logs, consistent with switching based on Force level rather than a fixed filler priority. Neither log carries Force amounts, so the exact thresholds remain unconfirmed either way.</p>
        </div>

        <h3>Closed — nothing left to win</h3>
        <ul>
          <li><b>Squelch's cadence</b> — its own ~5.6–5.7 s clock, confirmed in two independent parses landing it on slots 4, 8, 12 with zero exceptions between them.</li>
          <li><b>Shadowcraft</b> — 100% crit rate inside all 4 windows measured, but confirmed dummy-only: it depends on Force Cloak exiting combat, which the ability guide says doesn't happen against a real boss. Parse 2's real, unpadded execution isn't actually ahead of parse 1's.</li>
          <li><b>Pervasive Death / Penetrating Death and Thrashing Terror</b> — both confirmed present and near-identical in magnitude across both parses.</li>
          <li><b>Serenity Strike</b> — heals for exactly the damage it deals in both logs.</li>
          <li><b>Crush Spirit → Spinning Strike</b> and the sub-30% priority shift — both stable across two independent players.</li>
          <li><b>GCD</b> — flat in both parses; nothing in Serenity's kit compresses it, Shadowcraft included.</li>
        </ul>
      </section>

      <footer>
        <p>Two StarParse detail logs from two different players, each against a single Operations Training Dummy with a 10,000,000 health pool. Parse 1: 2,325 lines, <span className="mono">EnterCombat</span> 0 to a real <span className="mono">Death</span> event at 272.303 s, DPS from summed logged <span className="mono">Damage</span> values (10,024,542 total). Parse 2 (reference): 2,348 lines, <span className="mono">EnterCombat</span> 0 to a real <span className="mono">Death</span> event at 263.162 s (10,005,945 total) — this log also shows four brief <span className="mono">ExitCombat</span>/<span className="mono">EnterCombat</span> pairs, each lining up exactly with a Force Cloak/Stealth cycle rather than any data issue. Gear-sourced procs (Power Surge, Mastery Surge, and each character's own critical Adrenal) are personal loadout, not core Serenity mechanics, and are excluded from the model above. Ability icons are the in-game art, supplied by the user.</p>
      </footer>

      </div>
    </div>
  );
}

function iconRef(name: string): string {
  const map: Record<string, string> = {
    'Sever Force': 'h-ct',
    'Force Breach': 'h-dc',
    'Serenity Strike': 'h-ls',
    'Squelch': 'h-er',
    'Force in Balance': 'h-df',
    'Spinning Strike': 'h-as',
    'Saber Strike': 'h-ss',
    'Double Strike': 'h-th',
    'Force Potency': 'h-rk',
    'Shadow Stride': 'h-ps',
    'Adrenal': 'h-adr',
    'Force Cloak': 'h-fc',
  };
  return map[name] || 'h-ct';
}
