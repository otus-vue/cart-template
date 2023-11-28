import {defineStore} from "pinia";
import {reactive, ref} from "vue";

export const useCatalogStore =
defineStore('catalog', () => {
    const catalog = reactive([])

    const isLoading = ref(false)

    function loadCatalog() {
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
                        title: 'NodeJs',
                        price: 245
                    },
                    {
                        id: 3,
                        title: 'Vue JS',
                        price: 458
                    },
                ])
            }, 600)
        }).then((data) => {
            catalog.length = 0
            catalog.push(...data)
            isLoading.value = false
        });
    }

    function findItem(id) {
        return catalog.find(i => +i.id === +id)
    }

    return {catalog, isLoading, loadCatalog, findItem}
})