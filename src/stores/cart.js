import {defineStore} from "pinia";
import {computed, reactive} from "vue";
import {cart} from "@/comp-store/cart";
import {useCatalogStore} from "@/stores/catalog";
export const useCartStore = defineStore('cart', () => {
    const cart = reactive([])

    const catalog = useCatalogStore()

    function addToCart(id, count) {
        const existingItem = findById(id)
        if (!existingItem)
            cart.push({ id, count })
        else
            existingItem.count += count
    }

    function findById(id) {
        return cart.find((i) => i.id === id)
    }

    function setCount(id, count) {
        const item = findById(id)

        if (item) {
            if (count !== 0)
                item.count = count
            else
                cart.splice(cart.findIndex((i) => i.id === id), 1)
        }
    }

    const cartItemsCount = computed(() => cart.length)
    const totalSum = computed(() => cart.reduce(
        (totalSum, item) => {
            return totalSum + item.count * catalog.findById(item.id).price
        }, 0))

    return { cart, addToCart, findById, setCount, cartItemsCount, totalSum }
})