import {defineStore} from "pinia";
import {reactive} from "vue";

export const useCatalogStore = defineStore('catalog', () => {
    const catalog = reactive([])

    async function getData() {
        return new Promise((res) => {
            setTimeout(() => {
                res([
                    {
                        id: 'js',
                        title: 'Vanilla JS',
                        price: 100
                    },
                    {
                        id: 'nodejs',
                        title: 'Node JS',
                        price: 204
                    },
                    {
                        id: 'vue',
                        title: 'Vue JS',
                        price: 345
                    },]
                )
            }, 100)
        })
    }

    function findById(id) {
        return catalog.find((i) => i.id === id)
    }

    return { catalog, getData, findById }
})