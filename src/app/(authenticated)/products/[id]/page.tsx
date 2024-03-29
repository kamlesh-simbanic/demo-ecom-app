"use client";
import Content from "./content";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import { getProduct } from "@/app/services/products";

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  let product = getProduct(params.id);

  return (
    <>
      <Content product={product} readOnly={true} />
      <Row>
        <Col xs={12} md={3}>
          <Link href={`/products/${params.id}/edit`} className=" btn btn-info">
            Edit
          </Link>
        </Col>
      </Row>
    </>
  );
}
