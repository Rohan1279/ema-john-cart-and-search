import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
  // get products
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  // get cart
  const savedCart = getStoredCart(); //* id : quantity
  const initialCart = [] //* an array of products with matched id from localStorage

  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id);

    if (addedProduct) {
        const quantity = savedCart[id]
        addedProduct.quantity = quantity;
        initialCart.push(addedProduct) //* state is immuatable
    }
  }

  return {products:products, initialCart: initialCart};
};
