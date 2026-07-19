import axios from "axios";
import { resolveResponse } from "../../Helpers/APIHelper";
import { loadProducts } from "../../utils/productUtils";
export default class ProductsEffects {
  static getProducts = async () => {
    const savedProducts = loadProducts();

    if (savedProducts) {
      return savedProducts;
    }
    return await resolveResponse(axios.get("/data/products.json"));
  };
}
