import {
  findLast,
  isOperator,
  findLastOperator,
  calculate,
  format,
} from "./logic";

const initialState = ["0"];

function reducer(state, action) {
  if (action.type === "RESET") {
  }

  // check last token
  const last = findLast(state);

  if (action.type === "PUSH") {
    // when last token is operator
    if (isOperator(last)) {
    }

    // prevent fraction double pressed
    if (action.value === "." && last.includes(".")) {
    }

    // when fraction was pressed
    if (action.value === ".") {
    }

    // push
  }

  if (action.type === "REMOVE") {
    // when last token is operator
    if (isOperator(last)) {
    }

    // pop
  }

  if (action.type === "OPERATE") {
    // when last token is operator
    if (isOperator(last)) {
    }

    // when last operator double pressed
    if (findLastOperator(state) === action.value) {
    }

    // push operator
  }

  if (action.type === "ENTER") {
    return calculate(state).map(format);
  }

  return state;
}

export function useCalculator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = useMemo(
    () => ({
      reset: () => () => dispatch({ type: "RESET" }),
      push: (value) => () => dispatch({ type: "PUSH", value }),
      remove: () => () => dispatch({ type: "REMOVE" }),
      operate: (value) => () => dispatch({ type: "OPERATE", value }),
      enter: () => () => dispatch({ type: "ENTER" }),
    }),
    [dispatch]
  );

  //  compute
  const operator = findLastOperator(state);
  const last = findLast(state);
  const output = isOperator(last) ? state[state.length - 2] : last;

  return { operator, output, actions };
}
