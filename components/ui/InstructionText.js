import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children }) {
  return <Text style={styles.istructionText}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  istructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
