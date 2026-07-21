export const isProductSelected = (product) => {
  return product.variants
    ? product.variants.some((variant) => variant.quantity > 0)
    : product.quantity > 0;
};
export const getSelectedCount = (products) => {
  return products.filter(isProductSelected).length;
};
export const getProductQuantity = (product) => {
  return product.variants.reduce(
    (total, variant) => total + variant.quantity,
    0,
  );
};
export const getProductPrice = (product) => {
  return product.price * getProductQuantity(product);
};

export const getProductCompareAt = (product) => {
  return product.compareAt
    ? product.compareAt * getProductQuantity(product)
    : null;
};
export const getSubtotal = (products) => {
  return products.reduce(
    (total, product) => total + getProductPrice(product),
    0,
  );
};

export const getPreDiscountTotal = (products) => {
  return products.reduce(
    (total, product) => total + (getProductCompareAt(product) ?? 0),
    0,
  );
};
export const saveProducts = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
};

export const loadProducts = () => {
  const saved = localStorage.getItem("products");
  return saved ? JSON.parse(saved) : null;
};
