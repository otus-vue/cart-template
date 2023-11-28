<template>
  <tr>
    <td>{{ item.id }}</td>
    <td>{{ item.title }}</td>
    <td>{{ item.price }}</td>
    <td>
      <input type="number" v-model.number="count" />
      {{ cartStore.itemCount(item.id) }} в корзине
    </td>
    <td>{{ sum }}</td>
    <td>
      <button class="btn btn-primary" @click="addToCart">
        В корзину
      </button>
    </td>
  </tr>
</template>

<script setup>
import {computed, ref} from "vue";
import {useCartStore} from "@/stores/cart";

const cartStore = useCartStore()

const props = defineProps(['item'])

const count = ref(0)

const sum = computed(() => count.value * props.item.price)

function addToCart() {
  cartStore.addToCart(props.item.id, +count.value)
  count.value = 0
}


</script>
