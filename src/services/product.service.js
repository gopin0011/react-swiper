import http from "../http-common";

const ProductService = {
  all: function(params) {
    return http.get("product", { params });
  },
  get: function (id) {
    return http.get(`products/${id}`);
  }
}

export default ProductService