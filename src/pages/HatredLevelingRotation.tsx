/**
 * Hatred — Leveling / Non-BiS Rotation
 * ---------------------------------------------------------------------------
 * This is NOT a log-derived page like /hatred. There is no combat log behind
 * these numbers — it's a priority-list rebuild of the same discipline for a
 * character without the endgame gear (set bonus / tactical / legendary) that
 * the /hatred parses relied on to keep Eradicate's cooldown short. Treat the
 * specific cooldown values here as base-kit reference points to verify
 * against your own tooltips, not measured facts.
 * Ability icons reused from /public/icons/assassin.
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

  /* ---------- priority list ---------- */
  .plist{list-style:none;margin:0;padding:0;background:var(--panel);border:1px solid var(--rule)}
  .prow{display:grid;grid-template-columns:40px 44px 1fr;gap:16px;align-items:center;
    padding:14px 20px;border-bottom:1px solid var(--rule-2)}
  .prow:last-child{border-bottom:0}
  .prow .n{font-family:var(--font-data);font-size:15px;color:var(--brass);text-align:center}
  .prow .ic{max-width:40px}
  .prow b{display:block;font-size:14.5px;font-weight:600}
  .prow span{display:block;font-size:13px;color:var(--ink-2);line-height:1.4;margin-top:2px}

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

export default function HatredLevelingRotation({ theme }: { theme?: 'dark' | 'light' }) {
  return (
    <div className="ar-root" data-theme={theme}>
      <style>{CSS}</style>
      <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute', overflow: 'hidden' }}><defs>
      <clipPath id="ico-clip5"><rect width="50" height="50" rx="7" ry="7"/></clipPath>
      <symbol id="l-ct" viewBox="0 0 50 50"><image href="/icons/assassin/creeping-terror.webp" width="50" height="50" clipPath="url(#ico-clip5)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="l-dc" viewBox="0 0 50 50"><image href="/icons/assassin/discharge.webp" width="50" height="50" clipPath="url(#ico-clip5)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="l-ls" viewBox="0 0 50 50"><image href="/icons/assassin/leeching-strike.png" width="50" height="50" clipPath="url(#ico-clip5)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="l-er" viewBox="0 0 50 50"><image href="/icons/assassin/eradicate.webp" width="50" height="50" clipPath="url(#ico-clip5)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="l-df" viewBox="0 0 50 50"><image href="/icons/assassin/death-field.webp" width="50" height="50" clipPath="url(#ico-clip5)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="l-as" viewBox="0 0 50 50"><image href="/icons/assassin/assassinate.webp" width="50" height="50" clipPath="url(#ico-clip5)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="l-ss" viewBox="0 0 50 50"><image href="/icons/assassin/saber-strike.webp" width="50" height="50" clipPath="url(#ico-clip5)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="l-th" viewBox="0 0 50 50"><image href="/icons/assassin/thrash.webp" width="50" height="50" clipPath="url(#ico-clip5)" preserveAspectRatio="xMidYMid slice"/></symbol>
      <symbol id="l-rk" viewBox="0 0 50 50"><image href="/icons/assassin/recklessness.png" width="50" height="50" clipPath="url(#ico-clip5)" preserveAspectRatio="xMidYMid slice"/></symbol>
      </defs></svg>

      <div className="wrap">

      <div className="mast">
        <p className="eyebrow">Sith Assassin / Hatred · leveling &amp; non-BiS · priority list, not a measured parse</p>
        <h1>The rotation without a fast Eradicate</h1>
        <p className="standfirst">The <code>/hatred</code> page was built from two heavily-geared parses where Eradicate came off cooldown every ~5.6 seconds — tight enough to anchor a fixed 12-slot cycle around it. Your tooltip shows Eradicate's real base cooldown: <strong>24 seconds before alacrity</strong>. That's not a worse version of the same rotation — it's a different shape entirely, because Eradicate stops being a clock you build a cycle around and becomes just another cooldown you use the moment it's up.</p>
        <dl className="facts">
          <div className="fact"><dt>Eradicate CD</dt><dd>24<small>s base</small><span className="was">vs ~5.6s in the BiS parses</span></dd></div>
          <div className="fact"><dt>Structure</dt><dd>priority list<span className="was">no fixed-length cycle to anchor on</span></dd></div>
          <div className="fact"><dt>Source</dt><dd>theorycraft<span className="was">base kit + ability guide, not a log</span></dd></div>
        </dl>
      </div>

      {/* ===== KEY ===== */}
      <section style={{ marginTop: '34px' }}>
        <h3 style={{ marginTop: '0' }}>Ability key</h3>
        <div className="keygrid">
        <div className="keyrow"><span className="ic" data-n="Creeping Terror" role="img" aria-label="Creeping Terror"><svg viewBox="0 0 50 50"><use href="#l-ct"/></svg></span><div><b>Creeping Terror</b><span>18s DoT · no cooldown, gear-independent</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Discharge" role="img" aria-label="Discharge"><svg viewBox="0 0 50 50"><use href="#l-dc"/></svg></span><div><b>Discharge</b><span>18s DoT · no cooldown, gear-independent</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Death Field" role="img" aria-label="Death Field"><svg viewBox="0 0 50 50"><use href="#l-df"/></svg></span><div><b>Death Field</b><span>~15s cooldown · unaffected by the Eradicate issue</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Eradicate" role="img" aria-label="Eradicate"><svg viewBox="0 0 50 50"><use href="#l-er"/></svg></span><div><b>Eradicate</b><span>24s base cooldown · Raze may or may not reset it — verify</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Leeching Strike" role="img" aria-label="Leeching Strike"><svg viewBox="0 0 50 50"><use href="#l-ls"/></svg></span><div><b>Leeching Strike</b><span>~12s cooldown · heals for what it damages</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Assassinate" role="img" aria-label="Assassinate"><svg viewBox="0 0 50 50"><use href="#l-as"/></svg></span><div><b>Assassinate</b><span>6s cooldown · Bloodletting or sub-30% health</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Thrash" role="img" aria-label="Thrash"><svg viewBox="0 0 50 50"><use href="#l-th"/></svg></span><div><b>Thrash</b><span>20 Force, no cooldown</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Saber Strike" role="img" aria-label="Saber Strike"><svg viewBox="0 0 50 50"><use href="#l-ss"/></svg></span><div><b>Saber Strike</b><span>Free, restores Force — the rebuild step</span></div></div>
        <div className="keyrow"><span className="ic" data-n="Recklessness" role="img" aria-label="Recklessness"><svg viewBox="0 0 50 50"><use href="#l-rk"/></svg></span><div><b>Recklessness</b><span>2 charges · dump into Death Field then Eradicate</span></div></div>
      </div>
      </section>

      {/* ===== 01 WHY IT BREAKS ===== */}
      <section>
        <h2><span className="num">01</span> Why the endgame page's shape doesn't transfer</h2>
        <p className="lede">The <code>/hatred</code> analysis found Eradicate landing on slots 4, 8, and 12 of a 12-GCD lap with zero exceptions across two full parses — a ~5.6 second cadence tight enough that Eradicate was effectively always available. That page's whole "fixed clock" framing depends on that tightness existing at all.</p>
        <p>At a 24-second base cooldown, Eradicate comes off cooldown roughly once every 17 GCDs instead of every 4 — it simply cannot anchor anything. The ability guide's Raze mechanic (melee damage against a Discharge'd target grants a buff that finishes Eradicate's cooldown and removes its Force cost, capped at once every 9 seconds) is the same passive in both cases, but the parses this site analyzed almost certainly had a set bonus, tactical, or legendary item pushing that interaction much further than its baseline behavior — something worth confirming rather than assuming, since it directly determines how often Eradicate is actually usable for you right now.</p>

        <div className="call flag">
          <h4>Check this before anything else</h4>
          <p>Get Raze active (land a few melee hits on a Discharge'd target), then use Eradicate and watch its cooldown swirl. If it resets to fully available immediately, Raze is doing its full job for you already and Eradicate is usable far more often than 24 seconds — treat it close to "on cooldown" priority, similar to the endgame page. If the cooldown only partially drains or doesn't reset at all, Raze for you is currently just a Force-cost refund, and Eradicate really is a ~24s-cooldown (pre-alacrity) ability that shows up occasionally, not something to plan slots around.</p>
        </div>
      </section>

      {/* ===== 02 THE PRIORITY LIST ===== */}
      <section>
        <h2><span className="num">02</span> The core loop, as a priority list</h2>
        <p className="lede">No fixed-length cycle to anchor on, so this isn't a 12-slot diagram — it's a priority order. Work down the list every GCD; use the highest thing that's actually available.</p>

        <ol className="plist" style={{ listStyle: 'none' }}>
          <li className="prow"><span className="n">1</span><span className="ic" data-n="Creeping Terror / Discharge" role="img" aria-label="Creeping Terror / Discharge"><svg viewBox="0 0 50 50"><use href="#l-ct"/></svg></span><div><b>Keep both DoTs up — never let them lapse</b><span>Neither costs a cooldown to reapply. If either is missing from the target, this is always the top priority, full stop.</span></div></li>
          <li className="prow"><span className="n">2</span><span className="ic" data-n="Death Field" role="img" aria-label="Death Field"><svg viewBox="0 0 50 50"><use href="#l-df"/></svg></span><div><b>Death Field on cooldown</b><span>~15s cooldown, unaffected by the Eradicate/Raze gear question — this is still a "never hold it" ability.</span></div></li>
          <li className="prow"><span className="n">3</span><span className="ic" data-n="Eradicate" role="img" aria-label="Eradicate"><svg viewBox="0 0 50 50"><use href="#l-er"/></svg></span><div><b>Eradicate the moment it's available</b><span>Don't wait for a "slot" — at a 24s base cooldown it's a use-it-or-lose-it cooldown ability, not a filler. Whenever Raze is active, use it immediately regardless of anything else in this list, since the buff exists specifically to make that Eradicate free.</span></div></li>
          <li className="prow"><span className="n">4</span><span className="ic" data-n="Assassinate" role="img" aria-label="Assassinate"><svg viewBox="0 0 50 50"><use href="#l-as"/></svg></span><div><b>Assassinate whenever it's usable</b><span>Bloodletting up, or target below 30% health. This part of the kit is gear-independent and should behave exactly like the endgame page describes.</span></div></li>
          <li className="prow"><span className="n">5</span><span className="ic" data-n="Recklessness" role="img" aria-label="Recklessness"><svg viewBox="0 0 50 50"><use href="#l-rk"/></svg></span><div><b>Recklessness on cooldown</b><span>Spend the first charge on Death Field, the second on Eradicate if it's up — same guidance as endgame, this ability isn't affected by the gear gap.</span></div></li>
          <li className="prow"><span className="n">6</span><span className="ic" data-n="Leeching Strike" role="img" aria-label="Leeching Strike"><svg viewBox="0 0 50 50"><use href="#l-ls"/></svg></span><div><b>Leeching Strike on cooldown</b><span>~12s base cooldown, still real without BiS gear. Use it whenever available and both DoTs are up — don't hold it for a third DoT stack.</span></div></li>
          <li className="prow"><span className="n">7</span><span className="ic" data-n="Thrash" role="img" aria-label="Thrash"><svg viewBox="0 0 50 50"><use href="#l-th"/></svg></span><div><b>Thrash whenever Force allows</b><span>The default filler for everything not covered above. No cooldown, just a Force cost.</span></div></li>
          <li className="prow"><span className="n">8</span><span className="ic" data-n="Saber Strike" role="img" aria-label="Saber Strike"><svg viewBox="0 0 50 50"><use href="#l-ss"/></svg></span><div><b>Saber Strike below ~45–50 Force</b><span>Free and Force-positive — the rebuild step, used only when Force is genuinely low, same as endgame.</span></div></li>
        </ol>

        <div className="call">
          <h4>What this actually looks like moment to moment</h4>
          <p>Most GCDs will be Thrash, Leeching Strike, or Saber Strike. Death Field and Assassinate punctuate every 15–20 seconds or so. Eradicate shows up far less often than any of these — every 24 seconds if Raze isn't doing much for you, or considerably more often if it is (see section 01). That's fine. The DPS loss from a slow Eradicate is a real, known cost of not having the gear yet — it is not something to try to force by holding other GCDs open "waiting" for it. Never delay a GCD you could otherwise spend just because Eradicate might come off cooldown soon.</p>
        </div>
      </section>

      {/* ===== 03 VERIFY ===== */}
      <section>
        <h2><span className="num">03</span> Verify these in your own tooltips</h2>
        <p className="lede">Every number on this page is a base-kit reference point pulled from the ability guide and cross-checked where possible — not something measured from your own play, the way the endgame page's numbers were measured from real logs. Check these directly rather than trusting this page blindly.</p>
        <div className="tw">
        <table>
          <thead><tr><th>Ability</th><th className="n">Reference value</th><th>What to check</th></tr></thead>
          <tbody>
            <tr><td>Eradicate</td><td className="n">24s CD</td><td>Confirmed — this is what you're seeing.</td></tr>
            <tr><td>Raze</td><td className="n">once / 9s</td><td>Does it fully reset Eradicate's cooldown, or only refund the Force cost? (Section 01 — this is the one that matters most.)</td></tr>
            <tr><td>Leeching Strike</td><td className="n">~12s CD</td><td>Try using it twice in a row within a couple of seconds — if it's genuinely on a flat cooldown, the second attempt should be blocked.</td></tr>
            <tr><td>Assassinate</td><td className="n">6s CD</td><td>Should already match — this part of the kit isn't gear-gated.</td></tr>
            <tr><td>Bloodletting</td><td className="n">30% chance / periodic tick, ≤1 per 15s</td><td>Should already match — same reasoning as Assassinate.</td></tr>
            <tr><td>Death Field</td><td className="n">~15s CD</td><td>Should already match.</td></tr>
          </tbody>
        </table>
        </div>
      </section>

      {/* ===== 04 NOT YET ===== */}
      <section>
        <h2><span className="num">04</span> What not to chase yet</h2>
        <ul>
          <li><b>The "Eradicate on slots 4/8/12" framing</b> — that's a description of what a specific gear setup enables, not a target to hit without it.</li>
          <li><b>Shadowcraft / stealth-reentry burst windows</b> — the legendary item behind this is an endgame acquisition on top of the Eradicate gear question. Not relevant until you have it.</li>
          <li><b>Exact DPS or efficiency percentages from the endgame page</b> — those numbers describe two specific BiS parses. Nothing here is meant to be compared against them directly.</li>
        </ul>
      </section>

      <footer>
        <p>This page is theorycraft, not log analysis — there is no combat log behind it. Numbers are drawn from the character's own ability guide (the same source used to build the original <code>/hatred</code> page) and the base Eradicate cooldown confirmed directly from an in-game tooltip. If you record your own parse once geared enough to test this, it's worth revisiting this page and correcting anything that doesn't hold up.</p>
      </footer>

      </div>
    </div>
  );
}
