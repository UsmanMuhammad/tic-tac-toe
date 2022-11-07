import { Pressable, StyleSheet, Image } from 'react-native';
import { resolveTurn, checkIfWinner, getSource } from '../utils';
import { useNavigation } from '@react-navigation/native';


export function Cell(props) {
  const {
    cellNumber,
    rowNumber,
    isComputerTurn,
    board,
    setBoard,
    setIsComputerTurn
  } = props
  const navigation = useNavigation()

  function onPress(rowIndex, columnIndex) {
    // resolvePlayerTurn()
    resolveTurn(rowIndex, columnIndex, isComputerTurn, board, setBoard, setIsComputerTurn)
    
    const isWinner = checkIfWinner("PLY", board)

    if ( isWinner ) {
      navigation.navigate("Result", { winner: "PLY" })
    }
  }

  return (
    <Pressable
      style={[styles.column, cellNumber < 2 ? styles.borderRight : {}]}
      onPress={() => onPress(rowNumber, cellNumber)}
    >
      <Image
        source={getSource(board, rowNumber, cellNumber, isComputerTurn)}
        style={{height: 100, width: 100}}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    display: "flex",
    height: "100%",
    width: "auto",
  },
  borderRight: {
    borderRightWidth: 5,
    borderRightColor: "#3d405b",
  },
});
