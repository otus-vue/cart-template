import { computed, reactive } from "vue";
import {findById as catalogFindById} from "@/comp-store/catalog";

export const cart = reactive([])

export function addToCart(id, count) {
    const existingItem = findById(id)
    if (!existingItem)
        cart.push({ id, count })
    else
        existingItem.count += count
}

export function findById(id) {
    return cart.find((i) => i.id === id)
}

export function setCount(id, count) {
    const item = findById(id)

    if (item) {
        if (count !== 0)
            item.count = count
        else
            cart.splice(cart.findIndex((i) => i.id === id), 1)
    }
}

export const cartItemsCount = computed(() => cart.length)
export const totalSum = computed(() => cart.reduce(
    (totalSum, item) => {
        return totalSum + item.count * catalogFindById(item.id).price
    }, 0))