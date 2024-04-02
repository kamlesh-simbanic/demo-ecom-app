import ProductCard from "@/app/components/productCard";
import { Product } from "@/app/assets/products";
import { Col, Row } from "react-bootstrap";
import { getProducts } from "@/app/services/products";

export default async function Products() {
  const products = await getProducts();
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
