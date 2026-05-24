# Sandscare_GDD

Game Design Document and development repository for **SANDSCAR: Echoes of the Hollow Earth** — a dark atmospheric action RPG set in a silica apocalypse. Built with Godot 4.x, Blender, and GDScript.

## Overview

SANDSCAR is a slow-burn apocalypse RPG built around one central rule: **power has a price**. The more Kai uses the Echo Core, the more he changes. Corruption is not only a gameplay system but also a narrative, visual, and moral system. Memory is a weapon, the world reacts to the player, and there is no clean villain to defeat.

## S01 — Vision & Design Pillars

- Dark atmospheric action RPG set in a slow-motion apocalypse.
- Core mandate: power always carries irreversible cost.
- Memory is a weapon and a core gameplay mechanic.
- Five design pillars shape the game:
	- Power Has a Price.
	- Memory Is a Weapon.
	- The World Reacts.
	- No Clear Villain.
	- One unified system where power, narrative, visual design, and morality are the same thing.

## S02 — World & Lore

- Forty years before the game begins, **The Hum** starts as a low-frequency resonance from underground.
- The **Obelisk**, a 900m Nullite spire buried under the Saharan Basin, is Earth’s immune response to humanity.
- The world is slowly converting: vertical ruin-cities, shifting dungeons, mineral fauna, and crystallized humans known as the Hollowed.
- The timeline runs from Year 0, when the Hum begins, to Year 40, when the game starts.

## S03 — Character Architecture & Psychological Framework

- Kai is a 19-year-old scavenger from the Mumbai slums, shaped by trauma from watching his mother crystallize.
- The Cosmic Paradox: Kai believes the Hum is random and indifferent, then discovers he was specifically chosen by the universe.
- The Echo Core contains residual resonance from his dead mother and acts autonomously to protect him, even as it accelerates his corruption.
- Five supporting characters act as philosophical mirrors to different responses to apocalypse.

## S04 — Factions

- Five factions represent different responses to the Hum.
- **Silt Runners** value mobility.
- **The Hollowed** pursue evolution.
- **Resonance Order** seeks knowledge and weaponization.
- **Iron Sediment** believes in fighting back.
- **Echo Wardens** seek balance.
- Reputation ranges from -3 to +3 and unlocks vendors, dungeons, dialogue, and ending eligibility.

## S05 — Power System — Echo Sandmancy

- Corruption is permanent and non-resetting.
- Visual corruption affects how NPCs respond to Kai.
- Five corruption tiers are used: Ashen, Fractured, Crystalline, Resonant, and Obelisk-Touched.
- Four ability forms exist:
	- Dust for evasion.
	- Glass for defense.
	- Compacted for damage.
	- Echo for memory reading and utility.
- There are 10 core abilities across the forms.
- Echo abilities cost no corruption, but they leave Kai vulnerable because they require total focus.

## S06 — Combat System

- Combat is stance-based, rhythmic, and punishing.
- Players switch in real time between Dust, Glass, and Compacted forms via the D-pad.
- The Crystallize System lets players accumulate silica damage to freeze, shatter, or harvest enemies.
- Resonance Language is a hold-to-sense mechanic that lets Kai perceive through sand at zero corruption cost, but it leaves him defenseless.
- Echo Drowning is the penalty for being hit while deep-reading.
- Dossier’s betrayal in Act III removes this safety net.

## S07 — Talent Trees

- Three talent trees exist: Dust, Glass, and Echo.
- Each tree has four tiers.
- Cross-tree unlocks appear in Acts III and IV.
- Talent points come from leveling, Echo memory sequences, and dungeon clears without using corruption abilities.
- Tier 4 ultimate abilities require major corruption investment.

## S08 — Progression System

- Level cap is 50.
- Each level grants a talent point and base stat increases.
- Every 10 levels, a milestone modifier is granted such as slower corruption gain, extra ability slots, faction resistance, or hybrid abilities.
- The Resonance Upgrade System lets abilities be upgraded three times using Resonance Shards:
	- stats improve first,
	- then effects are added,
	- then behavior transforms.

## S09 — Items & Equipment

- Weapons are tied to forms.
- Armor sets are faction-specific and grant bonuses.
- The **Nullite Shard Blade** is a psychological trap: it suppresses visible corruption while storing it internally.
- Seven relics exist as passive slots, including Mother’s Sand-Glass, Dune King’s Band, and The Last Circuit.
- Consumables include Purification Vials, Resonance Shards, Echo Crystals, and ultra-rare Obelisk Splinters that can remove permanent corruption.

## S10 — World Zones

- **Zone 1: Dustfall Slums** — vertical ruin-city tutorial zone.
- **Zone 2: Glass Wastes** — open desert and faction warfare.
- **Zone 3: The Subterrane** — underground dungeon network used heavily in Act III.
- **Zone 4: Cryssal Canopy** — crystallized rainforest.
- **Zone 5: Dune Seas** — epic dune ocean and traversal hub.
- **Zone 6: Obelisk Approach** — reality-fractured final zone used only in Act IV.
- Two dungeon types exist:
	- Scar Dungeons, which are semi-predictable.
	- Hollow Vaults, which are fully generated and shifting.

## S11 — Story — Acts I–IV

- **Act I, 6 hours:** Kai gains the Echo Core, learns the basics, meets Dossier, and encounters the factions.
- **Act II, 10 hours:** Surface wars intensify while Kai uncovers memories of Elias Ren, the previous Core carrier who surrendered.
- **Act III, 10 hours:** Deep underground, Kai learns the Obelisk is a human-engineered failsafe. Dossier betrays him, and a key ally dies depending on reputation.
- **Act IV, 5 hours:** The game culminates in a final confrontation with Elias Ren in memory space and then the Obelisk Core as a resonance event boss.

## S12 — Side Quests

- The game contains 10 core side quests and more than 25 minor quests.
- Examples include Crystallized Father, The Last Glass Musician, Children of the Hum, and Resonance Order Schism.
- Rewards include relics, reputation, and lore.
- Some quests gate specific endings.

## S13 — Enemies & Bosses

- Five enemy classes are defined:
	- Shard Beasts.
	- Hollowed Drifters.
	- Hollow Sentinels.
	- Fracture Entities.
	- Faction Hostiles.
- Major bosses include the Crystalline Warden, Dune Sovereign, Glass Choir, Elias Ren / The Echo, and the Obelisk Core.
- Elias Ren is humanized through four memory fragments, so the final boss fight functions as a resonance event rather than a conventional duel.

## S14 — Multiple Endings

- There are five canonical endings and two secret variants.
- Canonical endings:
	- The Last Human.
	- The Hollow God.
	- Memory Keeper.
	- Fractured Balance.
	- The Unfinished.
- Secret endings:
	- The Defector’s World.
	- Her Garden, which is New Game+ only.

## S15 — Audio/Visual Direction

- The visual direction is stylized Dark Sci-Fi Anime Realism, inspired by Scarlet Nexus, Code Vein, and Journey.
- The color language is deliberate:
	- Amber means safety.
	- Cyan means power.
	- Black means unknown.
	- Red means crisis.
	- White means memories.
- Corruption is shown as a 0–100% visual gradient from normal skin to full crystallization.
- The audio design blends electronic and orchestral elements with a constant 40Hz Hum undertone.
- Silica sound effects are sourced from real mineral recordings.

## S16 — Tech Stack

- Engine: Godot 4.x.
- Primary language: GDScript.
- C# may be used for hot paths if needed.
- 3D creation: Blender with native import.
- Textures: Material Maker and Krita.
- Audio: Godot built-in initially, with FMOD planned for Phase 2.
- Target performance: 1080p/30fps minimum on a Ryzen 5 2600 and GTX 1060, with 1440p/60fps as the recommended target.

## S16b — Technical Architecture & Optimization Strategy

S16b is a **separate technical architecture section**, not an addendum to S16. It explains how the game should actually be implemented within mid-tier hardware constraints.

- The map philosophy is to fake everything intelligently through visibility management, vertex displacement shaders, and localized detail.
- Sand rendering uses triplanar mapping and specular glitter inspired by Journey.
- Dynamic deformation relies on GPU compute shaders for sand trails and wandering clipmap mesh architecture.
- Fog and atmosphere are built with pseudo-volumetric particle shaders, while true volumetrics are reserved for dungeons.
- Culling and optimization rely on hierarchical LOD, Embree occlusion culling, optimized shadow mapping, and baked lightmap GI.
- The core philosophy is that intelligent design should outperform brute-force rendering.

## S17 — Development Milestones

- The plan spans 27 months of solo development plus launch.
- **Phase 0, 2 months:** foundation, controller, dash, tileset.
- **Phase 1, 3 months:** core loop, three stances, basic AI, mini-dungeon.
- **Phase 2, 4 months:** vertical slice with Act I, the Warden boss, and Zone 1.
- **Phase 3, 6 months:** Act II expansion with Zones 2, 4, and 5, dune surfing, and side quests.
- **Phase 4, 7 months:** Acts III and IV, all zones, bosses, endings, and music.
- **Phase 5, 4 months:** polish, optimization, accessibility, and Steam integration.
- Current status: pre-production, GDD v1.0.

## S18 — Risk Register

- High-risk issues: scope creep, solo dev burnout, and market discovery.
- Medium-risk issues: dungeon generation complexity, art quality gaps, performance targets, and narrative ambition.
- Mitigations include a locked GDD, baked lighting priority, weekly dev day, public development, and a vertical slice demo.
- The overall assessment is that the game is buildable, but the main risks are scope, time, and motivation.

## Project Summary

SANDSCAR is designed as a tightly unified game where mechanics, story, visuals, and technical implementation reinforce one another. The core tension is always the same: using power makes Kai stronger now, but less human later.
