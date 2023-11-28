<template>
  <tr>
    <td>{{ catalogItem.id }}</td>
    <td>{{ catalogItem.title }}</td>
    <td>{{ catalogItem.price }}</td>
    <td>
      <input type="number" v-model="modelCount" @blur="setCount" />
    </td>
    <td>{{ sum }}</td>
    <td>
      <button class="btn btn-danger" @click="cartStore.setCartCount(props.itemId, 0)">
        Удалить
      </button>
    </td>
  </tr>
</template>

<script setup>
import {computed, ref} from "vue";
import {useCatalogStore} from "@/stores/catalog";
import {useCartStore} from "@/stores/cart";

const catalogStore = useCatalogStore()
const cartStore = useCartStore()

const props = defineProps(['itemId', 'count'])
const catalogItem = catalogStore.findItem(props.itemId)
const modelCount = ref(props.count)

const sum = computed(() => catalogItem.price * props.count)

function setCount() {
  cartStore.setCartCount(props.itemId, modelCount)
}
</script>
