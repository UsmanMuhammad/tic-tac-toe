import { useNavigation, CommonActions } from '@react-navigation/native';
import { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { emptyBoard } from '../emptyBoard';

export function Result({ route }) {
  const { winner, draw } = route.params;
  const navigation = useNavigation()

 const onPressBack = () => {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: "VsComputer" }]
  });
  navigation.dispatch(resetAction);
}

  if ( draw ) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Match Drawn
        </Text>
        <Pressable onPress={onPressBack}>
          <Text style={styles.backButton}>Exit</Text>
        </Pressable> 
      </View> 
    )
  }
  
  if ( winner !== "" ) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          { winner === "PLY" ? "You Win" : "Computer Wins" }
        </Text>
        <Pressable onPress={onPressBack}>
          <Text style={styles.backButton}>Exit</Text>
        </Pressable> 
      </View>     
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#f4f1de"
  },
  backButton: {
    backgroundColor: "#3d405b",
    color: "#f4f1de",
    fontFamily: "Inter-Black",
    paddingHorizontal: 50,
    paddingVertical: 25,
    fontSize: 24,
    marginTop: 60,
    borderRadius: 50
  },
  text: {
    fontSize: 80,
    fontFamily: "Inter-Black",
    color: "#81b29a"
  }
});
