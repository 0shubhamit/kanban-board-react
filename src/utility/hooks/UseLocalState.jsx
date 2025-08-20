import { useEffect, useReducer } from "react";

export function UseLocalState(key, reducer, initialState) {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}
