export interface Fighter {
  id: number;
  name: string;
  health: number;
  attack: number;
  defense: number;
  specialMove: string;
  staticImage: string;
  idleImage: string;
  attackImage: string;
  defendImage: string;
  specialImage: string;
  hurtImage: string;
  deathImage: string;
}

export const fighters: Fighter[] = [
  {
    id: 1,
    name: "Biker",
    health: 6,
    attack: 8,
    defense: 5,
    specialMove: "⏩ Speed Burst",
    staticImage: "/sprites/biker.png",
    idleImage: "/sprites/biker_idle.gif",
    attackImage: "/sprites/biker_attack.gif",
    defendImage: "/sprites/biker_block.gif",
    specialImage: "/sprites/biker_special.gif",
    hurtImage: "/sprites/biker_hurt.gif",
    deathImage: "/sprites/biker_death.gif",
  },
  {
    id: 2,
    name: "Punk",
    health: 8,
    attack: 6,
    defense: 5,
    specialMove: "🥊 Fight Dirty",
    staticImage: "/sprites/punk.png",
    idleImage: "/sprites/punk_idle.gif",
    attackImage: "/sprites/punk_attack.gif",
    defendImage: "/sprites/punk_block.gif",
    specialImage: "/sprites/punk_special.gif",
    hurtImage: "/sprites/punk_hurt.gif",
    deathImage: "/sprites/punk_death.gif",
  },
  {
    id: 3,
    name: "Cyborg",
    health: 6,
    attack: 6,
    defense: 6,
    specialMove: "💥 Spirit Bomb",
    staticImage: "/sprites/cyborg.png",
    idleImage: "/sprites/cyborg_idle.gif",
    attackImage: "/sprites/cyborg_attack.gif",
    defendImage: "/sprites/cyborg_block.gif",
    specialImage: "/sprites/cyborg_special.gif",
    hurtImage: "/sprites/cyborg_hurt.gif",
    deathImage: "/sprites/cyborg_death.gif",
  },
];
