import {defineStore} from "pinia";
import {computed, reactive} from "vue";
import {useCatalogStore} from "@/stores/catalog";

export const useCartStore = defineStore('cart',
    () => {
        const catalog = useCatalogStore()

        const cartState = reactive({
            inCart: {}
        })

        function addToCart(id, count) {
            const item = cartState.inCart[id]
            if (!item) {
                cartState.inCart[id] = count
            }
            else {
                cartState.inCart[id] += count
            }
        }

        const idsInCart = computed(() => Object.keys(cartState.inCart))
        const idsCount = computed(() => idsInCart.value.length)
        const itemsCount = computed(() => Object.values(cartState.inCart).reduce((sum, itemCount) => sum + itemCount, 0))

        const itemCount = computed(() => (id) => cartState.inCart[id] ?? 0)

        const totalSum = computed(() =>
            Object.entries(cartState.inCart).map(([id, count]) => catalog.findItem(id).price * count).reduce((sum, c) => sum + c, 0)
        )

        function setCartCount(id, count) {
            if (count === 0) {
                delete cartState.inCart[id]
            }
            else
                cartState.inCart[id] = count
        }

        return {
            cartState,
            addToCart,
            idsInCart,
            idsCount,
            itemsCount,
            itemCount,
            totalSum,
            setCartCount
        }
    })