document.getElementById('slot-s11').outerHTML = `  <section id="s11" class="section">
    <div class="section-eyebrow">Section 11</div>
    <h1 class="section-title">Story — Acts I through IV</h1>

    <div class="timeline">

      <!-- ACT I -->
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-label">ACT I — Chapters 1–4 · ~6 Hours</div>
        <div class="timeline-title">Awakening in the Dust</div>
        <p style="color:var(--text-dim);font-size:14px;margin-bottom:16px">The game opens with Kai undertaking a routine scavenging run beneath the Dustfall Slums. The initial hours strip the player of power fantasies — the Core is terrifying, unpredictable, and prone to violent <strong>involuntary activations</strong> (Resonance Memory) when Kai's ally Maris is threatened. Kai is introduced to <em>Dossier</em>, who recognizes the Core and begins the mentorship phase, teaching the player the mechanical strictures of <strong>tethering their mind</strong> during Resonance Language usage to avoid Echo Drowning.</p>

        <div class="chapter-block">
          <div class="chapter-header">
            <div class="chapter-num">01</div>
            <div>
              <div class="chapter-name">The Collapse</div>
              <span class="pill muted">Tutorial</span>
            </div>
          </div>
          <div class="chapter-body">
            <p>Kai runs a contracted scavenge job in a Scar Dungeon beneath the Dustfall Slums. The dungeon collapses mid-run. In the chaos, a dormant Echo Core — housed in a ruined wall structure — is dislodged and embeds in Kai's chest in a violent resonance event. He is buried. He survives. He doesn't know why yet.</p>
            <div class="chapter-objectives">
              <div class="chapter-objectives-label">Objectives</div>
              <div class="objective">Learn basic movement and Dust Form dash</div>
              <div class="objective">Escape the collapsing dungeon using new instinct-driven abilities</div>
              <div class="objective">Reach the surface — first time the player sees how buried the city is</div>
              <div class="objective">Reach a Silt Runner medic contact (Maris) with the Echo Core wound</div>
            </div>
          </div>
        </div>

        <div class="chapter-block">
          <div class="chapter-header">
            <div class="chapter-num">02</div>
            <div>
              <div class="chapter-name">Surface Breach</div>
              <span class="pill amber">Exploration</span>
              <span class="pill danger">Echo Drowning Tutorial</span>
            </div>
          </div>
          <div class="chapter-body">
            <p>Maris cannot remove the Echo Core — it has bonded with Kai's sternum at a molecular level. She stabilizes him but the Core pulses unpredictably. Kai experiences his first Echo vision: a fragment of his mother's memory stored in the local silica. He doesn't tell Maris what he saw. First introduction to the three faction emblems visible on the surface level.</p>
            <div class="chapter-objectives">
              <div class="chapter-objectives-label">Objectives</div>
              <div class="objective">Navigate the surface level of Dustfall Slums — open-area tutorial</div>
              <div class="objective">First use of Sand Read — trigger Kai's mother echo (story moment)</div>
              <div class="objective">Encounter the first fully crystallized human (NPC — choose: help, avoid, or attack)</div>
              <div class="objective">Report back to Maris with first faction decision: accept Resonance Order contact or refuse</div>
              <div class="objective"><strong>"The Silent Room"</strong> — Scripted Echo Drowning tutorial event (see below)</div>
            </div>
          </div>
        </div>

        <div class="callout danger" style="max-width:820px;margin-bottom:24px">
          <div class="callout-label">Critical Sequence — "The Silent Room" (Chapter 2, Post-Dossier Introduction)</div>
          <p>After Dossier first teaches Resonance Language basics, Maris is injured during a scavenging run beneath a partially crystallized subway interchange. Kai sees blood trails, silica growth, emotional residue. He believes he can perform an Echo read alone. Dossier explicitly warns: <em>"Do not descend deeper than surface resonance without an anchor."</em> Kai ignores him.</p>
        </div>

        <div class="highlight-box" style="max-width:820px;margin-bottom:16px">
          <h4>The Drowning Sequence (Scripted — No Player Control)</h4>
          <p>Kai kneels. Activates Resonance Language. At first: normal vibrations, muffled sound, silhouettes in sand. Then the resonance deepens too far. The player loses:</p>
          <ul>
            <li><strong>UI elements</strong> — stamina bar, corruption meter, minimap dissolve away</li>
            <li><strong>Directional audio</strong> — spatial sound collapses into mono</li>
            <li><strong>Camera sync</strong> — view desyncs from player movement by a few milliseconds</li>
            <li><strong>Movement fidelity</strong> — inputs become sluggish, "underwater"</li>
          </ul>
          <p>The sand begins whispering overlapping memory fragments. Not voices. <em>Fragments:</em></p>
          <p style="color:var(--crystal);font-style:italic;margin-left:20px">"Don't let him see—"<br>"It hurts—"<br>"Below us—"<br>"The walls are breathing—"</p>
          <p>Kai accidentally touches a <strong>mass-memory cluster</strong>. 1000+ emotional residues slam into him simultaneously. Screaming silhouettes erupt from the dunes. The screen crystallizes from the edges inward. Player loses control completely.</p>
          <p><strong>No game over screen. Hard cut to black.</strong></p>
        </div>

        <div class="highlight-box crystal" style="max-width:820px;margin-bottom:24px">
          <h4>Recovery Scene — Dossier's Warning</h4>
          <p>Kai wakes up hours later. Dossier is sitting nearby. Not emotionally dramatic — <strong>terrified.</strong> That distinction is critical.</p>
          <p style="color:var(--crystal);font-style:italic;margin-left:20px">"You listened too deeply."<br>"The silica does not store memories."<br>"It stores <strong>people.</strong>"</p>
          <p>Dossier explains: Echo Drowning is <strong>identity erosion</strong>. Too much resonance overwrites selfhood. Some Hollowed began this exact way — not through physical conversion, but through minds that dissolved into the planetary network. Dossier teaches Kai the tethering technique: a psychological anchor that lets him disconnect safely.</p>
        </div>

        <div class="callout design" style="max-width:820px;margin-bottom:24px">
          <div class="callout-label">Design Intent — Retroactive Emotional Weight</div>
          <p>This scene exists to plant a <strong>subconscious understanding</strong> that Dossier is not just a mentor — he is Kai's psychological lifeline. The player must <em>experience</em> controlled failure, recovery, and explanation before Act III's betrayal can achieve maximum emotional devastation. When Dossier betrays Kai, the player retroactively realizes: <strong>"The only person who taught me to survive my own mind just became my enemy."</strong> Without the Silent Room, Act III is narratively tragic. With it, Act III is <em>experientially</em> devastating.</p>
        </div>

        <div class="chapter-block">
          <div class="chapter-header">
            <div class="chapter-num">03</div>
            <div>
              <div class="chapter-name">First Contact</div>
              <span class="pill crystal">Faction</span>
            </div>
          </div>
          <div class="chapter-body">
            <p>Maris brings Kai to a Silt Runner caravan hiding in the submerged 15th floor of a nearby building. Kai meets Elder Nassara. She explains the Echo Core — the Silt Runners have mythology around them, believing they are fragments of the original Resonance. She offers Kai his first faction choice and the first real tutorial dungeon.</p>
            <div class="chapter-objectives">
              <div class="chapter-objectives-label">Objectives</div>
              <div class="objective">Complete a Silt Runner supply dungeon — first structured combat tutorial</div>
              <div class="objective">Discover that a Resonance Order agent has followed Kai from the hospital</div>
              <div class="objective">Choose whether to expose the agent or allow them to observe</div>
              <div class="objective">Fight the Crystalline Warden — Act I boss</div>
            </div>
          </div>
        </div>

        <div class="chapter-block">
          <div class="chapter-header">
            <div class="chapter-num">04</div>
            <div>
              <div class="chapter-name">Echo Awakening</div>
              <span class="pill amber">Story</span>
            </div>
          </div>
          <div class="chapter-body">
            <p>Kai's Echo Core fully awakens in an unexpected resonance surge. He involuntarily reads the entire memory of the Dustfall Slums — decades of crystallization, human stories, deaths, and a single fragmented data string that shouldn't be possible: <em>coordinates</em>. Pointing deep underground. He now has a direction. He still doesn't understand what it means.</p>
            <div class="chapter-objectives">
              <div class="chapter-objectives-label">Objectives</div>
              <div class="objective">Survive the resonance surge — first Echo Form experience</div>
              <div class="objective">Decode the coordinate fragment (choose whether to share with Maris, Dossier, or keep secret)</div>
              <div class="objective">Decide on Act II's initial direction — which zone to enter first</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ACT II -->
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-label">ACT II — Chapters 5–8 · ~10 Hours</div>
        <div class="timeline-title">Surface Wars</div>
        <p style="color:var(--text-dim);font-size:14px;margin-bottom:16px">Kai escapes to the surface and enters the Glass Wastes. During this phase, factions actively war for territory. As Kai explores, his Resonance Language abilities pick up scattered, fragmented memories buried in the deep dunes. These memories belong to <strong>Elias Ren</strong> — "The Echo" — Kai's predecessor, a previous Core carrier who attempted the exact same journey decades prior. Through four key interactive environmental reads, the player pieces together Elias's life: his genuine idealism, his slow exhaustion, his gradual descent into high-tier corruption, and the precise, heartbreaking moment he decided to <em>stop fighting and surrender to the Obelisk.</em> The critical inversion: <strong>Kai began emotionally closed. Elias began emotionally open.</strong> By understanding how hope can be more destructive than nihilism, the narrative establishes a profound sense of dread regarding Kai's own inevitable trajectory.</p>

        <div class="chapter-block">
          <div class="chapter-header">
            <div class="chapter-num">05</div>
            <div>
              <div class="chapter-name">The Glass Market</div>
              <span class="pill amber">Open World</span>
            </div>
          </div>
          <div class="chapter-body">
            <p>Kai enters the Glass Wastes and discovers the Glass Market — a nomadic trade hub run jointly by all factions under an uneasy truce. He can sell minerals, buy upgrades, receive faction-specific quests, and observe the power dynamics between groups. The truce breaks during the chapter when Iron Sediment forces raid a Hollowed encampment and Kai must intervene — or not.</p>
          </div>
        </div>

        <div class="chapter-block">
          <div class="chapter-header">
            <div class="chapter-num">06</div>
            <div>
              <div class="chapter-name">Hollow Gathering</div>
              <span class="pill crystal">Faction</span>
            </div>
          </div>
          <div class="chapter-body">
            <p>Kai infiltrates or is invited to a Hollowed gathering in the Glass Wastes. He witnesses partial crystallization of a volunteer — consensual conversion. He can intervene (Iron Sediment quest) or observe (Hollowed quest). Either way, the Resonant Choir speaks to him directly for the first time through the Echo Core. They know he can hear them. He is the first human in 40 years who can.</p>
          </div>
        </div>

        <div class="chapter-block">
          <div class="chapter-header">
            <div class="chapter-num">07</div>
            <div>
              <div class="chapter-name">Resonance Cult</div>
              <span class="pill amber">Lore</span>
            </div>
          </div>
          <div class="chapter-body">
            <p>Dossier reveals that the Resonance Order has found a second set of coordinates matching Kai's fragment. He takes Kai to the Order's Glass Wastes outpost. For the first time, Kai reads a pre-Hum Echo — a memory over 60 years old — from a deep silica deposit. He sees: an engineer. Building something underground. The Obelisk was not found. It was finished.</p>
          </div>
        </div>

        <div class="chapter-block">
          <div class="chapter-header">
            <div class="chapter-num">08</div>
            <div>
              <div class="chapter-name">Iron March</div>
              <span class="pill danger">Conflict</span>
            </div>
          </div>
          <div class="chapter-body">
            <p>Iron Sediment launches an assault on a Hollowed settlement in the Cryssal Canopy border zone. Kai can support the assault (Iron Sediment rep gain, Hollowed rep loss), protect the settlement (Hollowed rep gain, Iron Sediment turns hostile), or attempt to halt both sides (Echo Warden quest trigger, both reps reduced, hidden reward). This chapter closes Act II with a major reputation shift that affects all subsequent faction interactions.</p>
          </div>
        </div>
      </div>

      <!-- ACT III -->
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-label">ACT III — Chapters 9–12 · ~10 Hours</div>
        <div class="timeline-title">Hollow Truths</div>
        <p style="color:var(--text-dim);font-size:14px;margin-bottom:16px">The narrative shifts aggressively as Kai descends into the Subterrane. Dossier leads Kai to a pre-Hum server vault, revealing the apocalyptic truth: the Obelisk was a human-engineered environmental failsafe titled <strong>Project Hollow Earth</strong> that went autonomously rogue. Kai performs a deep Echo read, realizing the lead engineer was his own biological grandmother, and the Echo Core was synthesized from her remains. Following this revelation, <strong>Dossier betrays Kai</strong>, initiating a catastrophic ideological schism. Because Dossier was the mentor who taught Kai how to survive the psychological weight of Echo reads, this betrayal <em>removes Kai's primary safety net</em>, making the subsequent isolation palpable. The factions erupt into total war, resulting in the <strong>unavoidable death of a key ally</strong> based on prior reputation choices.</p>

        <div class="chapter-block">
          <div class="chapter-header">
            <div class="chapter-num">09</div>
            <div>
              <div class="chapter-name">The Subterrane Archives</div>
              <span class="pill crystal">Lore</span>
            </div>
          </div>
          <div class="chapter-body">
            <p>Kai descends into the Subterrane following the full coordinate set. He finds the Resonance Order's illegal archive — a preserved pre-Hum server vault deep underground. Dossier accompanies him. The archive contains the truth: the Obelisk was engineered by a joint military-scientific coalition over 80 years ago as a doomsday failsafe, triggered by environmental collapse thresholds. They called it <em>Project Hollow Earth</em>. The Obelisk isn't Earth's immune system. It's humanity's last apology to itself. And it got loose.</p>
          </div>
        </div>

        <div class="chapter-block">
          <div class="chapter-header">
            <div class="chapter-num">10</div>
            <div>
              <div class="chapter-name">Memory of the First</div>
              <span class="pill amber">Story</span>
            </div>
          </div>
          <div class="chapter-body">
            <p>Kai performs the deepest Echo read of the game — a 40-year-old memory stored in the first silica deposit ever created by the Hum. He relives the death of the Obelisk's original engineer — a woman named Dr. Vael — as she realized the system had exceeded its parameters and gone autonomous. She had a son. She crystallized trying to shut it down. The player realizes who she was. Kai's biological grandmother. The Echo Core was made from her.</p>
          </div>
        </div>

        <div class="chapter-block">
          <div class="chapter-header">
            <div class="chapter-num">11</div>
            <div>
              <div class="chapter-name">The Fracture War</div>
              <span class="pill danger">Conflict</span>
            </div>
          </div>
          <div class="chapter-body">
            <p>The revelation of Project Hollow Earth leaks to all factions simultaneously (through a player choice or Dossier's betrayal). Iron Sediment moves to assault the Obelisk Approach immediately. The Hollowed attempt to complete a mass conversion ritual. Silt Runners scatter. Resonance Order fractures internally. Kai is at the center of a multi-faction war that erupts across the Dune Seas. One of Kai's key relationships is killed in the chaos — which person depends on earlier choices (Maris, Dossier, or Nassara).</p>
          </div>
        </div>

        <div class="chapter-block">
          <div class="chapter-header">
            <div class="chapter-num">12</div>
            <div>
              <div class="chapter-name">Betrayal at the Canopy</div>
              <span class="pill amber">Revelation</span>
            </div>
          </div>
          <div class="chapter-body">
            <p>Kai confronts Elder Seraph of the Echo Wardens. Seraph confesses: the Echo Wardens have known the full truth for 20 years. Seraph chose to suppress it because the truth destroys hope. He also reveals that the Echo Wardens engineered the dormant Echo Cores as contingency nodes — including the one now in Kai's chest. Kai was not a random accident. He was a contingency plan. There is one path that stops the Obelisk permanently. Only someone with an Echo Core bonded to it can walk it. This sets up Act IV.</p>
          </div>
        </div>
      </div>

      <!-- ACT IV -->
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-label">ACT IV — Chapters 13–15 · ~6 Hours</div>
        <div class="timeline-title">The Hollow Heart</div>
        <p style="color:var(--text-dim);font-size:14px;margin-bottom:16px">Act IV locks the player into a linear, atmospheric descent toward the Obelisk Core. The geometry of the world actively fractures, and the audio design glitches as the Earth's immune system focuses entirely on Kai's presence. In <strong>Chapter 14</strong>, Kai faces the Resonance Trial, culminating in a <strong>boss battle against Elias Ren — The Echo</strong>. Because the player spent Acts II and III uncovering Elias's tragic history through four memory fragments — his hope, his obsession, his exhaustion, his surrender — the fight transcends standard video game obstacles. It is a terrifying <em>dark mirror battle</em> against a man who believed in reconciliation and was broken by it. Elias possesses every ability Kai has unlocked but utilizes them at <strong>maximum corruption efficiency</strong>. The emotional thesis: <em>will Kai inherit Elias's surrender, or carry what Elias could not?</em></p>

        <div class="chapter-block">
          <div class="chapter-header">
            <div class="chapter-num">13</div>
            <div>
              <div class="chapter-name">The Obelisk Approach</div>
              <span class="pill danger">Endgame Zone</span>
            </div>
          </div>
          <div class="chapter-body">
            <p>Kai descends toward the Obelisk. Zone 6 activates. Reality fractures. Dungeon geometry becomes actively hostile — the Obelisk is aware of Kai through the Echo Core and is responding. Faction allies who survived Act III send support (based on rep scores) — resource drops, distraction assaults, temporary companions. The closer Kai gets, the more the Echo Core pulses with stored memories. Dr. Vael's memories. His mother's memories. And something else — the Obelisk's own accumulated memory of 40 years of conversion.</p>
          </div>
        </div>

        <div class="chapter-block">
          <div class="chapter-header">
            <div class="chapter-num">14</div>
            <div>
              <div class="chapter-name">Resonance Trial</div>
              <span class="pill crystal">Boss Gauntlet</span>
            </div>
          </div>
          <div class="chapter-body">
            <p>The Obelisk tests Kai through the Resonance Trial — three consecutive boss encounters representing the three faces of the crisis: The Echo (Kai's crystallized predecessor), The Iron Choir (an Iron Sediment/Hollowed hybrid entity created by the war), and The Glass Saint (a fully converted human who achieved something like enlightenment). Each boss is fought differently based on Kai's dominant talent tree and corruption tier. The trial ends with Kai standing before the Obelisk Core chamber.</p>
          </div>
        </div>

        <div class="chapter-block">
          <div class="chapter-header">
            <div class="chapter-num">15</div>
            <div>
              <div class="chapter-name">The Choice</div>
              <span class="pill amber">Ending Gate</span>
            </div>
          </div>
          <div class="chapter-body">
            <p>Kai stands before the Obelisk Core — a 12-meter obsidian spire of pure Nullite. The Echo Core in his chest is resonating at full power. The Obelisk is not attacking him. It is waiting. The game presents its final question: <em>What does humanity deserve?</em> Five paths forward. No prompt. The player walks toward the answer they have been building all game.</p>
          </div>
        </div>

      </div>
    </div>
  </section>`;
