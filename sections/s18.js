document.getElementById('slot-s18').outerHTML = `  <section id="s18" class="section">
    <div class="section-eyebrow">Section 18</div>
    <h1 class="section-title">Risk Register</h1>

    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Risk</th><th>Likelihood</th><th>Impact</th><th>Mitigation</th></tr>
        </thead>
        <tbody>
          <tr><td>Scope creep — game expands beyond solo dev capacity</td><td><span class="pill danger">High</span></td><td><span class="pill danger">Critical</span></td><td>GDD is locked at v1.0 after this document. All feature additions go through a documented change request process. Cut features are logged, not forgotten.</td></tr>
          <tr><td>Dungeon generation complexity exceeds time budget</td><td><span class="pill amber">Medium</span></td><td><span class="pill amber">High</span></td><td>Ship with pre-designed dungeon layouts first. Procedural rotation of rooms is a Phase 3 upgrade, not a Phase 1 requirement.</td></tr>
          <tr><td>Art quality gap between vision and solo capability</td><td><span class="pill amber">Medium</span></td><td><span class="pill amber">High</span></td><td>Lean heavily into stylization — a consistent low-poly aesthetic beats inconsistent realistic attempts. Use Blender add-ons (Hair tool, Stylizer) to speed production.</td></tr>
          <tr><td>Performance targets unachievable on minimum spec</td><td><span class="pill amber">Medium</span></td><td><span class="pill amber">High</span></td><td>Profile in Godot from Month 1. Every system built with the 4GB VRAM constraint in mind. Prefer baked lighting over real-time globally illuminated scenes.</td></tr>
          <tr><td>Narrative too ambitious for implemented systems to express</td><td><span class="pill amber">Medium</span></td><td><span class="pill crystal">Medium</span></td><td>The narrative is text and performance first. Cut voice acting to reduce production dependency. Story can be told entirely through environment + text dialogue if needed.</td></tr>
          <tr><td>Burnout from solo development timeline</td><td><span class="pill danger">High</span></td><td><span class="pill danger">Critical</span></td><td>Mandate one non-dev day per week from Phase 2 onward. Vertical slice (Month 9) doubles as a mental milestone — if shipped, motivation regenerates. Consider a second developer after Phase 2 funding.</td></tr>
          <tr><td>Market fails to discover the game at launch</td><td><span class="pill amber">Medium</span></td><td><span class="pill amber">High</span></td><td>Build in public. Document development on social media from Phase 1. Release GDD vertical slice demo 3 months before launch. Target gaming press with the corruption-power design angle.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="callout design">
      <div class="callout-label">Final Design Note</div>
      <p>SANDSCAR is a game you can build. The mechanics are novel but implementable. The story is ambitious but structured. The art style is achievable with Blender and discipline. The risk is not the game — the risk is scope, time, and motivation. Solve those three problems and <strong>this ships.</strong> The GDD is complete. The next document written should be a <code>TASK.md</code>.</p>
    </div>
  </section>`;
