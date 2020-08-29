import * as math from "mathjs";

const actions = {
  handleClear() {
    console.clear();
    return "";
  },

  addtoInputNum(state, param) {
    console.log(state, param);
    return state + param;
  },

  addtoInputOpr(state, param) {
    if (state === "") {
      return state;
    } else {
      return state + param;
    }
  },

  handleEqual(state) {
    if (state === "") {
      return state;
    } else {
      console.log(math.evaluate(state));
      return math.evaluate(state);
    }
  },

  handleRoot(state) {
    if (state === "") {
      return state;
    } else {
      return Math.sqrt(state);
    }
  },

  handleSquare(state) {
    if (state === "") {
      return state;
    } else {
      return Math.pow(state, 2);
    }
  },

  handleCube(state) {
    if (state === "") {
      return state;
    } else {
      return Math.pow(state, 3);
    }
  },


};

export default function reducer(state, action) {
  let type = action.type;
  let param = action.param;
  console.log(action);
  return actions[type](state, param);
}
