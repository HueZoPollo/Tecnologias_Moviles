import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Button from "./src/components/Button/Button";
import { useReducer } from "react";

const CALCULATOR_TYPES = {
  SELECT_NUMBER: "SELECT_NUMBER",
  SELECT_OPERATOR: "SELECT_OPERATOR",
  CALCULATE: "CALCULATE",
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
        currentNumber: action.payload,
        displayNumber: action.payload,
      };

    case CALCULATOR_TYPES.SELECT_OPERATOR:
      return {
        ...state,
        operator: action.payload,
        previousNumber: state.currentNumber,
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
          return {
            ...state,
            operator: "",
            displayNumber: result,
            currentNumber: result,
          };
        default:
          return state;
      }
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

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{state.displayNumber}</Text>
      <View style={styles.row}>
        <Button text={"7"} role={"number"} onPress={handleSelectNumber} />
        <Button text={"8"} role={"number"} onPress={handleSelectNumber} />
        <Button text={"9"} role={"number"} onPress={handleSelectNumber} />
        <Button text={"/"} role={"operator"} onPress={handleSelectOperator} />
      </View>
      <View style={styles.row}>
        <Button text={"4"} role={"number"} onPress={handleSelectNumber} />
        <Button text={"5"} role={"number"} onPress={handleSelectNumber} />
        <Button text={"6"} role={"number"} onPress={handleSelectNumber} />
        <Button text={"*"} role={"operator"} onPress={handleSelectOperator} />
      </View>
      <View style={styles.row}>
        <Button text={"1"} role={"number"} onPress={handleSelectNumber} />
        <Button text={"2"} role={"number"} onPress={handleSelectNumber} />
        <Button text={"3"} role={"number"} onPress={handleSelectNumber} />
        <Button text={"-"} role={"operator"} onPress={handleSelectOperator} />
      </View>
      <View style={styles.row}>
        <Button text={"="} role={"operator"} onPress={handleCalculate} />
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
    fontSize: 50,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
});
