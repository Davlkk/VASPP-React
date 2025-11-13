type Position = { x: number; y: number };

export type FormationTemplate = Record<string, Position>;

// TEMPLATES HOME
// --- TEMPLATE 4-3-3 ---
export const HOME_433: FormationTemplate = {
  GK: { x: 50, y: 95 },
  RB: { x: 85, y: 80 },
  RCB: { x: 65, y: 85 },
  LCB: { x: 35, y: 85 },
  LB: { x: 15, y: 80 },
  CDM: { x: 50, y: 75 },
  LCM: { x: 40, y: 65 },
  RCM: { x: 60, y: 65 },
  RW: { x: 85, y: 60 },
  LW: { x: 15, y: 60 },
  ST: { x: 50, y: 55 },
  SUB: { x: 0, y: 0 },
};

// --- TEMPLATE 4-4-2 ---
export const HOME_442: FormationTemplate = {
  GK: { x: 50, y: 95 },
  RB: { x: 85, y: 80 },
  RCB: { x: 65, y: 85 },
  LCB: { x: 35, y: 85 },
  LB: { x: 15, y: 80 },
  CDM: { x: 50, y: 75 },
  LCM: { x: 40, y: 65 },
  RCM: { x: 60, y: 65 },
  RW: { x: 85, y: 60 },
  LW: { x: 15, y: 60 },
  ST: { x: 50, y: 55 },
  SUB: { x: 0, y: 0 },
};

// --- TEMPLATE 3-4-3 ---
export const HOME_343: FormationTemplate = {
  GK: { x: 50, y: 95 },
  RCB: { x: 70, y: 85 },
  LCB: { x: 30, y: 85 },
  CB: { x: 50, y: 85 },
  RCM: { x: 40, y: 75 },
  LCM: { x: 60, y: 75 },
  RM: { x: 80, y: 75 },
  LM: { x: 20, y: 75 },
  RW: { x: 80, y: 60 },
  LW: { x: 20, y: 60 },
  ST: { x: 50, y: 55 },
  SUB: { x: 0, y: 0 },
};

// --- TEMPLATE 4-2-3-1 ---
export const HOME_4231: FormationTemplate = {
  GK: { x: 50, y: 95 },
  LB: { x: 80, y: 85 },
  LCB: { x: 40, y: 85 },
  RCB: { x: 60, y: 85 },
  RB: { x: 20, y: 85 },
  LDM: { x: 70, y: 75 },
  RDM: { x: 30, y: 75 },
  MEI: { x: 50, y: 35 },
  LW: { x: 80, y: 40 },
  ST: { x: 50, y: 45 },
  RW: { x: 20, y: 40 },
  SUB: { x: 0, y: 0 },
};

// TEMPLATES AWAY
// --- TEMPLATE 4-3-3 ---
export const AWAY_433: FormationTemplate = {
  GK: { x: 50, y: 5 },
  RB: { x: 15, y: 20 },
  LCB: { x: 35, y: 15 },
  RCB: { x: 65, y: 15 },
  LB: { x: 85, y: 20 },
  CDM: { x: 50, y: 25 },
  LCM: { x: 40, y: 35 },
  RCM: { x: 60, y: 35 },
  ST: { x: 50, y: 45 },
  LW: { x: 20, y: 40 },
  RW: { x: 85, y: 40 },
  SUB: { x: 0, y: 0 },
};

// --- TEMPLATE 4-4-2 ---
export const AWAY_442: FormationTemplate = {
  GK: { x: 50, y: 5 },
  RB: { x: 15, y: 15 },
  LCB: { x: 35, y: 15 },
  RCB: { x: 65, y: 15 },
  LB: { x: 85, y: 15 },
  CDM: { x: 60, y: 30 },
  LCM: { x: 40, y: 30 },
  ST2: { x: 45, y: 45 },
  ST: { x: 55, y: 45 },
  LW: { x: 15, y: 30 },
  RW: { x: 85, y: 30 },
  SUB: { x: 0, y: 0 },
};

// --- TEMPLATE 3-4-3 ---
export const AWAY_343: FormationTemplate = {
  GK: { x: 50, y: 5 },
  RCB: { x: 70, y: 15 },
  LCB: { x: 30, y: 15 },
  CB: { x: 50, y: 15 },
  RCM: { x: 40, y: 25 },
  LCM: { x: 60, y: 25 },
  RM: { x: 80, y: 25 },
  LM: { x: 20, y: 25 },
  RW: { x: 80, y: 40 },
  LW: { x: 20, y: 40 },
  ST: { x: 50, y: 45 },
  SUB: { x: 0, y: 0 },
};

// --- TEMPLATE 4-2-3-1 ---
export const AWAY_4231: FormationTemplate = {
  GK: { x: 50, y: 5 },
  LB: { x: 80, y: 15 },
  LCB: { x: 40, y: 15 },
  RCB: { x: 60, y: 15 },
  RB: { x: 20, y: 15 },
  LDM: { x: 70, y: 25 },
  RDM: { x: 30, y: 25 },
  MEI: { x: 50, y: 35 },
  LW: { x: 80, y: 40 },
  ST: { x: 50, y: 45 },
  RW: { x: 20, y: 40 },
  SUB: { x: 0, y: 0 },
};

// --- MAPA DE FORMAÇÕES ---
export const homeFormations: Record<string, FormationTemplate> = {
  "4-3-3": HOME_433,
  "4-4-2": HOME_442,
  "3-4-3": HOME_343,
};

export const awayFormations: Record<string, FormationTemplate> = {
  "4-3-3": AWAY_433,
  "4-4-2": AWAY_442,
  "3-4-3": AWAY_343,
  "4-2-3-1": AWAY_4231,
};
