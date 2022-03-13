import { useEffect, useState } from "react";
import ProductService from "services/Product.service";
import DSlider from "views/components/custom/DSlider";
import ProductList from "views/components/home/ProductList";

export default function Home() {
  const [products, setProducts] = useState<[] | any[]>([]);

  useEffect(() => {
    ProductService.getAllProduct()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <div className="py-10">
        <DSlider />
      </div>
      <div>
        <ProductList products={products} />
      </div>
    </main>
  );
}
