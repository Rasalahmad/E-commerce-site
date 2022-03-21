import useApi from "hooks/useApi";
import ProductService from "services/Product.service";
import DSlider from "views/components/custom/DSlider";
import ProductList from "views/components/home/ProductList";

export default function Home() {
  const { data: products } = useApi<IProduct[]>(ProductService.getAllProduct);

  return (
    <main>
      <div className="py-10">
        <DSlider />
      </div>
      <div>{products && <ProductList products={products} />}</div>
    </main>
  );
}
