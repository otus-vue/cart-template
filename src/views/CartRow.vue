<template>
  <tr>
    <td>{{ catalogItem.id }}</td>
    <td>{{ catalogItem.title }}</td>
    <td>{{ catalogItem.price }}</td>
    <td>
      <input type="number" v-model.number="count" @blur="updateCount" />
    </td>
    <td>{{ sum }}</td>
    <td>
      <button class="btn btn-danger" @click="cartStore.setCount(item.id, 0)">
        Удалить
      </button>
    </td>
  </tr>
</template>

<script setup>
import { computed, ref } from "vue";
import {useCartStore} from "@/stores/cart";
import {useCatalogStore} from "@/stores/catalog";

const cartStore = useCartStore()
const catalogStore = useCatalogStore()

const props = defineProps(['item'])

const catalogItem = catalogStore.findById(props.item.id)

const count = ref(props.item.count)

const sum = computed(() => count.value * catalogItem.price)

function updateCount() {
  cartStore.setCount(props.item.id, count.value)
}
</script>
