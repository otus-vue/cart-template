<template>
  <tr>
    <td>{{ item.id }}</td>
    <td>{{ item.title }}</td>
    <td>{{ item.price }}</td>
    <td>
      <input type="number" v-model.number="count" />
      <template v-if="countInCart > 0">{{ countInCart }} в корзине</template>
    </td>
    <td>{{ sum }}</td>
    <td>
      <button
        class="btn btn-primary"
        @click="
          addItem({ itemId: item.id, count });
          count = 0;
        "
      >
        В корзину
      </button>
    </td>
  </tr>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  props: ["item"],
  data() {
    return {
      count: 0
    };
  },
  computed: {
    sum() {
      return this.count * this.item.price;
    },
    ...mapGetters("cart", ["itemCount"]),
    countInCart() {
      return this.itemCount(this.item.id);
    }
  },
  methods: {
    ...mapMutations("cart", ["addItem"])
  }
};
</script>
