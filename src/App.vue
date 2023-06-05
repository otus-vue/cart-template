<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from "@/views/Navigation.vue";
import { useCatalogStore } from "@/stores/catalog";

const catalog = useCatalogStore()

catalog.getCatalog()
</script>

<template>
  <Navigation></Navigation>

  <RouterView />
</template>
