import Content from "./content";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
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
      <Row>
        <Col xs={12} md={3}>
          <Link
            href={`/app/products/${params.id}/edit`}
            className=" btn btn-info"
          >
            Edit
          </Link>
        </Col>
      </Row>
    </>
  );
}
