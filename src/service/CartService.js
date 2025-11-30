import api from "../api/AxiosConfig";

class CartService {
  getMyCart() {
    return api.get("/api/cart");
  }

  addToCart(productId, quantity = 1) {
    return api.post("/api/cart/add", { productId, quantity });
  }

  removeItem(productId) {
    return api.delete(`/api/cart/remove/${productId}`);
  }

  clearCart() {
    return api.post("/api/cart/clear");
  }
}

export default new CartService();
