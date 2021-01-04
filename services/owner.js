import { base } from "./base.js";

export const getOwners = () => {
    return base.get("/owners").then((res) => res.data);
} 

export const getOwnerBySlug = (slug) => {
    return base.get(`/owners?slug=${slug}`).then((res) => res.data[0]);
}
