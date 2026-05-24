document.getElementById('slot-s06').outerHTML = `  <section id="s06" class="section">
    <div class="section-eyebrow">Section 06</div>
    <h1 class="section-title">Combat System</h1>

    <div class="callout">
      <div class="callout-label">Combat Philosophy</div>
      <p>SANDSCAR combat is <strong>stance-based, rhythmic, and punishing</strong>. It rewards reading enemy behavior over button-mashing. Corruption makes Kai more powerful but less precise — the player trades control for output as the meter climbs.</p>
    </div>

    <h2>Stance Switching</h2>
    <p>Players can switch between <strong>Dust, Glass, and Compacted stances</strong> in real time during combat via the D-pad (controller) or hotkeys 1/2/3 (keyboard). Each stance has a distinct feel:</p>
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Stance</th><th>Speed</th><th>Defense</th><th>Damage</th><th>Special Property</th><th>Corruption/Hit</th></tr>
        </thead>
        <tbody>
          <tr><td>Dust Form</td><td>⬛⬛⬛⬛⬜</td><td>⬛⬛⬜⬜⬜</td><td>⬛⬛⬜⬜⬜</td><td>Phase through attacks, blind on dodge</td><td>Low</td></tr>
          <tr><td>Glass Form</td><td>⬛⬛⬛⬜⬜</td><td>⬛⬛⬛⬛⬜</td><td>⬛⬛⬛⬜⬜</td><td>Parry reflects projectiles, shatter AOE</td><td>Medium</td></tr>
          <tr><td>Compacted Form</td><td>⬛⬛⬜⬜⬜</td><td>⬛⬛⬛⬜⬜</td><td>⬛⬛⬛⬛⬛</td><td>Stagger on every hit, crystallize enemies</td><td>High</td></tr>
        </tbody>
      </table>
    </div>

    <h2>Combat Mechanics</h2>
    <div class="two-col">
      <div>
        <h3>Resonance Parry</h3>
        <p>A timed parry system. Correct timing in Glass Form deflects damage and staggers the enemy. In Dust Form, a perfect dodge creates a "particle burst" that blinds. In Compacted Form, blocking absorbs damage and builds a <em>Counter Gauge</em> — release for a devastating counter-slam.</p>

        <h3>Crystallize System</h3>
        <p>Enemies have a hidden <em>Crystallization Bar</em>. Deal enough silica-type damage and they begin to slow, harden, then freeze. Fully crystallized enemies can be:</p>
        <ul>
          <li><strong>Shattered</strong> — massive damage, gather shards</li>
          <li><strong>Harvested</strong> — intact crystal yields high-value resources</li>
          <li><strong>Read</strong> (Echo Form) — extract their pre-conversion memory</li>
        </ul>
      </div>
      <div>
        <h3>Mineral Harvesting</h3>
        <p>Enemies drop mineral components used for crafting, upgrades, and faction trades. Higher-tier minerals only come from rare/boss enemies or from harvesting rather than shattering crystallized foes. This creates a real tension: <em>is this worth the corruption cost of defeating it gently?</em></p>

        <h3>Dungeon Instability</h3>
        <p>Shifting dungeons have an <em>Instability Rating</em> that increases during combat. High instability causes:</p>
        <ul>
          <li>Geometry shifts mid-fight</li>
          <li>Silica storms inside the dungeon</li>
          <li>Monsters spawning mid-wave</li>
          <li>Terrain crystallizing (blocking paths or creating cover)</li>
        </ul>
        <p>Players can exploit instability or be punished by it.</p>
      </div>
    </div>

    <h2>Dune Surfing (Traversal)</h2>
    <p>On surface zones, Kai can compress sand under his feet to surf across open terrain at high speed. This is an active ability in the Dust Form tree (unlocked in Act II). Dune surfing is not just travel — it functions as a <strong>combat maneuver</strong> for hit-and-run attacks, flanking, and escaping storm events.</p>

    <div class="separator"></div>

    <h2>The Sensory Layer: Resonance Language</h2>
    <p>Silica in this universe is not dead rock — it is a <strong>planetary nervous system</strong> constantly transmitting data. To reflect this, the Echo Form is expanded far beyond a simple interaction prompt into a comprehensive "Resonance Language" sensory mode.</p>

    <div class="callout crystal">
      <div class="callout-label">Resonance Language — Activation</div>
      <p>By pressing and holding the Echo input, the camera tightens, the ambient audio heavily muffles, and Kai actively connects his nervous system to the sand beneath his feet. In this state, he can literally <strong>feel vibrations traversing the silica network</strong>. This allows the player to:</p>
    </div>

    <div class="card-grid">
      <div class="card green">
        <span class="card-icon">📡</span>
        <div class="card-title">Map Enemy Routes</div>
        <p>Sense enemy patrol routes through solid walls by reading their footfall vibrations in the silica network.</p>
      </div>
      <div class="card crystal">
        <span class="card-icon">🏗️</span>
        <div class="card-title">Structural Analysis</div>
        <p>Assess the structural integrity of unstable dungeon ceilings to trigger environmental traps on enemies below.</p>
      </div>
      <div class="card">
        <span class="card-icon">💀</span>
        <div class="card-title">Emotional Residue</div>
        <p>Read the emotional residue of recent violence in a room — revealing ambush history, trap placements, and hidden lore.</p>
      </div>
       <div class="card danger">
        <span class="card-icon">💎</span>
        <div class="card-title">Nullite Attunement</div>
        <p>Detect high-density Nullite veins, hidden storage caches, and false cavern walls by tuning into discordant, hollow patterns in the localized Hum.</p>
      </div>
    </div>

    <div class="callout">
      <div class="callout-label">Critical Balance — Zero Corruption, Total Vulnerability</div>
      <p>Engaging with the Resonance Language costs <strong>zero corruption</strong> but demands an <strong>absolute Focus Cost</strong>. Kai cannot swing a weapon, dash, or raise his Glass Form shield while listening to the sand. He is <em>entirely vulnerable.</em> This transforms the sensory mode from a cheap information-gathering tool into a highly tense tactical commitment, requiring players to find safe vantage points before plunging their minds into the planetary network.</p>
    </div>

    <h3>Echo Drowning</h3>
    <div class="callout danger">
      <div class="callout-label">Penalty Mechanic — Echo Drowning</div>
      <p>Failure to maintain focus during a deep environmental Echo read — specifically if Kai takes <strong>physical damage while connected</strong> — triggers an "Echo Drowning" penalty. The system violently rips him from the network, inflicting a <strong>massive stamina and health penalty</strong>. This mechanic is explicitly warned about during the early mentorship with <em>High Archivist Dossier</em>, who teaches Kai the psychological techniques required to safely disconnect. When Dossier betrays Kai in Act III, this safety net is <em>permanently removed</em>, making all subsequent deep Echo reads existentially dangerous.</p>
    </div>
  </section>`;
