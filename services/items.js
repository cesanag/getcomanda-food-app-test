import { base } from "./base.js"

export const getAllItems = () => {
    return base.get("/items")
    .then (res => res.data)
}
export const getItemBySlug = (slug) => {
    return base.get(`/items?slug=${slug}`).then((res) => res.data[0]);
  };
  
  export const getItemsByOwner = (ownerID) => {
    return base.get(`/owners/${ownerID}`).then((res) => res.data.properties);
  };
  

