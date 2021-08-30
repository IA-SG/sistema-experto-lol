export const ANSWER_STATIC = ["Si", "No"];
export const LINE = ["Top", "Jungla", "Mid", "Adc", "Support"];
export const DAMAGE = ["AD", "AP"];
export const PLAYER_TYPE = ["Agresivo", "Pasivo"];

export const questionsArray = [
  {
    id: 0,
    question: "¿Cuál es tu linea preferida o que has jugado anteriormente?",
    answers: LINE,
    line: "",
    damage: "",
    typePlayer: "",
  },
  {
    id: 1,
    question: "¿Qué tipo de daño prefiere AD o AP?",
    answers: DAMAGE,
    line: "",
    damage: "",
    typePlayer: "",
  },
  {
    id: 2,
    question: "¿Jugador Pasivo o Agresivo?",
    answers: PLAYER_TYPE,
    line: "",
    damage: "",
    typePlayer: "",
  },
  {
    id: 3,
    question: "¿Te gusta ser el frente del equipo? ",
    answers: ANSWER_STATIC,
    line: LINE[0],
    damage: DAMAGE[0],
    typePlayer: PLAYER_TYPE[1],
  },
  {
    id: 4,
    question: "¿Te gusta jugar en equipo? ",
    answers: ANSWER_STATIC,
    line: LINE[0],
    damage: DAMAGE[0],
    typePlayer: PLAYER_TYPE[0],
  },
  {
    id: 5,
    question: "¿Te gusta moverte por el mapa para ayudar a tu equipo?",
    answers: ANSWER_STATIC,
    line: LINE[0],
    damage: DAMAGE[1],
    typePlayer: PLAYER_TYPE[0],
  },
  {
    id: 6,
    question: "¿Normalmente te gusta iniciar peleas?",
    answers: ANSWER_STATIC,
    line: LINE[0],
    damage: DAMAGE[1],
    typePlayer: PLAYER_TYPE[1],
  },
  {
    id: 7,
    question: "¿Te gusta apoyar a tu equipo con daño o control de masas?",
    answers: ["Daño", "CC"],
    line: LINE[1],
    damage: DAMAGE[0],
    typePlayer: PLAYER_TYPE[0],
  },
  {
    id: 8,
    question: "¿Normalmente te gusta iniciar peleas Jungle?",
    answers: ANSWER_STATIC,
    line: LINE[1],
    damage: DAMAGE[0],
    typePlayer: PLAYER_TYPE[1],
  },
  {
    id: 9,
    question: "¿Te gusta participar en peleas grupales o uno contra uno?",
    answers: ["Grupales", "Uno vs Uno"],
    line: LINE[1],
    damage: DAMAGE[1],
    typePlayer: PLAYER_TYPE[0],
  },
  {
    id: 10,
    question: "¿Te gusta apoyar a tu equipo con daño o control de masas Jungle?",
    answers: ["Daño", "CC"],
    line: LINE[1],
    damage: DAMAGE[1],
    typePlayer: PLAYER_TYPE[1],
  },
  {
    id: 11,
    question: "¿Daño explosivo?",
    answers: ANSWER_STATIC,
    line: LINE[2],
    damage: DAMAGE[0],
    typePlayer: PLAYER_TYPE[0],
  },
  {
    id: 12,
    question: "¿Daño explosivo AP?",
    answers: ANSWER_STATIC,
    line: LINE[2],
    damage: DAMAGE[1],
    typePlayer: PLAYER_TYPE[0],
  },
  {
    id: 13,
    question: "¿Prefieres un campeón estático o con movilidad?",
    answers: ["Estático", "Movilidad"],
    line: LINE[2],
    damage: DAMAGE[1],
    typePlayer: PLAYER_TYPE[1],
  },
  {
    id: 14,
    question: "¿Prefieres un campeón frágil o con resistencia?",
    answers: ["Frágil", "Resistencia"],
    line: LINE[4],
    damage: DAMAGE[1],
    typePlayer: PLAYER_TYPE[0],
  },
  {
    id: 15,
    question:
      "¿Defender a tu compañero entorpeciendo al enemigo o dándole protección?",
    answers: ["Entorpeciendo", "Protección"],
    line: LINE[4],
    damage: DAMAGE[1],
    typePlayer: PLAYER_TYPE[1],
  },
  {
    id: 16,
    question: "¿Te gusta pokear o ser de combo?",
    answers: ["Pokear", "Combo"],
    line: LINE[4],
    damage: DAMAGE[0],
    typePlayer: PLAYER_TYPE[0],
  },
  {
    id: 17,
    question: "¿Normalmente te gusta iniciar peleas Supp?",
    answers: ANSWER_STATIC,
    line: LINE[4],
    damage: DAMAGE[0],
    typePlayer: PLAYER_TYPE[1],
  },
];