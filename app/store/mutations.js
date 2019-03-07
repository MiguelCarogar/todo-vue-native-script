export function addProductToBuy(state, product, productIndex) {
  state.productsToBuy.unshift(product);
  state.boughtProducts.splice(productIndex, 1);
}

export function addBoughtProduct(state, product, productIndex) {
  state.boughtProducts.unshift(product);
  state.productsToBuy.splice(productIndex, 1);
}
