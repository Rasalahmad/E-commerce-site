import httpReq from "./http.service";

class ProductService {
  async getAllProduct(): Promise<any> {
    const { data } = await httpReq.get("/product");
    return data;
  }
}

export default new ProductService();
