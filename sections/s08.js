document.getElementById('slot-s08').outerHTML = `  <section id="s08" class="section">
    <div class="section-eyebrow">Section 08</div>
    <h1 class="section-title">Progression System</h1>

    <h2>Experience & Leveling</h2>
    <p>Kai levels through a combined system of <strong>combat experience, exploration milestones, and completed Echo reads</strong>. The level cap is <strong>50</strong>. Each level grants:</p>
    <div class="two-col">
      <div>
        <ul>
          <li>+1 Talent Point</li>
          <li>Small base stat increases</li>
          <li>Every 5 levels: unlock a passive milestone</li>
          <li>Every 10 levels: choice of a permanent modifier (see below)</li>
        </ul>
      </div>
      <div>
        <h4>Milestone Modifiers (Every 10 Levels)</h4>
        <ul>
          <li><strong>Lv10:</strong> Corruption slows by 15% permanently</li>
          <li><strong>Lv20:</strong> One extra ability slot</li>
          <li><strong>Lv30:</strong> Resist one faction's aggression passively</li>
          <li><strong>Lv40:</strong> Unlock a cross-tree hybrid ability</li>
          <li><strong>Lv50:</strong> Final form — minor Obelisk resonance passively active</li>
        </ul>
      </div>
    </div>

    <h2>Resonance Upgrade System</h2>
    <p>Abilities are upgraded not through experience, but through <strong>Resonance Shards</strong> — rare resources collected from boss kills, deep dungeon clears, and Echo memory reads. Each ability can be upgraded <strong>3 times</strong>:</p>
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Upgrade Tier</th><th>Effect</th><th>Cost</th><th>Risk</th></tr>
        </thead>
        <tbody>
          <tr><td>Tier I Enhancement</td><td>Stat increase (+20% effectiveness)</td><td>2 Resonance Shards</td><td>None</td></tr>
          <tr><td>Tier II Amplification</td><td>New secondary effect added to ability</td><td>5 Resonance Shards + 1 Rare Mineral</td><td>Increases corruption cost by 10%</td></tr>
          <tr><td>Tier III Overcharge</td><td>Completely new behavior or form for the ability</td><td>10 Resonance Shards + Boss Drop</td><td>Increases corruption cost by 25%. First use of upgraded ability adds 2% permanent corruption.</td></tr>
        </tbody>
      </table>
    </div>
  </section>`;
