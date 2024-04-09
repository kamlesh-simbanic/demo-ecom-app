import { auth } from "@/app/_helpers/server";
import { Product } from "@/app/assets/products";
import ProductCard from "@/app/_components/products/productCard";
import { Col, Row } from "react-bootstrap";

const ProductList = ({ products }: { products: Product[] }) => {
  const isAuthenticated = auth.isAuthenticated();

  return (
    <Row>
      {products.map((product: Product) => (
        <>
          <Col md={3} lg={3} sm={6} className="mb-2">
            <ProductCard product={product} isAuthenticated={isAuthenticated} />
          </Col>
        </>
      ))}
    </Row>
  );
};

export default ProductList;
