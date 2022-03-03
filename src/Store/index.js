import { createStore } from "redux";

const initialState = { modal: false, show: false, showGraph: false };

const reducerFn = (state = initialState, action) => {
  if (action.type === "CLICK_ME") {
    return { modal: true, show: false, showGraph: false };
  }
  if (action.type === "CLOSE_WINDOW") {
    return { modal: null, show: false, showGraph: false };
  }
  if (action.type === "SHOW_GIF") {
    return { modal: true, show: true, showGraph: false };
  }
  if (action.type === "CLOSE_GIF") {
    return { modal: true, show: false, showGraph: false };
  }
  if (action.type === "SHOW_GRAPH") {
    return { modal: true, show: true, showGraph: true };
  }
  return state;
};

const store = createStore(reducerFn);

export default store;
