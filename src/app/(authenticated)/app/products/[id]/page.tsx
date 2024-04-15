import { Col, Row } from "react-bootstrap";
import { getProduct } from "@/app/_actions/product";
import Content from "@/app/_components/products/Details";
import Link from "next/link";

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
