document.getElementById('slot-s07').outerHTML = `  <section id="s07" class="section">
    <div class="section-eyebrow">Section 07</div>
    <h1 class="section-title">Talent Trees</h1>

    <p>Kai has three talent trees aligned to his three combat forms. Each tree has <strong>4 tiers</strong>, with earlier tiers unlocking naturally and later tiers requiring significant Resonance investment. Cross-tree unlocks become available in Acts III and IV.</p>
    <p>Talent Points are earned through: <strong>leveling</strong>, <strong>completing Echo memory sequences</strong>, and <strong>surviving dungeons without using corruption abilities</strong>. This creates a meaningful trade: restraint earns progression.</p>

    <div class="talent-tree">
      <!-- DUST TREE -->
      <div class="talent-column">
        <div class="talent-col-header">
          <div class="talent-col-title">Dust Form</div>
          <div class="talent-col-sub">Evasion · Speed · Particle Control</div>
        </div>
        <div class="talent-list">
          <div class="talent-node">
            <div class="talent-node-name">Sand Dash</div>
            <div class="talent-node-desc">Dash distance +30%. Leave a blinding cloud on exit.</div>
            <div class="talent-node-tier">TIER 1 · Passive</div>
          </div>
          <div class="talent-node">
            <div class="talent-node-name">Particulate Shield</div>
            <div class="talent-node-desc">Absorb one hit per encounter by dispersing into dust automatically.</div>
            <div class="talent-node-tier">TIER 1 · Active</div>
          </div>
          <div class="talent-node">
            <div class="talent-node-name">Vortex Trail</div>
            <div class="talent-node-desc">Continuous dashing for 2s creates a sandstorm in your wake, dealing chip damage to all enemies caught in it.</div>
            <div class="talent-node-tier">TIER 2 · Passive</div>
          </div>
          <div class="talent-node">
            <div class="talent-node-name">Hollow Breath</div>
            <div class="talent-node-desc">Exhale a dense silica cloud in a cone. Slows and disorients enemies for 4 seconds.</div>
            <div class="talent-node-tier">TIER 2 · Active</div>
          </div>
          <div class="talent-node">
            <div class="talent-node-name">Dune Surf</div>
            <div class="talent-node-desc">Unlocks dune surfing. Combat surfing allows ram attacks at 2x movement speed.</div>
            <div class="talent-node-tier">TIER 3 · Traversal</div>
          </div>
          <div class="talent-node">
            <div class="talent-node-name">Dust Mirage</div>
            <div class="talent-node-desc">Leave a sand decoy when dashing. Enemies target the mirage for 3 seconds. Breaks on contact.</div>
            <div class="talent-node-tier">TIER 3 · Active</div>
          </div>
          <div class="talent-node">
            <div class="talent-node-name">Sandstorm Sovereign</div>
            <div class="talent-node-desc">Zone-wide sandstorm persists for 30 seconds. Kai is invisible within it. All enemies suffer accuracy penalty.</div>
            <div class="talent-node-tier">TIER 4 · Ultimate (High Corruption)</div>
          </div>
        </div>
      </div>

      <!-- GLASS TREE -->
      <div class="talent-column">
        <div class="talent-col-header crystal">
          <div class="talent-col-title crystal">Glass Form</div>
          <div class="talent-col-sub">Defense · Counter · Crystallization</div>
        </div>
        <div class="talent-list">
          <div class="talent-node crystal">
            <div class="talent-node-name">Crystal Skin</div>
            <div class="talent-node-desc">Passive damage reduction +15% in Glass Form. Skin visually hardens and catches light.</div>
            <div class="talent-node-tier">TIER 1 · Passive</div>
          </div>
          <div class="talent-node crystal">
            <div class="talent-node-name">Resonance Parry</div>
            <div class="talent-node-desc">Timed block reflects 50% of damage back. Perfect parry stuns for 1.5 seconds.</div>
            <div class="talent-node-tier">TIER 1 · Active</div>
          </div>
          <div class="talent-node crystal">
            <div class="talent-node-name">Shard Rain</div>
            <div class="talent-node-desc">After a parry, fire crystal shards in a cone automatically.</div>
            <div class="talent-node-tier">TIER 2 · Passive</div>
          </div>
          <div class="talent-node crystal">
            <div class="talent-node-name">Glass Coffin</div>
            <div class="talent-node-desc">Encase a stunned target in crystal for 6 seconds. Shatter for massive burst damage.</div>
            <div class="talent-node-tier">TIER 2 · Active</div>
          </div>
          <div class="talent-node crystal">
            <div class="talent-node-name">Mirror Shell</div>
            <div class="talent-node-desc">Kai's form becomes reflective. Ranged attacks are automatically reflected for 5 seconds.</div>
            <div class="talent-node-tier">TIER 3 · Active</div>
          </div>
          <div class="talent-node crystal">
            <div class="talent-node-name">Crystalline Cage</div>
            <div class="talent-node-desc">Grow a ring of crystal spires from the ground around Kai. Traps enemies within 8m.</div>
            <div class="talent-node-tier">TIER 3 · Area</div>
          </div>
          <div class="talent-node crystal">
            <div class="talent-node-name">The Glass God</div>
            <div class="talent-node-desc">Kai becomes fully crystalline for 20 seconds. Near-invulnerable, but fully immobile. Anything that touches him crystallizes instantly.</div>
            <div class="talent-node-tier">TIER 4 · Ultimate (Very High Corruption)</div>
          </div>
        </div>
      </div>

      <!-- ECHO TREE -->
      <div class="talent-column">
        <div class="talent-col-header green">
          <div class="talent-col-title" style="color:var(--green)">Echo Form</div>
          <div class="talent-col-sub">Memory · Utility · World Reading</div>
        </div>
        <div class="talent-list">
          <div class="talent-node green">
            <div class="talent-node-name">Resonance Sight</div>
            <div class="talent-node-desc">Highlights lootable silica deposits and hidden Echo memories in the environment passively.</div>
            <div class="talent-node-tier">TIER 1 · Passive</div>
          </div>
          <div class="talent-node green">
            <div class="talent-node-name">Sand Read</div>
            <div class="talent-node-desc">Extract stored memories from silica. Reveals lore, map data, enemy patrol routes, and hidden quest triggers.</div>
            <div class="talent-node-tier">TIER 1 · Utility</div>
          </div>
          <div class="talent-node green">
            <div class="talent-node-name">Resonance Pulse</div>
            <div class="talent-node-desc">Emit a sonar wave through silica. Reveals all enemies, items, and passages in a 30m radius.</div>
            <div class="talent-node-tier">TIER 2 · Active</div>
          </div>
          <div class="talent-node green">
            <div class="talent-node-name">Memory Bleed</div>
            <div class="talent-node-desc">While an enemy is below 20% HP, a Sand Read extracts their last living memory. Reveals weaknesses and backstory.</div>
            <div class="talent-node-tier">TIER 2 · Combat-Utility</div>
          </div>
          <div class="talent-node green">
            <div class="talent-node-name">Anchor Point</div>
            <div class="talent-node-desc">Mark a location. Teleport back to it within 90 seconds. Useful for dungeon navigation and emergency escapes.</div>
            <div class="talent-node-tier">TIER 3 · Traversal</div>
          </div>
          <div class="talent-node green">
            <div class="talent-node-name">Memory Anchor</div>
            <div class="talent-node-desc">Force a target to relive their worst stored memory. Stuns for 3–6 seconds. Not usable on bosses.</div>
            <div class="talent-node-tier">TIER 3 · Combat</div>
          </div>
          <div class="talent-node green">
            <div class="talent-node-name">Hollow Communion</div>
            <div class="talent-node-desc">Commune directly with the Obelisk's frequency for 60 seconds. All memories in a zone become readable simultaneously. Story-altering ability. Zero corruption. One-time use.</div>
            <div class="talent-node-tier">TIER 4 · Story-Critical · Unique</div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
