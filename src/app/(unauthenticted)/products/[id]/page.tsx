import { getProduct } from "@/app/_actions/product";
import Content from "@/app/_components/products/Details";
import { Suspense } from "react";
import Products from "../page";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = await getProduct(params.id);

  if (!product) {
    throw new Error(`Product Not Found with ${params.id}`);
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.name,
    openGraph: {
      images: previousImages,
    },
  };
}

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

      <Suspense fallback={<p>Loading Featured Products</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading Reviews</p>}>
        <Review />
      </Suspense>
    </>
  );
}

const Product = async () => {
  return <Products />;
};

const Review = async () => {
  return <div>Review</div>;
};
