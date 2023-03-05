import {writable} from "svelte/store"

export const count = writable(10)

export const products = writable([
    {id:1, title:"bisiklet", adet:10},
    {id:2, title:"notebook", adet:5},
    {id:3, title:"telefon", adet:20}

])

export const sepet = writable(0)