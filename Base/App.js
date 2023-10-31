import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Button from "./src/components/Button/Button";
import { useReducer } from "react";

const CALCULATOR_TYPES = {
  SELECT_NUMBER: "SELECT_NUMBER",
  SELECT_OPERATOR: "SELECT_OPERATOR",
  CALCULATE: "CALCULATE",
  CLEAR: "CLEAR",
  DELETE: "DELETE",
};

const intiatlState = {
  displayNumber: 0,
  operator: "",
  previousNumber: 0,
  currentNumber: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case CALCULATOR_TYPES.SELECT_NUMBER:
      return {
        ...state,
        currentNumber:
          state.currentNumber === 0
            ? action.payload
            : parseInt(state.currentNumber) === 0 && action.payload === "0"
            ? 0
            : state.operator === "" && state.previousNumber !== 0
            ? action.payload
            : state.currentNumber + action.payload,
        displayNumber:
          state.currentNumber === 0
            ? action.payload
            : parseInt(state.currentNumber) === 0 && action.payload === "0"
            ? 0
            : state.operator === "" && state.previousNumber !== 0
            ? action.payload
            : state.displayNumber + action.payload,
      };

    case CALCULATOR_TYPES.SELECT_OPERATOR:
      return {
        ...state,
        operator: action.payload,
        previousNumber: state.currentNumber,
        currentNumber: 0,
      };
    case CALCULATOR_TYPES.CALCULATE:
      let result = 0;
      switch (state.operator) {
        case "*":
          result = state.previousNumber * state.currentNumber;
          return {
            ...state,
            operator: "",
            displayNumber: result,
            currentNumber: result,
          };
        case "-":
          result = state.previousNumber - state.currentNumber;
          console.log(state.previousNumber, state.currentNumber, result);
          return {
            ...state,
            operator: "",
            displayNumber: result,
            currentNumber: result,
          };
        case "+":
          result =
            state.previousNumber.includes(".") ||
            state.currentNumber.includes(".")
              ? parseFloat(state.previousNumber) +
                parseFloat(state.currentNumber)
              : parseInt(state.previousNumber) + parseInt(state.currentNumber);
          return {
            ...state,
            operator: "",
            displayNumber: result,
            currentNumber: result,
          };
        case "/":
          result = state.previousNumber / state.currentNumber;
          return {
            ...state,
            operator: "",
            displayNumber: result,
            currentNumber: result,
          };
        case "%":
          result = state.previousNumber % state.currentNumber;
          return {
            ...state,
            operator: "",
            displayNumber: result,
            currentNumber: result,
          };
        default:
          return state;
      }
    case CALCULATOR_TYPES.CLEAR:
      return {
        ...state,
        displayNumber: 0,
        operator: "",
        previousNumber: 0,
        currentNumber: 0,
      };
    case CALCULATOR_TYPES.DELETE:
      return {
        ...state,
        displayNumber:
          state.previousNumber !== 0
            ? 0
            : state.displayNumber.length === 1
            ? 0
            : state.displayNumber.slice(0, -1),
        currentNumber:
          state.previousNumber !== 0
            ? 0
            : state.displayNumber.length === 1
            ? 0
            : state.currentNumber.slice(0, -1),
      };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, intiatlState);

  const handleSelectNumber = (number) => {
    dispatch({
      type: CALCULATOR_TYPES.SELECT_NUMBER,
      payload: number,
    });
  };

  const handleSelectOperator = (operator) => {
    dispatch({
      type: CALCULATOR_TYPES.SELECT_OPERATOR,
      payload: operator,
    });
  };

  const handleCalculate = () => {
    dispatch({
      type: CALCULATOR_TYPES.CALCULATE,
    });
  };

  const handleClear = () => {
    dispatch({
      type: CALCULATOR_TYPES.CLEAR,
    });
  };

  const handleDelete = () => {
    dispatch({
      type: CALCULATOR_TYPES.DELETE,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{state.displayNumber}</Text>
      <View style={styles.row}>
        <Button text={"C"} role={"operator"} onPress={handleClear} />
        <Button text={"%"} role={"operator"} onPress={handleSelectOperator} />
        <Button text={"/"} role={"operator"} onPress={handleSelectOperator} />
        <Button text={"<="} role={"operator"} onPress={handleDelete} />
      </View>
      <View style={styles.row}>
        <Button text={"7"} role={"number"} onPress={handleSelectNumber} />
        <Button text={"8"} role={"number"} onPress={handleSelectNumber} />
        <Button text={"9"} role={"number"} onPress={handleSelectNumber} />
        <Button text={"*"} role={"operator"} onPress={handleSelectOperator} />
      </View>
      <View style={styles.row}>
        <Button text={"4"} role={"number"} onPress={handleSelectNumber} />
        <Button text={"5"} role={"number"} onPress={handleSelectNumber} />
        <Button text={"6"} role={"number"} onPress={handleSelectNumber} />
        <Button text={"-"} role={"operator"} onPress={handleSelectOperator} />
      </View>
      <View style={styles.row}>
        <Button text={"1"} role={"number"} onPress={handleSelectNumber} />
        <Button text={"2"} role={"number"} onPress={handleSelectNumber} />
        <Button text={"3"} role={"number"} onPress={handleSelectNumber} />
        <Button text={"+"} role={"operator"} onPress={handleSelectOperator} />
      </View>
      <View style={styles.row}>
        <Button text={"0"} role={"number"} onPress={handleSelectNumber} />
        <Button text={"."} role={"number"} onPress={handleSelectNumber} />
        <Button text={"="} role={"equal"} onPress={handleCalculate} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
  },
  text: {
    fontSize: 60,
    color: "#ff6877",
    textAlign: "right",
    width: "80%",
    marginBottom: 20,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
  },
});
