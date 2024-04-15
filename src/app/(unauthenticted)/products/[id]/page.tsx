import Content from "@/app/(authenticated)/app/products/[id]/content";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import { getProduct } from "@/app/services/products";

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
