<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from "@/views/Navigation.vue";
import {useCatalogStore} from "@/stores/catalog";

const catalogStore = useCatalogStore()
catalogStore.loadCatalog()
</script>

<template>
  <Navigation></Navigation>

  <RouterView />
</template>
