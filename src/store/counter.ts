import { createStore } from "pinia";

interface MainCounter {
  counter: number;
}

export const useCounterStore = createStore({
  id: "counter",
  state: (): MainCounter => ({
    counter: 0
  }),
  actions: {
    incrementCounter() {
      this.state.counter++;
    },
    addValue(value: number) {
      this.state.counter += +value;
    }
  },
  getters: {
    getCounter(state) {
      return state.counter;
    }
  }
});
