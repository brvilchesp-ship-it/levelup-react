import api from "../api/AxiosConfig";

class ProductService {
  getAllProducts() {
    return api.get("/api/products");
  }

  getProductById(id) {
    return api.get(`/api/products/${id}`);
  }

  createProduct(product) {
    return api.post("/api/products", product);
  }

  updateProduct(id, product) {
    return api.put(`/api/products/${id}`, product);
  }

  deleteProduct(id) {
    return api.delete(`/api/products/${id}`);
  }
}

export default new ProductService();
