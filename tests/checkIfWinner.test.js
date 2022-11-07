import {
  checkIfWinner
} from "../utils";

describe("checkIfWinner", () => {
    it("return true when the first row is all PLY", () => {
      const player = "PLY";
      const board = [
        ["PLY", "PLY", "PLY"],
        ["0", "0", "0"],
        ["0", "0", "0"]
      ];

      const isWinner = checkIfWinner(player, board);

      expect(isWinner).toEqual(true);
    });
    it("return true when the second column is all CPU", () => {
      const player = "CPU";
      const board = [
        ["0", "CPU", "0"],
        ["0", "CPU", "0"],
        ["0", "CPU", "0"]
      ];

      const isWinner = checkIfWinner(player, board);

      expect(isWinner).toEqual(true);
    });
    it("return true when the left diagonal is all CPU", () => {
      const player = "CPU";
      const board = [
        ["CPU", "0", "0"],
        ["0", "CPU", "0"],
        ["0", "0", "CPU"]
      ];

      const isWinner = checkIfWinner(player, board);

      expect(isWinner).toEqual(true);
    });
    it("return true when the right diagonal is all PLY", () => {
      const player = "PLY";
      const board = [
        ["0", "0", "PLY"],
        ["0", "PLY", "0"],
        ["PLY", "0", "0"]
      ];

      const isWinner = checkIfWinner(player, board);

      expect(isWinner).toEqual(true);
    });
    it("return false when there are no combinations and last turn was of PLY", () => {
      const player = "PLY";
      const board = [
        ["PLY", "CPU", "PLY"],
        ["CPU", "PLY", "PLY"],
        ["CPU", "PLY", "CPU"]
      ];

      const isWinner = checkIfWinner(player, board);

      expect(isWinner).toEqual(false);
    });
});
