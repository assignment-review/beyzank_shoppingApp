export const getAllProducts = () => {
  const result = fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    return result;
}
const productService = {
  getAllProducts
}

export default productService
