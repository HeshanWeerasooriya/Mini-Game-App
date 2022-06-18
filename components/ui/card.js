import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    //elevation only work for Android
    shadowColor: "black",
    //for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
