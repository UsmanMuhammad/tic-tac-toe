import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Board } from "../components";
import { emptyBoard } from '../emptyBoard';

export function VsComputer() {
  const navigation = useNavigation();
  const [board, setBoard] = useState(emptyBoard);

  //Every time this screen is focused, it will reset the board. This is important,
  //as once the game is finished and this screen will be used with an empty board
  //to start a new game.
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setBoard([
        ["0", "0", "0"],
        ["0", "0", "0"],
        ["0", "0", "0"]
      ]);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Board
        board={board}
        setBoard={setBoard}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f1de',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
