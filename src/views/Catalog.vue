<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <table class="table">
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
        <Catalog-row></Catalog-row>
      </tbody>
    </table>
  </div>
</template>

<script>
import CatalogRow from "./CatalogRow";

export default {
  components: {
    CatalogRow
  }
};
</script>
