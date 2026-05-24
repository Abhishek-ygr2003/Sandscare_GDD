document.getElementById('slot-s05').outerHTML = `  <section id="s05" class="section">
    <div class="section-eyebrow">Section 05</div>
    <h1 class="section-title">Power System — Echo Sandmancy</h1>

    <div class="callout crystal">
      <div class="callout-label">System Philosophy</div>
      <p>Echo Sandmancy is not a magic system bolted onto a combat game. It is a <strong>corruption engine</strong>. The player's willingness to use power determines how the story ends. There are no safe abilities — only varying rates of consequence.</p>
    </div>

    <h2>Corruption Meter</h2>
    <p>The Corruption Meter is a <strong>permanent, non-resetting value</strong> that tracks Kai's physical and psychological degradation. While its progression can be slowed through <strong>extreme gameplay restraint, purification items, and tactical rest</strong>, it can <strong>never be fully reversed</strong> once the narrative crosses into Act II. The physical manifestations of this corruption scale continuously, altering Kai's visual model, his interactions with non-player characters, and the fundamental mechanics of the game world.</p>

    <div class="corruption-tiers">
      <div class="tier-row">
        <div class="tier-label" style="color:var(--green)">ASHEN</div>
        <div class="tier-pct">0–20%</div>
        <div class="tier-bar-bg"><div class="tier-bar-fill" style="width:20%;background:var(--green)"></div></div>
        <span style="font-size:13px;color:var(--text-dim)">Minor sand veins become visible on Kai's forearms. NPCs comment with mild curiosity. Kai retains full access to baseline human interactions.</span>
      </div>
      <div class="tier-row">
        <div class="tier-label" style="color:var(--amber)">FRACTURED</div>
        <div class="tier-pct">21–40%</div>
        <div class="tier-bar-bg"><div class="tier-bar-fill" style="width:40%;background:var(--amber)"></div></div>
        <span style="font-size:13px;color:var(--text-dim)">Sand veins climb to the neck and face. Kai's eyes shift to a permanent amber tint. Merchants raise their prices out of distrust, and civilians avoid him.</span>
      </div>
      <div class="tier-row">
        <div class="tier-label" style="color:var(--dust)">CRYSTALLINE</div>
        <div class="tier-pct">41–60%</div>
        <div class="tier-bar-bg"><div class="tier-bar-fill" style="width:60%;background:var(--dust)"></div></div>
        <span style="font-size:13px;color:var(--text-dim)">The right hand and forearm are permanently crystallized. Kai can no longer hide his affliction. The Hollowed faction begins to worship him.</span>
      </div>
      <div class="tier-row">
        <div class="tier-label" style="color:var(--crystal)">RESONANT</div>
        <div class="tier-pct">61–80%</div>
        <div class="tier-bar-bg"><div class="tier-bar-fill" style="width:80%;background:var(--crystal)"></div></div>
        <span style="font-size:13px;color:var(--text-dim)">Half of the torso and face are crystallized. Kai emits a faint bio-luminescent glow in dark environments. Hostile human factions attack on sight.</span>
      </div>
      <div class="tier-row">
        <div class="tier-label" style="color:var(--danger)">OBELISK-TOUCHED</div>
        <div class="tier-pct">81–100%</div>
        <div class="tier-bar-bg"><div class="tier-bar-fill" style="width:100%;background:var(--danger)"></div></div>
        <span style="font-size:13px;color:var(--text-dim)">Near-total crystallization. Kai is barely recognizable as a human entity. This state locks the player into the "Hollow God" ending.</span>
      </div>
    </div>

    <h2>The Resonance Fracture State</h2>
    <div class="callout danger">
      <div class="callout-label">Critical Mechanic — Corruption Threshold Event</div>
      <p>To mechanically communicate that this power is a <strong>malignant infection rather than a controlled tool</strong>, the game features the "Resonance Fracture" state. When the Corruption Meter crosses into a new tier threshold <em>for the very first time</em> (for instance, crossing the 41% mark into the Crystalline tier), Kai's physical form briefly <strong>violently rejects the silica</strong>. During this short, unpredictable window, his core abilities glitch catastrophically:</p>
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Form</th><th>Fracture Malfunction</th></tr>
        </thead>
        <tbody>
          <tr><td>Dust Form</td><td>The particulate cloud <strong>disperses much further than intended</strong>, breaking camera lock and disorienting spatial awareness completely.</td></tr>
          <tr><td>Glass Form</td><td>Crystalline armor <strong>shatters prematurely</strong>, dropping Kai's defense to zero in the middle of an enemy combo.</td></tr>
          <tr><td>Compacted Form</td><td>Refuses to <strong>release its density</strong>, slowing Kai's movement speed to an agonizing crawl until the fracture resolves.</td></tr>
        </tbody>
      </table>
    </div>
    <div class="callout design">
      <div class="callout-label">Design Intent</div>
      <p>This is a <strong>one-time event per threshold</strong>, designed to create a highly memorable moment of panic. It serves as a mechanical reward for players who manage their corruption slowly — they are afforded more time to clear out enemies and adapt their tactical positioning before the inevitable fracture event <em>detonates their combat rhythm.</em></p>
    </div>

    <h2>Ability Forms</h2>
    <div class="card-grid">
      <div class="card">
        <span class="card-icon">💨</span>
        <div class="card-title">Dust Form</div>
        <p>Kai disperses into a particulate cloud. Evasion becomes near-perfect for 2 seconds. Passes through barriers. Can reform mid-air. Costs moderate corruption per use.</p>
      </div>
      <div class="card crystal">
        <span class="card-icon">💎</span>
        <div class="card-title">Glass Form</div>
        <p>Hardens silica around Kai into crystalline armor. Dramatically increases defense. Deflects projectiles. Movement becomes slower. Can shatter outward as an AOE. Costs moderate corruption.</p>
      </div>
      <div class="card danger">
        <span class="card-icon">🪨</span>
        <div class="card-title">Compacted Form</div>
        <p>Concentrates silica into super-dense mass. Enormous damage output. Greatly reduces mobility. Each hit in this form accelerates enemy crystallization. High corruption cost per second.</p>
      </div>
      <div class="card green">
        <span class="card-icon">👁️</span>
        <div class="card-title">Echo Form</div>
        <p>Kai enters a resonance state. Can read memories from environmental silica, sense enemy positions through sand, and manifest past events as tactical holograms. Zero combat use. Zero corruption cost. Story-critical.</p>
      </div>
    </div>

    <h2>Echo Ability Progression</h2>
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Ability</th><th>Form</th><th>Unlock Condition</th><th>Corruption Cost</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td>Sandstep</td><td>Dust</td><td>Default</td><td>Low</td><td>Short-range dash leaving a particle trail that briefly blinds pursuers.</td></tr>
          <tr><td>Particle Veil</td><td>Dust</td><td>Act I, Ch4</td><td>Medium</td><td>Surround an ally in a protective sand mist reducing damage they take by 30%.</td></tr>
          <tr><td>Crystal Wall</td><td>Glass</td><td>Act I, Ch3</td><td>Low</td><td>Raise a temporary wall of glass crystal from the ground. Blocks projectiles, breaks on heavy impact.</td></tr>
          <tr><td>Shatter Burst</td><td>Glass</td><td>Act II, Ch5</td><td>Medium</td><td>Detonate the Glass Form armor outward. Launches crystalline shards in a 360° cone.</td></tr>
          <tr><td>Mass Driver</td><td>Compacted</td><td>Act II, Ch6</td><td>Very High</td><td>Fires a compressed silica slug that crystallizes everything in its path. Terrain-permanent.</td></tr>
          <tr><td>Sand Read</td><td>Echo</td><td>Default</td><td>None</td><td>Interact with marked silica deposits to extract memory echoes. Story and lore tool.</td></tr>
          <tr><td>Resonance Pulse</td><td>Echo</td><td>Act II, Ch8</td><td>None</td><td>Emit a sonar-like pulse revealing enemy locations, item caches, and hidden passages through walls.</td></tr>
          <tr><td>Memory Anchor</td><td>Echo</td><td>Act III, Ch9</td><td>None (but costs HP)</td><td>Force a target to relive a traumatic stored memory. Stuns for 3–6 seconds. Bosses are immune.</td></tr>
          <tr><td>Dune Surge</td><td>Dust</td><td>Act III, Ch10</td><td>High</td><td>Ride a wave of compressed sand at high speed. World traversal. Can bowl through enemy groups.</td></tr>
          <tr><td>Hollow Resonance</td><td>All</td><td>Act IV, Ch13</td><td>Permanent (2%)</td><td>Channel the Obelisk's frequency. All forms simultaneously active for 30 seconds. Game-changing.</td></tr>
        </tbody>
      </table>
    </div>
  </section>`;
