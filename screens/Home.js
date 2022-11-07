import { Pressable, StyleSheet, Text, View } from 'react-native';

export function Home(props) {
  const { navigation } = props
  const title = "Tic Tac Toe"
  const option = "Play with Computer"

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable
        onPress={() => navigation.navigate("VsComputer")}
      >
        <Text style={styles.options}>{option}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f1de',
    alignItems: 'center',
    justifyContent: "space-evenly",

  },
  title: {
    fontSize: 50,
    color: "#e07a5f",
    fontFamily: "Inter-Black"
  },
  options: {
    fontSize: 20,
    paddingHorizontal: 50,
    paddingVertical: 25,
    marginVertical: 10,
    backgroundColor: "#3d405b",
    color: "#f4f1de",
    borderRadius: 50,
    fontWeight: "200",
    letterSpacing: 1,
    fontFamily: "Inter-Black"
  }
});
