import {defineStore} from "pinia";
import {computed, reactive} from "vue";
import {useCatalogStore} from "@/stores/catalog";

export const useCartStore = defineStore('cart', () => {
    const catalogStore = useCatalogStore()
    const cart = reactive([])

    function addToCart(id, count) {
        const item = findById(id)

        if (item) {
            item.count += count
        }
        else {
            cart.push({ id, count })
        }
    }
    function setCount(id, count) {
        const item = findById(id)

        if (item) {
            if (count === 0) {
                cart.splice(
                    cart.findIndex(
                        (i) => i.id === id),
                    1)
                return
            }

            item.count = count
        }
        else {
            cart.push({ id, count })
        }
    }

    function findById(id) {
        return cart.find((i) => i.id === id)
    }

    const idsCount = computed(() => {
        return cart.length
    })

    const totalCount = computed(() => {
        return cart
            .map(i => i.count)
            .reduce((sum, count) => sum + count, 0)
    })

    function getCountInCartById(id) {
        return findById(id)?.count ?? 0
    }

    const totalSum = computed(() => {
        return cart.map((i) => {
            return (catalogStore.findById(i.id)?.price ?? 0) * i.count
        }).reduce((sum, count) => sum + count, 0)
    })

    return {
        cart,
        addToCart,
        setCount,
        findById,
        getCountInCartById,
        idsCount,
        totalCount,
        totalSum,
    }
})