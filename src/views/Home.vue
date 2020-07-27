<template>
  <div class="home">
    <h1>{{ helloExcl }} | {{ int }}</h1>
    <button class="btn btn-primary" @click="setHello('asdf')">Click me</button>
    <button class="btn btn-primary" @click="updateText()">
      Click me for call action
    </button>
    <p>
      <button class="btn btn-primary" @click="alert(calc({ a: 1, b: 3 }))">
        Calc
      </button>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { SET_HELLO } from "../consts";

export default {
  name: "home",
  data() {
    return {
      qwe: SET_HELLO
    };
  },
  computed: {
    ...mapState({
      myTextHello: "hello"
    }),
    ...mapState(["int"]),
    ...mapState({
      myFunc: state => state.hello + "_!"
    }),
    q1() {
      return this.qwe + " - " + this.myFunc;
    },

    ...mapGetters({
      helloExcl: "helloExclamation"
    })
  },
  methods: {
    ...mapMutations([SET_HELLO]),
    ...mapActions({
      updateText: "setHelloTimeout"
    }),
    ...mapActions(["calc"]),
    alert: val => val.then(q => alert(q))
  }
};
</script>
