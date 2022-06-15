import { StyleSheet } from "react-native";

export const gStyles = StyleSheet.create({
  back: {
    backgroundColor: "rgba(235, 216, 199, 1)",
  },
  container: {
    flex: 1,
  },
  boxShadowMain: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 0,
  },
  calenderText: {
    textAlign: "center",
    fontFamily: "PTSans-reg",
    fontSize: 13,
  },
});

export const collectionTitleStyles = StyleSheet.create({
  titleContainer: {
    marginTop: "5%",
    flexDirection: "row",
    maxHeight: 250,
  },
  textWrap: {
    flex: 1,
    marginLeft: "7%",
  },
  collectionTitle: {
    fontSize: 30,
    fontFamily: "PTSans-bold",
    color: "rgba(115, 88, 65, 1)",
  },
  btnWrap: {
    justifyContent: "center",
    marginHorizontal: "7%",
  },
});

export const taskListStyles = StyleSheet.create({
  listWrap: {
    flex: 1,
    margin: "5%",
    paddingVertical: "5%",
    backgroundColor: "rgba(253, 247, 241,1)",
    borderRadius: 25,
  },
});

export const taskStyles = StyleSheet.create({
  swipeContainer: {
    minHeight: 75,
    flexDirection: "row",
    marginHorizontal: "4%",
    backgroundColor: "rgba(253, 247, 241, 1)",
    alignItems: "center",
  },
  taskText: {
    fontFamily: "roboto-bold",
    fontSize: 18,
    color: "rgba(115, 88, 65, 1)",
  },
  penIconWrap: {
    marginLeft: "2%",
  },
  buttonWrap: {
    flex: 1,
    minHeight: 75,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButtonWrap: {
    backgroundColor: "#FF6E84",
    marginLeft: "10%",
  },
  migrateButtonWrap: {
    backgroundColor: "#879CFF",

    marginRight: "3%",
  },
  doneButtonWrap: {
    backgroundColor: "#AAE2AA",
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },
  btnsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: "3%",
  },
  textContainer: {
    width: "70%",
    marginLeft: "4%",
    marginRight: "3%",
  },
  projectTextContainer: {
    marginLeft: "5%",
    marginRight: "12%",
  },
  isDone: {
    textDecorationLine: "line-through",
    textDecorationColor: "rgba(0, 0, 0, 0.35)",
    color: "rgba(0, 0, 0, 0.35)",
  },
  monthlyTaskText: {
    fontSize: 18,
    fontFamily: "PTSans-reg",
  },
  monthlyTaskHeight: {
    minHeight: 60,
  },
});

export const formStyles = StyleSheet.create({
  inputText: {
    borderWidth: 1,
    borderColor: "silver",
    marginTop: "7%",
    padding: "3%",
    borderRadius: 15,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "7%",
    marginBottom: "3%",
  },
  button: {
    borderRadius: 15,
    padding: "4%",
  },
  cancelButton: {
    backgroundColor: "rgba(255, 154, 158, 1)",
  },
  addButton: {
    backgroundColor: "rgba(170, 226, 170, 1)",
  },
  buttonText: {
    fontSize: 20,
    fontFamily: "roboto-reg",
    color: "white",
    alignSelf: "center",
  },
  errorWrap: {
    flexDirection: "row",
    marginTop: "2%",
    marginLeft: "3%",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    fontFamily: "roboto-reg",
  },
  modalView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(35,35,35,0.45)",
  },
  formContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: "5%",
    marginHorizontal: "4%",
    marginTop: "70%",
  },
  formTitle: {
    marginHorizontal: "10%",
    textAlign: "center",
    fontFamily: "roboto-bold",
    fontSize: 20,
  },
});
