import { getProduct } from "@/app/_actions/product";
import Content from "@/app/_components/products/Details";
import { Suspense } from "react";

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const product = await getProduct(id);

  return (
    <>
      <h1>Product Details Page</h1>
      <Content product={product} readOnly={true} />

      <Suspense fallback={<p>Loading Product details</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading Reviews</p>}>
        <Review />
      </Suspense>
    </>
  );
}

const Product = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>Product</div>;
};
const Review = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <div>Review</div>;
};
