import {defineStore} from "pinia";
import {reactive, ref} from "vue";

export const useCatalogStore = defineStore('catalog', () => {
    const catalog = reactive([])

    const isLoading = ref(false)
    function getCatalog() {
        isLoading.value = true
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        title: 'Vanilla JS',
                        price: 100
                    },
                    {
                        id: 2,
                        title: 'Node JS',
                        price: 154
                    },
                    {
                        id: 3,
                        title: 'Vue JS',
                        price: 348
                    }
                ])
            }, 150)
        }).then(cat => {
            catalog.length = 0
            catalog.push(...cat)
            isLoading.value = false
        })
    }

    function findById(id) {
        return catalog.find((i) => i.id === id)
    }

    return {catalog, isLoading, getCatalog, findById}
})