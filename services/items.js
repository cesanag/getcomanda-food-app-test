import { base } from "./base.js"

export const getAllItems = () => {
    return base.get("/items")
    .then (res => res.data)
}


