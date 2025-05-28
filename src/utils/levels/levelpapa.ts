import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const levelpapa = {
  size: 11,
  colorRegions: [
    ["A", "A", "A", "D", "D", "D", "D", "D", "D", "D", "D"],
    ["A", "A", "A", "E", "E", "E", "E", "E", "E", "E", "D"],
    ["A", "A", "A", "E", "D", "D", "D", "D", "D", "D", "D"],
    ["B", "C", "A", "E", "D", "I", "I", "I", "I", "I", "I"],
    ["B", "C", "A", "E", "D", "D", "D", "D", "D", "D", "I"],
    ["B", "C", "A", "E", "E", "E", "E", "E", "E", "D", "I"],
    ["B", "C", "A", "F", "E", "D", "D", "D", "D", "D", "I"],
    ["B", "C", "A", "F", "E", "D", "G", "G", "G", "G", "G"],
    ["B", "C", "A", "F", "E", "D", "D", "D", "D", "H", "G"],
    ["B", "C", "A", "F", "E", "F", "F", "F", "D", "G", "G"],
    ["B", "C", "A", "F", "F", "F", "F", "F", "D", "J", "J"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
    J: halfBaked,
  },
};

export default levelpapa;
