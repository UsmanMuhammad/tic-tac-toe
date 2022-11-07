import {
  resolveCPUTurn
} from '../utils';

describe('resolveCPUTurn', () => {
    it('returns the only left cell', () => {
      const board = [
        ["PLY", "CPU", "PLY"],
        ["CPU", "PLY", "0"],
        ["CPU", "PLY", "CPU"]
      ];

      const randomCell = resolveCPUTurn(board);

      expect(randomCell).toEqual([1, 2]);
    });
    it('returns one of the two only left cells', () => {
      const board = [
        ["PLY", "CPU", "PLY"],
        ["CPU", "PLY", "0"],
        ["0", "PLY", "CPU"]
      ];

      const randomCell = resolveCPUTurn(board);
      const freeCells = [
        [2, 0],
        [1, 2]
      ]

      expect(freeCells).toContainEqual(randomCell);
    });
    it('doesnt returns one of already filled cells', () => {
      const board = [
        ["PLY", "CPU", "PLY"],
        ["CPU", "PLY", "0"],
        ["0", "PLY", "CPU"]
      ];

      const filledCell = [0, 1];
      const randomCell = resolveCPUTurn(board);
      const freeCells = [
        [2, 0],
        [1, 2]
      ]

      expect(freeCells).not.toContainEqual(filledCell);
      expect(freeCells).toContainEqual(randomCell);
    });
});
