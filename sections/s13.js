document.getElementById('slot-s13').outerHTML = `  <section id="s13" class="section">
    <div class="section-eyebrow">Section 13</div>
    <h1 class="section-title">Enemies & Bosses</h1>

    <h2>Enemy Classification</h2>
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Class</th><th>Description</th><th>Examples</th></tr>
        </thead>
        <tbody>
          <tr><td>Shard Beasts</td><td>Animals in partial conversion. Erratic behavior, unpredictable hit patterns.</td><td>Glass Hound, Crystal Mantis, Silica Bear</td></tr>
          <tr><td>Hollowed Drifters</td><td>Converted humans with minimal consciousness. Shamble and swarm.</td><td>Dust Shambler, Glass Walker, Resonance Wraith</td></tr>
          <tr><td>Hollow Sentinels</td><td>Fully converted beings with preserved intelligence. Fight tactically.</td><td>Crystalline Enforcer, Echo Ghost, Nullite Knight</td></tr>
          <tr><td>Fracture Entities</td><td>Born from dungeon instability. No organic origin. Pure silica constructs.</td><td>Void Shard, Resonance Mirage, Nullite Golem</td></tr>
          <tr><td>Faction Hostiles</td><td>Human enemies from opposing factions. Full combat AI. Use weapons.</td><td>Iron Sediment Assault Units, Hollow Cultists</td></tr>
        </tbody>
      </table>
    </div>

    <h2>Major Boss Encounters</h2>

    <div class="boss-entry">
      <div class="boss-header">
        <div>
          <div class="boss-name">The Crystalline Warden</div>
          <div class="boss-zone">Zone 1 — Dustfall Slums · Act I Boss</div>
        </div>
        <div>
          <span class="pill danger">Boss Tier 1</span>
        </div>
      </div>
      <div class="boss-body">
        <p>A Hollow Sentinel that has guarded a deep vault beneath the Slums for 15 years. Once human — a security officer — it has achieved a strange stillness. It does not attack without reason. Kai's presence with an active Echo Core triggers it as a threat protocol.</p>
        <p><strong>Design Intent:</strong> Tutorial boss. Teaches parry timing, stance switching, and the crystallize mechanic.</p>
        <div class="boss-phases">
          <span class="pill crystal">Phase 1: Shield + Sweep attacks</span>
          <span class="pill amber">Phase 2: Crystal projectile volleys</span>
          <span class="pill danger">Phase 3: Silica storm aura — must use Dust Form to survive</span>
        </div>
      </div>
    </div>

    <div class="boss-entry">
      <div class="boss-header">
        <div>
          <div class="boss-name">Dune Sovereign</div>
          <div class="boss-zone">Zone 2 / 5 — Open World Boss · Act II</div>
        </div>
        <div>
          <span class="pill danger">Open World Tier</span>
        </div>
      </div>
      <div class="boss-body">
        <p>A 40-meter crystallized whale-like creature that "swims" through sand dunes. An apex predator of the new ecosystem. Not hostile by default — becomes aggressive if Kai dune surfs within its territory. Killing it yields the Dune King's Band relic and rare crafting materials. A morally complex kill: this creature was a blue whale.</p>
        <div class="boss-phases">
          <span class="pill crystal">Phase 1: Surface charging, sand displacement waves</span>
          <span class="pill amber">Phase 2: Breaches surface, creates area crystallization zones</span>
          <span class="pill danger">Phase 3: Submerges — must read its movement via Echo Form to anticipate next breach</span>
        </div>
      </div>
    </div>

    <div class="boss-entry">
      <div class="boss-header">
        <div>
          <div class="boss-name">The Glass Choir</div>
          <div class="boss-zone">Zone 3 — The Subterrane · Act III Boss</div>
        </div>
        <div>
          <span class="pill danger">Boss Tier 3</span>
        </div>
      </div>
      <div class="boss-body">
        <p>Three Hollowed Sentinels moving in perfect resonance synchrony. They share a health pool modifier — injuring one enrages the others temporarily. Their combat patterns harmonize in real time. The most mechanically demanding standard boss in the game.</p>
        <div class="boss-phases">
          <span class="pill crystal">Phase 1: Sequential attacks — predictable patterns</span>
          <span class="pill amber">Phase 2: Synchronized attacks — all three simultaneously</span>
          <span class="pill danger">Phase 3: One Choir member sacrifices to make the others temporarily invulnerable; it must be killed last</span>
        </div>
      </div>
    </div>

    <div class="boss-entry">
      <div class="boss-header">
        <div>
          <div class="boss-name">The Echo — Elias Ren</div>
          <div class="boss-zone">Zone 6 — Obelisk Approach · Act IV, Ch14</div>
        </div>
        <div>
          <span class="pill danger">Story Boss · Dark Mirror Fight</span>
        </div>
      </div>
      <div class="boss-body">
        <p><strong>Elias Ren</strong> was not cynical like Kai. He was <em>hopeful.</em> He genuinely believed that if humanity understood the Hum, humanity could change. Not domination, not survival, not surrender — <strong>understanding.</strong> The Obelisk preserved him as a guardian after his surrender. He possesses every ability Kai has unlocked but utilizes them at maximum corruption efficiency. The fight is fought <em>entirely inside a fractured memory space</em>, forcing the player to battle their own shadow while navigating shifting, ethereal terrain.</p>
        <p><strong>Emotional Thesis:</strong> Kai's arc is <em>detached nihilism → terrifying cosmic intimacy.</em> Elias's arc was <em>idealistic empathy → exhausted surrender.</em> The fight asks: <strong>will Kai inherit surrender?</strong> Defeating Elias yields the Nullite Shard Blade.</p>
        <div class="boss-phases">
          <span class="pill crystal">Phase 1: Mirrors Kai's most-used ability — Elias fights with familiar rhythm</span>
          <span class="pill amber">Phase 2: Uses abilities Kai unlocked but hasn't used — Elias shows what Kai could have become</span>
          <span class="pill danger">Phase 3: Elias speaks — "I don't want to carry humanity anymore." Offers to merge. Refuse to fight. Accept to skip but gain +15% permanent corruption.</span>
        </div>
      </div>
    </div>

    <div class="callout crystal" style="max-width:820px">
      <div class="callout-label">Elias Ren — Memory Fragment Structure (Acts II–IV)</div>
      <p>The player encounters exactly <strong>4 key memory fragments</strong> across the game. Each humanizes Elias incrementally, ensuring the final boss fight transcends mechanical challenge.</p>
    </div>
    <div class="table-wrap" style="max-width:820px">
      <table>
        <thead>
          <tr><th>Fragment</th><th>Timing</th><th>Content</th><th>Emotional Function</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Hope</strong></td><td>Early Act II</td><td>Kai touches buried transit glass. Sees Elias helping frightened civilians through a silica storm. Elias says: <em>"Stay close. The sand reacts to fear."</em></td><td>Immediately humanizes him. He was kind.</td></tr>
          <tr><td><strong>2. Obsession</strong></td><td>Mid Act II</td><td>Elias arguing with Resonance Order researchers. He says: <em>"You keep trying to weaponize a conversation."</em></td><td>Frames the Hum philosophically. Elias saw dialogue where others saw threat.</td></tr>
          <tr><td><strong>3. Exhaustion</strong></td><td>Late Act III</td><td>Elias alone in dunes. Half crystallized. Talking to himself. Not dramatic — just tired. <em>"I can still hear them. Even when I sleep."</em></td><td>Shows prolonged resonance damage. The cost of perpetual empathy.</td></tr>
          <tr><td><strong>4. Surrender</strong></td><td>Pre-Final Fight</td><td>Elias reaches the Obelisk chamber. Instead of fear: <em>relief.</em> He whispers: <em>"I don't want to carry humanity anymore."</em></td><td>The emotional thesis of the entire final boss. Gives Kai — and the player — the exact weight of what they're fighting against.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="boss-entry">
      <div class="boss-header">
        <div>
          <div class="boss-name">The Obelisk Core</div>
          <div class="boss-zone">Zone 6 — Final Boss · Act IV, Ch15</div>
        </div>
        <div>
          <span class="pill danger">Final · Scale Boss</span>
        </div>
      </div>
      <div class="boss-body">
        <p>Not a creature. Not a being. A process. The Obelisk Core fight is a <em>resonance event</em> — the chamber itself attacks Kai through crystallization fields, reality fractures, and memory weaponization. The Obelisk floods the space with Dr. Vael's memories, Kai's mother's memories, and the memories of every person it has ever converted — attempting to overwhelm Kai emotionally, not physically.</p>
        <p><strong>Design Intent:</strong> This boss is not beaten through damage. It's beaten through <em>endurance and clarity</em>. Kai must reach the Core's center while resisting memory floods. The more Corruption he carries, the harder the resistance. Low-corruption runs require harder combat. High-corruption runs require harder memory resistance. Different challenge, same destination.</p>
        <div class="boss-phases">
          <span class="pill crystal">Phase 1: Physical crystallization fields — combat phase</span>
          <span class="pill amber">Phase 2: Memory flood — willpower check (narrative decision points under pressure)</span>
          <span class="pill danger">Phase 3: The Obelisk offers Kai its consciousness — the final choice manifests physically here</span>
        </div>
      </div>
    </div>
  </section>`;
