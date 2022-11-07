import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Row } from "./Row";
import { resolveCPUTurn, checkIfWinner, resolveTurn } from "../utils";

export function Board(props) {
  const { board, setBoard } = props
  const navigation = useNavigation()
  const [isComputerTurn, setIsComputerTurn] = useState(false);

  useEffect(() => {
    if ( isComputerTurn ) {
      //This function will be called after 1 second. This will be the
      //Calculate and play the CPU turn.
      const timer = setTimeout(() => {
        const randomCell = resolveCPUTurn(board);
        const hasDrawn = !randomCell

        if ( hasDrawn ) {
          navigation.navigate("Result", { winner: "", draw: true })
        }
        else {
          resolveTurn(randomCell[0], randomCell[1], isComputerTurn, board, setBoard, setIsComputerTurn);

          const isWinner = checkIfWinner("CPU", board)
          if ( isWinner ) {
            navigation.navigate("Result", { winner: "CPU" })
          }
        }        
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isComputerTurn])

  const onPressBack = () => {
    navigation.navigate("Home");
  }

  const turnColor = isComputerTurn ? "#f2cc8f" : "#81b29a"

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.turn, {color: turnColor}]}>
          { isComputerTurn ? "Computer Turn" : "Your Turn" }
        </Text>
      </View>

      <View style={styles.board}>
        {
          board.map((row, index) => {
            return (
              <Row
                row={row}
                key={index}
                rowNumber={index}
                isComputerTurn={isComputerTurn}  
                board={board}
                setBoard={setBoard}
                setIsComputerTurn={setIsComputerTurn}
              />
            )
          })
        }
      </View>   
      <Pressable onPress={onPressBack}>
        <Text style={styles.backButton}>Exit</Text>
      </Pressable>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  board: {
    display: "flex",
    flexDirection: "column",
    height: 350,
    width: 350,
    alignItems: "center",
  },
  turn: {
    fontSize: 50,
    fontFamily: "Inter-Black",
    width: "100%",
    alignSelf: "center",
    textAlign: "center"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    flex: 0.5,
    width: "100%",
  },
  backButton: {
    backgroundColor: "#3d405b",
    color: "#f4f1de",
    fontFamily: "Inter-Black",
    paddingHorizontal: 40,
    paddingVertical: 20,
    fontSize: 24,
    marginTop: 60,
    borderRadius: 50
  }
});
