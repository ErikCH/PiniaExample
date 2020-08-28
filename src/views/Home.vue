<template>
  <div class="home">
    <h3>Counter: {{ counter }}</h3>
    <h5>Double Counter value: {{ double() }}</h5>
    <br />
    <button @click="increment">Increment</button>
    <br />
    <input v-model="val" type="number" />
    <button @click="addValue(val)">Increment by value</button>
    <br />
    <button @click="reset">Reset</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCounterStore } from "@/store/counter";

export default defineComponent({
  name: "Home",
  components: {},
  data: () => ({
    val: 0
  }),
  setup() {
    const counter = useCounterStore();
    function reset() {
      counter.patch({
        counter: 0
      });
    }

    function double() {
      return counter.getCounter.value * 2;
    }

    return {
      reset,
      increment: counter.incrementCounter,
      counter: counter.getCounter,
      addValue: counter.addValue,
      double
    };
  }
});
</script>
