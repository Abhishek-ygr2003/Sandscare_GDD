document.getElementById('slot-s15').outerHTML = `  <section id="s15" class="section">
    <div class="section-eyebrow">Section 15</div>
    <h1 class="section-title">Audio/Visual Direction</h1>

    <h2>Visual Direction</h2>
    <div class="two-col">
      <div>
        <h3>Art Style Target</h3>
        <p><strong>Stylized Dark Sci-Fi Anime Realism.</strong> Proportions are real-world but materials, lighting, and particle effects are stylized. Think: Scarlet Nexus's sheen + Code Vein's textures + Journey's scale.</p>
        <p><strong>Why not photorealism?</strong> A solo or small team cannot compete with AAA photorealism. Stylization creates a unique identity, ages better, runs better, and gives the game visual ownership over its aesthetic. Dune: Awakening attempts photorealism; SANDSCAR owns its silica-and-shadow palette instead.</p>

        <h3>Color Language</h3>
        <ul>
          <li><strong>Sand / Amber:</strong> Safety, humanity, warmth</li>
          <li><strong>Crystal / Cyan:</strong> Power, conversion, beauty-as-danger</li>
          <li><strong>Obsidian / Black:</strong> The Obelisk, the unknown</li>
          <li><strong>Blood Red:</strong> Combat, instability, crisis</li>
          <li><strong>White Glow:</strong> Echo memories (the past)</li>
        </ul>
      </div>
      <div>
        <h3>Corruption Visual Progression</h3>
        <p>Kai's appearance changes continuously with corruption. This is not a binary state change — it's a gradient:</p>
        <ul>
          <li><strong>0%:</strong> Normal skin, dark clothing</li>
          <li><strong>15%:</strong> Fine sand veins on forearms, visible in sunlight</li>
          <li><strong>30%:</strong> Veins climb to neck, eyes shift amber tint</li>
          <li><strong>45%:</strong> Right hand crystallized up to wrist</li>
          <li><strong>60%:</strong> Arm and part of jaw crystallized, visible glow in dark</li>
          <li><strong>75%:</strong> Torso partially crystallized, hair becomes glass fiber</li>
          <li><strong>90%+:</strong> Only face and left hand remain organic</li>
          <li><strong>100%:</strong> Full crystallization</li>
        </ul>

        <h3>Shader Goals</h3>
        <ul>
          <li>Subsurface scattering for crystal forms</li>
          <li>Particle dust systems in all ability effects</li>
          <li>Memory Echo visual: desaturation + white film grain</li>
          <li>Dungeon instability: geometry wobble shader</li>
        </ul>
      </div>
    </div>

    <h2>Audio Direction</h2>
    <div class="two-col">
      <div>
        <h3>Music Identity</h3>
        <p><strong>Electronic + Orchestral Hybrid.</strong> Low-frequency drone basslines under fragile string arrangements. The Hum is present in every track as a barely perceptible 40Hz undertone. As corruption rises, music becomes less orchestral and more electronic/industrial.</p>
        <p>Key influence: Nier: Automata's vocal choir + Dune (2021) Hans Zimmer's throat singing + Burial's ambient work.</p>
      </div>
      <div>
        <h3>Sound Design</h3>
        <ul>
          <li>All silica/crystal SFX: real mineral recordings (quartz, obsidian, glass) processed and pitched</li>
          <li>The Hum: layered whale songs and geological recordings</li>
          <li>Kai's Echo reads: environmental audio spatialized in 3D space</li>
          <li>Memory sequences: audio is slightly wrong — pitch-shifted to signal unreliability</li>
          <li>Boss music: escalates from ambient to industrial based on phase</li>
          <li>Dungeon instability: audio begins to skip, layer, and repeat — communicates danger through sound glitching</li>
        </ul>
      </div>
    </div>
  </section>`;
