import {
  Board
} from '../components';
import renderer from 'react-test-renderer';
import { NavigationContext } from "@react-navigation/native"

describe('Board', () => {
    const board = []
    const setBoard = jest.fn()
    it('renders the Board with three rows', () => {
      const tree = renderer.create(
        <NavigationContext.Provider value={{}}>
          <Board
            board={board}
            setBoard={setBoard}
          />
        </NavigationContext.Provider>
      ).toJSON();

      expect(tree.children.length).toEqual(3);
    });
});
