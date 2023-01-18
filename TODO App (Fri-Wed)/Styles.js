import { StyleSheet } from "react-native";

const COLORS = { primary: "#1f145c", white: "#fff" };
const Styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  header: {
    marginVertical: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontWeight: "bold",
    fontSize: 30,
    color: COLORS.primary,
  },
  footer: {
    position: "absolute",
    top: 710,

    color: COLORS.white,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  inputcontainer: {
    backgroundColor: COLORS.white,
    elevation: 30,
    flex: 1,
    height: 50,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    elevation: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  listitem: {
    padding: 20,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    elevation: 12,
    borderRadius: 12,
    marginVertical: 10,
  },
  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    borderRadius: 20,
  },
});

export default Styles;
