import { MatchStats, PeriodData, Lineup } from "../types/match";

// --- MOCK DE DADOS REAIS ---

// FORMAÇÕES E DADOS DOS TIMES COM ID 1
const mockRealStatsID1: MatchStats = {
  possession: { home: 62, away: 38 },
  shots: { home: 15, away: 8 },
  shotsOnTarget: { home: 6, away: 2 },
  corners: { home: 7, away: 3 },
  fouls: { home: 10, away: 12 },
  saves: { home: 2, away: 5 },
  yellowCards: { home: 1, away: 3 },
  redCards: { home: 0, away: 0 },
  bigChances: { home: 3, away: 1 },
  passes: { home: 510, away: 290 },
  tackles: { home: 14, away: 20 },
  freeKicks: { home: 12, away: 10 },
};
const mockHomeLineupID1: Lineup = {
  formation: "4-3-3",
  starters: [
    { id: 101, name: "Vitor Eudes", role: "GK", number: 1 },
    { id: 102, name: "Samuel Xavier", role: "RB", number: 2, yellowCards: 1 },
    { id: 103, name: "Nino", role: "RCB", number: 3, redCards: 1 },
    { id: 104, name: "Thiago Santos", role: "LCB", number: 4 },
    {
      id: 105,
      name: "Marcelo",
      role: "LB",
      number: 5,
      isFlop: true,
      yellowCards: 2,
    },
    { id: 106, name: "André", role: "CDM", number: 6 },
    { id: 107, name: "Martinelli", role: "LCM", number: 7 },
    { id: 108, name: "Ganso", role: "RCM", number: 8, wasSubstituted: true },
    { id: 109, name: "Arias", role: "RW", number: 9, yellowCards: 1 },
    { id: 110, name: "Keno", role: "LW", number: 10 },
    {
      id: 111,
      name: "Germán Cano",
      role: "ST",
      number: 11,
      wasSubstituted: true,
    },
  ],
  substitutes: [
    {
      id: 201,
      name: "Lelê",
      role: "SUB",
      number: 18,
      substitutedInFor: "Germán Cano",
    },
    {
      id: 202,
      name: "David Braz",
      role: "SUB",
      number: 44,
      substitutedInFor: "Ganso",
    },
    { id: 203, name: "J. Kennedy", role: "SUB", number: 19},
    { id: 204, name: "Lima", role: "SUB", number: 45 },
    { id: 205, name: "Guga", role: "SUB", number: 23 },
  ],
};
const mockAwayLineupID1: Lineup = {
  formation: "4-4-2",
  starters: [
    { id: 112, name: "Cássio", role: "GK", number: 1 },
    { id: 113, name: "William", role: "LB", number: 2 },
    { id: 114, name: "Zé Ivaldo", role: "LCB", number: 3 },
    { id: 115, name: "João Marcelo", role: "RCB", number: 4 },
    { id: 116, name: "Marlon", role: "RB", number: 5 },
    { id: 117, name: "Lucas Romero", role: "CDM", number: 6 },
    { id: 118, name: "Matheus Henrique", role: "ST2", number: 7, goals: 1 },
    {
      id: 119,
      name: "Matheus Pereira",
      role: "LCM",
      number: 8,
      isMVP: true,
      goals: 2,
      assists: 1,
      wasSubstituted: true,
    },
    { id: 120, name: "Gabriel Veron", role: "LW", number: 9 },
    { id: 121, name: "Dinenno", role: "ST", number: 10 },
    { id: 122, name: "Arthur Gomes", role: "RW", number: 11 },
  ],
  substitutes: [
    {
      id: 206,
      name: "Rafael Elias",
      role: "SUB",
      number: 19,
      substitutedInFor: "Matheus Pereira",
    },
    { id: 207, name: "Filipe Machado", role: "SUB", number: 23 },
    { id: 208, name: "Kaiki", role: "SUB", number: 68 },
    { id: 209, name: "Lucas Silva", role: "SUB", number: 16 },
    { id: 210, name: "Japa", role: "SUB", number: 77 },
  ],
};

// FORMAÇÕES E DADOS DOS TIMES COM ID 2
const mockRealStatsID2: MatchStats = {
  possession: { home: 64, away: 36 },
  shots: { home: 27, away: 8 },
  shotsOnTarget: { home: 7, away: 4 },
  corners: { home: 12, away: 2 },
  fouls: { home: 17, away: 15 },
  saves: { home: 2, away: 5 },
  yellowCards: { home: 2, away: 3 },
  redCards: { home: 0, away: 0 },
  bigChances: { home: 3, away: 1 },
  passes: { home: 423, away: 204 },
  tackles: { home: 14, away: 20 },
  freeKicks: { home: 12, away: 10 },
};
const mockHomeLineupID2: Lineup = {
  formation: "4-3-3",
  starters: [
    { id: 101, name: "Leo Jardim", role: "GK", number: 1 },
    { id: 102, name: "Paulo Henrique", role: "RB", number: 96, yellowCards: 1 },
    {
      id: 103,
      name: "João Victor",
      role: "RCB",
      number: 38,
      yellowCards: 1,
      wasSubstituted: true,
    },
    {
      id: 104,
      name: "L. Freitas",
      role: "LCB",
      number: 43,
      goals: 1,
    },
    { id: 105, name: "Lucas Piton", role: "LB", number: 6 },
    { id: 106, name: "Hugo Moura", role: "CDM", number: 25 },
    { id: 107, name: "Tchê Tchê", role: "LCM", number: 3 },
    { id: 108, name: "David", role: "RCM", number: 7, wasSubstituted: true },
    { id: 109, name: "Rayan", role: "RW", number: 77 },
    { id: 110, name: "Nuno Moreira", role: "LW", number: 17 },
    { id: 111, name: "Pablo Vegetti", role: "ST", number: 99 },
  ],
  substitutes: [
    {
      id: 201,
      name: "loide Augusto",
      role: "SUB",
      number: 45,
      substitutedInFor: "David",
    },
    {
      id: 202,
      name: "Matheus Carvalho",
      role: "SUB",
      number: 85,
      substitutedInFor: "João Victor",
    },
    { id: 203, name: "Jair Rodrigues Júnior", role: "SUB", number: 8 },
    { id: 204, name: "Victor Luis", role: "SUB", number: 12 },
    { id: 205, name: "Daniel Fuzato", role: "SUB", number: 13 },
  ],
};
const mockAwayLineupID2: Lineup = {
  formation: "4-2-3-1",
  starters: [
    { id: 112, name: "T. Volpi", role: "GK", number: 1 },
    {
      id: 113,
      name: "Marlon",
      role: "LB",
      number: 23,
      assists: 1,
      isMVP: true,
    },
    { id: 114, name: "Walter Kannemann", role: "LCB", number: 4 },
    { id: 115, name: "Wagner Leonardo", role: "RCB", number: 3 },
    { id: 116, name: "Gustavo Martins", role: "RB", number: 53, goals: 1 },
    { id: 117, name: "Dodi", role: "LDM", number: 17 },
    {
      id: 118,
      name: "Alex Santana",
      role: "RDM",
      number: 80,
      isFlop: true,
      wasSubstituted: true,
    },
    {
      id: 119,
      name: "Edenilson",
      role: "MEI",
      number: 29,
      wasSubstituted: true,
    },
    {
      id: 120,
      name: "Cristian Oliveira",
      role: "LW",
      number: 99,
      wasSubstituted: true,
    },
    {
      id: 121,
      name: "M. Braithwaite",
      role: "ST",
      number: 22,
      wasSubstituted: true,
    },
    {
      id: 122,
      name: "Alysson Edwards",
      role: "RW",
      number: 47,
      wasSubstituted: true,
    },
  ],
  substitutes: [
    {
      id: 206,
      name: "Franco Cristaldo",
      role: "SUB",
      number: 10,
      substitutedInFor: "Alysson Edwards",
    },
    {
      id: 207,
      name: "Cristian Pavón",
      role: "SUB",
      number: 7,
      substitutedInFor: "Cristian Oliveira",
    },
    {
      id: 208,
      name: "Mathias Villasanti",
      role: "SUB",
      number: 20,
      substitutedInFor: "Alex Santana",
    },
    {
      id: 209,
      name: "Riquelme Freitas",
      role: "SUB",
      number: 65,
      substitutedInFor: "Edenilson",
    },
    {
      id: 210,
      name: "André Henrique",
      role: "SUB",
      number: 77,
      substitutedInFor: "M. Braithwaite",
    },
  ],
};

// --- FORMAÇÕES E DADOS REAIS ID 4 (Flamengo vs Palmeiras) ---
const mockRealStatsID4: MatchStats = {
  possession: { home: 55, away: 45 },
  shots: { home: 18, away: 10 },
  shotsOnTarget: { home: 7, away: 3 },
  corners: { home: 6, away: 4 },
  fouls: { home: 14, away: 18 },
  saves: { home: 3, away: 6 },
  yellowCards: { home: 2, away: 3 },
  redCards: { home: 0, away: 0 },
  bigChances: { home: 2, away: 1 },
  passes: { home: 480, away: 390 },
  tackles: { home: 19, away: 21 },
  freeKicks: { home: 18, away: 14 },
};
const mockHomeLineupID4: Lineup = {
  formation: "4-3-3",
  starters: [
    { id: 401, name: "Rossi", role: "GK", number: 1 },
    { id: 402, name: "Varela", role: "RB", number: 2 },
    { id: 403, name: "Fabrício B.", role: "RCB", number: 15 },
    { id: 404, name: "Léo Pereira", role: "LCB", number: 4 },
    { id: 405, name: "Ayrton Lucas", role: "LB", number: 6 },
    { id: 406, name: "Erick Pulgar", role: "CDM", number: 5, yellowCards: 1 },
    {
      id: 407,
      name: "De la Cruz",
      role: "LCM",
      number: 18,
      isMVP: true,
      assists: 1,
    },
    {
      id: 408,
      name: "Arrascaeta",
      role: "RCM",
      number: 14,
      wasSubstituted: true,
    },
    {
      id: 409,
      name: "Luiz Araújo",
      role: "RW",
      number: 7,
      wasSubstituted: true,
    },
    { id: 410, name: "Everton C.", role: "LW", number: 11 },
    { id: 411, name: "Pedro", role: "ST", number: 9, goals: 1 },
  ],
  substitutes: [
    {
      id: 412,
      name: "Bruno H.",
      role: "SUB",
      number: 27,
      substitutedInFor: "Luiz Araújo",
    },
    {
      id: 413,
      name: "Gerson",
      role: "SUB",
      number: 20,
      substitutedInFor: "Arrascaeta",
    },
  ],
};
const mockAwayLineupID4: Lineup = {
  formation: "4-2-3-1",
  starters: [
    { id: 420, name: "Weverton", role: "GK", number: 21 },
    { id: 421, name: "Mayke", role: "RB", number: 12, yellowCards: 1 },
    { id: 422, name: "Murilo", role: "RCB", number: 26 },
    { id: 423, name: "G. Gómez", role: "LCB", number: 15, yellowCards: 1 },
    { id: 424, name: "Piquerez", role: "LB", number: 22 },
    { id: 425, name: "Aníbal M.", role: "RDM", number: 5 },
    { id: 426, name: "Zé Rafael", role: "LDM", number: 8 },
    {
      id: 427,
      name: "Raphael Veiga",
      role: "MEI",
      number: 23,
      wasSubstituted: true,
    },
    {
      id: 428,
      name: "Estêvão",
      role: "RW",
      number: 41,
      isFlop: true,
      wasSubstituted: true,
    },
    { id: 429, name: "Lázaro", role: "LW", number: 17, wasSubstituted: true },
    { id: 430, name: "Endrick", role: "ST", number: 9 },
  ],
  substitutes: [
    {
      id: 431,
      name: "Rony",
      role: "SUB",
      number: 10,
      substitutedInFor: "Raphael Veiga",
    },
    {
      id: 432,
      name: "Dudu",
      role: "SUB",
      number: 7,
      substitutedInFor: "Estêvão",
    },
    {
      id: 433,
      name: "Caio P.",
      role: "SUB",
      number: 20,
      substitutedInFor: "Lázaro",
    },
  ],
};

// --- FORMAÇÕES E DADOS REAIS ID 5 (Santos vs Sport Recife) ---
const mockRealStatsID5: MatchStats = {
  possession: { home: 65, away: 35 },
  shots: { home: 20, away: 8 },
  shotsOnTarget: { home: 9, away: 3 },
  corners: { home: 8, away: 3 },
  fouls: { home: 12, away: 15 },
  saves: { home: 2, away: 7 },
  yellowCards: { home: 1, away: 4 },
  redCards: { home: 0, away: 0 },
  bigChances: { home: 4, away: 1 },
  passes: { home: 510, away: 260 },
  tackles: { home: 22, away: 18 },
  freeKicks: { home: 15, away: 12 },
};
const mockHomeLineupID5: Lineup = {
  formation: "4-3-3",
  starters: [
    { id: 501, name: "João Paulo", role: "GK", number: 1 },
    { id: 502, name: "Aderlan", role: "RB", number: 4 },
    { id: 503, name: "Gil", role: "RCB", number: 2, yellowCards: 1 },
    { id: 504, name: "J. Joaquim", role: "LCB", number: 3 },
    { id: 505, name: "Escobar", role: "LB", number: 6 },
    { id: 506, name: "J. Schmidt", role: "CDM", number: 5 },
    {
      id: 507,
      name: "D. Pituca",
      role: "LCM",
      number: 8,
      isMVP: true,
      goals: 1,
    },
    {
      id: 508,
      name: "Giuliano",
      role: "RCM",
      number: 10,
      assists: 1,
      wasSubstituted: true,
    },
    { id: 509, name: "Guilherme", role: "RW", number: 11, goals: 1 },
    { id: 510, name: "Otero", role: "LW", number: 7, wasSubstituted: true },
    { id: 511, name: "Bigode", role: "ST", number: 9, wasSubstituted: true },
  ],
  substitutes: [
    {
      id: 512,
      name: "Furch",
      role: "SUB",
      number: 22,
      substitutedInFor: "Bigode",
    },
    {
      id: 513,
      name: "Rincón",
      role: "SUB",
      number: 14,
      substitutedInFor: "Giuliano",
    },
    {
      id: 514,
      name: "Pedrinho",
      role: "SUB",
      number: 17,
      substitutedInFor: "Otero",
    },
  ],
};
const mockAwayLineupID5: Lineup = {
  formation: "4-4-2",
  starters: [
    { id: 520, name: "Caíque França", role: "GK", number: 1 },
    { id: 521, name: "Rosales", role: "RB", number: 2, yellowCards: 1 },
    { id: 522, name: "R. Thyere", role: "RCB", number: 6 },
    { id: 523, name: "Luciano C.", role: "LCB", number: 3, yellowCards: 1 },
    { id: 524, name: "Felipinho", role: "LB", number: 5 },
    { id: 525, name: "F. Dominguez", role: "CDM", number: 8, yellowCards: 1 },
    { id: 526, name: "Fábio M.", role: "LCM", number: 7, wasSubstituted: true },
    {
      id: 527,
      name: "Lucas Lima",
      role: "RCM",
      number: 10,
      isFlop: true,
      wasSubstituted: true,
    },
    {
      id: 528,
      name: "Romarinho",
      role: "RW",
      number: 11,
      goals: 1,
      yellowCards: 1,
    },
    { id: 529, name: "G. Coutinho", role: "ST", number: 9 },
    {
      id: 530,
      name: "Barletta",
      role: "ST2",
      number: 30,
      wasSubstituted: true,
    },
  ],
  substitutes: [
    {
      id: 531,
      name: "Zé Roberto",
      role: "SUB",
      number: 18,
      substitutedInFor: "Lucas Lima",
    },
    {
      id: 532,
      name: "Alan Ruiz",
      role: "SUB",
      number: 20,
      substitutedInFor: "Fábio M.",
    },
    {
      id: 533,
      name: "Titi Ortiz",
      role: "SUB",
      number: 22,
      substitutedInFor: "Barletta",
    },
  ],
};

// --- FORMAÇÕES E DADOS REAIS ID 6 (Caxias vs Botafogo-PB) ---
const mockRealStatsID6: MatchStats = {
  possession: { home: 50, away: 50 },
  shots: { home: 12, away: 9 },
  shotsOnTarget: { home: 5, away: 2 },
  corners: { home: 5, away: 4 },
  fouls: { home: 20, away: 19 },
  saves: { home: 2, away: 4 },
  yellowCards: { home: 3, away: 4 },
  redCards: { home: 0, away: 0 },
  bigChances: { home: 2, away: 0 },
  passes: { home: 350, away: 340 },
  tackles: { home: 25, away: 22 },
  freeKicks: { home: 19, away: 20 },
};
const mockHomeLineupID6: Lineup = {
  formation: "4-4-2",
  starters: [
    { id: 601, name: "Fabian Volpi", role: "GK", number: 1 },
    { id: 602, name: "Marcelo", role: "RB", number: 2 },
    { id: 603, name: "Dirceu", role: "RCB", number: 3, yellowCards: 1 },
    { id: 604, name: "Lucas Cunha", role: "LCB", number: 4 },
    { id: 605, name: "Dudu M.", role: "LB", number: 6 },
    { id: 606, name: "Barba", role: "CDM", number: 5, isMVP: true },
    { id: 607, name: "Emerson R.", role: "LCM", number: 8, yellowCards: 1 },
    {
      id: 608,
      name: "Tomas B.",
      role: "RCM",
      number: 10,
      goals: 1,
      wasSubstituted: true,
    },
    {
      id: 609,
      name: "Gabriel S.",
      role: "RW",
      number: 7,
      wasSubstituted: true,
    },
    { id: 610, name: "Alvaro", role: "ST", number: 9, assists: 1 },
    { id: 611, name: "Feijão", role: "ST2", number: 11, yellowCards: 1 },
  ],
  substitutes: [
    {
      id: 612,
      name: "Geilson",
      role: "SUB",
      number: 17,
      substitutedInFor: "Tomas B.",
    },
    {
      id: 613,
      name: "Zezinho",
      role: "SUB",
      number: 18,
      substitutedInFor: "Gabriel S.",
    },
  ],
};
const mockAwayLineupID6: Lineup = {
  formation: "4-3-3",
  starters: [
    { id: 620, name: "Dalton", role: "GK", number: 1 },
    { id: 621, name: "Lenon", role: "RB", number: 2, yellowCards: 1 },
    { id: 622, name: "Reniê", role: "RCB", number: 4 },
    { id: 623, name: "Wendel L.", role: "LCB", number: 3, yellowCards: 1 },
    { id: 624, name: "Evandro", role: "LB", number: 6 },
    { id: 625, name: "Edmundo", role: "CDM", number: 8, yellowCards: 1 },
    { id: 626, name: "Thallyson", role: "LCM", number: 5, yellowCards: 1 },
    {
      id: 627,
      name: "Bruno L.",
      role: "RCM",
      number: 10,
      wasSubstituted: true,
      isFlop: true,
    },
    { id: 628, name: "Dudu", role: "RW", number: 7, wasSubstituted: true },
    { id: 629, name: "Joãozinho", role: "LW", number: 11 },
    { id: 630, name: "Pipico", role: "ST", number: 9, wasSubstituted: true },
  ],
  substitutes: [
    {
      id: 631,
      name: "Warley Jr",
      role: "SUB",
      number: 17,
      substitutedInFor: "Bruno L.",
    },
    {
      id: 632,
      name: "Jô",
      role: "SUB",
      number: 19,
      substitutedInFor: "Pipico",
    },
    {
      id: 633,
      name: "Gabriel L.",
      role: "SUB",
      number: 16,
      substitutedInFor: "Dudu",
    },
  ],
};

// --- FORMAÇÕES E DADOS REAIS ID 7 (Novo Hamburgo vs Hercílio Luz) ---
const mockRealStatsID7: MatchStats = {
  possession: { home: 45, away: 55 },
  shots: { home: 7, away: 10 },
  shotsOnTarget: { home: 2, away: 3 },
  corners: { home: 4, away: 6 },
  fouls: { home: 18, away: 16 },
  saves: { home: 3, away: 2 },
  yellowCards: { home: 3, away: 2 },
  redCards: { home: 0, away: 0 },
  bigChances: { home: 0, away: 1 },
  passes: { home: 310, away: 390 },
  tackles: { home: 20, away: 24 },
  freeKicks: { home: 16, away: 18 },
};
const mockHomeLineupID7: Lineup = {
  formation: "4-3-3",
  starters: [
    { id: 701, name: "Lucas M.", role: "GK", number: 1 },
    { id: 702, name: "Anilson", role: "RB", number: 2, yellowCards: 1 },
    { id: 703, name: "S. Dutra", role: "RCB", number: 3 },
    { id: 704, name: "Marcão", role: "LCB", number: 4 },
    { id: 705, name: "Raí", role: "LB", number: 6 },
    { id: 706, name: "P. Vinicius", role: "CDM", number: 5, yellowCards: 1 },
    { id: 707, name: "Fraga", role: "LCM", number: 8 },
    {
      id: 708,
      name: "Dionathã",
      role: "RCM",
      number: 10,
      isFlop: true,
      wasSubstituted: true,
    },
    { id: 709, name: "Garraty", role: "RW", number: 7 },
    { id: 710, name: "Robinho", role: "LW", number: 11, yellowCards: 1 },
    { id: 711, name: "Édipo", role: "ST", number: 9, wasSubstituted: true },
  ],
  substitutes: [
    {
      id: 712,
      name: "Tanque",
      role: "SUB",
      number: 19,
      substitutedInFor: "Édipo",
    },
    {
      id: 713,
      name: "Felipinho",
      role: "SUB",
      number: 18,
      substitutedInFor: "Dionathã",
    },
  ],
};
const mockAwayLineupID7: Lineup = {
  formation: "4-2-3-1",
  starters: [
    { id: 720, name: "Matheus", role: "GK", number: 1 },
    { id: 721, name: "Cleiton", role: "RB", number: 2 },
    { id: 722, name: "Wallace", role: "RCB", number: 4, yellowCards: 1 },
    { id: 723, name: "L. Kadu", role: "LCB", number: 3 },
    { id: 724, name: "Kaike", role: "LB", number: 6 },
    { id: 725, name: "I. T.", role: "LDM", number: 5 },
    { id: 726, name: "Garrinsha", role: "RDM", number: 8, isMVP: true },
    { id: 727, name: "Vitinho", role: "MEI", number: 10, wasSubstituted: true },
    { id: 728, name: "Adão", role: "RW", number: 7, wasSubstituted: true },
    { id: 729, name: "T. Galhardo", role: "LW", number: 11, yellowCards: 1 },
    { id: 730, name: "Caio M.", role: "ST", number: 9, isFlop: true },
  ],
  substitutes: [
    {
      id: 731,
      name: "Jean L.",
      role: "SUB",
      number: 17,
      substitutedInFor: "Vitinho",
    },
    {
      id: 732,
      name: "R. De.",
      role: "SUB",
      number: 16,
      substitutedInFor: "Adão",
    },
  ],
};

// --- FORMAÇÕES E DADOS REAIS ID 8 (Atlético-MG vs São Paulo) ---
const mockRealStatsID8: MatchStats = {
  possession: { home: 60, away: 40 },
  shots: { home: 22, away: 10 },
  shotsOnTarget: { home: 10, away: 4 },
  corners: { home: 9, away: 3 },
  fouls: { home: 15, away: 19 },
  saves: { home: 3, away: 7 },
  yellowCards: { home: 2, away: 4 },
  redCards: { home: 0, away: 1 },
  bigChances: { home: 5, away: 2 },
  passes: { home: 490, away: 320 },
  tackles: { home: 18, away: 23 },
  freeKicks: { home: 19, away: 15 },
};
const mockHomeLineupID8: Lineup = {
  formation: "4-3-3",
  starters: [
    { id: 801, name: "Everson", role: "GK", number: 1 },
    { id: 802, name: "Saravia", role: "RB", number: 2, yellowCards: 1 },
    { id: 803, name: "B. Fuchs", role: "RCB", number: 3 },
    { id: 804, name: "Jemerson", role: "LCB", number: 4 },
    {
      id: 805,
      name: "G. Arana",
      role: "LB",
      number: 6,
      assists: 2,
      isMVP: true,
    },
    { id: 806, name: "Battaglia", role: "CDM", number: 5 },
    {
      id: 807,
      name: "A. Franco",
      role: "LCM",
      number: 8,
      wasSubstituted: true,
    },
    { id: 808, name: "Zaracho", role: "RCM", number: 10, goals: 1 },
    { id: 809, name: "Scarpa", role: "RW", number: 7, wasSubstituted: true },
    {
      id: 810,
      name: "Paulinho",
      role: "LW",
      number: 11,
      goals: 1,
      wasSubstituted: true,
    },
    { id: 811, name: "Hulk", role: "ST", number: 9, goals: 1, assists: 1 },
  ],
  substitutes: [
    {
      id: 812,
      name: "Vargas",
      role: "SUB",
      number: 17,
      substitutedInFor: "Paulinho",
    },
    {
      id: 813,
      name: "Pedrinho",
      role: "SUB",
      number: 20,
      substitutedInFor: "Scarpa",
    },
    {
      id: 814,
      name: "Otávio",
      role: "SUB",
      number: 15,
      substitutedInFor: "A. Franco",
    },
  ],
};
const mockAwayLineupID8: Lineup = {
  formation: "3-4-3",
  starters: [
    { id: 820, name: "Jandrei", role: "GK", number: 1 },
    { id: 821, name: "Arboleda", role: "RCB", number: 5, yellowCards: 1 },
    { id: 822, name: "D. Costa", role: "CB", number: 4 },
    { id: 823, name: "Ferraresi", role: "LCB", number: 3, yellowCards: 1 },
    { id: 824, name: "Igor V.", role: "RM", number: 2, wasSubstituted: true },
    { id: 825, name: "Alisson", role: "RCM", number: 8 },
    {
      id: 826,
      name: "Luiz Gustavo",
      role: "LCM",
      number: 7,
      yellowCards: 2,
      redCards: 1,
    },
    {
      id: 827,
      name: "W. Rato",
      role: "LM",
      number: 6,
      yellowCards: 1,
      wasSubstituted: true,
    },
    { id: 828, name: "Lucas Moura", role: "RW", number: 10, goals: 1 },
    {
      id: 829,
      name: "Luciano",
      role: "LW",
      number: 11,
      isFlop: true,
      wasSubstituted: true,
    },
    { id: 830, name: "Calleri", role: "ST", number: 9 },
  ],
  substitutes: [
    {
      id: 831,
      name: "Galoppo",
      role: "SUB",
      number: 14,
      substitutedInFor: "Luciano",
    },
    {
      id: 832,
      name: "Nestor",
      role: "SUB",
      number: 15,
      substitutedInFor: "W. Rato",
    },
    {
      id: 833,
      name: "Erick",
      role: "SUB",
      number: 20,
      substitutedInFor: "Igor V.",
    },
  ],
};

// --- IDs DAS LIGAS ---
// Série A: 71
// Série B: 72
// Série C: 73
// Série D: 74
// ---------------------------------------------

const realMatchesDB = {
  "1": {
    leagueId: 71,
    apiMatch: {
      fixture: {
        id: 1,
        status: { short: "FT" },
        date: "2025-11-03T20:00:00-03:00",
      },
      teams: { home: { name: "Fluminense" }, away: { name: "Cruzeiro" } },
      goals: { home: 0, away: 3 },
    },
    realPeriodStats: {
      firstHalf: null,
      secondHalf: null,
      full: mockRealStatsID1,
    } as PeriodData,
    homeLineup: mockHomeLineupID1,
    awayLineup: mockAwayLineupID1,
  },
  "2": {
    leagueId: 71,
    apiMatch: {
      fixture: {
        id: 2,
        status: { short: "FT" },
        date: "2025-11-03T22:00:00-03:00",
      },
      teams: { home: { name: "Vasco" }, away: { name: "Grêmio" } },
      goals: { home: 1, away: 1 },
    },
    realPeriodStats: {
      firstHalf: null,
      secondHalf: null,
      full: mockRealStatsID2,
    } as PeriodData,
    homeLineup: mockHomeLineupID2,
    awayLineup: mockAwayLineupID2,
  },
  "3": {
    leagueId: 72,
    apiMatch: {
      fixture: {
        id: 3,
        status: { short: "FT" },
        date: "2025-11-03T22:00:00-03:00",
      },
      teams: { home: { name: "Coritiba" }, away: { name: "Goias" } },
      goals: { home: 2, away: 2 },
    },
    realPeriodStats: {
      firstHalf: null,
      secondHalf: null,
      full: null,
    } as PeriodData,
    homeLineup: undefined,
    awayLineup: undefined,
  },
  "4": {
    leagueId: 71,
    apiMatch: {
      fixture: {
        id: 4,
        status: { short: "FT" },
        date: "2025-11-04T16:00:00-03:00",
      },
      teams: { home: { name: "Flamengo" }, away: { name: "Palmeiras" } },
      goals: { home: 1, away: 0 },
    },
    realPeriodStats: {
      firstHalf: null,
      secondHalf: null,
      full: mockRealStatsID4,
    } as PeriodData,
    homeLineup: mockHomeLineupID4,
    awayLineup: mockAwayLineupID4,
  },
  "5": {
    leagueId: 72,
    apiMatch: {
      fixture: {
        id: 5,
        status: { short: "FT" },
        date: "2025-11-04T18:30:00-03:00",
      },
      teams: { home: { name: "Santos" }, away: { name: "Sport Recife" } },
      goals: { home: 2, away: 1 },
    },
    realPeriodStats: {
      firstHalf: null,
      secondHalf: null,
      full: mockRealStatsID5,
    } as PeriodData,
    homeLineup: mockHomeLineupID5,
    awayLineup: mockAwayLineupID5,
  },
  "6": {
    leagueId: 73,
    apiMatch: {
      fixture: {
        id: 6,
        status: { short: "FT" },
        date: "2025-11-05T16:00:00-03:00",
      },
      teams: { home: { name: "Caxias" }, away: { name: "Botafogo-PB" } },
      goals: { home: 1, away: 0 },
    },
    realPeriodStats: {
      firstHalf: null,
      secondHalf: null,
      full: mockRealStatsID6,
    } as PeriodData,
    homeLineup: mockHomeLineupID6,
    awayLineup: mockAwayLineupID6,
  },
  "7": {
    leagueId: 74,
    apiMatch: {
      fixture: {
        id: 7,
        status: { short: "NS" },
        date: "2025-11-05T16:00:00-03:00",
      },
      teams: {
        home: { name: "Novo Hamburgo" },
        away: { name: "Hercílio Luz" },
      },
      goals: { home: 0, away: 0 },
    },
    realPeriodStats: {
      firstHalf: null,
      secondHalf: null,
      full: mockRealStatsID7,
    } as PeriodData,
    homeLineup: mockHomeLineupID7,
    awayLineup: mockAwayLineupID7,
  },
  "8": {
    leagueId: 71,
    apiMatch: {
      fixture: {
        id: 8,
        status: { short: "FT" },
        date: "2025-11-05T18:30:00-03:00",
      },
      teams: { home: { name: "Atlético-MG" }, away: { name: "São Paulo" } },
      goals: { home: 3, away: 1 },
    },
    realPeriodStats: {
      firstHalf: null,
      secondHalf: null,
      full: mockRealStatsID8,
    } as PeriodData,
    homeLineup: mockHomeLineupID8,
    awayLineup: mockAwayLineupID8,
  },
};

export const fetchMatchesByLeague = async (
  leagueId: number,
  season: number
) => {
  console.warn(
    `USANDO DADOS MOCKADOS (REAIS): fetchMatchesByLeague para ID ${leagueId}`
  );
  await new Promise((res) => setTimeout(res, 500));

  const allMatches = Object.values(realMatchesDB);
  const filteredMatches = allMatches.filter(
    (match) => match.leagueId === leagueId
  );

  return filteredMatches.map((match) => ({
    fixture: match.apiMatch.fixture,
    teams: match.apiMatch.teams,
    goals: match.apiMatch.goals,
  }));
};

export const fetchMatchDetails = async (fixtureId: number) => {
  console.warn(`USANDO DADOS MOCKADOS (REAIS) para ID: ${fixtureId}`);
  await new Promise((res) => setTimeout(res, 800));

  const matchData = realMatchesDB[fixtureId];

  if (!matchData) {
    // Retorna um fallback se o ID não for encontrado
    return {
      apiMatch: {
        fixture: {
          id: fixtureId,
          status: { short: "NS" },
          date: "2025-11-04T20:00:00-03:00",
        },
        teams: {
          home: { name: "Time Genérico Casa" },
          away: { name: "Time Genérico Visitante" },
        },
        goals: { home: null, away: null },
      },
      realPeriodStats: {
        firstHalf: null,
        secondHalf: null,
        full: null,
      } as PeriodData,
      homeLineup: undefined,
      awayLineup: undefined,
    };
  }

  const { leagueId, ...restOfMatchData } = matchData;
  return restOfMatchData;
};
