import Content from "@/app/(authenticated)/app/products/[id]/content";
import { getProduct } from "@/app/_actions/product";

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
