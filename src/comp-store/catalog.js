import {reactive} from "vue";

export const catalog = reactive([])

export async function getData() {
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

export function findById(id) {
    return catalog.find((i) => i.id === id)
}