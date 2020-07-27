<template>
  <tr>
    <td>{{ item.id }}</td>
    <td>{{ item.title }}</td>
    <td>{{ item.price }}</td>
    <td>
      <input
        type="number"
        v-model.number="count"
        @blur="updateCount({ itemId: item.id, count })"
      />
    </td>
    <td>{{ sum }}</td>
    <td>
      <button
        class="btn btn-danger"
        @click="updateCount({ itemId: item.id, count: 0 })"
      >
        Удалить
      </button>
    </td>
  </tr>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  props: ["cartItem"],
  data() {
    return {
      count: 0
    };
  },
  mounted() {
    this.count = this.cartItem.count;
  },
  computed: {
    sum() {
      return this.count * this.item.price;
    },
    ...mapGetters("catalog", {
      findItem: "item"
    }),
    item() {
      return this.findItem(this.cartItem.id);
    }
  },
  methods: {
    ...mapMutations("cart", ["updateCount"])
  }
};
</script>
