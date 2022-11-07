import { StyleSheet, View } from 'react-native';
import { Cell } from './Cell';

export function Row(props) {
  const {
    row,
    rowNumber,
    isComputerTurn,
    board,
    setBoard,
    setIsComputerTurn
  } = props

  return (
    <View style={[styles.row, rowNumber < 2 ? styles.borderBottom : {}]}>
      {
        row.map((col, key) => {
          return(
            <Cell
              col={col}
              key={key}
              cellNumber={key}
              rowNumber={rowNumber}
              isComputerTurn={isComputerTurn}
              board={board}
              setBoard={setBoard}
              setIsComputerTurn={setIsComputerTurn}
            />
          )
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    height: "auto",
    width: "100%",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderBottom: {
    borderBottomColor: "#3d405b",
    borderBottomWidth: 5,
  },
});

// export const MemoizedRow = memo(Row)