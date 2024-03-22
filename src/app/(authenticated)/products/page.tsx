import ProductCard from "@/app/components/productCard";
import { Product, products } from "@/app/assets/products";
import { Col, Row } from "react-bootstrap";

export default function Products() {
  return (
    <Row>
      {products.map((product: Product) => (
        <>
          <Col md={3} lg={3} sm={6} className="mb-2">
            <ProductCard {...product} />
          </Col>
        </>
      ))}
    </Row>
  );
}
