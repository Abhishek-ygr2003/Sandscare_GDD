document.getElementById('slot-s17').outerHTML = `  <section id="s17" class="section">
    <div class="section-eyebrow">Section 17</div>
    <h1 class="section-title">Development Milestones</h1>

    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Phase</th><th>Duration</th><th>Deliverables</th><th>Gate Criteria</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Phase 0 — Foundation</td>
            <td>Months 1–2</td>
            <td>Godot project setup, Git workflow, basic 3D character controller, Dust Form dash prototype, first dungeon tile set (greybox), audio placeholder system</td>
            <td>Kai moves, dashes, and falls correctly. One zone can be walked through. Git history is clean.</td>
          </tr>
          <tr>
            <td>Phase 1 — Core Loop Prototype</td>
            <td>Months 3–5</td>
            <td>All 3 combat stances functional, Crystallize system, basic enemy AI (3 types), Echo Sand Read prototype, corruption meter visible and functional, 1 complete mini-dungeon playable end-to-end</td>
            <td>A 10-minute gameplay loop exists. Core feel is established. Someone outside the dev can play and understand the mechanics.</td>
          </tr>
          <tr>
            <td>Phase 2 — Vertical Slice</td>
            <td>Months 6–9</td>
            <td>Act I fully playable (Chapters 1–4), Crystalline Warden boss fight complete, Zone 1 art-complete (not polished), full HUD/UI, basic faction rep system, save/load system, Kai's corruption visual changes functional</td>
            <td>Act I is releasable as a demo. Sends correctly for press/streamer attention. File size under 2GB.</td>
          </tr>
          <tr>
            <td>Phase 3 — Act II Expansion</td>
            <td>Months 10–15</td>
            <td>Zones 2, 4, 5 playable (combat-complete), Chapters 5–8 scripted and in-engine, 4 side quests complete, Dune Surfing mechanic, all talent tree nodes implemented, faction vendor system</td>
            <td>10 hours of content playable. Glass Wastes and Cryssal Canopy feel like real environments, not greyboxes.</td>
          </tr>
          <tr>
            <td>Phase 4 — Acts III & IV</td>
            <td>Months 16–22</td>
            <td>Chapters 9–15 scripted and in-engine, Zones 3 and 6 complete, all 8 bosses functional, all 5 endings implemented, full narrative audio (voiced or text-only TBD by budget), full music soundtrack integrated</td>
            <td>Full game playable start to finish. All endings reachable. No critical bugs. Estimated playtime 25–35 hours confirmed.</td>
          </tr>
          <tr>
            <td>Phase 5 — Polish</td>
            <td>Months 23–26</td>
            <td>Visual polish (shaders, particles, lighting), performance optimization, controller full support, accessibility options, Steam achievement implementation, localization (English primary), full QA pass, Steamworks integration</td>
            <td>30fps stable on minimum spec. No game-breaking bugs in final 2 weeks of QA. Steam page live and wishlist campaign running.</td>
          </tr>
          <tr>
            <td>Launch</td>
            <td>Month 27</td>
            <td>Steam Early Access launch OR full release depending on polish assessment. Itch.io simultaneous release. Press kit complete.</td>
            <td>Revenue goal: 1,000 units sold in first month. Community Discord active. Patch cadence established.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="progress-bar-label">Overall Development Progress Target</div>
    <div class="progress-track"><div class="progress-fill" style="width:4%"></div></div>
    <p style="font-family:'Share Tech Mono',monospace;font-size:11px;color:var(--muted)">Currently: PRE-PRODUCTION — GDD DRAFT 1.0</p>
  </section>`;
