import { PRODUCT_LIST } from "./constant"

export const productList = () => {
    console.log('at product Action')
  
    return {
        type: PRODUCT_LIST,
    }
}