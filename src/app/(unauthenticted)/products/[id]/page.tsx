import { getProduct } from "@/app/_actions/product";
import Content from "@/app/_components/products/Details";

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const product = await getProduct(id);

  return (
    <>
      <Content product={product} readOnly={true} />
    </>
  );
}
