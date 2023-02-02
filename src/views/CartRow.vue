<template>
  <tr>
    <td>{{ item.id }}</td>
    <td>{{ catalogItem.title }}</td>
    <td>{{ catalogItem.price }}</td>
    <td>
      <input type="number" v-model="count" @blur="setCount" />
    </td>
    <td>{{ sum }}</td>
    <td>
      <button class="btn btn-danger" @click="cart.setCount(props.item.id, 0)">
        Удалить
      </button>
    </td>
  </tr>
</template>

<script setup>
import {computed, ref } from "vue";
import {useCatalogStore} from "@/stores/catalog";
import {useCartStore} from "@/stores/cart";
import {storeToRefs} from "pinia";

const catalog = useCatalogStore()
const cart = useCartStore()

const props = defineProps(['item'])

const catalogItem = catalog.findById(props.item.id)

const count = ref(props.item.count)

const sum = computed(() => props.item.count * catalogItem.price)

function setCount() {
  cart.setCount(props.item.id, count.value)
}
</script>
