<template>
  <div class="catalog">
    <h1>Cart</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Артикул</th>
          <th>Название</th>
          <th>Цена</th>
          <th>Количество</th>
          <th>Сумма</th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>
        <Cart-row v-for="item in cart"
                  :key="item.id"
                  :item="item"></Cart-row>
      </tbody>
    </table>

    <h1 class="text-right">Сумма {{ totalSum }}</h1>
  </div>
</template>

<script setup>
import CartRow from "./CartRow.vue";
import {useCartStore} from "@/stores/cart";
import {storeToRefs} from "pinia";

const {cart, totalSum} = storeToRefs(useCartStore())

</script>
