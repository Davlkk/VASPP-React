type Position = { x: number; y: number };

export type Formation = Record<string, Position>;

// Posições no campo: (GK) Goleiro, (RB) Lateral Direito, (LCB) Zagueiro Esquerdo, 
// (RCB) Zagueiro Direito, (LB) Lateral Esquerdo, (CDM) Volante, (LCM) Meia Esquerdo,
// (RCM) Meia Direito, (RW) Ponta Direita, (LW) Ponta Esquerda, (ST) Atacante

// TEMPLATES HOME
// --- TEMPLATE 4-3-3 ---
export const HOME_433: Formation = {
  GK:  { x: 50, y: 95 },
  RB:  { x: 85, y: 80 },
  RCB: { x: 65, y: 85 },
  LCB: { x: 35, y: 85 },
  LB:  { x: 15, y: 80 }, 
  CDM: { x: 50, y: 75 },
  LCM: { x: 40, y: 65 },
  RCM: { x: 60, y: 65 },
  RW:  { x: 85, y: 60 },
  LW:  { x: 15, y: 60 },
  ST:  { x: 50, y: 55 }, 
  SUB: { x: 0, y: 0 }
};

// --- TEMPLATE 4-4-2 ---
export const HOME_442: Formation = {
  GK:  { x: 50, y: 95 },
  RB:  { x: 85, y: 80 },
  RCB: { x: 65, y: 85 },
  LCB: { x: 35, y: 85 },
  LB:  { x: 15, y: 80 }, 
  CDM: { x: 50, y: 75 },
  LCM: { x: 40, y: 65 },
  RCM: { x: 60, y: 65 },
  RW:  { x: 85, y: 60 },
  LW:  { x: 15, y: 60 },
  ST:  { x: 50, y: 55 }, 
  SUB: { x: 0, y: 0 }
};

// TEMPLATES AWAY
// --- TEMPLATE 4-3-3 ---
export const AWAY_433: Formation = {
  GK:  { x: 50, y: 5 }, 
  RB:  { x: 15, y: 20 }, 
  LCB: { x: 35, y: 15 },
  RCB: { x: 65, y: 15 },
  LB:  { x: 85, y: 20 },
  CDM: { x: 50, y: 25 },
  LCM: { x: 40, y: 35 },
  RCM: { x: 60, y: 35 },
  ST:  { x: 50, y: 45 }, 
  LW: { x: 20, y: 40 }, 
  RW: { x: 85, y: 40 },
  SUB: { x: 0, y: 0 }    
};

