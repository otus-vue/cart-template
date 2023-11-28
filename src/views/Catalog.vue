<template>
  <div class="catalog">
    <h1 @click="resetCatalog">Catalog</h1>
    <table class="table" v-if="!catalogStore.isLoading">
      <thead>
        <tr>
          <th>Артикул</th>
          <th>Название</th>
          <th>Цена</th>
          <th>Количество</th>
          <th>Сумма</th>
          <th>В корзину</th>
        </tr>
      </thead>
      <tbody>
        <Catalog-row v-for="item in catalogStore.catalog"
                     :key="item.id"
                     :item="item"
        ></Catalog-row>
      </tbody>
    </table>
    <h1 v-else>Loading ...</h1>
  </div>
</template>

<script setup>
import CatalogRow from "./CatalogRow.vue";
import {useCatalogStore} from "@/stores/catalog";

const catalogStore = useCatalogStore()
</script>
