document.getElementById('slot-s16').outerHTML = `  <section id="s16" class="section">
    <div class="section-eyebrow">Section 16</div>
    <h1 class="section-title">Tech Stack</h1>

    <div class="highlight-box">
      <p>All technology choices are made for a <strong>solo developer on mid-tier hardware</strong>. Ambition is calibrated to reality. The goal is a <strong>completable, shippable game</strong> — not a proof of concept that ran out of budget in pre-alpha.</p>
    </div>

    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Category</th><th>Choice</th><th>Version</th><th>Rationale</th></tr>
        </thead>
        <tbody>
          <tr><td>Game Engine</td><td>Godot Engine</td><td>4.x (stable)</td><td>Free, open source, lightweight on Ryzen 5 + GTX 1650. Native GDScript. Large indie community. No licensing costs. Ships well to PC.</td></tr>
          <tr><td>Primary Language</td><td>GDScript</td><td>4.x syntax</td><td>Python-like, fast iteration, deep Godot integration. Migrate hot paths to C# later if performance demands it.</td></tr>
          <tr><td>3D Authoring</td><td>Blender</td><td>4.x LTS</td><td>Industry standard for solo devs. Free. Godot native importer (.blend). Essential for modeling, rigging, UV, and baking.</td></tr>
          <tr><td>Texture Authoring</td><td>Material Maker + Krita</td><td>Latest</td><td>Material Maker for procedural PBR textures (perfect for silica/crystal look). Krita for hand-painted details.</td></tr>
          <tr><td>Version Control</td><td>Git + GitHub</td><td>Latest</td><td>Non-negotiable. Daily commits. Branch for each feature. Enables rollback and future collaboration.</td></tr>
          <tr><td>Audio Engine</td><td>Godot built-in → FMOD (Phase 2)</td><td>—</td><td>Start with Godot's AudioStreamPlayer. Integrate FMOD when audio complexity requires real-time parameter control (corruption-based music layers).</td></tr>
          <tr><td>Audio Production</td><td>LMMS (free) → Reaper (budget)</td><td>—</td><td>LMMS for prototyping music themes. Reaper for final mixing and SFX editing (60 USD perpetual license).</td></tr>
          <tr><td>Particle FX</td><td>Godot GPUParticles3D</td><td>Built-in</td><td>GPU-accelerated particle system handles dust/silica FX natively. Optimize particle count for GTX 1650 budget.</td></tr>
          <tr><td>Project Management</td><td>Notion + TASK.md</td><td>—</td><td>Notion for milestone tracking and GDD reference. TASK.md in repo for daily dev priorities (the workflow you already use).</td></tr>
          <tr><td>Distribution</td><td>Steam (primary)</td><td>—</td><td>$100 Steamworks fee. Highest PC gaming reach. Itch.io for early alpha/beta distribution during development.</td></tr>
        </tbody>
      </table>
    </div>

    <h2>Hardware Target</h2>
    <div class="two-col">
      <div>
        <h3>Minimum Spec (Target)</h3>
        <ul>
          <li>CPU: AMD Ryzen 5 2600 / Intel i5-9600K</li>
          <li>GPU: GTX 1060 6GB / RX 580 8GB</li>
          <li>RAM: 8GB</li>
          <li>Storage: 20GB SSD</li>
          <li>OS: Windows 10 64-bit</li>
          <li>Target: 1080p, 30fps stable</li>
        </ul>
      </div>
      <div>
        <h3>Recommended Spec</h3>
        <ul>
          <li>CPU: Ryzen 5 5600 / i5-12400</li>
          <li>GPU: RTX 3060 / RX 6700 XT</li>
          <li>RAM: 16GB</li>
          <li>Storage: 20GB SSD</li>
          <li>OS: Windows 10/11 64-bit</li>
          <li>Target: 1440p, 60fps stable</li>
        </ul>
      </div>
    </div>

    <div class="callout danger">
      <div class="callout-label">Developer Hardware Note</div>
      <p>Dev machine (Ryzen 5 5500U, GTX 1650 4GB) is below minimum spec. <strong>This is intentional pressure</strong> — if it runs smoothly in the dev environment, it will run well for players. Optimize aggressively from day one. Use Godot's profiler constantly. Budget: max 100k triangles on screen at once. Max 3 simultaneous particle systems. LOD everything. Bake lighting wherever possible.</p>
    </div>
  </section>`;
