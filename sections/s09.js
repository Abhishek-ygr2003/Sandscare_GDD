document.getElementById('slot-s09').outerHTML = `  <section id="s09" class="section">
    <div class="section-eyebrow">Section 09</div>
    <h1 class="section-title">Items & Equipment</h1>

    <h2>Weapons</h2>
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Weapon</th><th>Type</th><th>Primary Stat</th><th>Special Property</th><th>Source</th></tr>
        </thead>
        <tbody>
          <tr><td>Sand Whip</td><td>Dust Form — Ranged Melee</td><td>Speed / Bleed</td><td>Wraps enemies, drags them closer. Perfect for crowd control.</td><td>Crafted (Silt Runner tech)</td></tr>
          <tr><td>Null-Edge Blade</td><td>Glass Form — Melee</td><td>Damage / Parry</td><td>Crystallizes on every blocked hit. Parry window +0.3s vs standard.</td><td>Resonance Order merchant</td></tr>
          <tr><td>Compaction Gauntlets</td><td>Compacted Form — Melee</td><td>Impact / Stagger</td><td>Each punch adds crystallization stacks. 5 stacks triggers a forced Glass Coffin.</td><td>Iron Sediment armory</td></tr>
          <tr><td>Echo Staff</td><td>Echo Form — Utility/Ranged</td><td>Echo power / Range</td><td>Amplifies Sand Read range by 50%. Resonance Pulse becomes free while equipped.</td><td>Echo Warden gift (Ch9)</td></tr>
          <tr><td>Dust Cannon</td><td>Ranged — All Forms</td><td>Range / AoE</td><td>Fires compressed silica. Switches particle type based on current stance.</td><td>Scrap-craft in Act II</td></tr>
          <tr><td>Nullite Shard Blade</td><td>Hybrid — Endgame</td><td>All Stats</td><td><strong>TEMPTATION TRAP.</strong> Temporarily suppresses visible corruption symptoms on kill — veins disappear, NPC hostility lowers, Kai appears more human. But corruption still rises internally. The absorbed corruption is stored inside the blade. (See design note below.)</td><td>Boss drop (Elias Ren / The Echo, Ch14)</td></tr>
          <tr><td>The Hollow Arm</td><td>Crystal Limb — Story</td><td>Passive Corruption Aura</td><td>Kai's crystallized arm. Permanent slot unlocked in Act III. Cannot be un-equipped.</td><td>Story-critical</td></tr>
        </tbody>
      </table>
    </div>

    <div class="callout danger" style="max-width:100%">
      <div class="callout-label">Critical System Fix — Nullite Shard Blade Rework</div>
      <p>The original design (<em>"absorbs corruption on kill and converts it to bonus damage"</em>) was identified as a <strong>thematic exploit</strong> that would destroy SANDSCAR's core architecture. If corruption becomes optimal strategy, the entire restraint philosophy collapses. The reworked blade is a <strong>seductive trap:</strong></p>
    </div>

    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Stored Corruption</th><th>Blade Behavior</th><th>Player Impact</th></tr>
        </thead>
        <tbody>
          <tr><td>Low (0–15%)</td><td>Blade functions normally. Suppresses visible corruption veins briefly on kill. NPC reactions temporarily reset.</td><td>The blade feels <em>incredible</em>. Players are lulled into dependence.</td></tr>
          <tr><td>Medium (16–35%)</td><td>Blade begins <strong>whispering</strong> during combat. Attacks become slightly more violent than input timing suggests. Executions trigger automatically on staggered enemies.</td><td>The player notices something is wrong but the power feels too good to stop.</td></tr>
          <tr><td>High (36–60%)</td><td>Blade <strong>swings twice</strong> on single inputs. Overrides player timing. Resonance Fractures intensify. Occasional forced ability activations without player consent.</td><td>The weapon is actively fighting the player for control of Kai's body.</td></tr>
          <tr><td>Critical (61%+)</td><td>Blade <strong>attacks dead enemies repeatedly</strong>. Forces Kai to strike already-crystallized targets. Sand whispers become Elias Ren's voice fragments: <em>"It's easier this way."</em></td><td>Full psychological horror. Elias's residual resonance is alive inside the weapon. The player is wielding his surrender.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="callout design">
      <div class="callout-label">Design Philosophy</div>
      <p>The reworked blade is simultaneously a <strong>gameplay mechanic</strong>, a <strong>psychological horror device</strong>, and a <strong>thematic mirror</strong>. Corruption is never truly escapable — the blade merely hides it. This preserves the foundational pillar: <strong>power has a price, and the price is never negotiable.</strong> The blade can be un-equipped at any time, but stored corruption remains in Kai's meter permanently. There is no refund.</p>
    </div>

    <h2>Armor Sets</h2>
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Set</th><th>Pieces</th><th>Set Bonus</th><th>Faction</th></tr>
        </thead>
        <tbody>
          <tr><td>Silt Runner Wraps</td><td>4-piece: Hood, Vest, Gloves, Boots</td><td>(2) +15% Dust Form speed | (4) Sandstep no longer costs corruption</td><td>Silt Runner</td></tr>
          <tr><td>Resonance Vestments</td><td>4-piece: Mask, Robe, Bracers, Belt</td><td>(2) Echo Form cooldowns -25% | (4) Sand Read also reveals trap locations and loot caches</td><td>Resonance Order</td></tr>
          <tr><td>Hollow Plate</td><td>3-piece: Chestplate, Vambraces, Greaves</td><td>(2) Glass Form defense +20% | (3) Crystallize enemies 30% faster</td><td>The Hollowed</td></tr>
          <tr><td>Iron Wraith Armor</td><td>4-piece: Helmet, Coat, Leggings, Boots</td><td>(2) Compacted Form damage +20% | (4) Counter Gauge builds 50% faster</td><td>Iron Sediment</td></tr>
          <tr><td>Warden's Remnants</td><td>5-piece: Scattered/Rare</td><td>(3) Corruption grows 20% slower | (5) +1 ability slot for Echo Form abilities</td><td>Echo Wardens (hidden)</td></tr>
          <tr><td>Obelisk Fragment Set</td><td>3-piece: Crown, Core, Mantle</td><td>(2) All forms simultaneously available | (3) Ultimate abilities cost 50% less corruption</td><td>Endgame crafting</td></tr>
        </tbody>
      </table>
    </div>

    <h2>Consumables</h2>
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Item</th><th>Effect</th><th>Corruption Impact</th></tr>
        </thead>
        <tbody>
          <tr><td>Purification Vial</td><td>Reduces corruption by 3%. Rare and expensive.</td><td>-3% (small)</td></tr>
          <tr><td>Resonance Shard</td><td>Currency for upgrades. Also grants brief ability power surge (30s) when consumed.</td><td>+1% if consumed</td></tr>
          <tr><td>Echo Crystal (Raw)</td><td>Contains a stored memory. Use to unlock a random lore fragment or hidden quest pointer.</td><td>None</td></tr>
          <tr><td>Sand Salve</td><td>Heals 40% HP over 8 seconds. Common crafting item.</td><td>None</td></tr>
          <tr><td>Silica Stimulant</td><td>Doubles corruption regen rate for 60s but also doubles all damage output.</td><td>+5% accelerated</td></tr>
          <tr><td>Hollow Dust</td><td>Temporary invisibility (15s). Used by Hollowed traders as currency.</td><td>+2%</td></tr>
          <tr><td>Obelisk Splinter</td><td>One-time use. Removes a point of permanent corruption. Destroyed upon use. Extremely rare.</td><td>-5% (medium)</td></tr>
        </tbody>
      </table>
    </div>

    <h2>Relics (Passive Slot Items)</h2>
    <p>Kai has <strong>3 relic slots</strong>. Relics are passive artifacts found in dungeons, bought from faction vendors, or earned through quests.</p>
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Relic</th><th>Effect</th><th>Source</th></tr>
        </thead>
        <tbody>
          <tr><td>Mother's Sand-Glass</td><td>Viewing Echo memories grants +5% max HP permanently (stacks up to 10x).</td><td>Kai's starting inventory — story item</td></tr>
          <tr><td>Warden's Eye</td><td>Reveal all enemy Crystallization Bars passively.</td><td>Echo Warden questline</td></tr>
          <tr><td>Hollow Heart Shard</td><td>+10% corruption resistance. Hollowed NPCs are permanently neutral regardless of rep.</td><td>Hollowed faction at Rep +2</td></tr>
          <tr><td>Iron Sigil</td><td>After parrying 3 consecutive times, the next hit is guaranteed crit and ignores armor.</td><td>Iron Sediment at Rep +2</td></tr>
          <tr><td>Dune King's Band</td><td>Dune Surf lasts 50% longer. Can perform combat abilities while surfing.</td><td>Open world boss: Dune Sovereign</td></tr>
          <tr><td>The Last Circuit</td><td>Pre-Hum tech. Stores one death per dungeon — revive in place with 25% HP once.</td><td>Hidden dungeon, Zone 3</td></tr>
          <tr><td>Obelisk Tuning Fork</td><td>All Echo abilities also generate 1 Resonance Shard per use.</td><td>Final story reward, Act III</td></tr>
        </tbody>
      </table>
    </div>
  </section>`;
