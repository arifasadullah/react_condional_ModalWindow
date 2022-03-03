import { createStore } from "redux";

const initialState = { modal: false, show: false, showGraph: false };
const reducerFn = (
  state = { modal: false, show: false, showGraph: false },
  action
) => {
  if (action.type === "CLICK_ME") {
    console.log(state.modal);
    return { modal: true, show: false, showGraph: false };
  }
  if (action.type === "SHOW_GIF") {
    return { modal: true, show: true, showGraph: false };
  }
  if (action.type === "SHOW_GRAPH") {
    return { modal: true, show: true, showGraph: true };
  }

  return state;
};

const store = createStore(reducerFn);

export default store;
