import httpReq from "./http.service";

class ProductService {
  async getAllProduct(): Promise<IProduct[]> {
    const { data } = await httpReq.get("/product");
    return data;
  }
}

export default new ProductService();
